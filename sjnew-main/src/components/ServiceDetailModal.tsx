import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Factory, Cpu } from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-200">
        
        {/* Header Bar */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 p-5 flex items-center justify-between z-10">
          <div>
            <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
              {service.category} Capabilities
            </span>
            <h3 className="text-xl font-bold text-white mt-1 font-serif">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image & Specs Body */}
        <div className="p-6 space-y-6">
          <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-800">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            {service.capacityOrSpecs && (
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 border border-slate-800 p-3 rounded-lg text-xs font-semibold text-orange-300">
                <span className="text-slate-400 block font-normal text-[11px]">Key Machine Capacity / Specification:</span>
                {service.capacityOrSpecs}
              </div>
            )}
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-orange-400 mb-2">
              Engineering Overview
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-orange-400 mb-3">
              Technical Standards & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {service.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-slate-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Industrial Applications */}
          {service.commonApplications && service.commonApplications.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider text-orange-400 mb-2">
                Typical Industrial Applications
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {service.commonApplications.map((app, i) => (
                  <span
                    key={i}
                    className="bg-slate-800/80 border border-slate-700 text-slate-300 px-3 py-1 rounded-md"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quality Sign-off */}
          <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center gap-3 text-xs text-orange-200">
            <ShieldCheck className="w-6 h-6 text-orange-400 shrink-0" />
            <div>
              <strong className="text-white block font-semibold">100% Quality & Material Certification</strong>
              <span>All job work and fabrication subject to stage-wise quality clearance, NDT testing, and Mill Test Certificates.</span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs"
          >
            Close Details
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal(service.title);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
          >
            <span>Request Quote for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
