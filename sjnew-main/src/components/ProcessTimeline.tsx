import React from 'react';
import { PROCESS_STEPS } from '../data/companyData';
import { FileText, Cpu, Calculator, Settings, CheckCircle2, Truck, ArrowDown, ArrowRight } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenQuoteModal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenQuoteModal }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'Settings': return <Settings className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      default: return <Settings className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-white font-sans border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 px-3 py-1 rounded-full text-orange-700 text-xs font-bold uppercase tracking-wider">
            <span>Seamless Project Execution Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
            Our 6-Step Manufacturing & Quality Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A disciplined, stage-wise engineering workflow engineered to eliminate errors, guarantee ASME/ISO standards compliance, and ensure on-time delivery.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 relative hover:border-orange-500 transition duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              {/* Step Header */}
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-orange-600 font-serif tracking-tight">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center shadow">
                  {getStepIcon(step.iconName)}
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-950 font-serif group-hover:text-orange-600 transition">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Indicator Arrow */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Phase {idx + 1} of 6</span>
                {idx < PROCESS_STEPS.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-orange-600 hidden lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Footer CTA - Sleek Black */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-3 bg-slate-950 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-xl transition cursor-pointer border border-slate-800"
          >
            <span>Start Step 1: Discuss Your Project Requirements</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
