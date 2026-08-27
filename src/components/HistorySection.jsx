import React from 'react';
import { History, Play, Trash2, Clock } from 'lucide-react';

export default function HistorySection({ history, onReplay, onClearHistory, onDeleteItem, t }) {
  return (
    <section className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl backdrop-blur-md flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-indigo-400" />
          <h2 className="text-base font-semibold text-slate-100">{t.historyTitle}</h2>
        </div>

        {history.length > 0 && (
          <button
            onClick={onClearHistory}
            className="text-xs font-medium text-slate-400 hover:text-rose-400 transition"
          >
            {t.clearHistory}
          </button>
        )}
      </div>

      {/* History Items List */}
      {history.length === 0 ? (
        <div className="p-8 text-center border border-dashed border-slate-800 rounded-xl text-slate-500 text-xs flex flex-col items-center gap-2">
          <Clock className="w-6 h-6 text-slate-700" />
          <p>{t.noHistory}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-1">
          {history.map((item) => (
            <div
              key={item.id}
              className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-xl flex flex-col justify-between gap-2.5 hover:border-slate-700 transition"
            >
              <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed font-['Kanit','Plus_Jakarta_Sans',sans-serif]">
                "{item.text}"
              </p>

              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono border-t border-slate-900 pt-2">
                <span>{item.voiceName || 'Default Voice'} • {item.rate}x</span>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onReplay(item)}
                    className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-sans font-medium text-xs bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{t.replay}</span>
                  </button>

                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="text-slate-500 hover:text-rose-400 transition p-1"
                    title="Delete clip"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
