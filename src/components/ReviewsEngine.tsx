import React, { useState } from 'react';
import { Star, ShieldCheck, MapPin, Quote } from 'lucide-react';
import { VERIFIED_REVIEWS, COMPANY_INFO } from '../data/companyData';

export const ReviewsEngine: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredReviews = VERIFIED_REVIEWS.filter((rev) => {
    if (filter === 'all') return true;
    if (filter === 'kitchen') return rev.projectType.toLowerCase().includes('kitchen');
    if (filter === 'bathroom') return rev.projectType.toLowerCase().includes('bathroom');
    if (filter === 'renovation') return rev.projectType.toLowerCase().includes('renovation') || rev.projectType.toLowerCase().includes('villa');
    if (filter === 'extension') return rev.projectType.toLowerCase().includes('addition') || rev.projectType.toLowerCase().includes('extension');
    return true;
  });

  return (
    <section id="reviews" className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Trust Scoreboard */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-800 uppercase mb-3">
              Social Proof & Reputation
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif-brand text-stone-900 leading-tight [text-wrap:balance]">
              Verified Pretoria Homeowner Reviews
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              Unfiltered feedback from homeowners in Pretoria East, Midstream Estate, and Centurion where Albert Zenda supervised the build.
            </p>
          </div>

          {/* Trust Score Box */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center gap-5 shrink-0">
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-2xl font-bold text-stone-900 font-mono-num mt-1">
                5.0 <span className="text-xs font-normal text-stone-500">/ 5.0 Rating</span>
              </div>
            </div>
            <div className="h-10 w-px bg-stone-200" />
            <div className="text-xs text-stone-600">
              <div className="font-semibold text-stone-900">{COMPANY_INFO.verifiedReviewsCount}+ Verified Reviews</div>
              <div className="text-stone-500">100% On-Time Completion</div>
            </div>
          </div>
        </div>

        {/* Interactive Filter Tabs (Functional Button Controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'renovation', label: 'Full Renovations' },
            { id: 'kitchen', label: 'Kitchens' },
            { id: 'bathroom', label: 'Bathrooms' },
            { id: 'extension', label: 'Extensions' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                filter === tab.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Review Header: Stars and Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-stone-400 font-mono-num">{review.date}</div>
                </div>

                {/* Highlight Phrase */}
                <h4 className="text-sm font-bold text-stone-900 mb-3 font-serif-brand leading-snug">
                  &ldquo;{review.highlightPhrase}&rdquo;
                </h4>

                {/* Body Text */}
                <p className="text-xs text-stone-600 leading-relaxed mb-6">
                  {review.reviewText}
                </p>
              </div>

              {/* Attribution Footer */}
              <div className="pt-4 border-t border-stone-100 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-900">{review.clientName}</span>
                  {review.verifiedHomeowner && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Verified Owner
                    </span>
                  )}
                </div>

                {/* Suburb & Scope metadata with separators (Anti-Pill) */}
                <div className="flex items-center gap-2 text-[11px] text-stone-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    {review.suburb}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-num text-stone-700">{review.investmentRange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
