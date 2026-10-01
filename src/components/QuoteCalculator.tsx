import React, { useState, useId } from 'react';
import {
  Calculator,
  Send,
  Sparkles,
  Calendar,
  Layers,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  ShieldAlert,
} from 'lucide-react';
import {
  PROJECT_TYPES,
  FINISH_GRADES,
  PRETORIA_SUBURBS,
  COMPANY_INFO,
  createWhatsAppUrl,
} from '../data/companyData';
import { ProjectCategory, FinishGrade } from '../types';

export const QuoteCalculator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('kitchen');
  const [selectedGrade, setSelectedGrade] = useState<FinishGrade>('luxury');
  const [selectedSuburb, setSelectedSuburb] = useState<string>('Waterkloof Ridge');
  const [customSuburb, setCustomSuburb] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [projectNotes, setProjectNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const customSuburbInputId = useId();
  const areaRangeInputId = useId();
  const clientNameInputId = useId();
  const clientPhoneInputId = useId();
  const projectNotesInputId = useId();

  // Find active project type
  const activeProjectType = PROJECT_TYPES.find((p) => p.id === selectedCategory) || PROJECT_TYPES[0];
  const [sqm, setSqm] = useState<number>(activeProjectType.defaultSqm);

  // Handle project type change and adjust sqm defaults
  const handleCategoryChange = (category: ProjectCategory) => {
    setSelectedCategory(category);
    const target = PROJECT_TYPES.find((p) => p.id === category);
    if (target) {
      setSqm(target.defaultSqm);
    }
  };

  const activeGrade = FINISH_GRADES.find((g) => g.id === selectedGrade) || FINISH_GRADES[0];

  // Price calculations
  const rawEstimate = activeProjectType.baseRatePerSqm * sqm * activeGrade.multiplier;
  const calculatedTotal = Math.max(activeProjectType.minBudget, Math.round(rawEstimate / 500) * 500);

  // Cost split: 58% materials & structural specs vs 42% master craftsmanship & on-site supervision
  const materialsCost = Math.round(calculatedTotal * 0.58);
  const craftsmanshipCost = Math.round(calculatedTotal * 0.42);

  // Format currency in ZAR
  const formatZAR = (val: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      maximumFractionDigits: 0,
    }).format(val).replace('ZAR', 'R');
  };

  const finalSuburbName = selectedSuburb === 'Other' ? customSuburb || 'Pretoria Area' : selectedSuburb;

  // Generate structured message for Albert's WhatsApp line
  const generateWhatsAppMessage = () => {
    return `*ROYALBLD ESTIMATE REQUEST*
-------------------------------
👤 *Client Name:* ${clientName || 'Pretoria Homeowner'}
📞 *Phone:* ${clientPhone || 'Pending'}
📍 *Location:* ${finalSuburbName}

🏗️ *Project:* ${activeProjectType.name}
📐 *Estimated Area:* ${sqm} m²
💎 *Finish Grade:* ${activeGrade.name} (${activeGrade.multiplier}x multiplier)

💰 *Estimated Ballpark:* ${formatZAR(calculatedTotal)}
   • Materials & Specifications (58%): ${formatZAR(materialsCost)}
   • Craftsmanship & Supervision (42%): ${formatZAR(craftsmanshipCost)}
⏱️ *Expected Turnaround:* ${activeProjectType.typicalDuration}
🛡️ *Supervision:* 100% On-Site by Albert Zenda

${projectNotes ? `📝 *Notes / Special Requests:* ${projectNotes}\n` : ''}
*Source:* 30-Second Ballpark Quote Engine (royalbld.co.za)`;
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const text = generateWhatsAppMessage();
    const url = createWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopySummary = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="calculator" className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-800 uppercase mb-3">
            Real-Time Cost Modeling
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 font-serif-brand leading-tight mb-4 [text-wrap:balance]">
            The 30-Second Smart Ballpark Estimator
          </h2>
          <p className="text-base text-stone-600 leading-relaxed [text-wrap:balance]">
            Benchmark realistic Gauteng 2026 construction rates. Designed to give Pretoria homeowners transparent figures before Albert Zenda conducts your comprehensive on-site survey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-stone-200/90 shadow-sm space-y-8">
            {/* Step 1: Select Project Category */}
            <div>
              <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                01. Select Project Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedCategory === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleCategoryChange(type.id)}
                      className={`text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-600 bg-amber-50/70 text-stone-950 shadow-sm ring-1 ring-amber-600/30'
                          : 'border-stone-200 bg-stone-50/60 hover:bg-stone-50 hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <div className="text-sm font-semibold leading-snug">{type.name}</div>
                      <div className="text-xs text-stone-500 font-mono-num mt-1">
                        From {formatZAR(type.baseRatePerSqm)}/m²
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Location and Finish Grade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Suburb Selector */}
              <div>
                <label htmlFor="suburb-selector" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                  02. Pretoria Location / Suburb
                </label>
                <div className="relative">
                  <select
                    id="suburb-selector"
                    value={selectedSuburb}
                    onChange={(e) => setSelectedSuburb(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 text-stone-800 text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    {PRETORIA_SUBURBS.map((suburb) => (
                      <option key={suburb.name} value={suburb.name}>
                        {suburb.name} ({suburb.region})
                      </option>
                    ))}
                    <option value="Other">Other Pretoria / Gauteng Area</option>
                  </select>
                  <MapPin className="w-4 h-4 text-stone-400 absolute right-3 top-3 pointer-events-none" />
                </div>

                {selectedSuburb === 'Other' && (
                  <div className="mt-2.5">
                    <label htmlFor={customSuburbInputId} className="sr-only">Specify Your Suburb</label>
                    <input
                      id={customSuburbInputId}
                      type="text"
                      placeholder="Specify your suburb in Pretoria..."
                      value={customSuburb}
                      onChange={(e) => setCustomSuburb(e.target.value)}
                      className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                )}
              </div>

              {/* Finish Specification Grade */}
              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                  03. Finish Specification Tier
                </label>
                <div className="space-y-2">
                  {FINISH_GRADES.map((grade) => {
                    const isSelected = selectedGrade === grade.id;
                    return (
                      <label
                        key={grade.id}
                        className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                          isSelected
                            ? 'border-amber-600 bg-amber-50/50'
                            : 'border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="finishGrade"
                          checked={isSelected}
                          onChange={() => setSelectedGrade(grade.id)}
                          className="mt-1 text-amber-700 focus:ring-amber-600"
                        />
                        <div className="text-xs">
                          <span className="font-semibold text-stone-900">{grade.name}</span>{' '}
                          <span className="text-stone-500 font-mono-num">({grade.multiplier}x)</span>
                          <p className="text-stone-500 mt-0.5 line-clamp-1">{grade.description}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Area Dimensions Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={areaRangeInputId} className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  04. Floor Area / Scope Size
                </label>
                <div className="text-base font-semibold text-stone-900 font-mono-num">
                  {sqm} <span className="text-xs font-normal text-stone-500">m² (square meters)</span>
                </div>
              </div>

              <input
                id={areaRangeInputId}
                type="range"
                min={activeProjectType.minSqm}
                max={activeProjectType.maxSqm}
                step={activeProjectType.stepSqm}
                value={sqm}
                onChange={(e) => setSqm(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-700"
              />

              <div className="flex justify-between text-xs text-stone-400 font-mono-num mt-1.5">
                <span>Min: {activeProjectType.minSqm} m²</span>
                <span className="text-stone-600 font-medium">Standard: {activeProjectType.defaultSqm} m²</span>
                <span>Max: {activeProjectType.maxSqm} m²</span>
              </div>
            </div>

            {/* Material & Finish Spec Summary Details */}
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200/80 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-stone-700 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Selected Finish Specification:</span>
              </div>
              <p className="text-stone-600 leading-relaxed pl-5">
                {activeGrade.materials}
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Price Modeling & WhatsApp Dispatch (5 cols) */}
          <div className="lg:col-span-5 bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-xl shadow-lg border border-stone-800 space-y-6 lg:sticky lg:top-24">
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-amber-400 mb-1">
                <span>ESTIMATED INVESTMENT</span>
                <span className="font-mono-num">Gauteng 2026 Baseline</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-serif-brand tracking-tight text-white font-mono-num">
                {formatZAR(calculatedTotal)}
              </div>
              <div className="text-xs text-stone-400 mt-1">
                *Subject to Albert Zenda&apos;s physical on-site survey and finalized BOQ.
              </div>
            </div>

            {/* Breakdown Bars */}
            <div className="space-y-3 pt-4 border-t border-stone-800">
              <div className="flex justify-between text-xs">
                <span className="text-stone-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-stone-400" />
                  Premium Materials & SABS Specs (58%)
                </span>
                <span className="font-mono-num font-medium text-stone-200">
                  {formatZAR(materialsCost)}
                </span>
              </div>
              <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '58%' }} />
              </div>

              <div className="flex justify-between text-xs pt-1">
                <span className="text-stone-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                  Master Craftsmanship & On-Site Supervision (42%)
                </span>
                <span className="font-mono-num font-medium text-stone-200">
                  {formatZAR(craftsmanshipCost)}
                </span>
              </div>
              <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-stone-500 h-full rounded-full" style={{ width: '42%' }} />
              </div>
            </div>

            {/* Turnaround & Supervision Pill */}
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-stone-800 text-xs">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-stone-400 text-[11px]">Duration</div>
                  <div className="font-medium text-stone-200">{activeProjectType.typicalDuration}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-stone-400 text-[11px]">Supervision</div>
                  <div className="font-medium text-stone-200">Albert Zenda On-Site</div>
                </div>
              </div>
            </div>

            {/* Homeowner Dispatch Form */}
            <form onSubmit={handleSendToWhatsApp} className="space-y-3 pt-1">
              <div>
                <label htmlFor={clientNameInputId} className="block text-xs text-stone-400 mb-1">Your Full Name</label>
                <input
                  id={clientNameInputId}
                  type="text"
                  required
                  placeholder="e.g. Dr. Pieter van Wyk"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 rounded-md px-3 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label htmlFor={clientPhoneInputId} className="block text-xs text-stone-400 mb-1">WhatsApp Number</label>
                <input
                  id={clientPhoneInputId}
                  type="tel"
                  required
                  placeholder="e.g. 082 123 4567"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 rounded-md px-3 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 font-mono-num"
                />
              </div>

              <div>
                <label htmlFor={projectNotesInputId} className="block text-xs text-stone-400 mb-1">Optional Scope Notes</label>
                <input
                  id={projectNotesInputId}
                  type="text"
                  placeholder="e.g. Load-bearing wall removal, Caesarstone island"
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 rounded-md px-3 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-md transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Send Estimate Direct to Albert on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleCopySummary}
                className="w-full py-2.5 px-3 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-xs rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Spec Copied to Clipboard!' : 'Copy Formatted Scope Summary'}</span>
              </button>
            </form>

            {formSubmitted && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-700/60 rounded-md text-xs text-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Opening WhatsApp chat with Albert Zenda (+27 74 829 5759)...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
