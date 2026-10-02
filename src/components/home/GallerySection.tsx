import React, { useState, useMemo } from 'react';
import { ZoomIn, Sparkles, Camera, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { GALLERY_SLOTS, GALLERY_CATEGORIES, GalleryCategory, GallerySlot } from '../../data/gallerySlots';
import { Lightbox, LightboxItem } from '../common/Lightbox';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<LightboxItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Track failed / missing images per slot so we show clean placeholders without broken icons
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (slotId: string) => {
    setFailedImages((prev) => (prev[slotId] ? prev : { ...prev, [slotId]: true }));
  };

  // Filter slots by category
  const filteredSlots = useMemo(() => {
    if (activeFilter === 'All') {
      return GALLERY_SLOTS;
    }
    return GALLERY_SLOTS.filter((slot) => slot.category === activeFilter);
  }, [activeFilter]);

  // Loaded photos available for the lightbox
  const activePhotosForLightbox = useMemo(() => {
    return filteredSlots
      .filter((slot) => !failedImages[slot.id])
      .map((slot) => ({
        id: slot.id,
        imagePath: slot.imagePath,
        title: slot.title,
        category: slot.category,
        shortCaption: slot.shortCaption,
        alt: slot.alt,
      }));
  }, [filteredSlots, failedImages]);

  const openLightbox = (slot: GallerySlot) => {
    if (failedImages[slot.id]) return; // Do not open missing placeholders in lightbox
    const idx = activePhotosForLightbox.findIndex((p) => p.id === slot.id);
    if (idx >= 0) {
      setLightboxIndex(idx);
      setSelectedPhoto(activePhotosForLightbox[idx]);
    }
  };

  const nextPhoto = () => {
    if (lightboxIndex < activePhotosForLightbox.length - 1) {
      const nextIdx = lightboxIndex + 1;
      setLightboxIndex(nextIdx);
      setSelectedPhoto(activePhotosForLightbox[nextIdx]);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex > 0) {
      const prevIdx = lightboxIndex - 1;
      setLightboxIndex(prevIdx);
      setSelectedPhoto(activePhotosForLightbox[prevIdx]);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-[#F2F2EF]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2E7D5A] font-sans mb-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56C]" />
              <span>PERMANENT PHOTO GALLERY • 15 SLOTS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              Moments, Spaces & Celebrations
            </h2>
            <p className="mt-2 text-sm text-stone-600 max-w-2xl leading-relaxed">
              Permanent 15-slot visual portfolio of Sharda Palace. Real photographs hosted at <code className="text-xs bg-stone-200/70 text-stone-800 px-1.5 py-0.5 rounded font-mono">public/gallery/photo-01.jpg</code> to <code className="text-xs bg-stone-200/70 text-stone-800 px-1.5 py-0.5 rounded font-mono">photo-15.jpg</code>.
            </p>
          </div>

          {/* Category Filter Bar */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-stone-200 shadow-2xs overflow-x-auto max-w-full scrollbar-none">
            {GALLERY_CATEGORIES.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 sm:px-3.5 py-1.5 text-xs font-ui font-medium rounded-xl transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#1A1A1A] text-white shadow-xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 15 Slots Gallery Grid:
            Mobile: Strict 2-column layout (no horizontal scrolling, clean aspect ratio)
            Tablet: 3-column layout
            Desktop: 3-4 column layout
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {filteredSlots.map((slot) => {
            const isMissing = Boolean(failedImages[slot.id]);

            if (isMissing) {
              // Clean Empty Placeholder Card — Never AI, Never Stock
              return (
                <div
                  key={slot.id}
                  className="group relative rounded-[20px] sm:rounded-[22px] border-2 border-dashed border-stone-300/80 hover:border-[#D6B56C] bg-[#FDFCFB] hover:bg-stone-50 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between items-center text-center shadow-2xs min-h-[240px] sm:min-h-[290px]"
                >
                  {/* Top Badge Info */}
                  <div className="w-full flex items-center justify-between text-[10px] font-mono font-medium text-stone-400">
                    <span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-semibold">
                      Slot {slot.slotNumber.toString().padStart(2, '0')}
                    </span>
                    <span className="text-stone-500 font-sans truncate max-w-[100px]">
                      {slot.category}
                    </span>
                  </div>

                  {/* Center Camera Icon & Prompt */}
                  <div className="my-auto flex flex-col items-center py-2 sm:py-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-stone-100/80 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-[#2E7D5A] group-hover:bg-emerald-50/60 group-hover:border-emerald-200 transition-all duration-300 shadow-2xs mb-2 sm:mb-3">
                      <Camera className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" />
                    </div>
                    <h3 className="font-serif text-xs sm:text-sm font-bold text-stone-800 leading-snug px-1">
                      {slot.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 font-sans mt-1 line-clamp-2 px-1">
                      {slot.shortCaption}
                    </p>
                  </div>

                  {/* Bottom Path Instruction */}
                  <div className="w-full pt-2 border-t border-stone-200/60 flex items-center justify-center gap-1.5 text-[10px] text-stone-400 font-mono">
                    <span className="truncate">{slot.imagePath}</span>
                  </div>

                  {/* Hidden image element to detect when user adds the file */}
                  <img
                    src={slot.imagePath}
                    alt=""
                    className="hidden"
                    onError={() => handleImageError(slot.id)}
                    onLoad={() => {
                      setFailedImages((prev) => {
                        const copy = { ...prev };
                        delete copy[slot.id];
                        return copy;
                      });
                    }}
                  />
                </div>
              );
            }

            // Populated Slot Card with Real Photograph
            return (
              <div
                key={slot.id}
                onClick={() => openLightbox(slot)}
                className="group cursor-pointer relative rounded-[20px] sm:rounded-[22px] overflow-hidden bg-white border border-stone-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with strict aspect ratio — No Distortion */}
                <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={slot.imagePath}
                    alt={slot.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(slot.id)}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-xs">
                      {slot.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-amber-200 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-amber-300/30 shadow-xs">
                      #{slot.slotNumber.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 pr-2">
                        <div className="font-serif text-xs sm:text-sm font-bold truncate">
                          {slot.title}
                        </div>
                        <div className="text-[10px] text-stone-200 line-clamp-1 font-sans">
                          {slot.shortCaption}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-lg shrink-0">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Always-Visible Bottom Caption */}
                <div className="p-3 sm:p-4 bg-white border-t border-stone-100 flex items-center justify-between text-xs">
                  <div className="min-w-0 pr-2">
                    <span className="text-[9px] font-mono text-[#2E7D5A] font-bold uppercase block truncate">
                      Slot {slot.slotNumber.toString().padStart(2, '0')} • {slot.category}
                    </span>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-[#1A1A1A] truncate mt-0.5">
                      {slot.title}
                    </h4>
                  </div>
                  <span className="text-[10px] text-[#D6B56C] font-mono shrink-0 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-[#2E7D5A]" />
                    <span>Real</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note footer */}
        <div className="mt-8 pt-4 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All 15 slots reference real project files in <code className="font-mono text-stone-700 bg-stone-100 px-1 py-0.5 rounded">/public/gallery/</code></span>
          </div>
          <div className="text-stone-400 font-mono text-[11px]">
            Showing {filteredSlots.length} of 15 permanent photo slots
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          currentIndex={lightboxIndex}
          totalCount={activePhotosForLightbox.length}
          onClose={() => setSelectedPhoto(null)}
          onNext={nextPhoto}
          onPrev={prevPhoto}
          hasNext={lightboxIndex < activePhotosForLightbox.length - 1}
          hasPrev={lightboxIndex > 0}
        />
      )}
    </section>
  );
};
