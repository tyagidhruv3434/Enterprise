import React from 'react';
import { ArrowRight, ShieldCheck, Award, Wrench, ChevronRight, Phone, CheckCircle2, Factory } from 'lucide-react';
import { COMPANY_CONTACT, COMPANY_STATS } from '../data/companyData';
import heroFactoryImg from '../assets/images/hero_workshop_factory_1786704606696.jpg';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreProjects: () => void;
  onViewServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreProjects, onViewServices }) => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-slate-950 overflow-hidden font-sans border-b border-slate-800">
      {/* Background Industrial Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity scale-105 transform hover:scale-100 transition-transform duration-1000">
        <img
          src={heroFactoryImg}
          alt="SJ Sharda Enterprises Industrial Workshop"
          className="w-full h-full object-cover"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/75"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-80"></div>
      </div>

      {/* Decorative Metallic Accent Grids */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-orange-500/10 via-amber-500/5 to-transparent pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 bg-slate-900/90 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-slate-200 text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              </span>
              <span className="text-orange-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                Built on 10+ Years Industry Expertise
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 font-medium">Ghaziabad, UP, India</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-serif">
              Engineering Excellence with{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                10+ Years
              </span>{' '}
              of Industrial Expertise
            </h1>

            {/* Tagline & Subheading */}
            <p className="text-lg sm:text-xl text-orange-200/90 font-medium font-serif italic border-l-2 border-orange-500 pl-4 py-0.5">
              "Engineering Excellence. Precision Delivered."
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Delivering heavy fabrication, precision machining, pressure vessels, boilers, VTL turning (up to 5.0m), raw material supplies, and contract manufacturing for India's leading industrial major corporations.
            </p>

            {/* Core Capability Highlights Pill Grid */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-md font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> VTL Lathe 1.5M - 5.0M Swing
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-md font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> ASME Pressure Vessels
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-md font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> CNC / VMC / Plano Miller
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-md font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> MS & SS Raw Material Stock
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                id="hero-request-quote-btn"
                className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold px-7 py-4 rounded-xl text-sm uppercase tracking-wider shadow-xl shadow-orange-500/25 flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreProjects}
                id="hero-explore-projects-btn"
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-4 rounded-xl text-sm border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <span>Explore Delivered Projects</span>
                <ChevronRight className="w-4 h-4 text-orange-400" />
              </button>

              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="sm:hidden bg-slate-900 text-orange-400 font-semibold px-6 py-3.5 rounded-xl text-sm border border-slate-800 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Management: +91 9759590077</span>
              </a>
            </div>

            {/* Owner Quick Sign-off */}
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Owner: <strong className="text-slate-200">Asha Tyagi</strong> &nbsp;|&nbsp; Managed & Run By: <strong className="text-slate-200">Amrish Tyagi</strong> (+91 9759590077)</span>
            </div>
          </div>

          {/* Right Side Industrial Capability Visual & Quick Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Glass Frame */}
              <div className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm uppercase tracking-wide">SJ Sharda Office</h3>
                      <p className="text-xs text-slate-400">Somya Apartment Mayakunj Society, Avantika 1, Ghaziabad</p>
                    </div>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Active Operations
                  </span>
                </div>

                {/* Key Capabilities List */}
                <div className="space-y-3.5 text-xs text-slate-300">
                  <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Vertical Turning Lathe (VTL)</h4>
                      <p className="text-slate-400 text-[11px] mt-0.5">1.5 Meter to 5 Meter swing capacity for heavy rings & castings.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Pressure Vessel & Boiler Fabrication</h4>
                      <p className="text-slate-400 text-[11px] mt-0.5">Radiography-passed welding, hydro testing, ASME compliant design.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Direct MS & SS Material Trading</h4>
                      <p className="text-slate-400 text-[11px] mt-0.5">Stockist of prime quality plates, pipes & flanges with Mill Test Certificates.</p>
                    </div>
                  </div>
                </div>

                {/* Quick Action in Card */}
                <div className="pt-2">
                  <button
                    onClick={onViewServices}
                    className="w-full bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white py-2.5 rounded-lg text-xs font-semibold border border-slate-700 flex items-center justify-center gap-2 transition"
                  >
                    <span>View All 15 Specialized Services</span>
                    <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Live Animated Statistics Bar */}
        <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_STATS.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-xl hover:border-orange-500/40 transition duration-300"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                <span className="text-orange-400">{stat.value}</span>
              </div>
              <p className="text-sm font-bold text-slate-200 mt-1 uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
