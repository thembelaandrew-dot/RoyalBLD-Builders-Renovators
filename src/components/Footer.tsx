import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, PRETORIA_SUBURBS, createWhatsAppUrl } from '../data/companyData';

export const Footer: React.FC = () => {
  const directWhatsAppLink = createWhatsAppUrl(
    'Hello Albert, I would like to enquire about a building or renovation project in Pretoria.'
  );

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Narrative (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="text-2xl font-bold font-serif-brand text-white tracking-tight">
              ROYALBLD
            </a>
            <p className="text-xs text-stone-400 leading-relaxed">
              RoyalBLD Builders & Renovators is a luxury residential construction firm established in 2012 in Pretoria. Led by Albert Zenda, we specialize in high-end home remodels, bespoke kitchens, spa bathrooms, and architectural extensions.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>NHBRC & SANS 10400 Compliant Construction</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Core Services</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">Smart Quote Engine</a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-amber-400 transition-colors">Before & After</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-amber-400 transition-colors">Albert Zenda Profile</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">Verified Reviews</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact Lines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Direct Contact
            </div>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 font-mono-num">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Direct: {COMPANY_INFO.phones.primary}</span>
              </div>
              <div className="flex items-center gap-2 font-mono-num">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Alternate: {COMPANY_INFO.phones.secondary}</span>
              </div>
              <div className="flex items-center gap-2 font-mono-num">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Office: {COMPANY_INFO.phones.landline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Callout (3 cols) */}
          <div className="lg:col-span-3 bg-stone-900/90 p-5 rounded-xl border border-stone-800 space-y-3">
            <div className="text-xs font-semibold text-white">Need an Urgent Site Assessment?</div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Connect directly with Albert Zenda while he is on active project sites in Pretoria.
            </p>
            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs rounded transition-colors"
            >
              <span>Message Albert on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Suburbs Served Strip */}
        <div className="py-6 border-b border-stone-800/80 text-xs text-stone-400">
          <div className="font-semibold text-stone-300 uppercase tracking-wider text-[11px] mb-2">
            Primary Service Areas Across Greater Pretoria & Gauteng:
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-stone-400">
            {PRETORIA_SUBURBS.map((sub, idx) => (
              <span key={sub.name} className="flex items-center gap-3">
                <span className="hover:text-stone-200 transition-colors">{sub.name}</span>
                {idx < PRETORIA_SUBURBS.length - 1 && <span className="text-stone-600">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Reg. No. South Africa.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">Fixed-Price Residential Construction</span>
            <span aria-hidden="true">·</span>
            <span>Pretoria, Gauteng</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
