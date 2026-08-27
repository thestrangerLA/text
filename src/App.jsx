import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import TextInputSection from './components/TextInputSection';
import VoiceControls from './components/VoiceControls';
import PlaybackControls from './components/PlaybackControls';
import HistorySection from './components/HistorySection';
import GuideModal from './components/GuideModal';
import { getAvailableVoices } from './utils/speechUtils';
import { UI_TRANSLATIONS, SAMPLE_TEXTS } from './constants/presets';

export default function App() {
  const [lang, setLang] = useState('th'); // 'th' | 'en'
  const t = UI_TRANSLATIONS[lang];

  // Speech State
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [selectedPresetId, setSelectedPresetId] = useState('natural');
  const [rate, setRate] = useState(1.0);
  const [pitch, setPitch] = useState(1.0);
  const [volume, setVolume] = useState(1.0);

  // Playback & Text State
  const [text, setText] = useState(SAMPLE_TEXTS.th[0].text);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCharIndex, setActiveCharIndex] = useState(-1);
  const [history, setHistory] = useState([]);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const utteranceRef = useRef(null);

  // Load system voices
  useEffect(() => {
    const loadVoices = () => {
      const available = getAvailableVoices();
      setVoices(available);

      if (available.length > 0 && !selectedVoice) {
        // Prefer Thai voice if language is TH
        const thaiVoice = available.find((v) => v.lang.toLowerCase().includes('th'));
        setSelectedVoice(thaiVoice || available[0]);
      }
    };

    loadVoices();

    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Update text when switching language if text is equal to default sample
  useEffect(() => {
    if (lang === 'en' && text === SAMPLE_TEXTS.th[0].text) {
      setText(SAMPLE_TEXTS.en[0].text);
    } else if (lang === 'th' && text === SAMPLE_TEXTS.en[0].text) {
      setText(SAMPLE_TEXTS.th[0].text);
    }
  }, [lang]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handlePlay();
      } else if (e.key === 'Escape' && isSpeaking) {
        handleStop();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [text, selectedVoice, rate, pitch, volume, isSpeaking, isPaused]);

  // Apply voice style preset
  const applyPreset = (preset) => {
    setSelectedPresetId(preset.id);
    setRate(preset.rate);
    setPitch(preset.pitch);
  };

  // Play / Speak Aloud
  const handlePlay = () => {
    if (!('speechSynthesis' in window)) {
      alert('ขออภัย เบราว์เซอร์ของคุณไม่รองรับ Web Speech API');
      return;
    }

    if (!text.trim()) return;

    // Stop current speech before starting new one
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
      
      // Save item to history
      setHistory((prev) => [
        {
          id: Date.now(),
          text: text.slice(0, 100) + (text.length > 100 ? '...' : ''),
          fullText: text,
          voiceName: selectedVoice?.name || 'Default',
          rate,
          pitch,
          timestamp: new Date().toLocaleTimeString()
        },
        ...prev.slice(0, 14) // keep last 15
      ]);
    };

    utterance.onpause = () => {
      setIsPaused(true);
    };

    utterance.onresume = () => {
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      setActiveCharIndex(-1);
    };

    utterance.onerror = (err) => {
      console.error('Speech synthesis error:', err);
      setIsSpeaking(false);
      setIsPaused(false);
      setActiveCharIndex(-1);
    };

    utterance.onboundary = (event) => {
      if (event.name === 'word' || event.name === 'sentence') {
        setActiveCharIndex(event.charIndex);
      }
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if ('speechSynthesis' in window && isSpeaking && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if ('speechSynthesis' in window && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
      setActiveCharIndex(-1);
    }
  };

  const handleReplayItem = (item) => {
    setText(item.fullText || item.text);
    setTimeout(() => {
      handlePlay();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Kanit','Plus_Jakarta_Sans',sans-serif]">
      {/* Top Header */}
      <Header
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        
        {/* Playback Controls sticky top bar on mobile/desktop */}
        <PlaybackControls
          onPlay={handlePlay}
          onPause={handlePause}
          onResume={handleResume}
          onStop={handleStop}
          isSpeaking={isSpeaking}
          isPaused={isPaused}
          text={text}
          rate={rate}
          pitch={pitch}
          t={t}
        />

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Text Input (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <TextInputSection
              text={text}
              setText={setText}
              activeCharIndex={activeCharIndex}
              isSpeaking={isSpeaking}
              lang={lang}
              t={t}
            />

            <HistorySection
              history={history}
              onReplay={handleReplayItem}
              onClearHistory={() => setHistory([])}
              onDeleteItem={(id) => setHistory((prev) => prev.filter((h) => h.id !== id))}
              t={t}
            />
          </div>

          {/* Right Column: Voice & Style Controls (5 Cols) */}
          <div className="lg:col-span-5">
            <VoiceControls
              voices={voices}
              selectedVoice={selectedVoice}
              setSelectedVoice={setSelectedVoice}
              selectedPresetId={selectedPresetId}
              applyPreset={applyPreset}
              rate={rate}
              setRate={setRate}
              pitch={pitch}
              setPitch={setPitch}
              volume={volume}
              setVolume={setVolume}
              lang={lang}
              t={t}
            />
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-4 text-center text-xs text-slate-500 font-normal">
        VoiceCraft Text-to-Speech Studio • Powered by Web Speech API & Web Audio API
      </footer>

      {/* Guide Modal */}
      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        t={t}
      />
    </div>
  );
}
