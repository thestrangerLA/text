import React, { useState } from 'react';
import { Play, Pause, Square, Download, Activity, Loader2, Volume2 } from 'lucide-react';
import { generateTTSAudioWav } from '../utils/speechUtils';

export default function PlaybackControls({
  onPlay,
  onPause,
  onResume,
  onStop,
  isSpeaking,
  isPaused,
  text,
  rate,
  pitch,
  t
}) {
  const [isExporting, setIsExporting] = useState(false);

  const handleDownload = async () => {
    if (!text.trim()) return;
    setIsExporting(true);
    try {
      const blob = await generateTTSAudioWav(text, rate, pitch);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `voicecraft-speech-${Date.now()}.wav`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 rounded-2xl border border-indigo-500/30 p-5 shadow-2xl backdrop-blur-md flex flex-col gap-4">
      {/* Control Buttons & Visualizer */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        
        {/* Playback Buttons Group */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
          {!isSpeaking || isPaused ? (
            <button
              onClick={isPaused ? onResume : onPlay}
              disabled={!text.trim()}
              className="flex-1 md:flex-none flex items-center justify-center gap-2.5 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>{isPaused ? t.btnResume : t.btnPlay}</span>
            </button>
          ) : (
            <button
              onClick={onPause}
              className="flex-1 md:flex-none flex items-center justify-center gap-2.5 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-amber-500/30 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Pause className="w-5 h-5 fill-current" />
              <span>{t.btnPause}</span>
            </button>
          )}

          {/* Stop Button */}
          <button
            onClick={onStop}
            disabled={!isSpeaking && !isPaused}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-rose-950/80 hover:text-rose-300 border border-slate-700/80 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 font-medium text-sm rounded-xl transition duration-200 active:scale-95 cursor-pointer"
            title="Stop playback"
          >
            <Square className="w-4 h-4 fill-current text-rose-400" />
            <span className="hidden sm:inline">{t.btnStop}</span>
          </button>

          {/* Export Audio File Button */}
          <button
            onClick={handleDownload}
            disabled={!text.trim() || isExporting}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/90 hover:bg-slate-700/90 border border-indigo-500/30 text-indigo-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed font-medium text-sm rounded-xl transition duration-200 active:scale-95 cursor-pointer"
            title="Export WAV audio file"
          >
            {isExporting ? (
              <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
            ) : (
              <Download className="w-4 h-4 text-indigo-400" />
            )}
            <span className="hidden sm:inline">{isExporting ? t.recordingMessage : t.btnDownload}</span>
          </button>
        </div>

        {/* Dynamic Waveform Visualizer */}
        <div className="w-full md:w-64 bg-slate-950/90 border border-slate-800 rounded-xl p-3 flex items-center gap-3">
          <div className="flex items-center gap-1 h-8 px-2 flex-1 justify-center">
            {[40, 75, 30, 90, 50, 85, 45, 95, 60, 35, 80, 55].map((height, i) => (
              <div
                key={i}
                style={{
                  height: isSpeaking && !isPaused ? `${height}%` : '20%',
                  animationDelay: `${i * 0.08}s`
                }}
                className={`w-1.5 rounded-full transition-all duration-300 ${
                  isSpeaking && !isPaused
                    ? 'bg-gradient-to-t from-indigo-500 via-purple-400 to-pink-400 animate-pulse-bar'
                    : 'bg-slate-800'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 shrink-0">
            <Activity className={`w-3.5 h-3.5 ${isSpeaking && !isPaused ? 'text-emerald-400 animate-pulse' : 'text-slate-600'}`} />
            <span>{isSpeaking && !isPaused ? 'PLAYING' : isPaused ? 'PAUSED' : 'IDLE'}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
