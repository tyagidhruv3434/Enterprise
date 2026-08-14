import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenQuoteModal: (projectContext?: string) => void;
  onOpenLightbox: (imageUrl: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenQuoteModal,
  onOpenLightbox,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-200">
        
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 p-5 flex items-center justify-between z-10">
          <div>
            <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-1 font-serif">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Main Photo Gallery Grid */}
          <div className="space-y-3">
            <div
              onClick={() => onOpenLightbox(project.mainImageUrl)}
              className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-800 group cursor-pointer bg-slate-950"
            >
              <img
                src={project.mainImageUrl}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs bg-slate-950/90 text-orange-400 px-3 py-1 rounded border border-slate-800 font-semibold shadow">
                  Click to enlarge photo
                </span>
              </div>
            </div>

            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.additionalImages.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => onOpenLightbox(img)}
                    className="h-24 rounded-lg overflow-hidden border border-slate-800 cursor-pointer group"
                  >
                    <img
                      src={img}
                      alt={`${project.name} view ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Meta Grid */}
          {project.materialsUsed && (
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
              <span className="text-slate-400 block font-medium">Materials Used:</span>
              <span className="font-semibold text-slate-200 block mt-1">
                {project.materialsUsed}
              </span>
            </div>
          )}

          {/* Detailed Description */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-orange-400 mb-2">
              Project Description & Scope
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Engineering Highlights */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-orange-400 mb-3">
              Technical & Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.engineeringHighlights.map((hl, index) => (
                <div
                  key={index}
                  className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-slate-200">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Utilized */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-orange-400 mb-2">
              Services & Capabilities Used
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.servicesUsed.map((srv, idx) => (
                <span
                  key={idx}
                  className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md border border-slate-700 font-medium"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal(`Inquiry regarding similar project: ${project.name}`);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
          >
            <span>Inquire About Similar Job Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
