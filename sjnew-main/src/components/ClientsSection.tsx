import React from 'react';
import { CLIENTS } from '../data/companyData';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface ClientsSectionProps {
  onOpenQuoteModal: () => void;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="clients" className="py-20 bg-slate-50 font-sans border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 px-3 py-1 rounded-full text-orange-700 text-xs font-bold uppercase tracking-wider">
            <span>Corporate Trust & Partner Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
            Trusted By Industry Leaders Across India
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            SJ Sharda Enterprises has built an unshakeable reputation for reliability, manufacturing precision, and on-time delivery by serving tier-1 organizations, public sector vendors, and multinational corporations.
          </p>
        </div>

        {/* Corporate Client Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENTS.map((client) => (
            <div
              key={client.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-500 transition duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center font-bold text-sm shadow">
                    <Building2 className="w-5 h-5 text-orange-400" />
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-300 px-2 py-0.5 rounded font-bold uppercase">
                    Verified Vendor
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-950 font-serif group-hover:text-orange-600 transition">
                    {client.name}
                  </h3>
                  {client.groupNote && (
                    <span className="text-[11px] font-semibold text-orange-600 block mt-0.5">
                      ({client.groupNote})
                    </span>
                  )}
                  <span className="text-[11px] text-slate-500 block mt-1">
                    Industry: {client.industry}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {client.workDone}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" /> Works Delivered
                </span>
                <span className="text-slate-400">{client.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Editorial Statement - Sleek Black */}
        <div className="mt-14 bg-slate-950 text-white border border-slate-800 p-8 rounded-2xl relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-orange-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Tier-1 Vendor Compliance</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-serif">
                Equipped for Heavy Turnkey Manufacturing & Defense-Grade Quality
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                SJ Sharda Enterprises operates with full engineering compliance, offering end-to-end traceability for raw materials, third-party inspection (TUV, Lloyd's, Bureau Veritas), and specialized job work capabilities required by energy majors and large EPC leaders.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenQuoteModal}
                className="bg-white hover:bg-slate-100 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl transition cursor-pointer border border-slate-200"
              >
                <span>Partner With Us Today</span>
                <ArrowRight className="w-4 h-4 text-orange-600" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
