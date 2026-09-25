import React from 'react';
import { ArrowRight, Sparkles, Building2, Trees, Utensils } from 'lucide-react';
import { SHARDA_IMAGES } from '../../data/images';

export const ExperienceSection: React.FC = () => {
  const { main, accent1, accent2 } = SHARDA_IMAGES.experience;

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-[#F2F2EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Magazine Style */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2E7D5A] font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B56C]" />
            <span>EDITORIAL HOSPITALITY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
            THE SHARDA PALACE EXPERIENCE
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-stone-600">
            A refined setting for dining, celebrations and memorable occasions.
          </p>

          <div className="w-16 h-[2px] bg-[#D6B56C] mx-auto mt-4" />
        </div>

        {/* Asymmetric Luxury Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Featured Large Visual with Floating Inset Card */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-[22px] overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.06)] bg-white border border-stone-200 group">
              <div className="aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
                <img
                  src={main.url}
                  alt={main.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Editorial bottom bar */}
              <div className="p-6 bg-white border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#2E7D5A] font-semibold">
                    01 • GRAND BANQUET ARCHITECTURE
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mt-0.5">
                    {main.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed max-w-md">
                    {main.shortCaption}
                  </p>
                </div>

                <a
                  href="#banquet"
                  className="inline-flex items-center gap-1.5 text-xs font-ui font-medium text-stone-900 hover:text-[#2E7D5A] shrink-0"
                >
                  <span>Explore Hall</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Overlapping Floating Magazine Badge */}
            <div className="absolute -top-5 -left-3 sm:-left-6 hidden sm:block p-4 bg-white/95 backdrop-blur-md rounded-xl border border-stone-200 shadow-xl max-w-xs">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D6B56C] font-semibold">
                BHABUA DESTINATION
              </span>
              <div className="font-serif text-sm font-bold text-[#1A1A1A] mt-0.5">
                Hospitality Tailored for Memories
              </div>
            </div>
          </div>

          {/* Right: 2 Smaller Supporting Overlapping Images & Pillar Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Supporting Image 1: Terrace Garden */}
            <div className="group rounded-[20px] overflow-hidden bg-white border border-stone-200 shadow-sm flex flex-col sm:flex-row">
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden shrink-0">
                <img
                  src={accent1.url}
                  alt={accent1.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#2E7D5A] font-semibold mb-1">
                    <Trees className="w-3.5 h-3.5" />
                    <span>02 • TERRACE GARDEN</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#1A1A1A]">
                    {accent1.title}
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    {accent1.shortCaption}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-stone-100">
                  <a href="#terrace" className="text-[11px] text-stone-700 hover:text-[#2E7D5A] font-medium inline-flex items-center gap-1">
                    <span>View Terrace Garden</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Supporting Image 2: Dining Room */}
            <div className="group rounded-[20px] overflow-hidden bg-white border border-stone-200 shadow-sm flex flex-col sm:flex-row">
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden shrink-0">
                <img
                  src={accent2.url}
                  alt={accent2.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#2E7D5A] font-semibold mb-1">
                    <Utensils className="w-3.5 h-3.5" />
                    <span>03 • RESTAURANT & DINING</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#1A1A1A]">
                    {accent2.title}
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    {accent2.shortCaption}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-stone-100">
                  <a href="#restaurant" className="text-[11px] text-stone-700 hover:text-[#2E7D5A] font-medium inline-flex items-center gap-1">
                    <span>Explore Restaurant</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Factual Quote / Footnote */}
            <div className="p-5 bg-white rounded-xl border border-stone-200/80 text-xs text-stone-600 leading-relaxed space-y-1">
              <div className="font-serif italic text-stone-900 font-semibold">
                "Where Every Celebration Becomes a Memory"
              </div>
              <p className="text-stone-500 text-[11px]">
                Centrally accessible at 2JV8+2C, Bhabua, Bihar 821101. Available 24 hours for scheduled ceremonies and daily meals.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
