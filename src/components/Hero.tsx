import React from 'react';
import { ArrowDown, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyData';

interface HeroProps {
  onScrollToCalculator: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToCalculator, onOpenWhatsApp }) => {
  const directWhatsAppLink = createWhatsAppUrl(
    'Hello Albert, I am looking to consult regarding a residential renovation/building project with RoyalBLD.'
  );

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-stone-950">
      {/* Background Architectural Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_luxury_villa_1790835574136.jpg"
          alt="Luxury architectural residence in Pretoria East built and renovated by RoyalBLD"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Unboxed Metadata Kicker (Anti-Pill discipline) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium tracking-wide text-amber-300/90 mb-5">
          <span>14+ Years of On-Site Leadership</span>
          <span aria-hidden="true" className="text-stone-500">·</span>
          <span>Pretoria East, Centurion & Midstream</span>
          <span aria-hidden="true" className="text-stone-500 hidden sm:inline">·</span>
          <span className="hidden sm:inline">Master Builder Albert Zenda</span>
        </div>

        {/* Display Headline with text-wrap balance */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif-brand max-w-5xl mx-auto leading-[1.1] mb-6 [text-wrap:balance]">
          High-End Home Renovations & Architectural Building.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 font-normal max-w-3xl mx-auto leading-relaxed mb-10 [text-wrap:balance]">
          Led on-site daily by Albert Zenda, RoyalBLD transforms residences across Pretoria into extraordinary living spaces. Fixed timelines, transparent cost modeling, and master craftsmanship.
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
          <button
            type="button"
            onClick={onScrollToCalculator}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-lg shadow-amber-950/50 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98]"
          >
            <span>Estimate Project in 30s</span>
            <ArrowDown className="w-4 h-4 text-stone-900" />
          </button>

          <a
            href={directWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Trigger local widget fallback if user is on desktop without web whatsapp
              // but allow direct click
            }}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-stone-100 bg-stone-900/90 hover:bg-stone-800 border border-stone-700/80 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Claim-to-Proof Adjacency Trust Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-stone-800/80 text-left">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-stone-200">14+ Years Active</div>
              <div className="text-xs text-stone-400">Pretoria master builder track record</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-stone-200">100% On-Site Daily</div>
              <div className="text-xs text-stone-400">Albert Zenda supervises all trades</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-stone-200 font-mono-num">5.0 ★ Google Score</div>
              <div className="text-xs text-stone-400">48+ verified estate homeowner reviews</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-stone-200">NHBRC Standards</div>
              <div className="text-xs text-stone-400">Engineered structural compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
