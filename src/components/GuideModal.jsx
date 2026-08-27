import React from 'react';
import { X, Mic, Sliders, Play, Download, Sparkles } from 'lucide-react';

export default function GuideModal({ isOpen, onClose, t }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl flex flex-col gap-5 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800/80 p-1.5 rounded-lg border border-slate-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-100">{t.guideModalTitle}</h3>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-['Kanit','Plus_Jakarta_Sans',sans-serif]">
          <div className="flex gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 font-bold">1</div>
            <div>
              <p className="font-semibold text-slate-100 mb-0.5">พิมพ์หรือเลือกข้อความ (Type Text)</p>
              <p className="text-slate-400 text-xs">{t.guidePoint1}</p>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 font-bold">2</div>
            <div>
              <p className="font-semibold text-slate-100 mb-0.5">เลือกเสียงอ่าน (Select Voice)</p>
              <p className="text-slate-400 text-xs">{t.guidePoint2}</p>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 font-bold">3</div>
            <div>
              <p className="font-semibold text-slate-100 mb-0.5">เลือกสไตล์เสียง (Voice Styles)</p>
              <p className="text-slate-400 text-xs">{t.guidePoint3}</p>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 font-bold">4</div>
            <div>
              <p className="font-semibold text-slate-100 mb-0.5">ฟังเสียง & ดาวน์โหลด (Play & Download)</p>
              <p className="text-slate-400 text-xs">{t.guidePoint4}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition shadow-lg shadow-indigo-600/30"
        >
          รับทราบ / Got it!
        </button>

      </div>
    </div>
  );
}
