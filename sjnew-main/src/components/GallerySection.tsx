import React from 'react';
import { ORIGINAL_GALLERY_PHOTOS } from '../data/companyData';

interface GallerySectionProps {
  onOpenLightbox: (imageUrl: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="gallery" className="py-16 bg-slate-50 font-sans border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-serif tracking-tight">
            Original Photo Gallery
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Authentic workshop fabrication, vertical lathe turning, CNC machining, vessel assemblies, and on-site material handling.
          </p>
        </div>

        {/* Authentic Workshop & Operations Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {ORIGINAL_GALLERY_PHOTOS.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => onOpenLightbox(photo.url)}
              className="bg-slate-200 border border-slate-200 rounded-lg overflow-hidden cursor-pointer aspect-square flex items-center justify-center relative group shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={photo.url}
                alt={`SJ Sharda Enterprises Works Photo ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
