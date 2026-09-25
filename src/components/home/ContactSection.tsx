import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Business & Contact Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7D5A] font-sans mb-2">
                <span>Location & Inquiries</span>
                <span className="text-stone-300">·</span>
                <span>Bhabua, Bihar</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Visit Sharda Palace
              </h2>
              <div className="text-sm font-serif italic text-[#D6B56C] font-semibold mt-1">
                शारदा पैलेस
              </div>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Centrally located in Bhabua with direct road access for guests, bridal parties, and banquet attendees.
              </p>
            </div>

            {/* Factual Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-4 bg-[#FAFAF8] rounded-xl border border-stone-200/80 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white border border-stone-200 text-[#D6B56C] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-400">Postal Address</div>
                  <div className="font-serif text-base font-bold text-[#1A1A1A] mt-0.5">
                    2JV8+2C, Bhabua, Bihar 821101
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">Plus Code: 2JV8+2C Bhabua, India</div>
                </div>
              </div>

              <div className="p-4 bg-[#FAFAF8] rounded-xl border border-stone-200/80 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white border border-stone-200 text-[#2E7D5A] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-400">Telephone / Booking</div>
                  <div className="font-mono text-base font-bold text-[#1A1A1A] mt-0.5">
                    <a href="tel:09955986296" className="hover:text-[#2E7D5A]">
                      099559 86296
                    </a>
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">Open for call enquiries at any hour</div>
                </div>
              </div>

              <div className="p-4 bg-[#FAFAF8] rounded-xl border border-stone-200/80 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white border border-stone-200 text-[#2E7D5A] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-400">Opening Hours</div>
                  <div className="font-serif text-base font-bold text-[#2E7D5A] mt-0.5">
                    Open 24 Hours
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">7 days a week continuous hospitality</div>
                </div>
              </div>
            </div>

            {/* Three Contact Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="tel:09955986296"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-ui font-medium rounded-md text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/919955986296?text=Hello%20Sharda%20Palace%2C%20I%20would%20like%20to%20enquire%20about%20booking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-ui font-medium rounded-md text-[#2E7D5A] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://maps.google.com/?q=2JV8%2B2C%2C+Bhabua%2C+Bihar+821101"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-ui font-medium rounded-md text-stone-800 bg-[#FAFAF8] hover:bg-white border border-stone-200 hover:border-stone-300 transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#D6B56C]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-[#FAFAF8] flex flex-col">
              {/* Map Top Bar */}
              <div className="px-6 py-4 bg-white border-b border-stone-200 flex items-center justify-between">
                <div>
                  <div className="font-serif text-sm font-bold text-[#1A1A1A]">
                    Sharda Palace on Google Maps
                  </div>
                  <div className="text-xs text-stone-500">
                    2JV8+2C, Bhabua, Bihar 821101
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=2JV8%2B2C%2C+Bhabua%2C+Bihar+821101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#2E7D5A] hover:underline font-medium"
                >
                  <span>Open Full Map</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Frame */}
              <div className="w-full h-[400px] relative bg-stone-100">
                <iframe
                  title="Sharda Palace Location Map"
                  src="https://maps.google.com/maps?q=2JV8%2B2C%2C+Bhabua%2C+Bihar+821101&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="p-4 bg-white border-t border-stone-100 flex flex-wrap items-center justify-between text-xs text-stone-500 gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2E7D5A]" />
                  <span>Exact Registered Business Coordinates (25.0427° N, 83.6139° E)</span>
                </div>
                <span className="font-mono text-stone-700">Bihar 821101</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
