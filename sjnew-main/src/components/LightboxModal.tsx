import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-lg flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* High Res Image */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl max-h-[80vh] bg-slate-900">
          <img
            src={imageUrl}
            alt="High-resolution industrial detail"
            className="w-full h-full object-contain max-h-[80vh]"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="mt-3 text-center text-xs text-slate-400 flex items-center gap-2">
          <ZoomIn className="w-4 h-4 text-orange-400" />
          <span>SJ Sharda Enterprises • High-Resolution Industrial Inspection Photo</span>
        </div>

      </div>
    </div>
  );
};
