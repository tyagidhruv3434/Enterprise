import React from 'react';

interface CompanyLogoProps {
  variant?: 'header' | 'full' | 'footer' | 'icon';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'header',
  className = '',
  size = 'md',
}) => {
  if (variant === 'icon') {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-14 h-14',
      xl: 'w-20 h-20',
    };

    return (
      <div className={`relative inline-block shrink-0 rounded-xl overflow-hidden ${sizeClasses[size]} ${className}`}>
        <img
          src="/logo-icon.svg"
          alt="SJ Sharda Enterprises Logo Icon"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-4 sm:p-6 shadow-xl ${className}`}>
        <img
          src="/logo.svg"
          alt="SJ Sharda Enterprises Official Logo"
          className="w-full h-auto max-w-lg mx-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 p-1 flex items-center justify-center shadow-md shrink-0">
          <img
            src="/logo-icon.svg"
            alt="SJ Logo Icon"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xl tracking-tight text-white font-serif">
              SJ SHARDA
            </span>
            <span className="text-[10px] bg-orange-500 text-white font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
              ENTERPRISES
            </span>
          </div>
          <span className="text-[10px] text-slate-400 block tracking-wider uppercase font-bold">
            Trading • Fabrication • Machining
          </span>
        </div>
      </div>
    );
  }

  // Header default variant
  return (
    <div className={`flex items-center gap-3 text-left ${className}`}>
      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 p-1 flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-200">
        <img
          src="/logo-icon.svg"
          alt="SJ Logo Icon"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-xl tracking-tight text-slate-950 font-serif">
            SJ SHARDA
          </span>
          <span className="text-[10px] bg-orange-500 text-white font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
            ENTERPRISES
          </span>
        </div>
        <span className="text-[10px] text-slate-600 block tracking-wider uppercase font-bold">
          Trading • Fabrication • Machining
        </span>
      </div>
    </div>
  );
};
