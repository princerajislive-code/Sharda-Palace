import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Coffee, ShoppingBag, Clock, Phone, ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { SHARDA_IMAGES } from '../../data/images';

export const RestaurantSection: React.FC = () => {
  const { diningRoom, tableSetup, culinary } = SHARDA_IMAGES.restaurant;

  return (
    <section id="restaurant" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#F2F2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2E7D5A] font-sans mb-2">
              <Utensils className="w-3.5 h-3.5 text-[#D6B56C]" />
              <span>RESTAURANT & HOSPITALITY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
              A Place to Gather & Dine
            </h2>
          </div>
          <p className="text-stone-600 text-sm max-w-md leading-relaxed">
            Welcoming families, travelers, and banquet guests with attentive dining, round-the-clock kitchen service, and takeaway packaging in Bhabua.
          </p>
        </div>

        {/* 3-Part Image Composition: Dining Room + Table Setup + Food Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          
          {/* Main Dining Room (7 cols) */}
          <div className="md:col-span-7 rounded-[22px] overflow-hidden bg-[#FAFAF8] border border-stone-200 shadow-sm group">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={diningRoom.url}
                alt={diningRoom.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
            <div className="p-5 bg-white border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#2E7D5A] uppercase font-semibold">
                  DINING ROOM ATMOSPHERE
                </span>
                <h3 className="font-serif text-base font-bold text-[#1A1A1A]">
                  {diningRoom.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#2E7D5A] font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Open 24 Hours</span>
              </div>
            </div>
          </div>

          {/* 2 Supporting Photos: Table setup + Culinary presentation (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            
            {/* Table Setup */}
            <div className="rounded-[20px] overflow-hidden bg-[#FAFAF8] border border-stone-200 shadow-xs flex group">
              <div className="w-2/5 aspect-auto overflow-hidden shrink-0">
                <img
                  src={tableSetup.url}
                  alt={tableSetup.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-[#D6B56C] font-bold uppercase">Table Hospitality</span>
                <h4 className="font-serif text-sm font-bold text-[#1A1A1A] mt-0.5">{tableSetup.title}</h4>
                <p className="text-xs text-stone-500 mt-1 line-clamp-2">{tableSetup.shortCaption}</p>
              </div>
            </div>

            {/* Culinary Presentation */}
            <div className="rounded-[20px] overflow-hidden bg-[#FAFAF8] border border-stone-200 shadow-xs flex group">
              <div className="w-2/5 aspect-auto overflow-hidden shrink-0">
                <img
                  src={culinary.url}
                  alt={culinary.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-[#2E7D5A] font-semibold uppercase">Fresh Kitchen</span>
                <h4 className="font-serif text-sm font-bold text-[#1A1A1A] mt-0.5">{culinary.title}</h4>
                <p className="text-xs text-stone-500 mt-1 line-clamp-2">{culinary.shortCaption}</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Dual Service Cards: Dine-in & Takeaway */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#FAFAF8] rounded-2xl border border-stone-200/80 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white text-[#2E7D5A] border border-stone-200 shrink-0">
              <Coffee className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Dine-in Hospitality</h3>
                <span className="text-[10px] font-mono bg-emerald-50 text-[#2E7D5A] px-2 py-0.5 rounded font-semibold">Active</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Spacious family tables and comfortable seating for daily meals, celebratory lunches, and late evening dinners in Bhabua.
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#FAFAF8] rounded-2xl border border-stone-200/80 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white text-[#2E7D5A] border border-stone-200 shrink-0">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Takeaway Counter</h3>
                <span className="text-[10px] font-mono bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-semibold">24 Hours</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Fast parcel packaging service for pickup, family meals, and festive orders. Call ahead to prepare your parcel.
              </p>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B56C]" />
            <span>Digital Menu Architecture preview available at <code>/menu</code></span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:09955986296"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-ui font-medium rounded-md text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Restaurant: 099559 86296</span>
            </a>

            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-ui font-medium rounded-md text-stone-800 bg-[#FAFAF8] hover:bg-white border border-stone-200 transition-colors"
            >
              <span>Digital Menu Status</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
