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
    id: 'lao_soft',
    nameTh: '🇱🇦 เสียงลาวนุ่มนวล',
    nameEn: '🇱🇦 Soft Lao Tone',
    descTh: 'เสียงลาวนุ่มนวล อ่อนหวาน ฟังสบายเป็นธรรมชาติ',
    descEn: 'Gentle, soft, and soothing Lao vocal pronunciation',
    rate: 0.95,
    pitch: 1.05,
    icon: 'Sparkles'
  },
  {
    id: 'lao_formal',
    nameTh: '🇱🇦 เสียงลาวทางการ',
    nameEn: '🇱🇦 Formal Lao Voice',
    descTh: 'เสียงลาวทุ้มชัดเจน เป็นทางการ สำหรับอ่านข่าวและนำเสนองาน',
    descEn: 'Clear, formal, and articulate Lao broadcast tone',
    rate: 1.02,
    pitch: 0.95,
    icon: 'Radio'
  },
  {
    id: 'lao_lively',
    nameTh: '🇱🇦 เสียงลาวสดใส',
    nameEn: '🇱🇦 Lively Lao Voice',
    descTh: 'เสียงลาวสดใส มีพลัง เหมาะสำหรับคลิปสั้นและโซเชียลมีเดีย',
    descEn: 'Upbeat and energetic Lao tone for social media & clips',
    rate: 1.18,
    pitch: 1.2,
    icon: 'Smile'
  },
  {
    id: 'review',
    nameTh: '🛍️ รีวิวสินค้า',
    nameEn: '🛍️ Product Reviewer',
    descTh: 'เสียงกระตือรือร้น สดใส มีพลัง เหมาะสำหรับรีวิวสินค้า ขายของออนไลน์',
    descEn: 'Enthusiastic, bright, energetic tone for product reviews & sales',
    rate: 1.15,
    pitch: 1.15,
    icon: 'ShoppingBag'
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
      category: '🇱🇦 ทักทายภาษาลาว',
      text: 'ສະບາຍດີ! ຍິນດີຕ້ອນຮັບທຸກໆທ່ານເຂົ້າສູ່ລະບົບແປງຂໍ້ຄວາມເປັນສຽງເວົ້າ VoiceCraft. ຂໍໃຫ້ທ່ານมีความสุขກັບການຟັງສຽງເດີ.'
    },
    {
      category: '🇱🇦 รีวิวสินค้าภาษาลาว',
      text: 'ສະບາຍດີທຸກໆຄົນ! ມື້ນີ້ຈະມາຣີວິວສິນຄ້າສຸດພິເສດໂຕນີ້ ເວົ້າເລີຍວ່າຄຸນນະພາບດີຫຼາຍ ໃຊ້ງານງ່າຍ ໃຜທີ່ກຳລັງຊອກຫາຢູ່ ຫ້າມພາດເດີ!'
    },
    {
      category: '🇱🇦 ท่องเที่ยวภาษาลาว',
      text: 'ຫຼວງພະບາງ ເມືອງມໍລະດົກໂລກ ທີ່ມີຄວາມງາມທາງທຳມະຊາດ ແລະ ວັດທະນະທຳອັນເກົ່າແກ່ ຂໍເຊີນຊວນທຸກທ່ານມາຢ້ຽມຢາມ ແລະ ສໍາຜັດວິຖີຊີວິດອັນແສນອົບອຸ່ນ.'
    },
    {
      category: '🇱🇦 ข่าวสารภาษาลาว',
      text: 'ສະບາຍດີທ່ານຜູ້ຟັງ ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ລາຍການຂ່າວສານປະຈຳວັນ ມື້ນີ້ສະພາບອາກາດແຈ່ມໃສດີ ມີລົມພັດເຢັນສະບາຍໃນຫຼາຍພື້ນທີ່.'
    },
    {
      category: '🛍️ รีวิวสินค้าภาษาไทย',
      text: 'สวัสดีครับทุกคน! วันนี้จะมารีวิวไอเทมเด็ดตัวนี้เลย บอกเลยว่าคุณภาพเกินราคา พกพาง่าย ใช้งานสะดวกสุดๆ ใครกำลังมองหาของดีราคาสบายกระเป๋า ห้ามพลาดเลยครับ!'
    },
    {
      category: '📢 ข่าวเช้าภาษาไทย',
      text: 'สวัสดีครับท่านผู้ฟัง ยินดีต้อนรับสู่รายการข่าวเช้าวันนี้ กรมอุตุนิยมวิทยาพยากรณ์อากาศทั่วไทยวันนี้ ท้องฟ้าสดใส อากาศแจ่มใสและมีลมพัดเย็นสบายในหลายพื้นที่ครับ'
    },
    {
      category: '📖 นิทานป่าใหญ่',
      text: 'กาลครั้งหนึ่งนานมาแล้ว ในป่าใหญ่ลึกอันเงียบสงบ มีกระต่ายน้อยตัวหนึ่งผู้มีความฝันอยากออกเดินทางไปสำรวจดวงดาวบนท้องฟ้า มันเพียรพยายามฝึกฝนทุกวันด้วยความมุ่งมั่น'
    },
    {
      category: '💡 แรงบันดาลใจ',
      text: 'ทุกๆ วันคือโอกาสใหม่ในการเรียนรู้และเติบโต อย่ากลัวที่จะเริ่มต้น สิ่งสำคัญที่สุดคือการไม่หยุดก้าวไปข้างหน้าเพื่อความฝันของคุณ'
    }
  ],
  en: [
    {
      category: '🇱🇦 Lao Greeting',
      text: 'ສະບາຍດີ! ຍິນດີຕ້ອນຮັບທຸກໆທ່ານເຂົ້າສູ່ລະບົບແປງຂໍ້ຄວາມເປັນສຽງເວົ້າ VoiceCraft.'
    },
    {
      category: '🇱🇦 Lao Product Review',
      text: 'ສະບາຍດີທຸກໆຄົນ! ມື້ນີ້ຈະມາຣີວິວສິນຄ້າສຸດພິເສດໂຕນີ້ ໃຊ້ງານງ່າຍ ຄຸນນະພາບດີຫຼາຍ!'
    },
    {
      category: '🇱🇦 Lao Tourism',
      text: 'ຫຼວງພະບາງ ເມືອງມໍລະດົກໂລກ ທີ່ມີຄວາມງາມທາງທຳມະຊາດ ແລະ ວັດທະນະທຳອັນເກົ່າແກ່ ຂໍເຊີນຊວນທຸກທ່ານມາຢ້ຽມຢາມ.'
    },
    {
      category: '🛍️ Product Review',
      text: "Hey everyone! Check out this amazing gadget I've been testing. The build quality is top-notch, battery life is insane, and it offers incredible value for money. Highly recommended!"
    },
    {
      category: '📢 Daily News',
      text: 'Good morning and welcome to the daily tech briefing. Researchers have unveiled a groundbreaking new speech synthesis engine capable of ultra-realistic voice cloning and emotion rendering.'
    },
    {
      category: '📖 Fantasy Tale',
      text: 'Once upon a time in a kingdom far beyond the misty mountains, a young explorer discovered a forgotten library filled with glowing magical manuscripts.'
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
    subtitle: 'ระบบแปลงข้อความเป็นเสียงพูด (เพิ่มระบบเสียงภาษาลาว 🇱🇦, ภาษาไทย, อังกฤษ และสไตล์ต่างๆ)',
    inputHeader: 'ข้อความที่คุณต้องการให้พูด (รองรับภาษาลาว 🇱🇦, ไทย, อังกฤษ)',
    placeholder: 'พิมพ์หรือวางข้อความที่นี่ (รองรับภาษาลาว ສະບາຍດີ, ภาษาไทย, ภาษาอังกฤษ)...',
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
    guidePoint1: '1. พิมพ์ข้อความภาษาลาว (ສະບາຍດີ), ไทย หรืออังกฤษ',
    guidePoint2: '2. เลือกเสียงพูดภาษาลาว/ไทย หรือระบบเสียงสากล',
    guidePoint3: '3. เลือกสไตล์เสียงลาวสำเร็จรูป (เสียงลาวนุ่มนวล, เสียงลาวทางการ, เสียงลาวสดใส) หรือสไตล์อื่นๆ',
    guidePoint4: '4. กดปุ่ม "อ่านออกเสียง" ระบบจะอ่านไฮไลท์คำแบบเรียลไทม์ และกดดาวน์โหลดไฟล์เสียงไปใช้ได้ทันที',
    langToggle: 'TH / EN'
  },
  en: {
    appTitle: 'VoiceCraft TTS',
    subtitle: 'Text-to-Speech Studio with Enhanced Lao 🇱🇦, Thai, & English Voices',
    inputHeader: 'Text to Speak (Supports Lao 🇱🇦, Thai, English)',
    placeholder: 'Type or paste text here (Lao ສະບາຍດີ, Thai, English)...',
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
    guidePoint1: '1. Type or paste text in Lao, Thai, or English.',
    guidePoint2: '2. Pick a voice engine (Lao, Thai, or international).',
    guidePoint3: '3. Choose dedicated Lao voice presets (Soft Lao, Formal Lao, Lively Lao) or custom sliders.',
    guidePoint4: '4. Click "Speak Aloud" to start reading with live word highlighting & download options.',
    langToggle: 'EN / TH'
  }
};
