import heroBannerImage from '../assets/images/regenerated_image_1790330537372.png';
import terracePanoramicImage from '../assets/images/regenerated_image_1790915258797.jpg';
import terraceNightDiningImage from '../assets/images/terrace_night_dining_1790915531763.jpg';
import experienceTerraceImage from '../assets/images/regenerated_image_1790915639650.jpg';
import experienceMainImage from '../assets/images/regenerated_image_1790915979353.jpg';
import banquetHallPrimaryImage from '../assets/images/regenerated_image_1790916661592.jpg';
import banquetHallSecondaryImage from '../assets/images/regenerated_image_1790916884420.jpg';
import restaurantDiningRoomImage from '../assets/images/regenerated_image_1790917054090.jpg';
import restaurantTableSetupImage from '../assets/images/regenerated_image_1790917329916.jpg';
import banquetSofaSeatingPhoto from '../assets/images/banquet_sofa_seating_1790921784539.jpg';
import banquetHallStagePhoto from '../assets/images/banquet_hall_stage_1790917834252.jpg';

export interface HospitalityImage {
  id: string;
  url: string;
  category: string;
  categories?: string[];
  title: string;
  shortCaption: string;
  alt: string;
  featured?: boolean;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'panoramic';
}

export interface GalleryCategoryDef {
  id: string;
  name: string;
  emoji: string;
  description: string;
  bulletPoints: string[];
}

export const GALLERY_CATEGORIES: GalleryCategoryDef[] = [
  {
    id: 'ALL',
    name: 'All',
    emoji: '✨',
    description: 'Every Celebration Has a Story — Explore Ours.',
    bulletPoints: ['Luxury event destination', 'Grand banquet & terrace', 'Curated memories'],
  },
  {
    id: 'SELFIE_POINTS',
    name: 'Selfie Points',
    emoji: '✨',
    description: 'Stylish selfie/photo spots & Instagram-worthy decorative corners',
    bulletPoints: [
      'Stylish selfie/photo spots',
      'Decorative backgrounds & floral arches',
      'Couple photo points',
      'Instagram-worthy corners',
      'Elegant lighting and décor',
    ],
  },
  {
    id: 'MARRIAGE_HALL',
    name: 'Marriage Hall',
    emoji: '💍',
    description: 'Grand air-conditioned wedding banquet hall with ceremonial stages',
    bulletPoints: [
      'Main marriage hall',
      'Stage decoration & floral backdrops',
      'Wedding setups & tilak arrangements',
      'Seating arrangements & VIP sofas',
      'Entrance and interior views',
      'Different wedding themes and decorations',
    ],
  },
  {
    id: 'ROOMS',
    name: 'Rooms',
    emoji: '🛏️',
    description: 'Serene, clean and comfortable guest accommodations',
    bulletPoints: [
      'Room interiors',
      'Comfortable beds & fresh linen',
      'Premium room details',
      'Bathroom/interior details',
      'Clean and comfortable accommodation views',
    ],
  },
  {
    id: 'TERRACE_ROOFTOP',
    name: 'The Terrace Garden Rooftop Restaurant',
    emoji: '🌿',
    description: 'Open-air rooftop dining, starlight ambience & panoramic city views',
    bulletPoints: [
      'Rooftop restaurant',
      'Terrace garden setting',
      'Dining area & family seating',
      'Evening ambience & cool breeze',
      'Rooftop views across Bhabua',
      'Food and dining moments',
      'Beautiful night lighting',
    ],
  },
  {
    id: 'FESTIVALS',
    name: 'Festivals & Celebrations',
    emoji: '🎉',
    description: 'Festive decorations, cultural nights and joyful gatherings',
    bulletPoints: [
      'Festival decorations',
      'Special events & galas',
      'Cultural celebrations',
      'Festive lighting displays',
      'Crowd and celebration moments',
    ],
  },
  {
    id: 'MEHENDI',
    name: 'Mehendi',
    emoji: '🌿',
    description: 'Intimate pre-wedding ceremonies with traditional green floral décor',
    bulletPoints: [
      'Mehendi ceremony setups',
      'Mehendi decoration themes',
      'Bride and guests seating',
      'Floral décor & festive ambiance',
      'Traditional celebration moments',
    ],
  },
  {
    id: 'HALDI',
    name: 'Haldi',
    emoji: '🌼',
    description: 'Joyous yellow-themed ritual ceremonies with marigold accents',
    bulletPoints: [
      'Haldi ceremony mandap',
      'Yellow-themed décor & marigold florals',
      'Bride/Groom memorable moments',
      'Floral decorations & photogenic props',
      'Family celebration and rituals',
    ],
  },
  {
    id: 'BIRTHDAY',
    name: 'Birthday Celebrations',
    emoji: '🎂',
    description: 'Milestone birthdays, cake cutting tables and balloon party decor',
    bulletPoints: [
      'Birthday decorations',
      'Cake cutting table stage',
      'Birthday setups with theme accents',
      'Balloon and lighting décor',
      'Family and friends joyous moments',
    ],
  },
  {
    id: 'VENUE',
    name: 'Place & Venue',
    emoji: '📍',
    description: 'Landmark architecture, entrance facade and venue premises',
    bulletPoints: [
      'Exterior building photos',
      'Main entrance & facade',
      'Venue surroundings & parking',
      'Garden/terrace views',
      'Important venue areas',
      'Overall property photography',
    ],
  },
];

/**
 * Centralized Hospitality Photography Collection for Sharda Palace.
 * 
 * Note for client/administrators:
 * Replace any image URL below with real uploaded photographs of Sharda Palace premises.
 * The layout automatically adapts without requiring any template or code modifications.
 */
export const SHARDA_IMAGES: {
  hero: HospitalityImage;
  experience: {
    main: HospitalityImage;
    accent1: HospitalityImage;
    accent2: HospitalityImage;
  };
  banquet: {
    primary: HospitalityImage;
    secondary: HospitalityImage;
  };
  terrace: {
    panoramic: HospitalityImage;
    detail: HospitalityImage;
  };
  restaurant: {
    diningRoom: HospitalityImage;
    tableSetup: HospitalityImage;
    culinary: HospitalityImage;
  };
  gallery: HospitalityImage[];
} = {
  // Hero Section Primary Cinematic Visual
  hero: {
    id: 'hero-banner',
    url: heroBannerImage,
    category: 'BANQUET',
    title: 'Grand Celebrations at Sharda Palace',
    shortCaption: 'Banquet Hall & Event Grandeur in Bhabua',
    alt: 'Luxury wedding celebration banquet hall setup at Sharda Palace, Bhabua',
    featured: true,
    aspectRatio: 'landscape',
  },

  // The Experience Editorial Section (1 Large + 2 Supporting Overlapping)
  experience: {
    main: {
      id: 'exp-main',
      url: experienceMainImage,
      category: 'EVENTS',
      title: 'Grand Banquet Architecture & Stage Setup',
      shortCaption: 'Spacious celebration space designed for memorable family gatherings',
      alt: 'Luxury hospitality hall interior with illuminated ceremonial stage and banquet tables',
      featured: true,
      aspectRatio: 'landscape',
    },
    accent1: {
      id: 'exp-terrace',
      url: experienceTerraceImage,
      category: 'TERRACE',
      title: 'The Terrace Garden Rooftop Restaurant',
      shortCaption: 'Elevated open-air hospitality for evening parties and starlight dining',
      alt: 'Open air terrace garden setup with ambient lighting and outdoor seating at Sharda Palace',
      featured: false,
      aspectRatio: 'square',
    },
    accent2: {
      id: 'exp-dining',
      url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=85',
      category: 'RESTAURANT',
      title: 'Refined Dining & Banquet Feasts',
      shortCaption: 'Warm dining hospitality with dine-in and takeaway service 24 hours',
      alt: 'Elegantly arranged dining table with glassware, warm lighting, and fine place settings',
      featured: false,
      aspectRatio: 'portrait',
    },
  },

  // Banquet Hall Dedicated Showcase
  banquet: {
    primary: {
      id: 'banquet-pri',
      url: banquetHallPrimaryImage,
      category: 'BANQUET',
      title: 'Ceremonial Elegance & Marriage Hall',
      shortCaption: 'Ideal for marriage functions, tilak, and grand wedding receptions',
      alt: 'Grand wedding reception hall with illuminated floral mandap and guest banquet seating',
      aspectRatio: 'landscape',
    },
    secondary: {
      id: 'banquet-sec',
      url: banquetHallSecondaryImage,
      category: 'BANQUET',
      title: 'Refined Table Arrangements & Centerpieces',
      shortCaption: 'Attentive details crafted for gracious Indian family hospitality',
      alt: 'Close-up of golden tableware and floral centerpiece on banquet dining table',
      aspectRatio: 'portrait',
    },
  },

  // Terrace Garden Showcase
  terrace: {
    panoramic: {
      id: 'terrace-pano',
      url: terracePanoramicImage,
      category: 'TERRACE',
      title: 'The Terrace Garden Rooftop Restaurant',
      shortCaption: 'Breezy open terrace venue for evening parties and starlight dining',
      alt: 'The Terrace Garden Rooftop Restaurant at Sharda Palace, Bhabua',
      aspectRatio: 'panoramic',
    },
    detail: {
      id: 'terrace-dtl',
      url: terraceNightDiningImage,
      category: 'TERRACE',
      title: 'Night Dining Ambiance',
      shortCaption: 'Starlight canopy, fairy lights & open-air family dining tables',
      alt: 'Festive terrace night dining at Sharda Palace, Bhabua',
      aspectRatio: 'portrait',
    },
  },

  // Restaurant Section
  restaurant: {
    diningRoom: {
      id: 'rest-room',
      url: restaurantDiningRoomImage,
      category: 'RESTAURANT',
      title: 'Warm Family Dining Room',
      shortCaption: 'Dine-in restaurant serving families and guests around the clock',
      alt: 'Warm and inviting restaurant interior with contemporary booths and family seating',
      aspectRatio: 'landscape',
    },
    tableSetup: {
      id: 'rest-table',
      url: restaurantTableSetupImage,
      category: 'RESTAURANT',
      title: 'Attentive Table Hospitality',
      shortCaption: 'Clean, comfortable dining prepared for daily meals and private feasts',
      alt: 'Modern restaurant dining setting with polished wooden tables and ambient lighting',
      aspectRatio: 'square',
    },
    culinary: {
      id: 'rest-culinary',
      url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=85',
      category: 'RESTAURANT',
      title: 'Dine-in & Takeaway Preparations',
      shortCaption: 'Freshly prepared dishes available for dine-in or packaged takeaway',
      alt: 'Authentic Indian celebratory feast dishes gracefully presented',
      aspectRatio: 'portrait',
    },
  },

  // Comprehensive Luxury Masonry Gallery Collection
  gallery: [
    {
      id: 'gal-b-lounge',
      url: banquetSofaSeatingPhoto,
      category: 'MARRIAGE_HALL',
      categories: ['MARRIAGE_HALL', 'SELFIE_POINTS'],
      title: 'Grand Banquet VIP Sofa Lounge & Stage',
      shortCaption: 'Illuminated filigree ceiling, VIP velvet lounge sofas, and ceremonial stage',
      alt: 'Grand Banquet Hall with luxury white and maroon sofa seating, reflective marble floor, and decorated stage',
      featured: true,
      aspectRatio: 'landscape',
    },
    {
      id: 'gal-t-pano',
      url: terracePanoramicImage,
      category: 'TERRACE_ROOFTOP',
      categories: ['TERRACE_ROOFTOP', 'SELFIE_POINTS', 'VENUE'],
      title: 'The Terrace Garden Rooftop Restaurant',
      shortCaption: 'Breezy open-sky rooftop dining with starlight panoramic city views',
      alt: 'The Terrace Garden Rooftop Restaurant panoramic view at Sharda Palace, Bhabua',
      featured: true,
      aspectRatio: 'panoramic',
    },
    {
      id: 'gal-b-stage',
      url: banquetHallStagePhoto,
      category: 'MARRIAGE_HALL',
      categories: ['MARRIAGE_HALL', 'SELFIE_POINTS'],
      title: 'Royal Wedding Stage & Floral Backdrop',
      shortCaption: 'Elevated ceremonial stage with lush floral arch, couple throne couch, and umbrella lighting',
      alt: 'Decorated wedding stage with floral backdrop and royal throne sofa at Sharda Palace, Bhabua',
      featured: true,
      aspectRatio: 'landscape',
    },
    {
      id: 'gal-t-night',
      url: terraceNightDiningImage,
      category: 'TERRACE_ROOFTOP',
      categories: ['TERRACE_ROOFTOP', 'SELFIE_POINTS'],
      title: 'Starlight Evening Rooftop Ambience',
      shortCaption: 'Ambient evening dining beneath glowing overhead lanterns and open night canopy',
      alt: 'The Terrace Garden Rooftop Restaurant at night with ambient lighting at Sharda Palace',
      featured: true,
      aspectRatio: 'portrait',
    },
    {
      id: 'gal-v-facade',
      url: heroBannerImage,
      category: 'VENUE',
      categories: ['VENUE'],
      title: 'Sharda Palace Landmark Architecture',
      shortCaption: 'Multi-storey grand venue facade located on Mohania-Bhabua Road',
      alt: 'Grand exterior building facade of Sharda Palace, Bhabua',
      featured: true,
      aspectRatio: 'landscape',
    },
    {
      id: 'gal-t-garden',
      url: experienceTerraceImage,
      category: 'TERRACE_ROOFTOP',
      categories: ['TERRACE_ROOFTOP', 'SELFIE_POINTS'],
      title: 'Terrace Garden Scenic Photo Corner',
      shortCaption: 'Charming rooftop garden gazebo setting perfect for family photography and breezy meals',
      alt: 'Terrace garden open dining area at Sharda Palace',
      featured: false,
      aspectRatio: 'landscape',
    },
    {
      id: 'gal-b-hallway',
      url: banquetHallPrimaryImage,
      category: 'MARRIAGE_HALL',
      categories: ['MARRIAGE_HALL', 'VENUE'],
      title: 'Marriage Hall Main Banquet Layout',
      shortCaption: 'Expansive air-conditioned celebration hall with central aisle and formal ceremony seating',
      alt: 'Banquet hall interior ceremony layout at Sharda Palace',
      featured: false,
      aspectRatio: 'landscape',
    },
    {
      id: 'gal-t-table',
      url: restaurantTableSetupImage,
      category: 'TERRACE_ROOFTOP',
      categories: ['TERRACE_ROOFTOP', 'VENUE'],
      title: 'Refined Table Presentation & Hospitality',
      shortCaption: 'Impeccable table arrangements, fresh culinary delicacies, and attentive guest service',
      alt: 'Restaurant and celebration dining table setup at Sharda Palace',
      featured: false,
      aspectRatio: 'landscape',
    },
    {
      id: 'gal-v-interior',
      url: experienceMainImage,
      category: 'VENUE',
      categories: ['VENUE'],
      title: 'Comfortable Hospitality & Reception Spaces',
      shortCaption: 'Welcoming celebration spaces and dedicated areas for wedding party families',
      alt: 'Hospitality spaces and banquet dining area at Sharda Palace',
      featured: false,
      aspectRatio: 'landscape',
    },
  ],
};
