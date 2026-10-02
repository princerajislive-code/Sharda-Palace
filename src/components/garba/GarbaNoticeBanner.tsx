import React from 'react';
import { AlertTriangle, Clock, XCircle, Sparkles } from 'lucide-react';

interface GarbaNoticeBannerProps {
  isEventEnded: boolean;
}

export const GarbaNoticeBanner: React.FC<GarbaNoticeBannerProps> = ({ isEventEnded }) => {
  if (isEventEnded) {
    return (
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 border-b border-red-700/60 text-white py-3 px-4 sm:px-6 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-xs sm:text-sm font-bold uppercase tracking-wider">
          <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 animate-pulse" />
          <span className="text-red-200">
            EVENT ENDED – TICKET BOOKING CLOSED
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-amber-950 via-[#2A1005] to-amber-950 border-b border-amber-500/30 text-white py-2.5 px-4 sm:px-6 shadow-inner relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center text-xs sm:text-sm font-semibold tracking-wide relative z-10">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
        <span className="font-bold tracking-wider text-amber-200">
          IMPORTANT NOTICE:
        </span>
        <span className="text-amber-100 font-extrabold uppercase tracking-wide">
          TICKETS VALID ONLY ON 17 & 18 OCTOBER 2026
        </span>
        <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-amber-400/90 font-medium bg-amber-900/50 px-2 py-0.5 rounded border border-amber-500/20">
          <Clock className="w-3 h-3" />
          Limited Passes Remaining
        </span>
      </div>
    </div>
  );
};
