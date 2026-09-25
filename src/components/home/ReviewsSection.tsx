import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ReviewsSection: React.FC = () => {
  const { reviews } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#FAFAF8] border-b border-[#F2F2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7D5A] font-sans mb-2">
              <span>Google Reviews Verification</span>
              <span className="text-stone-300">·</span>
              <span className="text-[#D6B56C]">4.3 ★</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Guest Experiences & Ratings
            </h2>
          </div>

          {/* Aggregate Rating Stat Block */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200/80 shadow-xs">
            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] font-mono tabular-nums">
              4.3
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center text-[#D6B56C]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'fill-[#D6B56C]' : 'fill-[#D6B56C]/40'} text-[#D6B56C]`}
                  />
                ))}
              </div>
              <div className="text-xs text-stone-600 font-sans">
                <span className="font-semibold text-stone-900 font-mono tabular-nums">227</span> Google Reviews
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=2JV8%2B2C%2C+Bhabua%2C+Bihar+821101"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 text-stone-400 hover:text-[#2E7D5A] transition-colors"
              title="View on Google Maps"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Carousel Showcase */}
        {reviews.length > 0 && currentReview && (
          <div className="relative max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200/80 p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
            <div className="flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-[#D6B56C]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < currentReview.rating ? 'fill-current' : 'text-stone-200'}`}
                        />
                      ))}
                    </div>
                    {currentReview.eventType && (
                      <>
                        <span className="text-stone-300">·</span>
                        <span className="text-xs text-stone-500 font-sans font-medium">
                          {currentReview.eventType}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D5A]" />
                    <span>Verified Google Review</span>
                  </div>
                </div>

                <div className="relative">
                  <MessageSquareQuote className="absolute -top-3 -left-3 w-8 h-8 text-[#D6B56C]/15 -z-0" />
                  <p className="relative z-10 text-base sm:text-xl font-serif text-[#1A1A1A] leading-relaxed italic">
                    "{currentReview.text}"
                  </p>
                </div>
              </div>

              {/* Author & Controls */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1A1A1A]">
                    {currentReview.author}
                  </h4>
                  <div className="text-xs text-stone-500 font-sans">
                    {currentReview.relativeTime} · Sharda Palace, Bhabua
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <span className="text-xs font-mono text-stone-400 tabular-nums">
                    {(currentIndex + 1).toString().padStart(2, '0')} / {reviews.length.toString().padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={prevSlide}
                      aria-label="Previous review"
                      className="p-2 rounded-lg border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next review"
                      className="p-2 rounded-lg border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
