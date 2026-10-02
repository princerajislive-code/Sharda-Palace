import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles, Heart } from 'lucide-react';
import { GARBA_EVENT_DATA } from '../../data/garbaEvent';
import { BrandLogo } from '../common/BrandLogo';

export const GarbaFooter: React.FC = () => {
  return (
    <footer className="bg-[#06020A] text-stone-400 py-12 border-t border-amber-500/20 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <BrandLogo variant="monogram" className="w-10 h-10 rounded-full ring-1 ring-amber-400/50" />
            <div>
              <div className="font-serif text-lg font-bold text-white tracking-wider">
                GARBA NIGHT 4.0
              </div>
              <div className="text-[11px] text-amber-400 font-semibold">
                Sharda Palace Hotel & Banquet, Bhabua, Kaimur
              </div>
            </div>
          </div>

          {/* Quick Helplines */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a
              href={`tel:${GARBA_EVENT_DATA.contactPhone}`}
              className="flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{GARBA_EVENT_DATA.contactPhone}</span>
            </a>

            <a
              href={`https://wa.me/91${GARBA_EVENT_DATA.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Booking</span>
            </a>

            <a
              href={GARBA_EVENT_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>Bhabua, Bihar</span>
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-stone-500">
            © 2026 Sharda Palace Hotel & Banquet. All Rights Reserved. Event passes valid strictly on 17 & 18 October 2026.
          </p>

          <p className="text-stone-500 flex items-center gap-1">
            <span>Official Event Production</span>
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Garba Night 4.0</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
