import React from 'react';
import { ArrowRight, Sparkles, Trees, Clock, MapPin } from 'lucide-react';
import { SHARDA_IMAGES } from '../../data/images';

export const ExperienceSection: React.FC = () => {
  const { main, accent1 } = SHARDA_IMAGES.experience;

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-[#F2F2EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2E7D5A] font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B56C]" />
            <span>EDITORIAL HOSPITALITY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
            THE SHARDA PALACE EXPERIENCE
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-stone-600">
            A refined setting for dining, celebrations and memorable occasions in Bhabua.
          </p>

          <div className="w-16 h-[2px] bg-[#D6B56C] mx-auto mt-4" />
        </div>

        {/* 2 Stately Architectural Pillars: Banquet Hall & Terrace Garden Rooftop Restaurant */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* 01: Grand Banquet Hall */}
          <div className="relative rounded-[22px] overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.06)] bg-white border border-stone-200 group flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={main.url}
                alt={main.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-xs font-mono font-semibold text-[#2E7D5A] shadow-sm">
                <span>01 • GRAND BANQUET HALL</span>
              </div>
            </div>

            {/* Content bar */}
            <div className="p-6 sm:p-7 bg-white flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                  {main.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {main.shortCaption}. Equipped with expansive indoor space, elegant stage decor, custom seating, and full catering service for weddings, receptions, and family milestones.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-stone-600 font-sans">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                    <span>Grand Wedding Stages</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                    <span>Large Seating Capacity</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                    <span>Pure Vegetarian & Feasts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                    <span>Dedicated Event Support</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <a
                  href="#banquet"
                  className="inline-flex items-center gap-1.5 text-xs font-ui font-medium text-stone-900 hover:text-[#2E7D5A] transition-colors"
                >
                  <span>Explore Banquet Hall</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="tel:09955986296"
                  className="text-xs font-ui text-[#2E7D5A] hover:underline font-semibold"
                >
                  Book Hall: 099559 86296
                </a>
              </div>
            </div>
          </div>

          {/* 02: Terrace Garden Rooftop Restaurant (Combined Single Destination) */}
          <div className="relative rounded-[22px] overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.06)] bg-white border border-stone-200 group flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={accent1.url}
                alt={accent1.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-xs font-mono font-semibold text-[#2E7D5A] shadow-sm">
                <Trees className="w-3.5 h-3.5 text-[#2E7D5A]" />
                <span>02 • THE TERRACE GARDEN ROOFTOP RESTAURANT</span>
              </div>
            </div>

            {/* Content bar */}
            <div className="p-6 sm:p-7 bg-white flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                  The Terrace Garden Rooftop Restaurant
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  Bhabua’s premier rooftop dining experience featuring an open-air starlight canopy, ambient evening illuminations, lush green grass carpet, family celebrations, and 24-hour restaurant dining with takeaway.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-stone-600 font-sans">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                    <span>Open Sky Starlight Dining</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                    <span>Birthday & Family Parties</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                    <span>Dine-in & Takeaway 24h</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                    <span>Fairy Light & Canopy Ambiance</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <a
                  href="#terrace"
                  className="inline-flex items-center gap-1.5 text-xs font-ui font-medium text-stone-900 hover:text-[#2E7D5A] transition-colors"
                >
                  <span>Explore Rooftop Restaurant</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="tel:09955986296"
                  className="text-xs font-ui text-[#2E7D5A] hover:underline font-semibold"
                >
                  Reserve Table: 099559 86296
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Banner */}
        <div className="mt-10 p-5 bg-white rounded-2xl border border-stone-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FAFAF8] border border-[#D6B56C]/30 text-[#2E7D5A] flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="font-serif italic text-stone-900 font-semibold text-sm">
                "Where Every Celebration Becomes a Memory"
              </div>
              <div className="text-stone-500 text-[11px] mt-0.5">
                Open 24 Hours for all dining orders, family gatherings, and pre-booked marriage ceremonies.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-stone-500 text-xs font-mono shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#2E7D5A]" />
            <span>2JV8+2C, Bhabua, Bihar 821101</span>
          </div>
        </div>
      </div>
    </section>
  );
};
