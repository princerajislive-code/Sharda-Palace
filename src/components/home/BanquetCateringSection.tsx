import React, { useState } from 'react';
import {
  Utensils,
  Sparkles,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Clock,
  Users,
  ShieldAlert,
  Phone,
  MessageCircle,
  Calendar,
  Layers,
  ChefHat,
  Award,
  Coffee,
  Soup,
  IceCream,
  Wine,
  FileText,
  Flame,
  CheckCircle2,
  Printer,
  Calculator,
  Download,
  MapPin
} from 'lucide-react';

export const BanquetCateringSection: React.FC = () => {
  // Accordion open/close state
  const [openVeg, setOpenVeg] = useState(true);
  const [openFacilities, setOpenFacilities] = useState(true);
  const [openNonVeg, setOpenNonVeg] = useState(true);
  const [open1450, setOpen1450] = useState(true);
  const [open600Pax, setOpen600Pax] = useState(true);
  const [openTerms, setOpenTerms] = useState(true);

  // Active filter tab
  const [activeTab, setActiveTab] = useState<'all' | 'dayevent' | 'facilities' | 'nonveg' | 'event1450' | 'pax600' | 'terms'>('all');

  // Interactive Estimator state
  const [calculatorGuests, setCalculatorGuests] = useState<number>(150);
  const [calculatorPlan, setCalculatorPlan] = useState<'veg_day' | 'nonveg_1500' | 'event_1450' | 'wedding_600'>('nonveg_1500');
  const [includeProjector, setIncludeProjector] = useState(false);

  const planPrices: Record<string, { name: string; price: number }> = {
    veg_day: { name: 'Day Event Veg Feast (10 AM - 5 PM)', price: 950 },
    nonveg_1500: { name: 'Premium Non-Veg Feast (₹1,500/plate)', price: 1500 },
    event_1450: { name: 'Curated Event Package (₹1,450/plate)', price: 1450 },
    wedding_600: { name: 'Grand 600+ Pax Wedding Feast', price: 1650 },
  };

  const estimatedFoodTotal = calculatorGuests * planPrices[calculatorPlan].price;
  const estimatedGrandTotal = estimatedFoodTotal + (includeProjector ? 7500 : 0);

  const handleWhatsAppBooking = (packageName: string) => {
    const text = encodeURIComponent(
      `Hello Sharda Palace! 🍽️\n\nI want to enquire about your *${packageName}*:\n` +
        `• *Estimated Guests:* ${calculatorGuests}\n` +
        `• *Approx Total:* ₹${estimatedGrandTotal.toLocaleString('en-IN')}\n` +
        `• *Venue:* Sharda Palace Hotel & Banquet, Bhabua\n\n` +
        `Please share date availability & booking procedure.`
    );
    window.open(`https://wa.me/919955986296?text=${text}`, '_blank');
  };

  const handlePrintMenu = () => {
    window.print();
  };

  return (
    <section id="catering" className="py-16 sm:py-24 bg-[#FAFAF8] border-b border-[#F2F2EF] relative overflow-hidden">
      {/* Architectural background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-12 left-10 w-96 h-96 bg-[#D6B56C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-12 right-10 w-96 h-96 bg-[#2E7D5A]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D6B56C]/50 text-[#2E7D5A] text-xs font-semibold uppercase tracking-[0.2em] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B56C]" />
            <span>SHARDA PALACE HOTEL & BANQUET • BHABUA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            FOOD MENU, CATERING & BANQUET PACKAGES
          </h2>

          <p className="text-sm sm:text-base text-[#2E7D5A] font-serif italic font-medium">
            Patnawar Petrol Pump, Panda Ji Pokhra, Bhabua, Kaimur – 821101 • Contact: 9955986296
          </p>

          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto pt-1 font-sans">
            Explore our official food menus, banquet facilities, welcome counters, live dessert counters, and grand wedding catering details. All dishes prepared fresh with premium ingredients and authentic culinary hospitality.
          </p>

          {/* Quick Filter Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {[
              { id: 'all', label: 'All Packages' },
              { id: 'dayevent', label: 'Day Event & Veg Menu (10 AM–5 PM)' },
              { id: 'facilities', label: 'Banquet Facilities (Inc/Exc)' },
              { id: 'nonveg', label: 'Premium Non-Veg (₹1,500)' },
              { id: 'event1450', label: 'Event Package (₹1,450)' },
              { id: 'pax600', label: 'Grand 600+ Pax Wedding' },
              { id: 'terms', label: 'Terms & Conditions' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-ui rounded-full transition-all duration-200 border ${
                  activeTab === tab.id
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-[#D6B56C] hover:text-[#1A1A1A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">

          {/* ========================================================
              CARD 1: DAY EVENT FOOD MENU & BOOKING DETAILS (PAGE 1 & 2)
              ======================================================== */}
          {(activeTab === 'all' || activeTab === 'dayevent') && (
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:border-[#D6B56C]/60">
              <div className="p-5 sm:p-6 border-b border-stone-100 flex items-start justify-between gap-4 bg-gradient-to-r from-white via-white to-[#FAFAF8]">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#2E7D5A] font-semibold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>DAY EVENT PACKAGE</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                    FOOD MENU & BOOKING DETAILS
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-[#2E7D5A] font-semibold text-xs border border-emerald-200">
                      <Clock className="w-3 h-3" />
                      Time: 10:00 AM to 05:00 PM
                    </span>
                    <span className="text-xs text-stone-500 font-sans">
                      Day Banquets & Family Gatherings
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setOpenVeg(!openVeg)}
                  className="p-2 text-stone-400 hover:text-[#1A1A1A] transition-colors rounded-lg hover:bg-stone-100"
                  aria-label="Toggle Day Event details"
                >
                  {openVeg ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {openVeg && (
                <div className="p-5 sm:p-6 space-y-5">
                  {/* Starter */}
                  <div>
                    <div className="flex items-center gap-2 mb-2.5 pb-1 border-b border-stone-100">
                      <ChefHat className="w-4 h-4 text-[#D6B56C]" />
                      <h4 className="font-serif text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">
                        STARTER
                      </h4>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                      {[
                        'Noodles',
                        'Paneer Chilli Dry',
                        'Tomato Chaat / Tikki Chaat',
                        'Coffee',
                        'Manchurian Chilli Dry / Semi Gravy',
                        'Rasmalai',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-[#FAFAF8] border border-stone-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                          <span className="font-medium text-stone-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Main Course */}
                  <div>
                    <div className="flex items-center gap-2 mb-2.5 pb-1 border-b border-stone-100">
                      <Utensils className="w-4 h-4 text-[#2E7D5A]" />
                      <h4 className="font-serif text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">
                        MAIN COURSE
                      </h4>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                      {[
                        'Kadhai Paneer',
                        'Mix Veg / Mushroom Masala',
                        'Kachori / Tandoori Roti',
                        'Palak Kachori / Butter Naan',
                        'Jeera Rice / Pulao / Steamed Rice',
                        'Dal Fry / Dal Tadka / Dal Makhani',
                        'Raita',
                        'Fried Papad',
                        'Green Salad',
                        'Pickle',
                        'Gulab Jamun / Rasgulla',
                        '20-Litre Water Jar',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-[#FAFAF8] border border-stone-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56C]" />
                          <span className="font-medium text-stone-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Facilities Included (Pages 1 & 2) */}
                  <div className="p-4 rounded-xl bg-[#2E7D5A]/5 border border-[#2E7D5A]/20">
                    <div className="flex items-center gap-2 mb-2.5 text-[#2E7D5A]">
                      <Award className="w-4 h-4" />
                      <h4 className="font-serif text-xs font-bold uppercase tracking-wider">
                        FACILITIES INCLUDED (PAGE 1 & 2)
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-stone-800">
                      {[
                        'Banquet Hall',
                        'Normal Decoration',
                        '4 VIP Sofas',
                        '2 Rooms',
                        '150 VIP Chairs',
                        '10 Mattresses',
                      ].map((facility, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 font-medium bg-white px-2 py-1 rounded border border-[#2E7D5A]/15">
                          <Check className="w-3.5 h-3.5 text-[#2E7D5A] shrink-0" />
                          <span>{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppBooking('Day Event Food Menu (10 AM to 5 PM)')}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#1A1A1A] hover:bg-[#2E7D5A] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire for Day Event Package (10 AM - 5 PM)</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              CARD 2: BANQUET BOOKING & FACILITIES (PAGE 3 & 4)
              ======================================================== */}
          {(activeTab === 'all' || activeTab === 'facilities') && (
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:border-[#D6B56C]/60">
              <div className="p-5 sm:p-6 border-b border-stone-100 flex items-start justify-between gap-4 bg-gradient-to-r from-white via-white to-[#FAFAF8]">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#D6B56C] font-semibold mb-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span>COMPLETE VENUE INVENTORY</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                    BANQUET BOOKING & FACILITIES
                  </h3>
                  <p className="text-xs text-stone-500 font-sans mt-0.5">
                    Official Included Infrastructure vs Excluded Services
                  </p>
                </div>
                <button
                  onClick={() => setOpenFacilities(!openFacilities)}
                  className="p-2 text-stone-400 hover:text-[#1A1A1A] transition-colors rounded-lg hover:bg-stone-100"
                  aria-label="Toggle Banquet Facilities"
                >
                  {openFacilities ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {openFacilities && (
                <div className="p-5 sm:p-6 space-y-5">
                  {/* INCLUDING (Pages 3 & 4) */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5 pb-1 border-b border-[#2E7D5A]/20">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#2E7D5A]" />
                        <h4 className="font-serif text-xs font-bold text-[#2E7D5A] uppercase tracking-wider">
                          INCLUDING (15 INVENTORY ITEMS)
                        </h4>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-[#2E7D5A]/10 text-[#2E7D5A] font-semibold rounded">
                        Full Venue Setup
                      </span>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-700">
                      {[
                        'Open Space Area with Tent Decoration',
                        'Large Banquet Hall',
                        'Mini Banquet Hall',
                        '7 AC Rooms',
                        '150 VIP Chairs with Covers',
                        '150 Normal Chairs with Covers',
                        '8 VIP Sofas',
                        '40 Mattresses',
                        '30 Pillows',
                        '15 Buffet Sets',
                        '8 Round Tables with Covers',
                        '60 Square Tables with Covers',
                        'VIP Jaimal Chairs',
                        'Jaimal Stage Only',
                        'Kitchen & Store',
                        'Utensils',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 py-1.5 px-2 rounded-lg bg-[#2E7D5A]/5 border border-[#2E7D5A]/15">
                          <Check className="w-3.5 h-3.5 text-[#2E7D5A] shrink-0" />
                          <span className="font-medium text-stone-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* EXCLUDING (Pages 3 & 4) */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5 pb-1 border-b border-amber-200">
                      <div className="flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4 text-amber-600" />
                        <h4 className="font-serif text-xs font-bold text-amber-700 uppercase tracking-wider">
                          EXCLUDING (ARRANGED ON REQUEST)
                        </h4>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-amber-100 text-amber-800 font-semibold rounded">
                        Optional Add-ons
                      </span>
                    </div>

                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs text-stone-700">
                      {[
                        'Diesel',
                        'Jaimal Decoration',
                        'Mirror Entry',
                        'Fog Matka',
                        'Ganga Aarti',
                        'Jhanki',
                        "Bride's Palki",
                        'Waiter Service',
                        'Makeup Services',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 py-1 px-2 rounded-lg bg-stone-50 border border-stone-200 text-stone-600">
                          <X className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="font-medium text-[11px] sm:text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[10px] text-stone-500 italic mt-2">
                      * Items under Excluding are coordinated seamlessly with our trusted event decor & service team upon request.
                    </p>
                  </div>

                  <button
                    onClick={() => handleWhatsAppBooking('Banquet Hall Booking & Facilities Package')}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#1A1A1A] hover:bg-[#2E7D5A] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Check Hall & Room Availability on WhatsApp</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              CARD 3: PREMIUM FOOD PACKAGE — ₹1,500 / PLATE (PAGE 5)
              ======================================================== */}
          {(activeTab === 'all' || activeTab === 'nonveg') && (
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:border-[#D6B56C]/60">
              <div className="p-5 sm:p-6 border-b border-stone-100 flex items-start justify-between gap-4 bg-gradient-to-r from-white via-white to-[#FAFAF8]">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#D6B56C] font-semibold mb-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>ROYAL FEAST</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                    PREMIUM FOOD PACKAGE
                  </h3>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-xs uppercase font-sans text-stone-500 font-medium">PRICE:</span>
                    <span className="font-serif text-2xl font-extrabold text-[#2E7D5A]">₹1,500</span>
                    <span className="text-xs text-stone-500 font-sans">/ Plate</span>
                  </div>
                </div>
                <button
                  onClick={() => setOpenNonVeg(!openNonVeg)}
                  className="p-2 text-stone-400 hover:text-[#1A1A1A] transition-colors rounded-lg hover:bg-stone-100"
                  aria-label="Toggle Premium Food Package details"
                >
                  {openNonVeg ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {openNonVeg && (
                <div className="p-5 sm:p-6 space-y-5">
                  {/* Welcome Drinks */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 pb-1 border-b border-stone-100">
                      <Wine className="w-4 h-4 text-[#D6B56C]" />
                      <h4 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                        WELCOME DRINKS
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['Blue Ocean', 'Lemon Soda'].map((drink, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[#D6B56C]/15 border border-[#D6B56C]/30 text-stone-900 rounded-full font-semibold">
                          🍹 {drink}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Starter */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 pb-1 border-b border-stone-100">
                      <ChefHat className="w-4 h-4 text-[#2E7D5A]" />
                      <h4 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                        STARTER
                      </h4>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-700">
                      {[
                        'Paneer Chilli Dry',
                        'Baby Corn',
                        'Hara Bhara Kabab',
                        'Chicken Chilli Dry',
                        'Chicken Fry',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-[#FAFAF8] border border-stone-100 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Main Course */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 pb-1 border-b border-stone-100">
                      <Utensils className="w-4 h-4 text-[#D6B56C]" />
                      <h4 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                        MAIN COURSE
                      </h4>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-700">
                      {[
                        'Chicken Dehati',
                        'Mutton Khada Masala',
                        'Kadhai Paneer',
                        'Mix Veg',
                        'Dal Tadka',
                        'Pulao / Jeera Rice',
                        'Palak Puri',
                        'Sada Kachori',
                        'Tandoori Roti',
                        'Salad',
                        'Pickle',
                        'Fried Papad',
                        'Boondi Raita',
                        'Gulab Jamun',
                        'Butterscotch Ice Cream',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-[#FAFAF8] border border-stone-100 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56C]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleWhatsAppBooking('Premium Food Package (₹1,500/Plate)')}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#2E7D5A] hover:bg-[#256649] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book ₹1,500 Premium Package on WhatsApp</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              CARD 4: FOOD PACKAGE & BILLING — ₹1,450 (PAGE 6)
              ======================================================== */}
          {(activeTab === 'all' || activeTab === 'event1450') && (
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:border-[#D6B56C]/60">
              <div className="p-5 sm:p-6 border-b border-stone-100 flex items-start justify-between gap-4 bg-gradient-to-r from-white via-white to-[#FAFAF8]">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#2E7D5A] font-semibold mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>CORPORATE & MEETING FEAST</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                    FOOD PACKAGE & BILLING
                  </h3>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-xs uppercase font-sans text-stone-500 font-medium">PRICE:</span>
                    <span className="font-serif text-2xl font-extrabold text-[#2E7D5A]">₹1,450</span>
                    <span className="text-xs text-stone-500 font-sans">/ Plate</span>
                  </div>
                </div>
                <button
                  onClick={() => setOpen1450(!open1450)}
                  className="p-2 text-stone-400 hover:text-[#1A1A1A] transition-colors rounded-lg hover:bg-stone-100"
                  aria-label="Toggle Food Package & Billing details"
                >
                  {open1450 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {open1450 && (
                <div className="p-5 sm:p-6 space-y-5">
                  {/* Starter */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 pb-1 border-b border-stone-100">
                      <Coffee className="w-4 h-4 text-[#D6B56C]" />
                      <h4 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                        STARTER
                      </h4>
                    </div>
                    <div className="flex gap-2">
                      {['Tea', 'Veg Pakora'].map((item, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[#FAFAF8] border border-stone-200 text-stone-800 rounded-md font-medium text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Main Course */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 pb-1 border-b border-stone-100">
                      <Utensils className="w-4 h-4 text-[#2E7D5A]" />
                      <h4 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                        MAIN COURSE
                      </h4>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs text-stone-700">
                      {[
                        'Rice',
                        'Dal',
                        'Salad',
                        'Baingan Bhaji',
                        'Paneer Masala',
                        'Mutton Curry',
                        'Chutney',
                        'Papad',
                        'Sweet',
                        'Ice Cream',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 py-1 px-2 rounded-lg bg-[#FAFAF8] border border-stone-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                          <span className="font-medium text-stone-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* INCLUDING (Page 6) */}
                  <div className="p-3.5 rounded-xl bg-[#2E7D5A]/5 border border-[#2E7D5A]/20">
                    <h4 className="font-serif text-xs font-bold text-[#2E7D5A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>INCLUDING</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-stone-800 font-medium">
                      <span>• Banquet Hall</span>
                      <span>• 50 Chairs with Round Tables</span>
                      <span>• 6 VIP Sofas</span>
                      <span>• Podium</span>
                    </div>
                  </div>

                  {/* ADDITIONAL SERVICES & GRAND TOTAL (Page 6) */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-medium pb-2 border-b border-stone-200">
                      <span>ADDITIONAL SERVICES: Projector & Sound System with Mic</span>
                      <span className="font-bold text-[#2E7D5A]">₹7,500</span>
                    </div>

                    <div className="pt-1">
                      <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 font-bold mb-1">
                        <span>OFFICIAL BILLING EXAMPLE (40 PLATES)</span>
                        <span>AMOUNT</span>
                      </div>
                      <div className="space-y-1 text-xs font-mono text-stone-700">
                        <div className="flex justify-between">
                          <span>1,450 × 40 Plates</span>
                          <span>₹58,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Projector & Sound System</span>
                          <span>₹7,500</span>
                        </div>
                        <div className="flex justify-between font-bold text-sm text-[#1A1A1A] pt-1.5 border-t border-stone-300">
                          <span>GRAND TOTAL</span>
                          <span className="text-[#2E7D5A] font-serif text-base">₹65,500</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppBooking('Event Package & Billing (₹1,450/Plate)')}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#1A1A1A] hover:bg-[#2E7D5A] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire for ₹1,450 Event Package</span>
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

        {/* ========================================================
            CARD 5: CATERING & GRAND WEDDING FEAST — 600+ GUESTS (PAGES 7-10)
            ======================================================== */}
        {(activeTab === 'all' || activeTab === 'pax600') && (
          <div className="mt-8 bg-white rounded-2xl border border-stone-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300">
            <div className="p-6 sm:p-8 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#D6B56C]/20 border border-[#D6B56C]/40 text-[#D6B56C] text-xs font-mono font-semibold uppercase tracking-widest mb-2">
                  <Users className="w-3.5 h-3.5" />
                  <span>NUMBER OF GUESTS: 600+</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  CATERING & GRAND WEDDING FEAST (600+ GUESTS)
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
                  Full 10-Item Evening Snacks, 9-Item Jaimal Welcome, Live Counters, Kids' Corner, Staffing & 7:00 PM Dinner
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setOpen600Pax(!open600Pax)}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-ui font-medium text-white transition-all flex items-center gap-1.5"
                >
                  <span>{open600Pax ? 'Hide Details' : 'View Full Menu'}</span>
                  {open600Pax ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {open600Pax && (
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* 1. Evening Snacks — 6:00 PM (Page 7) */}
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#2E7D5A]" />
                      <h4 className="font-serif text-base font-bold text-[#1A1A1A] uppercase tracking-wide">
                        EVENING SNACKS – 6:00 PM (FOR 600 GUESTS)
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-[#2E7D5A] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
                      10 Selected Items
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
                    {[
                      { num: 1, name: 'Pani Puri' },
                      { num: 2, name: 'Aloo Tikki' },
                      { num: 3, name: 'Tomato Chaat Served in Kulhad' },
                      { num: 4, name: 'Papdi Chaat' },
                      { num: 5, name: 'Pav Bhaji / Chura Matar' },
                      { num: 6, name: 'Veg Chowmein' },
                      { num: 7, name: 'Paneer Chilla' },
                      { num: 8, name: 'Manchurian Fried Rice' },
                      { num: 9, name: 'Rasmalai & Ras Madhuri' },
                      { num: 10, name: '20-Litre Water Can' },
                    ].map((item) => (
                      <div key={item.num} className="p-2.5 rounded-lg bg-[#FAFAF8] border border-stone-200/80 flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#2E7D5A] text-white text-[9px] font-mono flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          {item.num}
                        </span>
                        <span className="text-xs font-medium text-stone-800">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Jaimal Welcome — 2 Hours Service (Page 7) */}
                <div className="p-5 rounded-2xl bg-[#D6B56C]/10 border border-[#D6B56C]/30">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#D6B56C]/30">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D6B56C]" />
                      <h4 className="font-serif text-base font-bold text-[#1A1A1A] uppercase tracking-wide">
                        JAIMAL WELCOME – 2 HOURS SERVICE
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 bg-white text-[#2E7D5A] rounded-full border border-stone-200">
                      Live Welcome Hospitality
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-3">
                    {[
                      { num: 1, name: 'Veg Spring Roll' },
                      { num: 2, name: 'Paneer Chilli Dry' },
                      { num: 3, name: 'Chhena Rasbhari' },
                      { num: 4, name: 'Mini Kaju Katli' },
                    ].map((item) => (
                      <div key={item.num} className="p-2.5 rounded-lg bg-white border border-stone-200 flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#D6B56C] text-[#1A1A1A] text-[9px] font-mono font-bold flex items-center justify-center shrink-0">
                          {item.num}
                        </span>
                        <span className="text-xs font-semibold text-stone-800">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Soup Counter & Live Counters */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 pt-1">
                    <div className="p-3 rounded-xl bg-white border border-stone-200 sm:col-span-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[#2E7D5A] mb-1">
                        <Soup className="w-3.5 h-3.5" />
                        <span>5. Soup Counter (Any One)</span>
                      </div>
                      <p className="text-xs text-stone-700">
                        Tomato Soup · Sweet Corn Soup · Manchow Soup · Hot & Sour Soup
                      </p>
                    </div>

                    {[
                      { num: 6, name: 'Coffee Counter', icon: Coffee },
                      { num: 7, name: 'Fruit Counter', icon: Utensils },
                      { num: 8, name: 'Paan Counter', icon: Sparkles },
                      { num: 9, name: 'Mocktail Counter', icon: Wine },
                    ].map((counter) => {
                      const IconComponent = counter.icon;
                      return (
                        <div key={counter.num} className="p-2.5 rounded-lg bg-white border border-stone-200 flex items-center gap-2">
                          <IconComponent className="w-4 h-4 text-[#D6B56C] shrink-0" />
                          <span className="text-xs font-medium text-stone-800">
                            {counter.num}. {counter.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Special Counters, Kids' Corner & Staffing (Page 8) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Special Counters */}
                  <div className="p-4 rounded-xl bg-[#FAFAF8] border border-stone-200">
                    <h5 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <IceCream className="w-4 h-4 text-[#D6B56C]" />
                      <span>SPECIAL COUNTERS</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56C]" />
                        <span className="font-medium text-stone-800">Kesar Milk Counter</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56C]" />
                        <span className="font-medium text-stone-800">Ice Cream Counter (Vanilla & Butterscotch)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Kids' Corner */}
                  <div className="p-4 rounded-xl bg-[#FAFAF8] border border-stone-200">
                    <h5 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#2E7D5A]" />
                      <span>KIDS' CORNER</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                        <span className="font-medium text-stone-800">Popcorn Counter</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                        <span className="font-medium text-stone-800">Cotton Candy Counter</span>
                      </li>
                    </ul>
                  </div>

                  {/* Waiter Service Staffing */}
                  <div className="p-4 rounded-xl bg-[#2E7D5A]/5 border border-[#2E7D5A]/20">
                    <h5 className="font-serif text-xs font-bold text-[#2E7D5A] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      <span>WAITER SERVICE STAFF</span>
                    </h5>
                    <div className="space-y-1.5 text-xs">
                      <div className="p-2 bg-white rounded border border-stone-200 flex justify-between items-center">
                        <span className="text-stone-600 font-medium">VIP Waiter Service:</span>
                        <span className="font-bold text-stone-900">10 Male + 5 Female Staff</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-stone-200 flex justify-between items-center">
                        <span className="text-stone-600 font-medium">Normal Waiter Service:</span>
                        <span className="font-bold text-stone-900">12 Male Staff</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Dinner Menu — 7:00 PM for 600 Guests (Pages 8-10) */}
                <div className="border-t border-stone-200 pt-6">
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-stone-200">
                    <ChefHat className="w-5 h-5 text-[#2E7D5A]" />
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#1A1A1A] uppercase tracking-wide">
                        DINNER MENU – 7:00 PM (FOR 600 GUESTS)
                      </h4>
                      <p className="text-xs text-stone-500">Breads, Rice, Dal, Paneer, Special Vegetables & Accompaniments</p>
                    </div>
                  </div>

                  {/* Breads 1-4 */}
                  <div className="mb-4">
                    <h5 className="text-[11px] uppercase font-mono tracking-wider text-stone-500 font-semibold mb-2">
                      BREADS & RICE
                    </h5>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { num: 1, name: 'Kachori' },
                        { num: 2, name: 'Palak Kachori' },
                        { num: 3, name: 'Butter Naan' },
                        { num: 4, name: 'Tandoori Roti' },
                      ].map((bread) => (
                        <div key={bread.num} className="p-2 bg-[#FAFAF8] rounded-md border border-stone-200 flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#2E7D5A]">{bread.num}.</span>
                          <span className="text-xs font-medium text-stone-800">{bread.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Curries, Dals & Selections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                    {[
                      {
                        num: 5,
                        title: 'Rice Selection (Any One)',
                        options: ['Jeera Rice', 'Plain Rice', 'Matar Pulao', 'Veg Pulao', 'Kashmiri Pulao'],
                      },
                      {
                        num: 1,
                        title: 'Dal (Any One)',
                        options: ['Rahar Dal', 'Dal Makhani', 'Rahar Chana Mix Dal'],
                      },
                      {
                        num: 2,
                        title: 'Paneer (Any One)',
                        options: ['Kadhai Paneer', 'Paneer Butter Masala', 'Matar Paneer', 'Palak Paneer'],
                      },
                      {
                        num: 1,
                        title: 'Special Kofta (Any One Seasonal)',
                        options: ['Chhena Kofta', 'Malai Kofta', 'Lauki Kofta', 'Kathal Kofta'],
                      },
                      {
                        num: 2,
                        title: 'Mushroom / Corn Gravy (Any One)',
                        options: ['Matar Mushroom', 'Mushroom Do Pyaza', 'Sweet Corn Palak Gravy'],
                      },
                      {
                        num: 3,
                        title: 'Special Veg (Any One)',
                        options: ['Mix Veg', 'Aloo Palak', 'Aloo Jeera', 'Aloo Gobi Matar Tomato'],
                      },
                    ].map((group, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                        <h6 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5A]" />
                          <span>{group.title}</span>
                        </h6>
                        <ul className="space-y-1 text-xs text-stone-600">
                          {group.options.map((opt, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#D6B56C]" />
                              <span>{opt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Accompaniments & Raita (Pages 8 & 9) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    <div className="p-3 bg-[#FAFAF8] rounded-xl border border-stone-200">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 font-semibold block mb-1">
                        Accompaniments
                      </span>
                      <p className="text-xs font-medium text-stone-800">1. Fried Papad</p>
                      <p className="text-xs font-medium text-stone-800 mt-1">2. Sweet Chutney</p>
                      <p className="text-xs font-medium text-stone-800 mt-1">3. Boondi</p>
                    </div>

                    <div className="p-3 bg-[#FAFAF8] rounded-xl border border-stone-200">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 font-semibold block mb-1">
                        4. Raita (Any One)
                      </span>
                      <p className="text-xs text-stone-700">· Boondi Raita</p>
                      <p className="text-xs text-stone-700">· Pineapple Raita</p>
                      <p className="text-xs text-stone-700">· Fruit Raita</p>
                    </div>

                    <div className="p-3 bg-[#FAFAF8] rounded-xl border border-stone-200">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 font-semibold block mb-1">
                        Salad & Pickles (Page 10)
                      </span>
                      <p className="text-xs font-medium text-stone-800">• Mixed Pickle</p>
                      <p className="text-xs font-medium text-stone-800 mt-1">• Green Salad</p>
                    </div>

                    <div className="p-3 bg-[#FAFAF8] rounded-xl border border-stone-200">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 font-semibold block mb-1">
                        Dessert & Halwa (Page 10)
                      </span>
                      <p className="text-xs font-medium text-stone-800">• Shahi Moong Halwa / Gajar Halwa (Winter)</p>
                      <p className="text-xs font-medium text-stone-800 mt-1">• Rajbhog / Rasgulla / Gulab Jamun (Any One)</p>
                    </div>
                  </div>

                  {/* During Night Pheras (Page 10) */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 to-[#2E7D5A]/10 border border-[#2E7D5A]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#2E7D5A] font-bold block">
                        DURING NIGHT PHERAS REFRESHMENTS (PAGE 10)
                      </span>
                      <p className="text-xs font-semibold text-stone-900 mt-0.5">
                        1. Hot Coffee or Chilled Cold Drink &nbsp;•&nbsp; 2. Salty Biscuits
                      </p>
                    </div>
                    <span className="text-[11px] text-[#2E7D5A] font-medium bg-white px-2.5 py-1 rounded border border-[#2E7D5A]/20">
                      Served throughout late-night rituals
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => handleWhatsAppBooking('Grand 600+ Pax Wedding Catering & Banquet Package')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2E7D5A] hover:bg-[#256649] text-white text-xs font-bold transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire for 600+ Pax Wedding Catering on WhatsApp</span>
                  </button>

                  <a
                    href="tel:09955986296"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-medium border border-stone-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D6B56C]" />
                    <span>Call Event Manager: 099559 86296</span>
                  </a>
                </div>

              </div>
            )}
          </div>
        )}

        {/* ========================================================
            CARD 6: OFFICIAL TERMS & CONDITIONS (PAGE 11)
            ======================================================== */}
        {(activeTab === 'all' || activeTab === 'terms') && (
          <div className="mt-8 bg-white rounded-2xl border border-stone-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="p-5 sm:p-6 border-b border-stone-100 flex items-start justify-between gap-4 bg-[#FAFAF8]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 text-[#2E7D5A] flex items-center justify-center shadow-xs">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A]">
                    TERMS & CONDITIONS (OFFICIAL POLICY)
                  </h3>
                  <p className="text-xs text-stone-500 font-sans mt-0.5">
                    Sharda Palace Hotel & Banquet • Patnawar Petrol Pump, Panda Ji Pokhra, Bhabua, Kaimur – 821101
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpenTerms(!openTerms)}
                className="p-2 text-stone-400 hover:text-[#1A1A1A] transition-colors rounded-lg hover:bg-stone-200/60"
                aria-label="Toggle Booking Terms and Conditions"
              >
                {openTerms ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>

            {openTerms && (
              <div className="p-5 sm:p-8 space-y-3.5">
                {[
                  {
                    title: '1. Advance Payment',
                    text: '50% of the total amount must be paid in advance. The remaining balance must be paid immediately after the function ends.',
                  },
                  {
                    title: '2. Damage Policy',
                    text: 'Any damage caused to hotel property must be compensated for by the guest.',
                  },
                  {
                    title: '3. Room Check-in & Check-out',
                    text: 'Rooms will be provided at 09:00 AM on the morning of the function and must be vacated by 08:00 AM the following day.',
                  },
                  {
                    title: '4. Tent Materials',
                    text: 'No tent materials or equipment are allowed to be taken outside the hotel premises.',
                  },
                  {
                    title: '5. Alcohol Policy',
                    text: 'Consumption of alcohol is strictly prohibited. Anyone found violating this rule will be subject to penalties.',
                  },
                  {
                    title: '6. Cancellation Policy',
                    text: 'The advance payment is non-refundable in case of function cancellation.',
                  },
                ].map((term, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FAFAF8] border border-stone-200/80 text-xs sm:text-sm text-stone-800">
                    <span className="font-serif font-bold text-stone-900 block mb-1 text-sm">
                      {term.title}
                    </span>
                    <p className="leading-relaxed font-sans text-stone-700">{term.text}</p>
                  </div>
                ))}

                <div className="pt-2 text-center text-xs text-stone-500 italic">
                  Sharda Palace Hotel & Banquet — “Your Celebration, Our Hospitality.” • Contact: 9955986296
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            INTERACTIVE ESTIMATOR & OFFICIAL PRINT CARD
            ======================================================== */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-br from-[#1C180E] to-[#12100A] rounded-2xl p-6 sm:p-8 text-white border border-[#D6B56C]/40 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#E5C880] font-bold">
                ESTIMATE YOUR EVENT BUDGET
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Instant Event Catering Estimator
              </h3>
              <p className="text-xs sm:text-sm text-stone-300">
                Choose a catering package and guest count to see approximate pricing based on Sharda Palace official rate card.
              </p>
            </div>

            {/* Estimator Controls */}
            <div className="w-full lg:w-auto bg-black/70 p-4 sm:p-5 rounded-xl border border-[#D6B56C]/30 space-y-3 min-w-[300px]">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-stone-300 uppercase tracking-wider block">
                  Select Package
                </label>
                <select
                  value={calculatorPlan}
                  onChange={(e) => setCalculatorPlan(e.target.value as any)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#1C180E] border border-stone-700 text-xs text-white focus:outline-none focus:border-[#D6B56C]"
                >
                  <option value="veg_day">Day Event Veg Feast (₹950/plate)</option>
                  <option value="nonveg_1500">Premium Non-Veg Feast (₹1,500/plate)</option>
                  <option value="event_1450">Curated Event Package (₹1,450/plate)</option>
                  <option value="wedding_600">Grand 600+ Pax Wedding Feast (₹1,650/plate)</option>
                </select>
              </div>

              <div className="flex items-center justify-between gap-3">
                <label className="text-[11px] font-bold text-stone-300 uppercase tracking-wider">
                  Guest Count:
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min={20}
                    max={2000}
                    step={10}
                    value={calculatorGuests}
                    onChange={(e) => setCalculatorGuests(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-20 px-2 py-1 rounded bg-[#1C180E] border border-stone-700 text-xs font-mono font-bold text-center text-white"
                  />
                  <span className="text-xs text-stone-400">PAX</span>
                </div>
              </div>

              {calculatorPlan === 'event_1450' && (
                <label className="flex items-center gap-2 text-xs text-stone-300 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={includeProjector}
                    onChange={(e) => setIncludeProjector(e.target.checked)}
                    className="rounded text-[#2E7D5A]"
                  />
                  <span>Add Projector & Sound System (+₹7,500)</span>
                </label>
              )}

              <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-400">Estimated Total:</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#E5C880]">
                  ₹{estimatedGrandTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                onClick={() => handleWhatsAppBooking(planPrices[calculatorPlan].name)}
                className="w-full py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire this Estimate on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* 13. BOOKING / ENQUIRY FOOTER CTA */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-2xl p-6 sm:p-10 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D6B56C]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D6B56C] font-semibold">
              RESERVATIONS & CATERING INQUIRIES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              PLAN YOUR FEAST AT SHARDA PALACE
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
              Patnawar Petrol Pump, Panda Ji Pokhra, Bhabua, Kaimur – 821101 • Call or WhatsApp our banquet manager anytime for custom menu curation and tasting appointments.
            </p>

            <div className="pt-3 flex flex-wrap justify-center items-center gap-3">
              <a
                href="tel:09955986296"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#1A1A1A] hover:bg-[#D6B56C] font-ui font-medium text-xs sm:text-sm transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-[#2E7D5A]" />
                <span>CALL NOW: 099559 86296</span>
              </a>

              <a
                href="https://wa.me/919955986296?text=Hello%20Sharda%20Palace%2C%20I%20would%20like%20to%20enquire%20about%20your%20Banquet%2C%20Catering%20and%20Food%20Packages."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-ui font-medium text-xs sm:text-sm transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WHATSAPP INQUIRY</span>
              </a>

              <button
                onClick={handlePrintMenu}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-ui font-medium text-xs sm:text-sm transition-all"
              >
                <Printer className="w-4 h-4 text-[#D6B56C]" />
                <span>Print Menu Card</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
