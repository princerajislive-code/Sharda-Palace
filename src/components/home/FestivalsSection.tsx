import React from 'react';
import { Calendar, Sparkles, ArrowRight, Flame } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FestivalsSection: React.FC = () => {
  const { visibleEvents, simulatedDate } = useApp();

  const formatDateRange = (startStr: string, endStr: string) => {
    try {
      const start = new Date(startStr);
      const end = new Date(endStr);
      const startFormatted = start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const endFormatted = end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      return `${startFormatted} – ${endFormatted}`;
    } catch {
      return `${startStr} to ${endStr}`;
    }
  };

  const isCurrentlyOngoing = (startStr: string, endStr: string) => {
    const today = new Date(simulatedDate).getTime();
    const start = new Date(startStr).getTime();
    const end = new Date(endStr).getTime() + 24 * 60 * 60 * 1000;
    return today >= start && today <= end;
  };

  return (
    <section id="festivals" className="py-20 sm:py-24 bg-[#FAFAF8] border-b border-[#F2F2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7D5A] mb-2 font-sans">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56C]" />
              <span>Seasonal Calendar</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Festivals & Special Events
            </h2>
            <p className="mt-2 text-sm text-stone-600 max-w-xl leading-relaxed">
              Curated celebrations currently active or approaching at Sharda Palace. Reserve early for private family banquets and terrace events.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-stone-500">
            <span className="inline-block w-2 h-2 rounded-full bg-[#2E7D5A]" />
            <span>Active & upcoming celebrations dynamically displayed</span>
          </div>
        </div>

        {/* Events Grid or Empty State */}
        {visibleEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleEvents.map((event) => {
              const ongoing = isCurrentlyOngoing(event.startDate, event.endDate);

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white border transition-all duration-300 hover:shadow-md ${
                    event.featured
                      ? 'border-[#D6B56C]/60 ring-1 ring-[#D6B56C]/20'
                      : 'border-stone-200/80 hover:border-stone-300'
                  }`}
                >
                  {/* Top Category & Status Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-stone-100 text-xs">
                      <div className="flex items-center gap-2 text-stone-600">
                        <span className="font-medium text-[#2E7D5A]">{event.category}</span>
                        {event.featured && (
                          <>
                            <span className="text-stone-300">·</span>
                            <span className="text-[#D6B56C] font-semibold flex items-center gap-1">
                              <Sparkles className="w-3 h-3" /> Featured
                            </span>
                          </>
                        )}
                      </div>

                      {/* Status indicator */}
                      <div className="flex items-center gap-1.5 font-medium">
                        {ongoing ? (
                          <span className="inline-flex items-center gap-1 text-[#2E7D5A] bg-emerald-50 px-2.5 py-0.5 rounded text-[11px] font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A] animate-pulse" />
                            Active Now
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-stone-600 bg-stone-100 px-2 py-0.5 rounded text-[11px]">
                            Upcoming
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Event Title and Hindi Name */}
                    <div className="space-y-1 mb-3">
                      <h3 className="font-serif text-xl font-bold text-[#1A1A1A] leading-snug">
                        {event.name}
                      </h3>
                      {event.hindiName && (
                        <p className="font-serif italic text-sm text-[#D6B56C] font-medium">
                          {event.hindiName}
                        </p>
                      )}
                    </div>

                    {/* Date details */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-3 font-sans">
                      <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="font-medium text-stone-700">
                        {formatDateRange(event.startDate, event.endDate)}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {event.shortDescription}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-6 mt-6 border-t border-stone-100">
                    <a
                      href={`#book`}
                      onClick={() => {
                        const el = document.querySelector('#book');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 text-xs font-ui font-medium rounded-md text-stone-900 bg-[#FAFAF8] hover:bg-[#1A1A1A] hover:text-white border border-stone-200 hover:border-[#1A1A1A] transition-all duration-200"
                    >
                      <span>{event.ctaText || 'Inquire for Celebration'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 px-4 bg-white rounded-xl border border-stone-200">
            <Flame className="w-8 h-8 text-[#D6B56C] mx-auto mb-3" />
            <h3 className="font-serif text-lg font-semibold text-[#1A1A1A]">
              Celebrate Your Special Moments at Sharda Palace
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto mt-1 leading-relaxed">
              We host family celebrations, marriage functions, and private banquets year-round in Bhabua. Contact us to schedule your date.
            </p>
            <a
              href="#book"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-ui font-medium text-white bg-[#1A1A1A] rounded-md hover:bg-[#2E7D5A] transition-colors"
            >
              <span>Book Your Event</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
