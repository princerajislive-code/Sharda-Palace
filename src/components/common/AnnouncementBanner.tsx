import React, { useState } from 'react';
import { Sparkles, X, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AnnouncementBanner: React.FC = () => {
  const { activeAnnouncementText } = useApp();
  const [dismissed, setDismissed] = useState(false);

  if (!activeAnnouncementText || dismissed) {
    return null;
  }

  return (
    <aside aria-label="Seasonal announcement" className="relative z-50 bg-[#FAFAF8] border-b border-[#D6B56C]/30 text-[#1A1A1A] py-2 px-4 text-xs sm:text-sm font-medium transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 flex items-center justify-center gap-2 text-center truncate">
          <Sparkles className="w-3.5 h-3.5 text-[#D6B56C] shrink-0" />
          <span className="truncate font-sans font-medium text-[#1A1A1A]">
            {activeAnnouncementText}
          </span>
          <a
            href="#festivals"
            className="inline-flex items-center gap-1 text-[#2E7D5A] hover:underline font-semibold shrink-0 ml-1"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-stone-400 hover:text-stone-700 p-1 shrink-0 transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
