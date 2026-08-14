import React from 'react';
import { WHY_CHOOSE_US } from '../data/companyData';
import {
  Award,
  Users,
  Layers,
  ShieldCheck,
  TrendingUp,
  Building2,
  CheckCircle2,
  ArrowRight,
  Gauge,
  Factory
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      default: return <Gauge className="w-6 h-6" />;
    }
  };

  const additionalAdvantages = [
    '100% NDT & Hydro Testing Compliance',
    'Dedicated CAD/CAM Engineering Feasibility',
    'Mill Test Certificates (MTC) with Every Delivery',
    'In-House MS & SS Material Stock Inventory',
    'Round-the-Clock Project Status Reporting',
    'Custom Protective Packaging & Dispatch Support',
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white font-sans border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 px-3 py-1 rounded-full text-orange-700 text-xs font-bold uppercase tracking-wider">
            <span>Why Industrial Majors Trust Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
            Built On Precision, Reliability & Decades of Field Knowledge
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            While SJ Sharda Enterprises was formally incorporated 1 year ago, our core engineering leadership brings over 10+ years of hands-on technical experience executing high-value industrial projects.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-500 transition duration-300 flex flex-col space-y-4 group hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center shadow">
                <span className="text-orange-400">{getIcon(item.iconName)}</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-950 font-serif group-hover:text-orange-600 transition">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Advantages Checkmarks Box - Sleek Black */}
        <div className="mt-14 bg-slate-950 text-white border border-slate-800 p-8 rounded-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <Factory className="w-4 h-4" />
                <span>Quality Standards</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-serif">
                Uncompromising Industrial Quality Assurance
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Every component machined on our VTL lathe, every shell welded for a pressure vessel, and every ton of raw steel supplied undergoes strict multi-stage quality verifications.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
              {additionalAdvantages.map((adv, i) => (
                <div key={i} className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="font-medium text-slate-100">{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
