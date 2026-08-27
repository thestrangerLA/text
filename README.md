# 🎙️ VoiceCraft - Text-to-Speech Studio

A modern, responsive Text-to-Speech (TTS) web application built with **React**, **Vite**, **Tailwind CSS**, and the browser-native **Web Speech Synthesis API** & **Web Audio API**. Supports **Lao 🇱🇦**, **Thai 🇹🇭**, **English 🇬🇧**, and all system voices.

![VoiceCraft TTS](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-6.0-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-38bdf8)

---

## ✨ Key Features

- **🇱🇦 Lao 🇱🇦, Thai 🇹🇭 & English Voice Support:** Detects and filters system voices by language, including dedicated Lao and Thai speech engines.
- **🎙️ Voice Style Presets:**
  - 🎙️ **Natural / Normal:** Default balanced speech for general reading
  - 📢 **News Anchor:** Clear, crisp, professional fast reading
  - 🤖 **Sci-Fi Robot:** Deep, slow, monotone futuristic mechanical style
  - 🏃 **Fast Reader:** Rapid informative reading for quick summaries
  - 🧘 **Calm & Soothing:** Soft, peaceful tone perfect for stories & meditation
  - 🧙 **Dramatic Storyteller:** Deep dramatic tone reminiscent of movie trailers
  - 🐿️ **Playful / Chipmunk:** High-pitched cheerful tone for fun
- **🎛️ Fine-Tuning Sliders:** Independent sliders for Speed (0.5x - 2.0x), Pitch (0.5 - 2.0), and Volume (0% - 100%).
- **✨ Real-time Spoken Word Highlighting:** Highlights words dynamically as they are spoken.
- **📊 Dynamic Audio Visualizer:** Responsive audio waveform animation reflecting playback state.
- **💾 Audio Export (.wav):** Generate and download WAV audio files using Web Audio API synthesis.
- **📜 Speech History Log:** Keeps track of recent clips with one-click replay, text copy, and deletion.
- **🌐 Dual Language UI:** Toggle UI labels between Thai and English with one click.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thestrangerLA/text.git
cd text
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Speech Engine:** Web Speech Synthesis API & Web Audio API

---

## 📄 License

MIT License
