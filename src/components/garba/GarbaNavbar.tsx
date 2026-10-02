import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Ticket, Sparkles, Calendar, MapPin } from 'lucide-react';
import { GARBA_EVENT_DATA } from '../../data/garbaEvent';
import { BrandLogo } from '../common/BrandLogo';

interface GarbaNavbarProps {
  onBookClick: () => void;
  isEventEnded: boolean;
}

export const GarbaNavbar: React.FC<GarbaNavbarProps> = ({ onBookClick, isEventEnded }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0E0617]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-amber-500/25'
          : 'bg-[#0E0617]/85 backdrop-blur-sm border-b border-amber-500/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Brand & Event Title */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <BrandLogo variant="monogram" className="w-11 h-11 sm:w-13 sm:h-13 rounded-full ring-2 ring-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.3)]" />
              <span className="absolute -bottom-1 -right-1 bg-red-600 text-[9px] font-bold text-white px-1.5 py-0.5 rounded-full ring-1 ring-black">
                4.0
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300">
                  GARBA NIGHT 4.0
                </span>
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-amber-400/90 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                  <Sparkles className="w-2.5 h-2.5" />
                  SHARDA PALACE
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-300 mt-0.5">
                <span className="flex items-center gap-1 text-amber-300 font-semibold">
                  <Calendar className="w-3 h-3 text-red-400" />
                  17 & 18 October 2026
                </span>
                <span className="hidden sm:inline text-stone-500">•</span>
                <span className="hidden sm:flex items-center gap-1 text-stone-400">
                  <MapPin className="w-3 h-3 text-amber-500" />
                  Bhabua, Kaimur
                </span>
              </div>
            </div>
          </div>

          {/* Quick Direct Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Helpline */}
            <a
              href={`tel:${GARBA_EVENT_DATA.contactPhone}`}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
              title="Call Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{GARBA_EVENT_DATA.contactPhone}</span>
            </a>

            {/* Direct WhatsApp Helpline */}
            <a
              href={`https://wa.me/91${GARBA_EVENT_DATA.whatsappNumber}?text=${encodeURIComponent('Hello Sharda Palace, I have a query regarding Garba Night 4.0 pass booking.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-lg transition-all shadow-xs"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Book Now Scroll CTA */}
            <button
              onClick={onBookClick}
              disabled={isEventEnded}
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-all shadow-lg ${
                isEventEnded
                  ? 'bg-stone-800 text-stone-400 cursor-not-allowed border border-stone-700'
                  : 'bg-gradient-to-r from-red-600 via-amber-500 to-red-600 hover:from-red-500 hover:to-amber-400 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:scale-[1.02] cursor-pointer'
              }`}
            >
              <Ticket className="w-4 h-4" />
              <span>{isEventEnded ? 'Booking Closed' : 'Book Passes'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
