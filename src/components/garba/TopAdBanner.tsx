import React from 'react';
import { Sparkles, ArrowRight, Ticket } from 'lucide-react';

export const TopAdBanner: React.FC = () => {
  const handleScrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#garba-booking') || document.querySelector('#garba-tickets') || document.querySelector('#garba');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      role="banner"
      aria-label="Garba Night 4.0 Advertisement"
      className="relative z-50 w-full bg-gradient-to-r from-[#0d0b06] via-[#1c180e] to-[#0d0b06] border-b border-[#D6B56C]/40 text-white py-2 px-3 sm:px-6 shadow-sm overflow-hidden"
    >
      {/* Subtle festive golden ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,181,108,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 relative z-10 text-xs sm:text-sm">
        {/* Left / Center Area: Label + Promotional Message */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 justify-center sm:justify-start">
          {/* Small ADVERTISEMENT Label */}
          <span className="shrink-0 text-[9px] sm:text-[10px] tracking-wider uppercase font-bold text-[#E5C880] bg-[#D6B56C]/15 border border-[#D6B56C]/40 px-1.5 sm:px-2 py-0.5 rounded">
            ADVERTISEMENT
          </span>

          {/* Sparkle icon */}
          <Sparkles className="w-3.5 h-3.5 text-[#E5C880] shrink-0 animate-pulse hidden xs:inline-block" />

          {/* Promotional message */}
          <span className="truncate font-semibold tracking-wide text-xs sm:text-sm text-[#F7F4EA]">
            <span className="text-[#E5C880] font-bold">GARBA NIGHT 4.0</span> – BOOK YOUR TICKETS NOW!
          </span>

          {/* Price highlight badge - hidden on very small screens */}
          <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-medium text-amber-200/90 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
            <Ticket className="w-3 h-3 text-[#E5C880]" />
            From ₹149 Only
          </span>
        </div>

        {/* Right CTA Button */}
        <div className="shrink-0 flex items-center">
          <a
            href="#garba-booking"
            onClick={handleScrollToBooking}
            className="group inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-bold text-black bg-gradient-to-r from-[#D6B56C] via-[#F3E3B6] to-[#D6B56C] hover:from-[#e0be73] hover:to-[#dfbd72] shadow-xs hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
