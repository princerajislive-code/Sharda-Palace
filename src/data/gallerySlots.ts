export type GalleryCategory =
  | 'All'
  | 'Selfie Points'
  | 'Marriage Hall'
  | 'Rooms'
  | 'Rooftop Restaurant'
  | 'Festivals'
  | 'Mehendi'
  | 'Haldi'
  | 'Birthday'
  | 'Place';

export interface GallerySlot {
  id: string;
  slotNumber: number;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  imagePath: string;
  shortCaption: string;
  alt: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Selfie Points',
  'Marriage Hall',
  'Rooms',
  'Rooftop Restaurant',
  'Festivals',
  'Mehendi',
  'Haldi',
  'Birthday',
  'Place',
];

/**
 * 15 Permanent Photo Slots for Sharda Palace
 * All photos are permanently mapped to fixed public files in public/gallery/
 * e.g. /gallery/photo-01.jpg through /gallery/photo-15.jpg
 */
export const GALLERY_SLOTS: GallerySlot[] = [
  {
    id: 'slot-01',
    slotNumber: 1,
    title: 'Selfie Point — Photo 1',
    category: 'Selfie Points',
    imagePath: '/gallery/photo-01.jpg',
    shortCaption: 'Commemorative selfie spot and decorative photo installation',
    alt: 'Selfie Point Photo 1 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-02',
    slotNumber: 2,
    title: 'Selfie Point — Photo 2',
    category: 'Selfie Points',
    imagePath: '/gallery/photo-02.jpg',
    shortCaption: 'Celebratory backdrop and themed photo corner for guests',
    alt: 'Selfie Point Photo 2 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-03',
    slotNumber: 3,
    title: 'Marriage Hall — Photo 3',
    category: 'Marriage Hall',
    imagePath: '/gallery/photo-03.jpg',
    shortCaption: 'Grand banquet celebration hall with VIP sofa lounge and ornate ceiling',
    alt: 'Marriage Hall Photo 3 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-04',
    slotNumber: 4,
    title: 'Marriage Hall — Photo 4',
    category: 'Marriage Hall',
    imagePath: '/gallery/photo-04.jpg',
    shortCaption: 'Royal wedding stage with floral backdrop, throne seating, and ceremonial aisle',
    alt: 'Marriage Hall Photo 4 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-05',
    slotNumber: 5,
    title: 'Room — Photo 5',
    category: 'Rooms',
    imagePath: '/gallery/photo-05.jpg',
    shortCaption: 'Comfortable guest accommodations with modern amenities',
    alt: 'Room Photo 5 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-06',
    slotNumber: 6,
    title: 'Room — Photo 6',
    category: 'Rooms',
    imagePath: '/gallery/photo-06.jpg',
    shortCaption: 'Peaceful stay and hospitality suites for families and guests',
    alt: 'Room Photo 6 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-07',
    slotNumber: 7,
    title: 'THE TERRACE GARDEN ROOFTOP RESTAURANT — Photo 7',
    category: 'Rooftop Restaurant',
    imagePath: '/gallery/photo-07.jpg',
    shortCaption: 'Open-air panoramic dining and starlight garden terrace',
    alt: 'The Terrace Garden Rooftop Restaurant Photo 7 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-08',
    slotNumber: 8,
    title: 'THE TERRACE GARDEN ROOFTOP RESTAURANT — Photo 8',
    category: 'Rooftop Restaurant',
    imagePath: '/gallery/photo-08.jpg',
    shortCaption: 'Evening rooftop ambiance with cozy lanterns and sky views',
    alt: 'The Terrace Garden Rooftop Restaurant Photo 8 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-09',
    slotNumber: 9,
    title: 'Festival — Photo 9',
    category: 'Festivals',
    imagePath: '/gallery/photo-09.jpg',
    shortCaption: 'Auspicious festive celebrations and seasonal grand events',
    alt: 'Festival Photo 9 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-10',
    slotNumber: 10,
    title: 'Mehendi — Photo 10',
    category: 'Mehendi',
    imagePath: '/gallery/photo-10.jpg',
    shortCaption: 'Vibrant mehendi ceremony setup with traditional floral styling',
    alt: 'Mehendi Ceremony Photo 10 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-11',
    slotNumber: 11,
    title: 'Haldi — Photo 11',
    category: 'Haldi',
    imagePath: '/gallery/photo-11.jpg',
    shortCaption: 'Joyful haldi ceremony ambiance with marigold decor',
    alt: 'Haldi Ceremony Photo 11 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-12',
    slotNumber: 12,
    title: 'Birthday — Photo 12',
    category: 'Birthday',
    imagePath: '/gallery/photo-12.jpg',
    shortCaption: 'Milestone birthdays and energetic celebration parties',
    alt: 'Birthday Celebration Photo 12 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-13',
    slotNumber: 13,
    title: 'Place / Venue — Photo 13',
    category: 'Place',
    imagePath: '/gallery/photo-13.jpg',
    shortCaption: 'Architectural facade and main landmark exterior of Sharda Palace',
    alt: 'Place Venue Photo 13 at Sharda Palace, Bhabua',
  },
  {
    id: 'slot-14',
    slotNumber: 14,
    title: 'Reception Lobby — Sharda Palace',
    category: 'Place',
    imagePath: '/gallery/photo-14.jpg',
    shortCaption: 'Grand reception counter, world clocks, chandelier, and welcoming front desk',
    alt: 'Welcome Sharda Palace Hotel & Banquet Reception Lobby in Bhabua',
  },
  {
    id: 'slot-15',
    slotNumber: 15,
    title: 'Grand Palace Illuminated Facade — Sharda Palace',
    category: 'Place',
    imagePath: '/gallery/photo-15.jpg',
    shortCaption: 'Grand neoclassical palace architecture illuminated with festive cascading lights at night',
    alt: 'Sharda Palace Hotel and Banquet grand illuminated exterior facade at night in Bhabua',
  },
];
