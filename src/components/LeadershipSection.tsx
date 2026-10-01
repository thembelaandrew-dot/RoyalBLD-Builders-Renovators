import React, { useState, useId } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Calendar,
  Send,
} from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyData';

export const LeadershipSection: React.FC = () => {
  const [consultName, setConsultName] = useState('');
  const [consultPhone, setConsultPhone] = useState('');
  const [consultSuburb, setConsultSuburb] = useState('');
  const [consultType, setConsultType] = useState('Full Home Renovation');
  const [booked, setBooked] = useState(false);

  const consultNameInputId = useId();
  const consultPhoneInputId = useId();
  const consultSuburbInputId = useId();
  const consultTypeSelectId = useId();

  const handleBookConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    const msg = `*SITE CONSULTATION BOOKING REQUEST*
---------------------------------------
👤 *Name:* ${consultName}
📞 *Phone:* ${consultPhone}
📍 *Suburb:* ${consultSuburb}
🏗️ *Project Scope:* ${consultType}
📅 *Request:* Requesting on-site inspection & structural audit with Albert Zenda.`;
    const waUrl = createWhatsAppUrl(msg);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="leadership" className="py-20 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Albert's Portrait and Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800 aspect-square max-w-md mx-auto lg:max-w-none">
              <img
                src="/src/assets/images/albert_zenda_founder_1790835622164.jpg"
                alt="Albert Zenda, Founder and Managing Director of RoyalBLD Builders & Renovators Pretoria"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <div className="text-xl font-bold font-serif-brand text-white">Albert Zenda</div>
                <div className="text-xs text-amber-400 font-medium">Founder & Managing Director · Master Builder</div>
                <div className="text-xs text-stone-300 mt-1">14+ Years Hands-On Construction in Pretoria</div>
              </div>
            </div>

            {/* Pretoria Workshop & Head Office Details */}
            <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-3 text-xs">
              <div className="font-semibold text-stone-300 uppercase tracking-wider text-[11px]">
                Physical Headquarters & Workshop
              </div>
              <div className="flex items-start gap-2.5 text-stone-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-stone-300 font-mono-num">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{COMPANY_INFO.phones.primary} / {COMPANY_INFO.phones.landline}</span>
              </div>
              <div className="flex items-center gap-2.5 text-stone-300">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative of Accountability & Site Booking Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-3">
                Zero Contractor Abandonment
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif-brand text-white leading-tight mb-4 [text-wrap:balance]">
                Built on 14 Years of On-Site Accountability
              </h2>
              <blockquote className="text-sm sm:text-base text-stone-300 italic border-l-2 border-amber-500 pl-4 py-1 leading-relaxed">
                &ldquo;The biggest grievance homeowners have with contractors is vanishing after taking a deposit. At RoyalBLD, I am on the building site at 07:00 every single morning. I inspect the waterproofing membrane myself, level the beams, and send you video proof every evening.&rdquo;
                <footer className="text-xs text-amber-400 font-medium not-italic mt-2">
                  — Albert Zenda, Master Builder
                </footer>
              </blockquote>
            </div>

            {/* The 4-Pillar Quality Protocol */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-stone-950/70 p-4 rounded-lg border border-stone-800">
                <div className="flex items-center gap-2 text-stone-100 font-semibold text-xs sm:text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>1. Daily WhatsApp Video Briefings</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Daily visual updates sent straight to your phone showing exact progress, dry times, and scheduled next steps.
                </p>
              </div>

              <div className="bg-stone-950/70 p-4 rounded-lg border border-stone-800">
                <div className="flex items-center gap-2 text-stone-100 font-semibold text-xs sm:text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>2. Milestone-Gated Invoicing</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  You never pay 100% upfront. Payments are strictly pegged to successfully completed, inspected milestones.
                </p>
              </div>

              <div className="bg-stone-950/70 p-4 rounded-lg border border-stone-800">
                <div className="flex items-center gap-2 text-stone-100 font-semibold text-xs sm:text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>3. SABS & NHBRC Compliance</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Engineering tolerances strictly conform to SANS 10400 building codes, with municipal engineer sign-offs.
                </p>
              </div>

              <div className="bg-stone-950/70 p-4 rounded-lg border border-stone-800">
                <div className="flex items-center gap-2 text-stone-100 font-semibold text-xs sm:text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>4. 12-Month Handover Warranty</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Complete peace of mind backed by an unconditional 1-year workmanship guarantee on all finishes and plumbing.
                </p>
              </div>
            </div>

            {/* Direct On-Site Booking Form */}
            <div className="bg-stone-950 p-6 rounded-xl border border-stone-800">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Book an On-Site Consultation with Albert Zenda</span>
              </h3>
              <p className="text-xs text-stone-400 mb-4">
                Albert conducts site visits across Pretoria East, Centurion, and surrounding estates.
              </p>

              <form onSubmit={handleBookConsultation} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor={consultNameInputId} className="block text-[11px] text-stone-400 mb-1">Your Name</label>
                    <input
                      id={consultNameInputId}
                      type="text"
                      required
                      placeholder="e.g. Gerhard Botha"
                      value={consultName}
                      onChange={(e) => setConsultName(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 text-xs text-white rounded px-3 py-2 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor={consultPhoneInputId} className="block text-[11px] text-stone-400 mb-1">WhatsApp / Mobile</label>
                    <input
                      id={consultPhoneInputId}
                      type="tel"
                      required
                      placeholder="e.g. 072 129 9257"
                      value={consultPhone}
                      onChange={(e) => setConsultPhone(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 text-xs text-white rounded px-3 py-2 focus:border-amber-400 focus:outline-none font-mono-num"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor={consultSuburbInputId} className="block text-[11px] text-stone-400 mb-1">Suburb / Estate</label>
                    <input
                      id={consultSuburbInputId}
                      type="text"
                      required
                      placeholder="e.g. Midstream Estate"
                      value={consultSuburb}
                      onChange={(e) => setConsultSuburb(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 text-xs text-white rounded px-3 py-2 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor={consultTypeSelectId} className="block text-[11px] text-stone-400 mb-1">Project Type</label>
                    <select
                      id={consultTypeSelectId}
                      value={consultType}
                      onChange={(e) => setConsultType(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 text-xs text-white rounded px-3 py-2 focus:border-amber-400 focus:outline-none"
                    >
                      <option value="Full Home Renovation">Full Home Renovation</option>
                      <option value="Custom Kitchen Remodel">Custom Kitchen Remodel</option>
                      <option value="Spa Bathroom Sanctuary">Spa Bathroom Sanctuary</option>
                      <option value="Architectural Home Extension">Architectural Home Extension</option>
                      <option value="Precision Tiling & Paint">Precision Tiling & Paint</option>
                      <option value="Solar Backup System">Solar Backup System</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs rounded transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Site Visit Direct to Albert on WhatsApp</span>
                </button>
              </form>

              {booked && (
                <div className="mt-3 p-2.5 bg-emerald-950/80 border border-emerald-700/60 rounded text-xs text-emerald-200">
                  Opening WhatsApp to finalize your consultation time with Albert Zenda!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
