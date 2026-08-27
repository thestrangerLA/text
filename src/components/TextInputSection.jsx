import React, { useState } from 'react';
import { Type, Sparkles, Trash2, Copy, Check, BookOpen } from 'lucide-react';
import { SAMPLE_TEXTS } from '../constants/presets';

export default function TextInputSection({ text, setText, activeCharIndex, isSpeaking, lang, t }) {
  const [copied, setCopied] = useState(false);

  const samples = SAMPLE_TEXTS[lang] || SAMPLE_TEXTS.en;

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setText('');
  };

  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  // Highlight spoken substring if speaking
  const renderHighlightedText = () => {
    if (!isSpeaking || activeCharIndex < 0 || !text) {
      return null;
    }

    // Find current active word boundaries around activeCharIndex
    let startPos = activeCharIndex;
    let endPos = activeCharIndex;

    while (startPos > 0 && !/\s/.test(text[startPos - 1])) {
      startPos--;
    }
    while (endPos < text.length && !/\s/.test(text[endPos])) {
      endPos++;
    }

    const before = text.substring(0, startPos);
    const active = text.substring(startPos, endPos);
    const after = text.substring(endPos);

    return (
      <div className="absolute inset-0 p-4 font-['Kanit','Plus_Jakarta_Sans',sans-serif] text-base leading-relaxed pointer-events-none whitespace-pre-wrap break-words text-transparent select-none overflow-y-auto">
        <span>{before}</span>
        <mark className="bg-indigo-500/40 text-transparent border-b-2 border-indigo-400 rounded px-1 py-0.5 shadow-lg shadow-indigo-500/30 animate-pulse">
          {active}
        </mark>
        <span>{after}</span>
      </div>
    );
  };

  return (
    <section className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl backdrop-blur-md flex flex-col gap-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Type className="w-5 h-5 text-indigo-400" />
          <h2 className="text-base font-semibold text-slate-100">{t.inputHeader}</h2>
        </div>

        {/* Action Toolbar */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleCopy}
            disabled={!text}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/90 hover:bg-slate-700/90 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg border border-slate-700/60 transition active:scale-95"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            <span>{copied ? t.copiedAlert : t.copyButton}</span>
          </button>
          <button
            onClick={handleClear}
            disabled={!text}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-300 bg-rose-950/40 hover:bg-rose-900/60 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg border border-rose-800/40 transition active:scale-95"
          >
            <Trash2 className="w-3.5 h-3.5 text-rose-400" />
            <span>{t.clearButton}</span>
          </button>
        </div>
      </div>

      {/* Text Area Container */}
      <div className="relative rounded-xl border border-slate-700/60 bg-slate-950/80 focus-within:border-indigo-500/80 focus-within:ring-2 focus-within:ring-indigo-500/20 transition">
        {renderHighlightedText()}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t.placeholder}
          rows={6}
          className="w-full p-4 bg-transparent text-slate-100 placeholder-slate-500 text-base leading-relaxed focus:outline-none resize-y min-h-[160px] font-['Kanit','Plus_Jakarta_Sans',sans-serif]"
        />
      </div>

      {/* Footer Info & Sample Text Buttons */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pt-1">
        {/* Sample Texts Selector */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            {t.sampleButton}:
          </span>
          {samples.map((sample, idx) => (
            <button
              key={idx}
              onClick={() => setText(sample.text)}
              className="px-2.5 py-1 text-xs font-medium text-indigo-300 bg-indigo-950/50 hover:bg-indigo-900/70 border border-indigo-800/40 rounded-md transition duration-150 active:scale-95"
            >
              {sample.category}
            </button>
          ))}
        </div>

        {/* Counter Badges */}
        <div className="flex items-center gap-3 text-xs text-slate-400 self-end lg:self-auto font-mono">
          <span className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
            {charCount} {t.charCount}
          </span>
          <span className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
            {wordCount} {t.wordCount}
          </span>
        </div>
      </div>
    </section>
  );
}
