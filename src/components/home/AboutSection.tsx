import React from 'react';
import { Building2, Trees, Utensils, Check, Clock, MapPin, Phone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#FFFFFF] border-b border-[#F2F2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Presentation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7D5A] font-sans">
              <span>Bhabua, Bihar</span>
              <span className="text-stone-300">·</span>
              <span className="text-stone-500 font-serif italic text-sm">शारदा पैलेस</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
              A Place Made for Celebrations
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                Sharda Palace is a verified banquet hall, terrace garden, and restaurant destination located in Bhabua, Bihar. Built to host life's most meaningful milestones, our premises cater to marriage functions, family events, and celebratory gatherings with dedicated attention.
              </p>
              <p>
                Whether you are organizing a traditional wedding ceremony, an open-air starlight reception on the terrace garden, or enjoying a family meal with dine-in and takeaway services, Sharda Palace offers continuous hospitality open 24 hours.
              </p>
            </div>

            {/* Verified services checklist (zero-pill, clean layout) */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FAFAF8] border border-stone-200 flex items-center justify-center text-[#2E7D5A]">
                  <Check className="w-3 h-3" />
                </div>
                <span>Banquet Hall Events</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FAFAF8] border border-stone-200 flex items-center justify-center text-[#2E7D5A]">
                  <Check className="w-3 h-3" />
                </div>
                <span>Terrace Garden Occasions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FAFAF8] border border-stone-200 flex items-center justify-center text-[#2E7D5A]">
                  <Check className="w-3 h-3" />
                </div>
                <span>Dine-in & Takeaway Restaurant</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FAFAF8] border border-stone-200 flex items-center justify-center text-[#2E7D5A]">
                  <Check className="w-3 h-3" />
                </div>
                <span>24-Hour Hospitality</span>
              </div>
            </div>

            {/* Factual Contact Anchor */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-stone-500 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D6B56C]" />
                <span>2JV8+2C, Bhabua, Bihar 821101</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2E7D5A]" />
                <a href="tel:09955986296" className="hover:text-[#2E7D5A] font-mono font-medium">
                  099559 86296
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Pillar Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-[#FAFAF8] rounded-xl border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#2E7D5A]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                Banquet Hall
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Dedicated celebration hall for weddings, reception programs, and family celebrations with stage setup arrangements.
              </p>
            </div>

            <div className="p-6 bg-[#FAFAF8] rounded-xl border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#2E7D5A]">
                <Trees className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                Terrace Garden
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Open-sky terrace venue providing fresh ambient breeze for evening parties, starlight dining, and social events.
              </p>
            </div>

            <div className="p-6 bg-[#FAFAF8] rounded-xl border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#2E7D5A]">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                Restaurant
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Family dining service offering dine-in seating and takeaway orders for local patrons and visiting guests.
              </p>
            </div>

            <div className="p-6 bg-[#FAFAF8] rounded-xl border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#2E7D5A]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                Open 24 Hours
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Round-the-clock availability ensuring continuous support for early morning ceremonies and late evening banquets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
