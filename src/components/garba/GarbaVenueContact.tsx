import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Calendar, Navigation, ShieldCheck } from 'lucide-react';
import { GARBA_EVENT_DATA } from '../../data/garbaEvent';

export const GarbaVenueContact: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0412] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            EVENT LOCATION & HELPLINE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Venue & Contact Details
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm mt-2">
            Easily accessible location in Bhabua with ample valet & parking space.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Venue */}
          <div className="p-6 rounded-2xl bg-white/5 border border-amber-500/25 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Official Venue
              </h3>
              <p className="text-sm text-stone-300 font-semibold">
                {GARBA_EVENT_DATA.venue}
              </p>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                {GARBA_EVENT_DATA.fullAddress}
              </p>
            </div>

            <div className="pt-6">
              <a
                href={GARBA_EVENT_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

          {/* Card 2: Dates & Schedule */}
          <div className="p-6 rounded-2xl bg-white/5 border border-amber-500/25 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Date & Timings
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-stone-300">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-300">Dates:</span>
                  <span>17 & 18 October 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-stone-400" />
                  <span>Gates Open: 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-stone-400" />
                  <span>Grand Finale: 11:30 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                Strict On-Time Schedule
              </span>
            </div>
          </div>

          {/* Card 3: Helplines */}
          <div className="p-6 rounded-2xl bg-white/5 border border-amber-500/25 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Booking Helplines
              </h3>
              <p className="text-xs text-stone-400 mb-3">
                For pass assistance, bulk bookings, or queries:
              </p>
              <div className="space-y-2">
                <a
                  href={`tel:${GARBA_EVENT_DATA.contactPhone}`}
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-amber-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>+91 {GARBA_EVENT_DATA.contactPhone}</span>
                </a>
                <a
                  href={`https://wa.me/91${GARBA_EVENT_DATA.whatsappNumber}?text=${encodeURIComponent('Hi Sharda Palace! I have a question about Garba Night 4.0.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {GARBA_EVENT_DATA.whatsappNumber}</span>
                </a>
              </div>
            </div>

            <div className="pt-6">
              <span className="text-[11px] text-stone-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Dedicated Event Management Team</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
