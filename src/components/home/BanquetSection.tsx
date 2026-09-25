import React from 'react';
import { ArrowRight, HeartHandshake, Sparkles, Check, Phone } from 'lucide-react';
import { SHARDA_IMAGES } from '../../data/images';

export const BanquetSection: React.FC = () => {
  const { primary, secondary } = SHARDA_IMAGES.banquet;

  const highlights = [
    { title: 'Wedding Celebrations', desc: 'Spacious celebration hall suitable for traditional mandap, ceremonial entrance, and guest banquet seating.' },
    { title: 'Marriage Functions', desc: 'Accommodating tilak, sagai, mehendi, and multi-day ceremonial gatherings with stage setups.' },
    { title: 'Family Celebrations', desc: 'Comfortable celebration environment for milestone anniversaries, birthdays, and family reunions.' },
    { title: 'Parties & Special Occasions', desc: 'Dedicated banquet hall stage setups for celebratory evening programs and banquets.' },
  ];

  return (
    <section id="banquet" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#F2F2EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2E7D5A] font-sans">
            <HeartHandshake className="w-3.5 h-3.5 text-[#D6B56C]" />
            <span>BANQUET HALL</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Celebrate Beautifully
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            At Sharda Palace, our banquet hall is arranged to host grand Indian weddings, auspicious marital rituals, and memorable family occasions with dignity, comfort, and gracious hospitality in Bhabua.
          </p>
        </div>

        {/* Dual Visual & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Large Cinematic Banquet Photography with Inset Detail */}
          <div className="lg:col-span-7">
            <div className="relative">
              
              {/* Primary Large Cinematic Image */}
              <div className="rounded-[22px] overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.06)] bg-white border border-stone-200 group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={primary.url}
                    alt={primary.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-5 bg-white flex items-center justify-between border-t border-stone-100">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D6B56C] font-semibold">
                      CEREMONIAL AMBIENCE
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#1A1A1A]">
                      {primary.title}
                    </h3>
                  </div>
                  <span className="text-xs text-stone-500 font-sans">Bhabua, Bihar</span>
                </div>
              </div>

              {/* Secondary Overlapping Table Detail Card */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 w-48 sm:w-60 rounded-[18px] overflow-hidden bg-white border border-stone-200 shadow-xl hidden sm:block group/sec">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={secondary.url}
                    alt={secondary.alt}
                    className="w-full h-full object-cover group-hover/sec:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-white text-left">
                  <div className="text-[10px] font-mono text-[#2E7D5A] font-semibold uppercase">
                    Table Details
                  </div>
                  <div className="font-serif text-xs font-bold text-[#1A1A1A] truncate">
                    {secondary.title}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Highlights & Booking Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3.5">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAFAF8] border border-stone-100 hover:border-stone-200 transition-colors flex items-start gap-3.5"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#2E7D5A] shrink-0 shadow-2xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1A1A1A]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-ui font-medium text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] rounded-md transition-all duration-200 shadow-sm"
              >
                <span>Check Banquet Availability</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:09955986296"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-ui font-medium text-stone-700 bg-white border border-stone-200 hover:border-stone-300 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2E7D5A]" />
                <span>Call 099559 86296</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
