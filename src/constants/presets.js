export const VOICE_PRESETS = [
  {
    id: 'natural',
    nameTh: '🎙️ เสียงธรรมชาติ',
    nameEn: '🎙️ Natural / Normal',
    descTh: 'เสียงพูดปกติ ระดับมาตรฐาน เหมาะสำหรับอ่านทั่วไป',
    descEn: 'Default balanced pitch and speed for general reading',
    rate: 1.0,
    pitch: 1.0,
    icon: 'Mic'
  },
  {
    id: 'news',
    nameTh: '📢 ผู้ประกาศข่าว',
    nameEn: '📢 News Anchor',
    descTh: 'กระชับ ชัดเจน รวดเร็วและมีความเป็นมืออาชีพ',
    descEn: 'Clear, crisp, and slightly faster professional tone',
    rate: 1.1,
    pitch: 1.05,
    icon: 'Radio'
  },
  {
    id: 'robot',
    nameTh: '🤖 หุ่นยนต์ไซไฟ',
    nameEn: '🤖 Sci-Fi Robot',
    descTh: 'เสียงต่ำ ช้า มีจังหวะจักรกลสไตล์ไซไฟ',
    descEn: 'Deep, slow, monotone futuristic mechanical style',
    rate: 0.85,
    pitch: 0.4,
    icon: 'Bot'
  },
  {
    id: 'fast',
    nameTh: '🏃 อ่านเร็วทันใจ',
    nameEn: '🏃 Fast Reader',
    descTh: 'เหมาะสำหรับฟังการสรุปความหรือทบทวนข้อมูลอย่างรวดเร็ว',
    descEn: 'High-speed reading for fast catch-ups and summaries',
    rate: 1.6,
    pitch: 1.1,
    icon: 'Zap'
  },
  {
    id: 'calm',
    nameTh: '🧘 นุ่มนวล / นิทาน',
    nameEn: '🧘 Calm & Soothing',
    descTh: 'เสียงช้า นุ่มนวล เหมาะสำหรับเล่านิทานหรือทำสมาธิ',
    descEn: 'Slow, peaceful tone perfect for stories and meditation',
    rate: 0.75,
    pitch: 0.85,
    icon: 'Sparkles'
  },
  {
    id: 'dramatic',
    nameTh: '🧙 นักเล่าเรื่องดราม่า',
    nameEn: '🧙 Dramatic Storyteller',
    descTh: 'เสียงทุ้มต่ำ มีมิติ ราวกับเสียงพากย์ภาพยนตร์',
    descEn: 'Deep dramatic storytelling tone reminiscent of movie trailers',
    rate: 0.8,
    pitch: 0.65,
    icon: 'Film'
  },
  {
    id: 'playful',
    nameTh: '🐿️ เสียงแหลมสดใส',
    nameEn: '🐿️ Playful / Chipmunk',
    descTh: 'เสียงแหลมสูง สนุกสนาน เหมาะสำหรับตลกหรืออนิเมะ',
    descEn: 'High-pitched cheerful voice for cartoon or playful fun',
    rate: 1.3,
    pitch: 1.65,
    icon: 'Smile'
  }
];

export const SAMPLE_TEXTS = {
  th: [
    {
      category: '📢 ข่าวเช้า',
      text: 'สวัสดีครับท่านผู้ฟัง ยินดีต้อนรับสู่รายการข่าวเช้าวันนี้ กรมอุตุนิยมวิทยาพยากรณ์อากาศทั่วไทยวันนี้ ท้องฟ้าสดใส อากาศแจ่มใสและมีลมพัดเย็นสบายในหลายพื้นที่ครับ'
    },
    {
      category: '📖 นิทานป่าใหญ่',
      text: 'กาลครั้งหนึ่งนานมาแล้ว ในป่าใหญ่ลึกอันเงียบสงบ มีกระต่ายน้อยตัวหนึ่งผู้มีความฝันอยากออกเดินทางไปสำรวจดวงดาวบนท้องฟ้า มันเพียรพยายามฝึกฝนทุกวันด้วยความมุ่งมั่น'
    },
    {
      category: '🇱🇦 ตัวอย่างภาษาลาว 1',
      text: 'ສະບາຍດີ ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບແປງຂໍ້ຄວາມເປັນສຽງເວົ້າ ຂໍໃຫ້ທ່ານมีความสุขกับการใช้งาน'
    },
    {
      category: '🇱🇦 ตัวอย่างภาษาลาว 2',
      text: 'ມື້ນີ້ອາກາດດີຫຼາຍ ຂໍໃຫ້ເປັນມື້ທີ່ມີຄວາມສຸກ ແລະ ສົມຫວັງໃນທຸກໆຢ່າງ ເດີ'
    },
    {
      category: '💡 แรงบันดาลใจ',
      text: 'ทุกๆ วันคือโอกาสใหม่ในการเรียนรู้และเติบโต อย่ากลัวที่จะเริ่มต้น สิ่งสำคัญที่สุดคือการไม่หยุดก้าวไปข้างหน้าเพื่อความฝันของคุณ'
    }
  ],
  en: [
    {
      category: '📢 Daily News',
      text: 'Good morning and welcome to the daily tech briefing. Researchers have unveiled a groundbreaking new speech synthesis engine capable of ultra-realistic voice cloning and emotion rendering.'
    },
    {
      category: '📖 Fantasy Tale',
      text: 'Once upon a time in a kingdom far beyond the misty mountains, a young explorer discovered a forgotten library filled with glowing magical manuscripts.'
    },
    {
      category: '🇱🇦 Lao Sample',
      text: 'ສະບາຍດີ ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບແປງຂໍ້ຄວາມເປັນສຽງເວົ້າ VoiceCraft'
    },
    {
      category: '🚀 AI Initialization',
      text: 'System initialization complete. Accessing neural speech synthesis module. Voice frequency calibrated. Preparing output stream.'
    },
    {
      category: '💡 Inspiration',
      text: 'Success is not final, failure is not fatal: it is the courage to continue that counts. Believe in yourself and keep pushing forward.'
    }
  ]
};

export const UI_TRANSLATIONS = {
  th: {
    appTitle: 'VoiceCraft TTS',
    subtitle: 'ระบบแปลงข้อความเป็นเสียงพูด (รองรับภาษาไทย, ลาว, อังกฤษ และทุกภาษา)',
    inputHeader: 'ข้อความที่คุณต้องการให้พูด (รองรับภาษาไทย, ลาว 🇱🇦, อังกฤษ)',
    placeholder: 'พิมพ์หรือวางข้อความที่นี่ (รองรับภาษาไทย, ภาษาลาว ສະບາຍດີ, ภาษาอังกฤษ)...',
    sampleButton: 'ดึงข้อความตัวอย่าง',
    clearButton: 'ล้างข้อความ',
    copyButton: 'คัดลอกข้อความ',
    copiedAlert: 'คัดลอกข้อความแล้ว!',
    charCount: 'อักขระ',
    wordCount: 'คำ',
    voiceSectionTitle: 'การตั้งค่าเสียงและสไตล์การพูด',
    selectVoiceLabel: 'เลือกเสียงพากย์ (Voice Engine)',
    allLanguages: 'ภาษาทั้งหมด',
    thaiVoices: 'เสียงภาษาไทย (Thai)',
    laoVoices: 'เสียงภาษาลาว (Lao)',
    englishVoices: 'เสียงภาษาอังกฤษ (English)',
    stylePresetsLabel: 'สไตล์เสียงสำเร็จรูป (Voice Styles)',
    rateLabel: 'ความเร็ว (Speed / Rate):',
    pitchLabel: 'ระดับเสียง (Pitch):',
    volumeLabel: 'ความดัง (Volume):',
    controlsTitle: 'การควบคุมการอ่านออกเสียง',
    btnPlay: 'อ่านออกเสียง (Play)',
    btnPause: 'ชั่วคราว (Pause)',
    btnResume: 'อ่านต่อ (Resume)',
    btnStop: 'หยุดอ่าน (Stop)',
    btnDownload: 'ดาวน์โหลดไฟล์เสียง (Audio Export)',
    recordingMessage: 'กำลังประมวลผลการบันทึกเสียง...',
    visualizerActive: 'กำลังเล่นเสียง...',
    visualizerIdle: 'พร้อมใช้งาน กดอ่านออกเสียงด้านบน',
    historyTitle: 'ประวัติข้อความล่าสุด (Speech History)',
    noHistory: 'ยังไม่มีประวัติการเล่นเสียง',
    clearHistory: 'ล้างประวัติ',
    replay: 'ฟังอีกครั้ง',
    guideModalTitle: 'คู่มือการใช้งาน VoiceCraft',
    guidePoint1: '1. พิมพ์ข้อความภาษาไทย, ภาษาลาว (ສະບາຍດີ) หรือภาษาอังกฤษในช่องป้อนข้อความ',
    guidePoint2: '2. เลือกเสียงพูดภาษาไทย/ลาว หรือภาษาต่างประเทศจากรายการเสียงของระบบ',
    guidePoint3: '3. เลือกสไตล์เสียงพากย์สำเร็จรูป (เช่น หุ่นยนต์, ผู้ประกาศข่าว, นิทาน) หรือปรับแต่งความเร็วและระดับเสียงด้วยตัวเอง',
    guidePoint4: '4. กดปุ่ม "อ่านออกเสียง" ระบบจะอ่านไฮไลท์คำแบบเรียลไทม์ และรองรับการกดดาวน์โหลดไฟล์เสียงเพื่อเซฟไว้ฟังได้',
    langToggle: 'TH / EN'
  },
  en: {
    appTitle: 'VoiceCraft TTS',
    subtitle: 'Text-to-Speech Studio with Lao, Thai, and English Voice Support',
    inputHeader: 'Text to Speak (Supports Lao 🇱🇦, Thai, English)',
    placeholder: 'Type or paste text here (supports Lao ສະບາຍດີ, Thai, English, and all system languages)...',
    sampleButton: 'Load Sample Text',
    clearButton: 'Clear',
    copyButton: 'Copy Text',
    copiedAlert: 'Text copied to clipboard!',
    charCount: 'Characters',
    wordCount: 'Words',
    voiceSectionTitle: 'Voice Selection & Audio Styles',
    selectVoiceLabel: 'Select Voice Engine',
    allLanguages: 'All Languages',
    thaiVoices: 'Thai Voices',
    laoVoices: 'Lao Voices',
    englishVoices: 'English Voices',
    stylePresetsLabel: 'Voice Style Presets',
    rateLabel: 'Speed (Rate):',
    pitchLabel: 'Pitch:',
    volumeLabel: 'Volume:',
    controlsTitle: 'Playback Controls',
    btnPlay: 'Speak Aloud (Play)',
    btnPause: 'Pause',
    btnResume: 'Resume',
    btnStop: 'Stop',
    btnDownload: 'Export Audio (.webm / .wav)',
    recordingMessage: 'Processing audio recording...',
    visualizerActive: 'Speaking in progress...',
    visualizerIdle: 'Ready. Press Speak Aloud above.',
    historyTitle: 'Recent Clips & History',
    noHistory: 'No speech history recorded yet.',
    clearHistory: 'Clear History',
    replay: 'Replay Clip',
    guideModalTitle: 'VoiceCraft User Guide',
    guidePoint1: '1. Type or paste your text in Lao, Thai, or English.',
    guidePoint2: '2. Pick a voice engine (Lao, Thai, or international).',
    guidePoint3: '3. Select a voice style preset (e.g. Robot, News Anchor, Story) or manually adjust Speed and Pitch.',
    guidePoint4: '4. Click "Speak Aloud" to start reading with live word highlighting & download options.',
    langToggle: 'EN / TH'
  }
};
