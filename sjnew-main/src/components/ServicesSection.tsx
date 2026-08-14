import React, { useState } from 'react';
import {
  Factory,
  Cpu,
  Disc,
  ShieldAlert,
  Flame,
  Sliders,
  Grid,
  Maximize2,
  Target,
  Wrench,
  ShoppingBag,
  Briefcase,
  ArrowRight,
  Layers,
  ChevronRight,
  Check
} from 'lucide-react';
import { SERVICES } from '../data/companyData';
import { Service } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  const categories = [
    { id: 'all', label: 'All Services (15)' },
    { id: 'fabrication', label: 'Heavy Fabrication' },
    { id: 'machining', label: 'Precision Machining & VTL' },
    { id: 'equipment', label: 'Pressure Vessels & Boilers' },
    { id: 'trading', label: 'MS & SS Raw Material Trading' },
    { id: 'specialized', label: 'Industrial Job Work & Contract' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory': return <Factory className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Disc': return <Disc className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      case 'Sliders': return <Sliders className="w-6 h-6" />;
      case 'Grid': return <Grid className="w-6 h-6" />;
      case 'Maximize2': return <Maximize2 className="w-6 h-6" />;
      case 'Target': return <Target className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      default: return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 font-sans border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 px-3 py-1 rounded-full text-orange-700 text-xs font-bold uppercase tracking-wider">
            <span>Specialized Industrial Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
            Comprehensive Industrial Engineering & Machining Capabilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From 5-Meter VTL vertical turning to ASME pressure vessel fabrication, MS/SS raw material trading, and custom CNC job work, SJ Sharda Enterprises serves India's major industrial organizations with unmatched precision.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-950 text-white font-bold shadow-md scale-105 border border-slate-800'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-black hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-500 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              {/* Service Thumbnail Header */}
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
                
                {/* Floating Icon Box */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-slate-950/90 text-white border border-slate-700 flex items-center justify-center shadow-lg backdrop-blur-md">
                  {getServiceIcon(service.iconName)}
                </div>

                {service.capacityOrSpecs && (
                  <div className="absolute bottom-3 right-3 bg-slate-950/90 text-slate-100 text-[10px] font-semibold px-2.5 py-1 rounded border border-slate-800 backdrop-blur-md">
                    {service.capacityOrSpecs}
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-950 font-serif group-hover:text-orange-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key Points Bullet */}
                <div className="space-y-1.5 border-t border-slate-100 pt-3 text-[11px] text-slate-600">
                  {service.keyFeatures.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                      <span className="text-slate-700 truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center gap-2 border-t border-slate-100">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-black py-2 rounded-lg text-xs font-bold border border-slate-200 flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <span>Learn More & Specs</span>
                    <ChevronRight className="w-3.5 h-3.5 text-orange-600" />
                  </button>
                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="bg-slate-950 hover:bg-slate-800 text-white font-bold px-3.5 py-2 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center transition cursor-pointer border border-slate-800"
                    title={`Request quote for ${service.title}`}
                  >
                    <span>Quote</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Notice - Sleek Black */}
        <div className="mt-12 bg-slate-950 text-white border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div>
            <h4 className="text-white font-bold text-base font-serif">
              Require Custom Engineering Job Work or Drawings Feasibility?
            </h4>
            <p className="text-slate-300 text-xs mt-1">
              Share your CAD drawings, PDF blueprints, or BOM with our engineering team for immediate technical consultation.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="shrink-0 bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-orange-500/20 transition cursor-pointer"
          >
            <span>Submit Drawing For Feasibility</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Technical Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    </section>
  );
};
