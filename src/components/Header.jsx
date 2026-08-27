import React from 'react';
import { Volume2, Languages, HelpCircle, Sparkles } from 'lucide-react';

export default function Header({ lang, setLang, t, onOpenGuide }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/80 border-b border-slate-800/80 px-4 lg:px-8 py-3.5 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 ring-2 ring-indigo-400/20">
            <Volume2 className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-purple-200 tracking-tight">
                {t.appTitle}
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                PRO STUDIO
              </span>
            </div>
            <p className="text-xs text-slate-400 font-normal hidden sm:block">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Guide / Help Button */}
          <button
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700/60 rounded-lg transition duration-200 active:scale-95"
            title="User Guide"
          >
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            <span className="hidden sm:inline">คู่มือ / Guide</span>
          </button>

          {/* Language Toggle Button */}
          <button
            onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-indigo-200 bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-700/50 rounded-lg shadow-sm transition duration-200 active:scale-95 cursor-pointer"
          >
            <Languages className="w-4 h-4 text-indigo-400" />
            <span className="tracking-wide">{t.langToggle}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
