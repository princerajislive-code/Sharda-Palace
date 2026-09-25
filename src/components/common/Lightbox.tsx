import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Sparkles } from 'lucide-react';
import { HospitalityImage } from '../../data/images';

interface LightboxProps {
  photo: HospitalityImage | null;
  currentIndex: number;
  totalCount: number;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photo,
  currentIndex,
  totalCount,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => {
  const [isZoomed, setIsZoomed] = React.useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;

    // Minimum swipe threshold 50px
    if (diffX > 50 && onNext && hasNext) {
      onNext();
    } else if (diffX < -50 && onPrev && hasPrev) {
      onPrev();
    }
    touchStartXRef.current = null;
  };

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image preview"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none animate-in fade-in duration-200"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-between bg-white rounded-[22px] overflow-hidden shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between px-5 py-3.5 border-b border-stone-200 bg-white">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-[#2E7D5A] bg-emerald-50 px-2.5 py-0.5 rounded">
              {photo.category}
            </span>
            <span className="text-stone-300">|</span>
            <h3 className="font-serif text-xs sm:text-sm font-bold text-[#1A1A1A] truncate max-w-xs sm:max-w-md">
              {photo.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Index count */}
            <span className="text-xs font-mono text-stone-400">
              {(currentIndex + 1).toString().padStart(2, '0')} / {totalCount.toString().padStart(2, '0')}
            </span>

            {/* Zoom toggle */}
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
              className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              title={isZoomed ? 'Zoom Out' : 'Zoom In'}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close preview"
              className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport */}
        <div className="relative w-full min-h-[300px] max-h-[70vh] flex items-center justify-center p-4 sm:p-6 bg-[#FAFAF8] overflow-hidden">
          <img
            src={photo.url}
            alt={photo.alt}
            className={`max-h-full max-w-full object-contain rounded-lg transition-transform duration-300 shadow-xs ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Left / Right Nav buttons */}
          {hasPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev?.();
              }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white text-stone-800 shadow-lg transition-all focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext?.();
              }}
              aria-label="Next image"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white text-stone-800 shadow-lg transition-all focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Bottom Caption Bar */}
        <div className="w-full px-5 py-3 bg-white border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-600 gap-2">
          <p className="font-sans text-stone-600">{photo.shortCaption}</p>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#D6B56C] shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SHARDA PALACE • BHABUA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
