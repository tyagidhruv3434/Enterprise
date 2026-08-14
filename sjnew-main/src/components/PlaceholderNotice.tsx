import React, { useState } from 'react';
import { Info, X, Upload } from 'lucide-react';

export const PlaceholderNotice: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div id="client-placeholder-notice" className="bg-slate-900 border-b border-orange-500/30 text-slate-300 text-xs py-2 px-4 flex items-center justify-between z-50">
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-orange-500/20 text-orange-400 border border-orange-500/40 px-2 py-0.5 rounded font-medium text-[11px] uppercase tracking-wider">
            <Upload className="w-3 h-3" /> Client Ready
          </span>
          <p className="text-slate-300 font-medium">
            Placeholder visuals, client logos, and project media can be effortlessly updated via <span className="text-white font-semibold">/src/data/companyData.ts</span>.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="text-orange-400 hover:text-orange-300 underline font-medium text-[12px]"
          >
            Direct Contact: Amrish Tyagi (+91 9759590077)
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-slate-400 hover:text-white p-1 rounded transition"
            title="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
