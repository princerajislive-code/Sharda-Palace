import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Ticket, Sparkles, Phone, MessageCircle, Music, ShieldCheck } from 'lucide-react';
import { GARBA_EVENT_DATA } from '../../data/garbaEvent';

interface GarbaHeroProps {
  onBookClick: () => void;
  isEventEnded: boolean;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const GarbaHero: React.FC<GarbaHeroProps> = ({ onBookClick, isEventEnded }) => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const target = GARBA_EVENT_DATA.eventStartDate.getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, isPast: false });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0A0412] text-white pt-8 sm:pt-12 pb-16 sm:pb-24 border-b border-amber-500/20">
      {/* Dynamic Golden & Crimson Ambient Glow Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-amber-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative festive overlay dots/pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Event Poster Display */}
        <div className="mb-10 sm:mb-14 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-[0_10px_50px_rgba(245,158,11,0.25)] relative group bg-black">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full max-h-[560px] overflow-hidden">
            <img
              src={GARBA_EVENT_DATA.images.heroPoster}
              alt="GARBA NIGHT 4.0 Official Event Poster at Sharda Palace Bhabua"
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-102"
            />
            {/* Gradient Overlays for Cinematic Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0412] via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />
            
            {/* Floating Live Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/40 shadow-lg">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300">
                Official Event 2026
              </span>
            </div>

            {/* Floating Venue Tag */}
            <div className="hidden sm:flex absolute bottom-6 left-6 items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 text-xs text-amber-200">
              <MapPin className="w-4 h-4 text-red-400" />
              <span>Sharda Palace Hotel & Banquet, Bhabua, Kaimur</span>
            </div>
          </div>
        </div>

        {/* Event Headline & Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Titles & Details */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin" />
              <span>THE BIGGEST NAVRATRI UTSAV IN BHABUA</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
                GARBA NIGHT 4.0
              </span>
              <span className="block text-2xl sm:text-3xl font-sans font-bold text-red-400 mt-2">
                17 & 18 October 2026
              </span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Join the grandest Dandiya & Garba Raas celebration in Kaimur! Experience electrifying DJ beats, dazzling stage lighting, traditional attire contests, delicious food stalls, and an unforgettable family-friendly atmosphere at Sharda Palace.
            </p>

            {/* Quick Event Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white/5 border border-amber-500/20 rounded-xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold mb-1">
                  <Calendar className="w-3.5 h-3.5 text-red-400" />
                  <span>DATES</span>
                </div>
                <div className="text-sm font-bold text-white">17 & 18 Oct 2026</div>
                <div className="text-[11px] text-stone-400">Sat & Sun Nights</div>
              </div>

              <div className="bg-white/5 border border-amber-500/20 rounded-xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" />
                  <span>TIMINGS</span>
                </div>
                <div className="text-sm font-bold text-white">6:00 PM Onwards</div>
                <div className="text-[11px] text-stone-400">Till 11:30 PM</div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-white/5 border border-amber-500/20 rounded-xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>VENUE</span>
                </div>
                <div className="text-sm font-bold text-white truncate">Sharda Palace</div>
                <div className="text-[11px] text-stone-400">Bhabua, Kaimur</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onBookClick}
                disabled={isEventEnded}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold uppercase tracking-wider transition-all duration-300 shadow-xl ${
                  isEventEnded
                    ? 'bg-stone-800 text-stone-400 border border-stone-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-600 via-amber-500 to-red-600 hover:from-red-500 hover:to-amber-400 text-white shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:scale-105 cursor-pointer'
                }`}
              >
                <Ticket className="w-5 h-5" />
                <span>{isEventEnded ? 'Booking Closed' : 'Book Tickets Now'}</span>
              </button>

              <a
                href={`https://wa.me/91${GARBA_EVENT_DATA.whatsappNumber}?text=${encodeURIComponent('Hello Sharda Palace! I want to book passes for GARBA NIGHT 4.0 (17 & 18 October 2026). Please assist me.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-500/40 hover:border-emerald-400 transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Animated Countdown & Ticket Teaser */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-stone-900/90 to-[#12081C]/90 rounded-3xl p-6 sm:p-8 border-2 border-amber-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <span>EVENT COUNTDOWN</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {timeLeft.isPast ? 'The Celebration Is Live!' : 'Grand Celebration Starts In'}
                </h3>
              </div>

              {/* Countdown Grid */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6">
                <div className="bg-black/60 border border-amber-500/30 rounded-2xl p-3 sm:p-4 text-center">
                  <span className="font-mono text-2xl sm:text-4xl font-extrabold text-amber-300 block">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-semibold mt-1 block">
                    Days
                  </span>
                </div>

                <div className="bg-black/60 border border-amber-500/30 rounded-2xl p-3 sm:p-4 text-center">
                  <span className="font-mono text-2xl sm:text-4xl font-extrabold text-amber-300 block">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-semibold mt-1 block">
                    Hours
                  </span>
                </div>

                <div className="bg-black/60 border border-amber-500/30 rounded-2xl p-3 sm:p-4 text-center">
                  <span className="font-mono text-2xl sm:text-4xl font-extrabold text-amber-300 block">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-semibold mt-1 block">
                    Mins
                  </span>
                </div>

                <div className="bg-black/60 border border-amber-500/30 rounded-2xl p-3 sm:p-4 text-center">
                  <span className="font-mono text-2xl sm:text-4xl font-extrabold text-red-400 block animate-pulse">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-semibold mt-1 block">
                    Secs
                  </span>
                </div>
              </div>

              {/* Quick Passes Price Highlights */}
              <div className="bg-black/40 rounded-2xl p-4 border border-white/10 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-stone-300 font-medium">1 Day Pass (17 or 18 Oct):</span>
                  <span className="font-bold text-amber-300 font-mono text-base">₹149 / Person</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-white/10">
                  <span className="text-amber-200 font-medium">2 Days Pass (Both Nights):</span>
                  <span className="font-extrabold text-yellow-400 font-mono text-base">₹249 / Person</span>
                </div>
              </div>

              {/* Validity Highlight Callout */}
              <div className="text-center p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 font-semibold">
                ⚡ TICKETS VALID ONLY ON 17 & 18 OCTOBER 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
