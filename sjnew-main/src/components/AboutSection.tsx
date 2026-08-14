import React from 'react';
import { COMPANY_CONTACT } from '../data/companyData';
import { ShieldCheck, Award, Target, Users, CheckCircle2, Clock, Zap, ArrowRight, UserCheck } from 'lucide-react';
import { CompanyLogo } from './CompanyLogo';
import heroFactoryImg from '../assets/images/hero_workshop_factory_1786704606696.jpg';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  const coreValues = [
    { title: 'Quality Assurance', desc: 'Zero compromise on weld integrity, dimensional accuracy, and pressure ratings.' },
    { title: 'Safety & Compliance', desc: 'Strict adherence to industrial safety norms, ASME code, and IBR design guidelines.' },
    { title: 'Precision Engineering', desc: 'Micron-level machining standards across vertical turning, CNC, VMC, and horizontal boring.' },
    { title: 'On-Time Delivery', desc: 'Disciplined project schedules ensuring your plant downtime and erection timelines remain intact.' },
    { title: 'Customer Satisfaction', desc: 'Long-term corporate partnerships built on transparent technical communication and trust.' },
    { title: 'Engineering Innovation', desc: 'Leveraging modern tooling and adaptive machining methods for complex custom components.' },
  ];

  return (
    <section id="about" className="py-20 bg-white font-sans border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 px-3 py-1 rounded-full text-orange-700 text-xs font-bold uppercase tracking-wider">
              <span>About SJ Sharda Enterprises</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight leading-tight">
              Built On Over a Decade of Practical Industrial Expertise
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong>SJ Sharda Enterprises</strong> is owned by <strong>Asha Tyagi</strong> and actively managed and run by <strong>Amrish Tyagi</strong>.
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Amrish Tyagi brings <strong>10 years of solid industry experience in trading and fabrication</strong>, delivering heavy structural fabrication, precision machining, industrial job work, raw material supplies, and contract manufacturing solutions to India’s major industrial organizations.
            </p>

            {/* Owner Spotlight Callout - Sleek Black / Dark Slate */}
            <div className="p-5 bg-slate-950 text-white border border-slate-800 rounded-xl space-y-2 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Owner: Asha Tyagi &nbsp;|&nbsp; Managed & Run By: Amrish Tyagi</h3>
                  <p className="text-xs text-orange-400 font-medium">10 Years Industry Experience in Trading & Fabrication</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 pt-1 italic font-serif">
                "Our single focus is providing India's leading companies with industrial solutions that exceed expectations in durability, accuracy, and on-time delivery."
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="bg-slate-950 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition cursor-pointer border border-slate-800"
              >
                <span>Request a Technical Quote</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>
          </div>

          {/* Right Column Image & Official Logo Card Frame */}
          <div className="lg:col-span-5 space-y-6">
            {/* Official Company Logo Card */}
            <CompanyLogo variant="full" />

            <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-xl">
              <img
                src={heroFactoryImg}
                alt="SJ Sharda Workshop Operations"
                className="w-full h-64 sm:h-72 object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 text-white border border-slate-800 p-3 rounded-xl backdrop-blur-md space-y-1">
                <div className="flex items-center justify-between text-xs text-orange-400 font-bold uppercase tracking-wider">
                  <span>Factory Location</span>
                  <span className="text-slate-300">Ghaziabad, UP</span>
                </div>
                <p className="text-xs text-slate-300">
                  {COMPANY_CONTACT.address.line1}, {COMPANY_CONTACT.address.city}, {COMPANY_CONTACT.address.state} {COMPANY_CONTACT.address.pincode}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Core Values Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-950 font-serif">
              Our Core Guiding Principles
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Engineered into every project, drawing, and finished metal job work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-orange-500 hover:shadow-md transition"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <h4 className="text-sm font-bold text-slate-950 font-serif">{val.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
