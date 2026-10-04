export type RoomTier = 'DELUXE' | 'STANDARD';
export type RoomACType = 'AC' | 'NON-AC';
export type RoomFilterType = 'ALL' | 'AC' | 'NON-AC' | 'DELUXE' | 'STANDARD';

export interface RoomItem {
  id: string;
  name: string;
  tier: RoomTier;
  acType: RoomACType;
  capacityText: string;
  maxGuests: number;
  shortDescription: string;
  amenities: string[];
  imagePath: string;
  imageAlt: string;
  // Price per night ONLY if an actual verified price exists in the project;
  // otherwise null/undefined and clearly labeled 'Tariff on Request' without inventing fake prices.
  pricePerNight: number | null;
  tariffLabel: string;
}

/**
 * 4 Verified Room Categories for Sharda Palace Hotel & Banquet:
 * 1. DELUXE AC ROOM
 * 2. STANDARD AC ROOM
 * 3. DELUXE NON-AC ROOM
 * 4. STANDARD NON-AC ROOM
 *
 * Utilizes ONLY authentic project assets from public/gallery/photo-05.jpg and photo-06.jpg
 * and verified descriptions from the Sharda Palace project documentation.
 */
export const SHARDA_ROOMS: RoomItem[] = [
  {
    id: 'deluxe-ac',
    name: 'DELUXE AC ROOM',
    tier: 'DELUXE',
    acType: 'AC',
    capacityText: '2 Guests',
    maxGuests: 2,
    shortDescription: 'Serene, air-conditioned guest accommodation with modern hospitality amenities and comfortable bedding.',
    amenities: [
      'Air Conditioning',
      'Comfortable Bed & Fresh Linen',
      'Attached Clean Bathroom',
      'Peaceful Stay Interiors',
    ],
    imagePath: '/gallery/photo-05.jpg',
    imageAlt: 'Deluxe AC Room interior at Sharda Palace Hotel & Banquet, Bhabua',
    pricePerNight: null,
    tariffLabel: 'Tariff on Request',
  },
  {
    id: 'standard-ac',
    name: 'STANDARD AC ROOM',
    tier: 'STANDARD',
    acType: 'AC',
    capacityText: '2 Guests',
    maxGuests: 2,
    shortDescription: 'Comfortable air-conditioned hospitality suite designed for visiting families, wedding guests, and peaceful stays.',
    amenities: [
      'Air Conditioning',
      'Comfortable Bed & Fresh Linen',
      'Attached Clean Bathroom',
      'Hospitality Suite Setup',
    ],
    imagePath: '/gallery/photo-06.jpg',
    imageAlt: 'Standard AC Room accommodation at Sharda Palace, Bhabua',
    pricePerNight: null,
    tariffLabel: 'Tariff on Request',
  },
  {
    id: 'deluxe-non-ac',
    name: 'DELUXE NON-AC ROOM',
    tier: 'DELUXE',
    acType: 'NON-AC',
    capacityText: '2 Guests',
    maxGuests: 2,
    shortDescription: 'Spacious non-AC deluxe room accommodation featuring fresh linen, attached bathroom, and peaceful atmosphere.',
    amenities: [
      'Ceiling Fan & Good Ventilation',
      'Comfortable Bed & Fresh Linen',
      'Attached Clean Bathroom',
      'Clean & Well-Maintained Room',
    ],
    imagePath: '/gallery/photo-05.jpg',
    imageAlt: 'Deluxe Non-AC Room accommodation at Sharda Palace, Bhabua',
    pricePerNight: null,
    tariffLabel: 'Tariff on Request',
  },
  {
    id: 'standard-non-ac',
    name: 'STANDARD NON-AC ROOM',
    tier: 'STANDARD',
    acType: 'NON-AC',
    capacityText: '2 Guests',
    maxGuests: 2,
    shortDescription: 'Convenient non-AC guest room ideal for function attendees, family gatherings, and comfortable overnight stays.',
    amenities: [
      'Ceiling Fan Ventilation',
      'Comfortable Bed & Fresh Linen',
      'Attached Clean Bathroom',
      'Serene Guest Accommodation',
    ],
    imagePath: '/gallery/photo-06.jpg',
    imageAlt: 'Standard Non-AC Room at Sharda Palace Hotel & Banquet, Bhabua',
    pricePerNight: null,
    tariffLabel: 'Tariff on Request',
  },
];
