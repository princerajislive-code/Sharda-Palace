import React from 'react';
import { CheckCircle2, Ticket, Sparkles, Calendar, ArrowRight, Shield } from 'lucide-react';
import { GARBA_EVENT_DATA, TicketTypeInfo } from '../../data/garbaEvent';

interface GarbaTicketCardsProps {
  selectedType: '1_day' | '2_days';
  onSelectType: (type: '1_day' | '2_days') => void;
  isEventEnded: boolean;
}

export const GarbaTicketCards: React.FC<GarbaTicketCardsProps> = ({
  selectedType,
  onSelectType,
  isEventEnded,
}) => {
  return (
    <section id="passes" className="py-16 sm:py-24 bg-[#0E0617] text-white relative">
      {/* Decorative ambient illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-300 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>OFFICIAL PASS RATES & VALIDITY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Choose Your Garba Night Pass
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300">
            Enjoy non-stop Dandiya Raas with family & friends. All passes include full event arena entry and stage access.
          </p>
        </div>

        {/* 2 Ticket Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {GARBA_EVENT_DATA.tickets.map((ticket: TicketTypeInfo) => {
            const isSelected = selectedType === ticket.id;

            return (
              <div
                key={ticket.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#231230] to-[#12081C] border-2 border-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.35)] scale-[1.02]'
                    : 'bg-gradient-to-b from-stone-900/90 to-[#12081C]/90 border border-amber-500/25 hover:border-amber-400/60 shadow-xl'
                }`}
              >
                {/* Popular or Savings Badge */}
                {ticket.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    {ticket.badge}
                  </div>
                )}

                <div>
                  {/* Pass Title & Tagline */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                        {ticket.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-400 mt-1">
                        {ticket.tagline}
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <Ticket className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Price Box */}
                  <div className="my-6 p-4 rounded-2xl bg-black/50 border border-white/10 flex items-baseline justify-between">
                    <div>
                      <div className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
                        Entry Fee
                      </div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-mono text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
                          ₹{ticket.price}
                        </span>
                        <span className="text-xs text-stone-400">/ Person</span>
                        {ticket.originalPrice && (
                          <span className="text-sm text-stone-500 line-through ml-2">
                            ₹{ticket.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-500/30">
                        {ticket.id === '1_day' ? 'Single Day' : 'Both Days'}
                      </span>
                    </div>
                  </div>

                  {/* Date Validity Highlight Box */}
                  <div className="mb-6 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <div className="font-bold text-amber-200 uppercase tracking-wide">
                        Ticket Validity:
                      </div>
                      <div className="text-stone-300 mt-0.5 font-medium">
                        {ticket.validity}
                      </div>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {ticket.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Pass CTA Button */}
                <button
                  type="button"
                  onClick={() => onSelectType(ticket.id)}
                  disabled={isEventEnded}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                    isEventEnded
                      ? 'bg-stone-800 text-stone-500 cursor-not-allowed border border-stone-700'
                      : isSelected
                      ? 'bg-amber-400 text-black hover:bg-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.5)] font-extrabold cursor-pointer'
                      : 'bg-white/10 text-white hover:bg-amber-500 hover:text-black border border-white/15 cursor-pointer'
                  }`}
                >
                  <span>{isSelected ? 'Selected in Booking Form ✓' : `Select ${ticket.name}`}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Global Validity Guarantee Note */}
        <div className="mt-10 p-4 rounded-2xl bg-black/40 border border-amber-500/20 max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-stone-400">
          <Shield className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>
            <strong className="text-amber-300">Strict Validity:</strong> Tickets are non-transferable and valid exclusively on 17 & 18 October 2026 at Sharda Palace Bhabua.
          </span>
        </div>
      </div>
    </section>
  );
};
