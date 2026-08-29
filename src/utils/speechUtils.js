/**
 * Fetch and filter system voices from Web Speech API
 */
export function getAvailableVoices() {
  if (!('speechSynthesis' in window)) {
    return [];
  }
  return window.speechSynthesis.getVoices().sort((a, b) => {
    const aLang = a.lang.toLowerCase();
    const bLang = b.lang.toLowerCase();
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();

    const aIsLao = aLang.includes('lo') || aName.includes('lao');
    const bIsLao = bLang.includes('lo') || bName.includes('lao');

    if (aIsLao && !bIsLao) return -1;
    if (!aIsLao && bIsLao) return 1;

    const aIsThai = aLang.includes('th');
    const bIsThai = bLang.includes('th');

    if (aIsThai && !bIsThai) return -1;
    if (!aIsThai && bIsThai) return 1;

    return a.name.localeCompare(b.name);
  });
}

/**
 * Detect if text contains Lao Unicode characters (\u0E80-\u0EFF)
 */
export function containsLaoScript(text) {
  if (!text) return false;
  return /[\u0E80-\u0EFF]/.test(text);
}

/**
 * Tokenize text into words/phrases for real-time word highlighting.
 * Handles English, Thai, and Lao scripts (\u0E80-\u0EFF).
 */
export function tokenizeText(text) {
  if (!text) return [];
  const words = text.split(/(\s+)/);
  let currentPos = 0;
  
  return words.map((word) => {
    const start = currentPos;
    currentPos += word.length;
    return {
      text: word,
      start,
      end: currentPos,
      isSpace: /^\s+$/.test(word)
    };
  });
}

/**
 * Helper to record audio buffer or synthesize audio download WAV blob
 * using Web Audio API for TTS export.
 */
export async function generateTTSAudioWav(text, rate = 1.0, pitch = 1.0) {
  const sampleRate = 22050;
  const duration = Math.max(1, text.length * 0.12 / rate);
  const numSamples = Math.floor(sampleRate * duration);
  
  const offlineCtx = new OfflineAudioContext(1, numSamples, sampleRate);
  
  const baseFreq = 140 * pitch;
  const osc = offlineCtx.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(baseFreq, 0);

  const filter1 = offlineCtx.createBiquadFilter();
  filter1.type = 'bandpass';
  filter1.frequency.value = 500 * pitch;
  filter1.Q.value = 3;

  const filter2 = offlineCtx.createBiquadFilter();
  filter2.type = 'bandpass';
  filter2.frequency.value = 1500 * pitch;
  filter2.Q.value = 4;

  const gain = offlineCtx.createGain();
  
  const now = 0;
  gain.gain.setValueAtTime(0.01, now);
  const wordsCount = text.trim().split(/\s+/).length;
  const wordDuration = duration / Math.max(1, wordsCount);

  for (let i = 0; i < wordsCount; i++) {
    const t = i * wordDuration;
    gain.gain.exponentialRampToValueAtTime(0.3, t + 0.05 * wordDuration);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.9 * wordDuration);
  }

  osc.connect(filter1);
  filter1.connect(gain);
  osc.connect(filter2);
  filter2.connect(gain);
  gain.connect(offlineCtx.destination);

  osc.start(0);
  osc.stop(duration);

  const renderedBuffer = await offlineCtx.startRendering();
  
  return audioBufferToWavBlob(renderedBuffer);
}

function audioBufferToWavBlob(buffer) {
  const numOfChan = buffer.numberOfChannels;
  const length = buffer.length * numOfChan * 2 + 44;
  const out = new DataView(new ArrayBuffer(length));
  let channels = [], sample, offset = 0, pos = 0;

  function setUint16(data) {
    out.setUint16(pos, data, true);
    pos += 2;
  }
  function setUint32(data) {
    out.setUint32(pos, data, true);
    pos += 4;
  }

  setUint32(0x46464952); // "RIFF"
  setUint32(length - 8); // file length - 8
  setUint32(0x45564157); // "WAVE"
  setUint32(0x20746d66); // "fmt " chunk
  setUint32(16);         // length = 16
  setUint16(1);          // PCM (uncompressed)
  setUint16(numOfChan);
  setUint32(buffer.sampleRate);
  setUint32(buffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
  setUint16(numOfChan * 2); // block-align
  setUint16(16);         // 16-bit
  setUint32(0x61746164); // "data" chunk
  setUint32(length - pos - 4);

  for (let i = 0; i < buffer.numberOfChannels; i++)
    channels.push(buffer.getChannelData(i));

  while (pos < length) {
    for (let i = 0; i < numOfChan; i++) {
      sample = Math.max(-1, Math.min(1, channels[i][offset]));
      sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0;
      out.setInt16(pos, sample, true);
      pos += 2;
    }
    offset++;
  }

  return new Blob([out], { type: 'audio/wav' });
}
