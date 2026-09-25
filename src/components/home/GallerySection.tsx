import React, { useState, useMemo } from 'react';
import { ZoomIn, Sparkles, Filter } from 'lucide-react';
import { SHARDA_IMAGES, HospitalityImage } from '../../data/images';
import { Lightbox } from '../common/Lightbox';

type GalleryFilter = 'ALL' | 'BANQUET' | 'TERRACE' | 'RESTAURANT' | 'EVENTS';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('ALL');
  const [selectedPhoto, setSelectedPhoto] = useState<HospitalityImage | null>(null);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  const filters: GalleryFilter[] = ['ALL', 'BANQUET', 'TERRACE', 'RESTAURANT', 'EVENTS'];

  const filteredPhotos = useMemo(() => {
    if (activeFilter === 'ALL') {
      return SHARDA_IMAGES.gallery;
    }
    return SHARDA_IMAGES.gallery.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = (photo: HospitalityImage) => {
    const idx = filteredPhotos.findIndex((p) => p.id === photo.id);
    setPhotoIndex(idx >= 0 ? idx : 0);
    setSelectedPhoto(photo);
  };

  const nextPhoto = () => {
    if (photoIndex < filteredPhotos.length - 1) {
      const nextIdx = photoIndex + 1;
      setPhotoIndex(nextIdx);
      setSelectedPhoto(filteredPhotos[nextIdx]);
    }
  };

  const prevPhoto = () => {
    if (photoIndex > 0) {
      const prevIdx = photoIndex - 1;
      setPhotoIndex(prevIdx);
      setSelectedPhoto(filteredPhotos[prevIdx]);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-[#F2F2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2E7D5A] font-sans mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56C]" />
              <span>A GLIMPSE OF SHARDA PALACE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              Moments, Spaces & Celebrations
            </h2>
            <p className="mt-2 text-sm text-stone-600 max-w-xl leading-relaxed">
              Curated architectural hospitality photography representing our celebration hall, terrace garden, and dining atmosphere.
            </p>
          </div>

          {/* Minimal Luxury Filter Bar (ALL | BANQUET | TERRACE | RESTAURANT | EVENTS) */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-stone-200 shadow-2xs overflow-x-auto max-w-full">
            {filters.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3 sm:px-4 py-2 text-xs font-ui font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeFilter === tab
                    ? 'bg-[#1A1A1A] text-white shadow-xs font-semibold'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid: 
            Desktop: Editorial Asymmetric Grid (3 columns with varying spans and aspect ratios)
            Tablet: 2-3 column balanced grid
            Mobile: Clean 2-column grid without aspect distortion
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, idx) => {
            // Asymmetric span assignments for desktop
            let colSpanClass = 'lg:col-span-4';
            let aspectClass = 'aspect-[4/3]';

            if (idx === 0) {
              colSpanClass = 'col-span-2 sm:col-span-2 lg:col-span-8';
              aspectClass = 'aspect-[16/10] sm:aspect-[16/9]';
            } else if (idx === 1) {
              colSpanClass = 'col-span-2 sm:col-span-1 lg:col-span-4';
              aspectClass = 'aspect-[4/3] sm:aspect-[3/4]';
            } else if (idx === 3) {
              colSpanClass = 'col-span-1 sm:col-span-1 lg:col-span-4';
              aspectClass = 'aspect-[3/4]';
            } else if (idx === 4) {
              colSpanClass = 'col-span-1 sm:col-span-2 lg:col-span-8';
              aspectClass = 'aspect-[16/10]';
            }

            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(photo)}
                className={`${colSpanClass} group cursor-pointer relative rounded-[20px] sm:rounded-[22px] overflow-hidden bg-white border border-stone-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Photo container */}
                <div className={`relative ${aspectClass} overflow-hidden bg-stone-100`}>
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Soft subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5">
                    
                    {/* Top category chip */}
                    <div className="self-end">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                        {photo.category}
                      </span>
                    </div>

                    {/* Bottom caption with Zoom indicator */}
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <div className="font-serif text-sm sm:text-base font-bold leading-snug">
                          {photo.title}
                        </div>
                        <div className="text-[11px] text-stone-200 line-clamp-1 font-sans mt-0.5">
                          {photo.shortCaption}
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-md shrink-0 ml-2">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Sub caption on mobile/tablet (always accessible) */}
                <div className="p-3 sm:p-4 bg-white border-t border-stone-100 flex items-center justify-between text-xs">
                  <div className="min-w-0 pr-2">
                    <span className="text-[9px] font-mono text-[#2E7D5A] font-bold uppercase block truncate">
                      {photo.category}
                    </span>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-[#1A1A1A] truncate mt-0.5">
                      {photo.title}
                    </h4>
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono shrink-0">
                    Sharda Palace
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          currentIndex={photoIndex}
          totalCount={filteredPhotos.length}
          onClose={() => setSelectedPhoto(null)}
          onNext={nextPhoto}
          onPrev={prevPhoto}
          hasNext={photoIndex < filteredPhotos.length - 1}
          hasPrev={photoIndex > 0}
        />
      )}
    </section>
  );
};
