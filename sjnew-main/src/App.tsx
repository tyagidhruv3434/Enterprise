import React, { useState } from 'react';
import { PlaceholderNotice } from './components/PlaceholderNotice';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ClientsSection } from './components/ClientsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { LightboxModal } from './components/LightboxModal';
import { Phone, FileText, MessageSquare } from 'lucide-react';
import { COMPANY_CONTACT } from './data/companyData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteInitialContext, setQuoteInitialContext] = useState<string>('');
  const [lightboxImageUrl, setLightboxImageUrl] = useState<string | null>(null);

  const handleOpenQuoteModal = (context?: string) => {
    setQuoteInitialContext(context || '');
    setQuoteModalOpen(true);
  };

  const handleExploreProjects = () => {
    setActiveTab('projects');
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewServices = () => {
    setActiveTab('services');
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-slate-950">
      
      {/* Top Banner Notice */}
      <PlaceholderNotice />

      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreProjects={handleExploreProjects}
          onViewServices={handleViewServices}
        />

        <AboutSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        <ServicesSection
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        <GallerySection
          onOpenLightbox={(img) => setLightboxImageUrl(img)}
        />

        <ProjectsSection
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenLightbox={(img) => setLightboxImageUrl(img)}
        />

        <ClientsSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        <WhyChooseUs
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        <ProcessTimeline
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        <ContactSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Global Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialContext={quoteInitialContext}
      />

      <LightboxModal
        imageUrl={lightboxImageUrl}
        onClose={() => setLightboxImageUrl(null)}
      />

      {/* Floating Action Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Quick WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20SJ%20Sharda%20Enterprises,%20I%20would%20like%20to%20discuss%20an%20industrial%20requirement.`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-emerald-500 hover:bg-emerald-600 text-slate-950 p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer border border-emerald-400"
          title="Direct WhatsApp Chat with Amrish Tyagi"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
            WhatsApp Chat
          </span>
        </a>

        {/* Quick Quote Floating Button */}
        <button
          onClick={() => handleOpenQuoteModal()}
          className="pointer-events-auto bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-slate-950 font-extrabold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 border border-orange-400 cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span className="hidden sm:inline">Request Quote</span>
        </button>

      </div>

    </div>
  );
}
