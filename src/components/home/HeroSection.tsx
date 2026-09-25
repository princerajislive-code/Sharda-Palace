import React from 'react';
import { ArrowRight, Star, Clock, MessageSquare, Sparkles, Building2, Trees, Utensils, ShieldCheck } from 'lucide-react';
import { SHARDA_IMAGES } from '../../data/images';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center bg-[#FFFFFF] overflow-hidden pt-8 pb-16 sm:py-20 border-b border-[#F2F2EF]">
      {/* Subtle luxury ambient pattern overlay */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#D6B56C_0.75px,transparent_0.75px)] [background-size:28px_28px]" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Brand Hierarchy & Content */}
          <div className="lg:col-span-6 space-y-7 text-left">
            
            {/* 1. Top Brand Lockup: SHARDA PALACE & Sub-brand */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7D5A] font-sans">
                <span>Bhabua, Bihar</span>
                <span className="text-stone-300">·</span>
                <span className="text-[#D6B56C] font-serif italic text-base capitalize tracking-normal font-semibold">
                  शारदा पैलेस
                </span>
                <span className="text-stone-300">·</span>
                <span className="text-stone-500 font-medium">Premier Hospitality</span>
              </div>

              {/* Dominant Brand Header */}
              <div className="space-y-1">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.08]">
                  SHARDA PALACE
                </h1>
                <div className="text-xs sm:text-sm tracking-[0.22em] uppercase font-sans text-stone-500 font-bold">
                  BANQUET HALL • TERRACE GARDEN • RESTAURANT
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="pt-1">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1A1A1A] leading-snug">
                Where Every Celebration Becomes a Memory
              </h2>
              <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
                A refined destination in Bhabua for weddings, celebrations, dining, family gatherings, and memorable occasions. Offering an expansive banquet hall, open-air terrace garden, and 24-hour hospitality.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#book"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-ui font-medium text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span>Book Your Event</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-ui font-medium text-stone-800 bg-[#FAFAF8] hover:bg-white border border-stone-200 hover:border-stone-300 rounded-md transition-colors"
              >
                <span>Explore Sharda Palace</span>
              </a>

              <a
                href="https://wa.me/919955986296?text=Hello%20Sharda%20Palace%2C%20I%20would%20like%20to%20enquire%20about%20event%20booking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-ui font-medium text-[#2E7D5A] hover:text-[#256649] bg-white border border-[#2E7D5A]/30 hover:border-[#2E7D5A] rounded-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Verified Information Badges */}
            <div className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#D6B56C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-stone-900 font-mono tabular-nums">4.3 ★</span>
                <span className="text-stone-400">·</span>
                <a href="#reviews" className="hover:text-[#2E7D5A] underline-offset-4 hover:underline font-medium">
                  227 Reviews
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2E7D5A]" />
                <span className="font-medium text-[#2E7D5A]">Open 24 Hours</span>
              </div>

              <div className="flex items-center gap-1.5 text-stone-500">
                <span>Location:</span>
                <span className="font-mono text-stone-700">2JV8+2C, Bhabua</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Cinematic Hospitality Photography Frame */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Outer architectural framing with champagne gold hairline accent */}
              <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
                
                {/* Large Cinematic Hero Image */}
                <div className="relative aspect-[4/3] sm:aspect-[14/10] overflow-hidden">
                  <img
                    src={SHARDA_IMAGES.hero.url}
                    alt={SHARDA_IMAGES.hero.alt}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />

                  {/* Soft cinematic vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-xs font-sans font-medium text-stone-800 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#2E7D5A] animate-pulse" />
                    <span>Open 24 Hours • Bhabua, Bihar</span>
                  </div>

                  {/* Bottom Caption inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D6B56C]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Premises Grandeur</span>
                    </div>
                    <div className="font-serif text-lg sm:text-xl font-bold text-white leading-snug mt-0.5">
                      Banquet Hall, Terrace Garden & Restaurant
                    </div>
                  </div>
                </div>

                {/* Sub-bar Below Image: 3 Spaces Navigation */}
                <div className="p-4 bg-white grid grid-cols-3 divide-x divide-stone-100 border-t border-stone-100 text-center text-xs">
                  <a href="#banquet" className="px-2 py-1 group/link hover:text-[#2E7D5A] transition-colors">
                    <div className="font-serif font-bold text-stone-900 group-hover/link:text-[#2E7D5A]">
                      Banquet Hall
                    </div>
                    <div className="text-[10px] text-stone-400 font-sans mt-0.5">Marriage Functions</div>
                  </a>

                  <a href="#terrace" className="px-2 py-1 group/link hover:text-[#2E7D5A] transition-colors">
                    <div className="font-serif font-bold text-stone-900 group-hover/link:text-[#2E7D5A]">
                      Terrace Garden
                    </div>
                    <div className="text-[10px] text-stone-400 font-sans mt-0.5">Open-Air Parties</div>
                  </a>

                  <a href="#restaurant" className="px-2 py-1 group/link hover:text-[#2E7D5A] transition-colors">
                    <div className="font-serif font-bold text-stone-900 group-hover/link:text-[#2E7D5A]">
                      Restaurant
                    </div>
                    <div className="text-[10px] text-stone-400 font-sans mt-0.5">Dine-in & Takeaway</div>
                  </a>
                </div>
              </div>

              {/* Floating Verified Experience Badge */}
              <div className="absolute -bottom-5 -left-2 sm:-left-6 z-20 p-3.5 sm:p-4 bg-white rounded-xl border border-stone-200 shadow-xl max-w-xs hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAFAF8] border border-[#D6B56C]/30 text-[#2E7D5A] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A1A1A]">Celebration Destination</div>
                  <div className="text-[11px] text-stone-500">227 Verified Reviews · 4.3 ★ Rating</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
