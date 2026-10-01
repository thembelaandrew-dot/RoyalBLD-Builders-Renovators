import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenCalculator: () => void;
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCalculator, onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Quote Calculator', href: '#calculator' },
    { label: 'Before & After', href: '#transformations' },
    { label: 'Master Builder', href: '#leadership' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#calculator') {
      onOpenCalculator();
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-stone-950/95 backdrop-blur-md border-b border-stone-800/80 py-3 shadow-md'
            : 'bg-stone-950/80 backdrop-blur-sm border-b border-stone-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-6 Nav Links) — Zone 3 (1-2 Actions) */}
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-bold tracking-tight text-stone-100 font-serif-brand transition-colors hover:text-amber-400"
            >
              ROYALBLD
            </a>

            {/* Zone 2: 4-6 text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-stone-100 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-500 hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href={`tel:${COMPANY_INFO.phones.primary.replace(/\s+/g, '')}`}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-mono font-medium text-stone-300 hover:text-white transition-colors"
                title="Call Albert Zenda direct"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span className="tabular-nums tracking-wide">{COMPANY_INFO.phones.primary}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onOpenCalculator();
                  const target = document.querySelector('#calculator');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shadow-sm active:scale-95 cursor-pointer"
              >
                Estimate Project
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-300 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-stone-950/98 pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-serif-brand text-stone-200 hover:text-amber-400 py-2 border-b border-stone-800/80 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-stone-500" />
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-stone-800 space-y-3">
            <a
              href={`tel:${COMPANY_INFO.phones.primary.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-mono text-stone-200 bg-stone-900 border border-stone-800 rounded-md"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call Albert: {COMPANY_INFO.phones.primary}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-md transition-colors"
            >
              WhatsApp Concierge
            </button>
          </div>
        </div>
      )}
    </>
  );
};
