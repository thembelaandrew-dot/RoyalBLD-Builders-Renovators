import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeftRight, CheckCircle, Clock, DollarSign, MapPin } from 'lucide-react';
import { BEFORE_AFTER_PROJECTS } from '../data/companyData';
import { BeforeAfterProject } from '../types';

export const BeforeAfterSlider: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeProject: BeforeAfterProject = BEFORE_AFTER_PROJECTS[activeProjectIndex];

  // Dynamic width tracking across all devices and screen resize events
  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(containerRef.current);
    window.addEventListener('resize', updateSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, [activeProjectIndex]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="py-20 bg-stone-900 text-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-3">
            Real Transformations
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif-brand tracking-tight text-white mb-4 [text-wrap:balance]">
            Drag to Reveal: Before & After RoyalBLD
          </h2>
          <p className="text-stone-300 text-base leading-relaxed [text-wrap:balance]">
            Experience the dramatic difference between dated Pretoria suburban interiors and Albert Zenda&apos;s architectural finish. Drag the central divider or tap presets below.
          </p>
        </div>

        {/* Project Selector Segmented Control (Tabs) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {BEFORE_AFTER_PROJECTS.map((proj, idx) => {
            const isSelected = activeProjectIndex === idx;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => {
                  setActiveProjectIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-stone-950 font-semibold shadow-md'
                    : 'bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700'
                }`}
              >
                {proj.title.split(' ')[0]} {proj.title.split(' ')[1]} ({proj.duration})
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Slider Frame (7 cols) */}
          <div className="lg:col-span-8 select-none">
            <div
              ref={containerRef}
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-stone-700 cursor-ew-resize touch-none bg-stone-950"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onTouchMove={handleTouchMove}
            >
              {/* AFTER Image (Full background) */}
              <img
                src={activeProject.afterImg}
                alt={`${activeProject.title} After RoyalBLD Handover`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-stone-950/85 backdrop-blur-sm border border-amber-500/40 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded text-[11px] sm:text-xs font-semibold tracking-wide text-amber-300 shadow">
                AFTER: RoyalBLD Handover
              </div>

              {/* BEFORE Image (Clipped overlay) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeProject.beforeImg}
                  alt={`${activeProject.title} Before Renovation`}
                  className="absolute inset-0 h-full object-cover pointer-events-none"
                  style={{
                    width: `${containerWidth}px`,
                    maxWidth: 'none',
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-stone-950/85 backdrop-blur-sm border border-stone-600 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded text-[11px] sm:text-xs font-semibold tracking-wide text-stone-300 shadow">
                  BEFORE: Dated Condition
                </div>
              </div>

              {/* Divider Line & Interactive Handle */}
              <div
                className="absolute inset-y-0 w-0.5 sm:w-1 bg-white shadow-2xl cursor-ew-resize flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-amber-400 text-stone-950 rounded-full shadow-lg border-2 border-stone-900 flex items-center justify-center transform -translate-x-1/2">
                  <ArrowLeftRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-950" />
                </div>
              </div>
            </div>

            {/* Slider Hint and Quick Presets */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-400 mt-3 px-1">
              <div className="flex items-center gap-1.5">
                <span>Quick View:</span>
                <button
                  type="button"
                  onClick={() => setSliderPosition(100)}
                  className={`px-2 py-0.5 rounded text-[11px] border cursor-pointer ${
                    sliderPosition === 100 ? 'bg-amber-400 text-stone-900 border-amber-400' : 'border-stone-700 hover:text-white'
                  }`}
                >
                  100% Before
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(50)}
                  className={`px-2 py-0.5 rounded text-[11px] border cursor-pointer ${
                    sliderPosition === 50 ? 'bg-amber-400 text-stone-900 border-amber-400' : 'border-stone-700 hover:text-white'
                  }`}
                >
                  50 / 50 Split
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(0)}
                  className={`px-2 py-0.5 rounded text-[11px] border cursor-pointer ${
                    sliderPosition === 0 ? 'bg-amber-400 text-stone-900 border-amber-400' : 'border-stone-700 hover:text-white'
                  }`}
                >
                  100% After
                </button>
              </div>

              <div className="font-mono-num text-[11px] sm:text-xs">
                {Math.round(sliderPosition)}% Before · {100 - Math.round(sliderPosition)}% RoyalBLD Handover
              </div>
            </div>
          </div>

          {/* Project Dossier & Structural Specs (5 cols) */}
          <div className="lg:col-span-4 bg-stone-950 p-6 sm:p-7 rounded-xl border border-stone-800 space-y-5">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-amber-400 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeProject.suburb}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-brand text-white leading-snug">
                {activeProject.title}
              </h3>
            </div>

            {/* Meta tags without pills (clean unboxed text with separators) */}
            <div className="flex items-center gap-3 text-xs text-stone-400 border-b border-stone-800 pb-3">
              <span className="flex items-center gap-1 text-stone-200 font-mono-num">
                <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                {activeProject.investment}
              </span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="flex items-center gap-1 text-stone-200">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {activeProject.duration}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {activeProject.description}
            </p>

            {/* Key Handover Upgrades */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                Handover Architectural Upgrades:
              </div>
              {activeProject.afterHighlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-2 text-xs text-stone-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Technical Spec Grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-stone-800 text-xs">
              {activeProject.keySpecs.map((spec) => (
                <div key={spec.label} className="bg-stone-900/90 p-2.5 rounded border border-stone-800">
                  <div className="text-[10px] uppercase text-stone-400 font-medium">{spec.label}</div>
                  <div className="text-stone-200 font-semibold mt-0.5 truncate">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
