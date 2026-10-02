import React, { useState, useEffect } from 'react';
import { Ticket, MessageCircle, Phone } from 'lucide-react';
import { GARBA_EVENT_DATA } from '../../data/garbaEvent';

interface GarbaFloatingBarProps {
  onBookClick: () => void;
  isEventEnded: boolean;
}

export const GarbaFloatingBar: React.FC<GarbaFloatingBarProps> = ({ onBookClick, isEventEnded }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 max-w-md mx-auto sm:mx-0 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#12081C]/95 backdrop-blur-md border border-amber-500/40 p-3 sm:p-3.5 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
            {isEventEnded ? 'Booking Status' : 'Garba Night 4.0 Pass'}
          </span>
          <span className="text-xs sm:text-sm font-bold text-white font-mono">
            {isEventEnded ? 'Booking Closed' : 'From ₹149 / Person'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${GARBA_EVENT_DATA.contactPhone}`}
            className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-stone-300 transition-colors"
            title="Call Helpline"
          >
            <Phone className="w-4 h-4 text-amber-400" />
          </a>

          <a
            href={`https://wa.me/91${GARBA_EVENT_DATA.whatsappNumber}?text=${encodeURIComponent('Hi Sharda Palace, I want to book tickets for Garba Night 4.0.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
            title="WhatsApp Booking"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            onClick={onBookClick}
            disabled={isEventEnded}
            className={`py-2 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md ${
              isEventEnded
                ? 'bg-stone-800 text-stone-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white cursor-pointer'
            }`}
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>{isEventEnded ? 'Closed' : 'Book Now'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
