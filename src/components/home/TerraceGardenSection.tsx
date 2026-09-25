import React from 'react';
import { Trees, Moon, Sparkles, ArrowRight, Wind } from 'lucide-react';
import { SHARDA_IMAGES } from '../../data/images';

export const TerraceGardenSection: React.FC = () => {
  const { panoramic, detail } = SHARDA_IMAGES.terrace;

  return (
    <section id="terrace" className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-[#F2F2EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Top Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2E7D5A] font-sans mb-2">
              <Trees className="w-3.5 h-3.5 text-[#D6B56C]" />
              <span>TERRACE GARDEN</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
              An Open Sky Sanctuary in Bhabua
            </h2>
          </div>
          <p className="text-stone-600 text-sm max-w-md leading-relaxed">
            Elevated above the bustling streets, offering an open-air venue designed for evening celebrations, starlit dinner receptions, and relaxed family gatherings.
          </p>
        </div>

        {/* Large Panoramic Editorial Showcase with Floating Inset Text Card */}
        <div className="relative mb-12">
          
          {/* Panoramic Image Frame */}
          <div className="rounded-[24px] overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.06)] bg-white border border-stone-200 group">
            <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
              <img
                src={panoramic.url}
                alt={panoramic.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Bottom Panoramic Info Bar */}
            <div className="p-4 sm:p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-stone-100 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2E7D5A]" />
                <span className="font-serif font-bold text-stone-900">{panoramic.title}</span>
                <span className="text-stone-400">·</span>
                <span className="text-stone-500">{panoramic.shortCaption}</span>
              </div>
              <span className="font-mono text-stone-400 text-[11px]">Sharda Palace Premises</span>
            </div>
          </div>

          {/* Floating Editorial Luxury Text Card */}
          <div className="sm:absolute -bottom-8 right-6 sm:right-12 max-w-md p-6 sm:p-7 bg-white/95 backdrop-blur-md rounded-[20px] border border-stone-200 shadow-2xl mt-6 sm:mt-0 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D6B56C] font-bold">
                BREEZY EVENINGS
              </span>
              <div className="flex items-center gap-1 text-[#D6B56C]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
              Open-Air Elegance Under the Stars
            </h3>

            <p className="text-xs text-stone-600 leading-relaxed">
              Natural ventilation, pleasant twilight ambience, and adaptable seating arrangements for private parties, birthdays, and reception dining.
            </p>

            <div className="pt-2 flex items-center justify-between">
              <a
                href="#book"
                className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold text-[#2E7D5A] hover:underline"
              >
                <span>Reserve Terrace Garden</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] font-mono text-stone-400">Open 24 Hours</span>
            </div>
          </div>

        </div>

        {/* Secondary Detail Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[#FAFAF8] text-[#D6B56C] flex items-center justify-center">
              <Moon className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-base font-bold text-[#1A1A1A]">
              Evening Celebrations
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Ideal for nighttime wedding banquets, buffet catering, and starlight receptions.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[#FAFAF8] text-[#2E7D5A] flex items-center justify-center">
              <Wind className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-base font-bold text-[#1A1A1A]">
              Breezy Natural Setting
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Open sky layout creating a comfortable, airy atmosphere for family celebrations.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-xs flex group">
            <div className="w-2/5 aspect-auto overflow-hidden shrink-0">
              <img
                src={detail.url}
                alt={detail.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col justify-center">
              <span className="text-[10px] font-mono text-[#2E7D5A] font-semibold uppercase">Ambience</span>
              <div className="font-serif text-xs font-bold text-[#1A1A1A] mt-0.5">{detail.title}</div>
              <p className="text-[11px] text-stone-500 mt-1 leading-snug">{detail.shortCaption}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
