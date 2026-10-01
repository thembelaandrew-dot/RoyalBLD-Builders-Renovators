import React, { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuoteCalculator } from './components/QuoteCalculator';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesGrid } from './components/ServicesGrid';
import { LeadershipSection } from './components/LeadershipSection';
import { ReviewsEngine } from './components/ReviewsEngine';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhatsAppConcierge } from './components/WhatsAppConcierge';
import { ProjectCategory } from './types';

export default function App() {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForEstimate = (serviceId: ProjectCategory) => {
    scrollToCalculator();
    // Dispatch custom event or let user see calculator
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    // Triggers floating concierge or direct whatsapp
    const conciergeTrigger = document.querySelector('button[aria-label="Open WhatsApp Speed-to-Lead Concierge"]') as HTMLButtonElement | null;
    if (conciergeTrigger) {
      conciergeTrigger.click();
    } else {
      window.open('https://wa.me/27748295759?text=Hello%20Albert,%20I%20would%20like%20to%20consult%20on%20a%20project%20in%20Pretoria', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col selection:bg-amber-800 selection:text-white font-sans antialiased">
      {/* 1. Sticky Header with 3-Zone Contract */}
      <Header
        onOpenCalculator={scrollToCalculator}
        onOpenWhatsApp={openWhatsApp}
      />

      <main className="flex-grow">
        {/* 2. Hero Section with Architectural Scrim & Trust Strip */}
        <Hero
          onScrollToCalculator={scrollToCalculator}
          onOpenWhatsApp={openWhatsApp}
        />

        {/* 3. Core Opportunity #2: The 30-Second Ballpark Quote Calculator */}
        <div ref={calculatorRef}>
          <QuoteCalculator />
        </div>

        {/* 4. Interactive Before & After Split Comparison Slider */}
        <BeforeAfterSlider />

        {/* 5. Core Architectural Services Grid */}
        <ServicesGrid onSelectServiceForEstimate={handleSelectServiceForEstimate} />

        {/* 6. Leadership & Accountability: Master Builder Albert Zenda */}
        <LeadershipSection />

        {/* 7. Core Opportunity #3: Verified Client Reviews Engine */}
        <ReviewsEngine />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 9. Standalone Luxury Footer with Suburbs & Contacts */}
      <Footer />

      {/* 10. Core Opportunity #1: 24/7 WhatsApp AI Speed-to-Lead Concierge Widget */}
      <WhatsAppConcierge />
    </div>
  );
}
