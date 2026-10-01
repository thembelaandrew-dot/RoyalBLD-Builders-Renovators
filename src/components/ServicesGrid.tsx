import React from 'react';
import { ArrowRight, Check, Clock, Shield } from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';
import { ProjectCategory } from '../types';

interface ServicesGridProps {
  onSelectServiceForEstimate: (serviceId: ProjectCategory) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectServiceForEstimate }) => {
  return (
    <section id="services" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-800 uppercase mb-3">
            Architectural Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif-brand text-stone-900 leading-tight mb-4 [text-wrap:balance]">
            Precision Building & Turnkey Renovations
          </h2>
          <p className="text-stone-600 text-base leading-relaxed [text-wrap:balance]">
            Every project is executed by specialized in-house artisans under the continuous daily personal supervision of Master Builder Albert Zenda.
          </p>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-stone-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Clean Editorial Numbering (Allowed per anti-slop guidelines) */}
                <div className="flex items-center justify-between text-xs text-stone-400 mb-3 font-mono-num">
                  <span>0{index + 1}.</span>
                  <span className="flex items-center gap-1 text-stone-500">
                    <Clock className="w-3.5 h-3.5" />
                    {service.typicalDuration}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-serif-brand text-stone-900 mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Scope Checklist */}
                <div className="space-y-2 mb-6 pt-4 border-t border-stone-100">
                  <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                    Core Scope Inclusions:
                  </div>
                  {service.scopeList.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverables */}
                <div className="space-y-1.5 mb-6 bg-stone-50 p-3 rounded-lg border border-stone-200/60">
                  <div className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1">
                    <Shield className="w-3 h-3 text-amber-700" />
                    Handover Standards:
                  </div>
                  {service.deliverables.slice(0, 2).map((deliv) => (
                    <div key={deliv} className="text-xs text-stone-600 pl-4 relative before:content-['•'] before:absolute before:left-1 before:text-amber-700">
                      {deliv}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Starting Price & CTA */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-stone-400 uppercase font-medium">Investment Baseline</div>
                  <div className="text-sm font-bold text-stone-900 font-mono-num">{service.startingRate}</div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectServiceForEstimate(service.id)}
                  className="px-3.5 py-2 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors flex items-center gap-1 cursor-pointer active:scale-95"
                >
                  <span>Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
