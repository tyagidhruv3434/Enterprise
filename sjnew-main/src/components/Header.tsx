import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyData';
import { CompanyLogo } from './CompanyLogo';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'projects', label: 'Projects' },
    { id: 'clients', label: 'Clients' },
    { id: 'process', label: 'Our Process' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 font-sans shadow-md">
      {/* Top Contact Ribbon - Black */}
      <div className="bg-slate-950 border-b border-slate-800 text-slate-300 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="flex items-center gap-2 hover:text-orange-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>{COMPANY_CONTACT.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="flex items-center gap-2 hover:text-orange-400 transition"
            >
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span>Ghaziabad, Uttar Pradesh, India</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              ISO Standard Workflow | 10+ Yrs Industry Expertise
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Owner: <strong className="text-white">{COMPANY_CONTACT.ownerName}</strong> | Managed by: <strong className="text-white">{COMPANY_CONTACT.managedBy}</strong></span>
          </div>
        </div>
      </div>

      {/* Main Navbar - White */}
      <div
        className={`transition-all duration-300 px-4 md:px-8 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3 border-slate-200 shadow-lg'
            : 'bg-white py-4 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group"
            id="brand-logo-button"
          >
            <CompanyLogo variant="header" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  activeTab === item.id
                    ? 'text-orange-600 bg-orange-50 border border-orange-200 font-bold'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 font-medium'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-slate-800 hover:text-orange-600 px-3 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 text-xs font-bold transition"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>Call +91 9759590077</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              id="header-request-quote-btn"
              className="bg-slate-950 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow-md flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-slate-800"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-800 hover:text-black p-2 rounded-lg bg-slate-100 border border-slate-300"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-5 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2.5 rounded-lg text-left text-sm font-medium transition ${
                  activeTab === item.id
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold py-3 rounded-lg text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
            >
              <span>Request a Technical Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="w-full bg-slate-900 text-slate-200 hover:text-white py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border border-slate-800"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Direct Call: +91 9759590077 (Amrish Tyagi)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
