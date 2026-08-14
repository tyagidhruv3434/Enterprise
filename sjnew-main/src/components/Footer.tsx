import React from 'react';
import { COMPANY_CONTACT } from '../data/companyData';
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';
import { CompanyLogo } from './CompanyLogo';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenQuoteModal }) => {
  const seoKeywords = [
    'Industrial Fabrication Company',
    'Pressure Vessel Manufacturer',
    'Heavy Machining Ghaziabad',
    'Boiler Fabrication',
    'Industrial Job Work',
    'VTL Machining 5M',
    'CNC Machining Solutions',
    'Plano Miller Machining',
    'Industrial Trading',
    'MS Material Supplier',
    'SS Material Supplier',
    'Engineering Company Ghaziabad',
    'Mechanical Fabrication Company',
    'Industrial Engineering Company India',
  ];

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <CompanyLogo variant="footer" />

            <p className="text-xs text-slate-400 leading-relaxed">
              SJ Sharda Enterprises is a premier Indian engineering company specializing in heavy structural fabrication, precision VTL machining (up to 5.0M swing), pressure vessels, boilers, and raw material trading. Built on over a decade of hands-on industrial expertise.
            </p>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>Owner:</span>
                <span className="text-white font-semibold">{COMPANY_CONTACT.ownerName}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Managed & Run By:</span>
                <span className="text-white font-semibold">{COMPANY_CONTACT.managedBy}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Quality Compliance:</span>
                <span className="text-emerald-400 font-semibold">ISO 9001:2015 Standards</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'projects', label: 'Projects' },
                { id: 'clients', label: 'Clients' },
                { id: 'gallery', label: 'Photo Gallery' },
                { id: 'why-choose-us', label: 'Why Choose Us' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-slate-400 hover:text-orange-400 transition cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services Directory */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Heavy Structural Fabrication</li>
              <li>• Vertical Turning Lathe (VTL) 1.5M - 5.0M</li>
              <li>• Pressure Vessel Fabrication (ASME)</li>
              <li>• Industrial Boiler Manufacturing</li>
              <li>• Plano Miller & Heavy Boring</li>
              <li>• CNC & VMC Precision Machining</li>
              <li>• MS & SS Raw Material Trading</li>
              <li>• Turnkey Contract Manufacturing</li>
            </ul>
          </div>

          {/* Direct Address & RFQ */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              Direct Contact
            </h4>

            <div className="space-y-2 text-xs text-slate-300">
              <a href={`tel:${COMPANY_CONTACT.phoneRaw}`} className="flex items-center gap-2 hover:text-orange-400 transition">
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>+91 9759590077</span>
              </a>

              <a href={`mailto:${COMPANY_CONTACT.email}`} className="flex items-center gap-2 hover:text-orange-400 transition">
                <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>{COMPANY_CONTACT.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <span>Mayakunj Society, Avantika, Ghaziabad, Uttar Pradesh 201002, India</span>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 transition cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* SEO Keywords Badges Bar */}
        <div className="py-6 border-b border-slate-800/80">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-2">
            Industrial Engineering Specialties & Capabilities:
          </span>
          <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-400">
            {seoKeywords.map((kw, i) => (
              <span key={i} className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} <strong className="text-white font-serif">SJ Sharda Enterprises</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Owner: Asha Tyagi &nbsp;|&nbsp; Managed by: Amrish Tyagi</span>
            <span>•</span>
            <span>Ghaziabad, Uttar Pradesh, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
