import React, { useState } from 'react';
import { Sliders, Mic, Radio, Bot, Zap, Sparkles, Film, Smile, RefreshCw, Volume2, Info, ShoppingBag } from 'lucide-react';
import { VOICE_PRESETS } from '../constants/presets';

const ICON_MAP = {
  Mic,
  ShoppingBag,
  Radio,
  Bot,
  Zap,
  Sparkles,
  Film,
  Smile
};

export default function VoiceControls({
  voices,
  selectedVoice,
  setSelectedVoice,
  selectedPresetId,
  applyPreset,
  rate,
  setRate,
  pitch,
  setPitch,
  volume,
  setVolume,
  lang,
  t
}) {
  const [voiceFilter, setVoiceFilter] = useState('all'); // 'all', 'th', 'lao', 'en'

  // Filter voices based on active tab
  const filteredVoices = voices.filter((v) => {
    const l = v.lang.toLowerCase();
    const name = v.name.toLowerCase();
    if (voiceFilter === 'th') return l.includes('th');
    if (voiceFilter === 'lao') return l.includes('lo') || name.includes('lao');
    if (voiceFilter === 'en') return l.includes('en');
    return true;
  });

  const handleResetSliders = () => {
    setRate(1.0);
    setPitch(1.0);
    setVolume(1.0);
  };

  return (
    <section className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl backdrop-blur-md flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Sliders className="w-5 h-5 text-indigo-400" />
          <h2 className="text-base font-semibold text-slate-100">{t.voiceSectionTitle}</h2>
        </div>
      </div>

      {/* Voice Selection Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
            {t.selectVoiceLabel} ({filteredVoices.length})
          </label>

          {/* Language Filter Tabs */}
          <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 gap-1 text-xs flex-wrap">
            <button
              onClick={() => setVoiceFilter('all')}
              className={`px-2.5 py-1 rounded-md transition font-medium ${
                voiceFilter === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.allLanguages}
            </button>
            <button
              onClick={() => setVoiceFilter('th')}
              className={`px-2.5 py-1 rounded-md transition font-medium ${
                voiceFilter === 'th'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🇹🇭 {t.thaiVoices}
            </button>
            <button
              onClick={() => setVoiceFilter('lao')}
              className={`px-2.5 py-1 rounded-md transition font-medium ${
                voiceFilter === 'lao'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🇱🇦 {t.laoVoices}
            </button>
            <button
              onClick={() => setVoiceFilter('en')}
              className={`px-2.5 py-1 rounded-md transition font-medium ${
                voiceFilter === 'en'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🇬🇧 {t.englishVoices}
            </button>
          </div>
        </div>

        {/* Info Tip when selecting Lao voices */}
        {voiceFilter === 'lao' && filteredVoices.length === 0 && (
          <div className="p-3 bg-amber-950/40 border border-amber-800/50 rounded-xl text-amber-200 text-xs flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              หากในเครื่องยังไม่มีแพ็กเกจเสียงภาษาลาว (lo-LA) ติดตั้งไว้ สามารถใช้ **เสียงภาษาไทย (Thai)** หรือ **เสียง Google/Microsoft** อ่านข้อความตัวอักษรลาว (ສະບາຍດີ) ออกเสียงได้เป็นอย่างดี!
            </p>
          </div>
        )}

        {/* Dropdown Selector */}
        <select
          value={selectedVoice?.name || ''}
          onChange={(e) => {
            const v = voices.find((item) => item.name === e.target.value);
            if (v) setSelectedVoice(v);
          }}
          className="w-full p-3 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/80 cursor-pointer font-['Kanit','Plus_Jakarta_Sans',sans-serif]"
        >
          {filteredVoices.length === 0 ? (
            <option value="">(ไม่พบเสียงภาษาเฉพาะในหมวดนี้ - เลือกดูที่ภาษาทั้งหมด)</option>
          ) : (
            filteredVoices.map((voice, idx) => {
              const l = voice.lang.toLowerCase();
              const isThai = l.includes('th');
              const isLao = l.includes('lo') || voice.name.toLowerCase().includes('lao');
              const badge = isLao ? '🇱🇦 [LAO]' : isThai ? '🇹🇭 [TH]' : `[${voice.lang}]`;
              return (
                <option key={idx} value={voice.name}>
                  {badge} {voice.name} {voice.default ? '(System Default)' : ''}
                </option>
              );
            })
          )}
        </select>
      </div>

      {/* Voice Style Presets Grid */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
          {t.stylePresetsLabel}
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {VOICE_PRESETS.map((preset) => {
            const IconComp = ICON_MAP[preset.icon] || Mic;
            const isSelected = selectedPresetId === preset.id;
            const name = lang === 'th' ? preset.nameTh : preset.nameEn;
            const desc = lang === 'th' ? preset.descTh : preset.descEn;

            return (
              <button
                key={preset.id}
                onClick={() => applyPreset(preset)}
                className={`p-3 rounded-xl border text-left flex flex-col gap-1.5 transition-all duration-200 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'bg-gradient-to-br from-indigo-900/80 via-slate-900 to-purple-900/50 border-indigo-500 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400/50'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                    {name}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-tight">
                  {desc}
                </p>
                <div className="text-[10px] text-indigo-300 font-mono mt-1 pt-1 border-t border-slate-800/80 flex justify-between">
                  <span>Spd: {preset.rate}x</span>
                  <span>Pitch: {preset.pitch}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fine-Tuning Range Sliders */}
      <div className="flex flex-col gap-4 pt-2 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
            ปรับแต่งพารามิเตอร์ละเอียด (Fine-Tuning Sliders)
          </span>
          <button
            onClick={handleResetSliders}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-indigo-300 transition"
            title="Reset sliders"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Rate / Speed Slider */}
          <div className="flex flex-col gap-1.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{t.rateLabel}</span>
              <span className="text-indigo-400 font-bold font-mono">{rate.toFixed(2)}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.05"
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Pitch Slider */}
          <div className="flex flex-col gap-1.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{t.pitchLabel}</span>
              <span className="text-indigo-400 font-bold font-mono">{pitch.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.05"
              value={pitch}
              onChange={(e) => setPitch(parseFloat(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Volume Slider */}
          <div className="flex flex-col gap-1.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{t.volumeLabel}</span>
              <span className="text-indigo-400 font-bold font-mono">{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1.0"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
