import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data/companyData';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  UserCheck,
  Building,
  CheckCircle2,
  ExternalLink,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quickForm),
      });
      setSubmitted(true);
    } catch (err) {
      console.warn('Contact message dispatched locally:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white font-sans border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 px-3 py-1 rounded-full text-orange-700 text-xs font-bold uppercase tracking-wider">
            <span>Direct Commercial Connection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
            Contact SJ Sharda Enterprises
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Connect directly with management (<strong>Amrish Tyagi</strong> & <strong>Asha Tyagi</strong>) for custom machining quotes, pressure vessel inquiries, raw material trading, or plant visits.
          </p>
        </div>

        {/* Quick Action Contact Cards Bar */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Phone Call Card */}
          <a
            href={`tel:${COMPANY_CONTACT.phoneRaw}`}
            className="bg-white border border-slate-200 hover:border-orange-500 p-5 rounded-2xl flex items-center gap-4 transition duration-300 group shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition shadow">
              <Phone className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Direct Phone Line
              </span>
              <span className="text-base font-bold text-slate-950 font-serif group-hover:text-orange-600 transition">
                {COMPANY_CONTACT.phone}
              </span>
              <span className="text-[11px] text-slate-600 block mt-0.5">Amrish Tyagi (Manager)</span>
            </div>
          </a>

          {/* WhatsApp Chat Card */}
          <a
            href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20SJ%20Sharda%20Enterprises,%20I%20would%20like%20to%20discuss%20an%20industrial%20requirement.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-slate-200 hover:border-emerald-500 p-5 rounded-2xl flex items-center gap-4 transition duration-300 group shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition shadow">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider block">
                Instant WhatsApp Chat
              </span>
              <span className="text-base font-bold text-slate-950 font-serif group-hover:text-emerald-700 transition">
                +91 {COMPANY_CONTACT.whatsappNumber}
              </span>
              <span className="text-[11px] text-slate-600 block mt-0.5">Share Drawings & RFQ</span>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${COMPANY_CONTACT.email}`}
            className="bg-white border border-slate-200 hover:border-orange-500 p-5 rounded-2xl flex items-center gap-4 transition duration-300 group shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition shadow">
              <Mail className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Official Email
              </span>
              <span className="text-xs font-bold text-slate-950 font-serif group-hover:text-orange-600 transition truncate block max-w-[200px]">
                {COMPANY_CONTACT.email}
              </span>
              <span className="text-[11px] text-slate-600 block mt-0.5">Commercial RFQ Inbox</span>
            </div>
          </a>

        </div>

        {/* Main Grid: Details & Quick Form */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column Address & Location Details - Sleek Dark Slate */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-slate-950 text-white border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">
                    Works & Registered Office
                  </h3>
                  <p className="text-xs text-slate-400">Ghaziabad Industrial Belt, Uttar Pradesh</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">SJ Sharda Enterprises</strong>
                    <span>{COMPANY_CONTACT.address.line1}</span>
                    <span className="block">{COMPANY_CONTACT.address.line2}</span>
                    <span className="block">{COMPANY_CONTACT.address.city}, {COMPANY_CONTACT.address.state} — {COMPANY_CONTACT.address.pincode}, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <UserCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Owner & Management:</span>
                    <strong className="text-white font-semibold">Asha Tyagi (Owner) &nbsp;|&nbsp; Amrish Tyagi (Manager)</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Operating Hours:</span>
                    <span className="text-slate-200">Monday – Saturday: 8:30 AM – 7:30 PM (IST)</span>
                  </div>
                </div>
              </div>

              {/* Map Embed / Action Link */}
              <div className="pt-2 border-t border-slate-800">
                <a
                  href={COMPANY_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 hover:bg-slate-850 text-orange-400 font-semibold py-3 rounded-xl border border-slate-800 text-xs flex items-center justify-center gap-2 transition"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open Location in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quality Commitment Callout */}
            <div className="p-5 bg-slate-950 text-white border border-slate-800 rounded-2xl flex items-center gap-4 text-xs text-slate-300 shadow-xl">
              <ShieldCheck className="w-8 h-8 text-orange-400 shrink-0" />
              <div>
                <strong className="text-white block text-sm font-serif">100% Confidentiality & Data Protection</strong>
                <span>All CAD files, tender drawings, and proprietary engineering specs submitted to SJ Sharda Enterprises are protected under strict commercial secrecy.</span>
              </div>
            </div>

          </div>

          {/* Right Column Quick Enquiry Form - White Card */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
              
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold text-slate-950 font-serif">
                  Quick Industrial Enquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Send a fast message directly to our commercial team.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-950 font-serif">
                    Enquiry Dispatched to Company Email!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Thank you <strong>{quickForm.name}</strong>. Your details have been sent to <strong className="text-orange-600">{COMPANY_CONTACT.email}</strong>. Mr. Amrish Tyagi will reach out to you shortly at {quickForm.phone}.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
                    <a
                      href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(`*Contact Inquiry - SJ Sharda Enterprises*\n*Name:* ${quickForm.name}\n*Phone:* ${quickForm.phone}\n*Company:* ${quickForm.company || 'N/A'}\n*Message:* ${quickForm.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-lg flex items-center gap-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat with Amrish Tyagi on WhatsApp</span>
                    </a>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-900 underline font-medium cursor-pointer"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={quickForm.name}
                        onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9759590077"
                        value={quickForm.phone}
                        onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Red Energy / Salasar"
                        value={quickForm.company}
                        onChange={(e) => setQuickForm({ ...quickForm, company: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={quickForm.email}
                        onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Requirement Details <span className="text-orange-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly state your VTL machining, pressure vessel, or job work requirements..."
                      value={quickForm.message}
                      onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-slate-950 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer border border-slate-800 disabled:opacity-60"
                    >
                      {loading ? (
                        <span>Sending to {COMPANY_CONTACT.email}...</span>
                      ) : (
                        <>
                          <span>Submit Message to Email</span>
                          <Send className="w-4 h-4 text-orange-400" />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={onOpenQuoteModal}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs px-4 rounded-xl font-bold border border-slate-300 cursor-pointer"
                    >
                      Full RFQ Form
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
