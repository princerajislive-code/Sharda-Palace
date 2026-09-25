import heroBannerImage from '../assets/images/regenerated_image_1790330537372.png';

export interface HospitalityImage {
  id: string;
  url: string;
  category: 'BANQUET' | 'TERRACE' | 'RESTAURANT' | 'EVENTS';
  title: string;
  shortCaption: string;
  alt: string;
  featured?: boolean;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'panoramic';
}

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
      url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1400&q=85',
      category: 'EVENTS',
      title: 'Grand Banquet Architecture & Stage Setup',
      shortCaption: 'Spacious celebration space designed for memorable family gatherings',
      alt: 'Luxury hospitality hall interior with illuminated ceremonial stage and banquet tables',
      featured: true,
      aspectRatio: 'landscape',
    },
    accent1: {
      id: 'exp-terrace',
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
      category: 'TERRACE',
      title: 'Open Sky Terrace & Evening Breeze',
      shortCaption: 'Elevated open-air hospitality for evening parties and gatherings',
      alt: 'Open air terrace garden setup with ambient string lighting and outdoor seating',
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
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=85',
      category: 'BANQUET',
      title: 'Ceremonial Elegance & Marriage Hall',
      shortCaption: 'Ideal for marriage functions, tilak, and grand wedding receptions',
      alt: 'Grand wedding reception hall with illuminated floral mandap and guest banquet seating',
      aspectRatio: 'landscape',
    },
    secondary: {
      id: 'banquet-sec',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85',
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
      url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=85',
      category: 'TERRACE',
      title: 'Panoramic Open Sky Terrace',
      shortCaption: 'Breezy open terrace venue for evening parties and starlight receptions',
      alt: 'Panoramic terrace garden lounge with evening lighting under open sky',
      aspectRatio: 'panoramic',
    },
    detail: {
      id: 'terrace-dtl',
      url: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=85',
      category: 'TERRACE',
      title: 'Terrace Evening Ambience',
      shortCaption: 'Relaxed celebrations in the calm breeze of Bhabua',
      alt: 'Festive terrace lighting and lounge chairs in an outdoor garden venue',
      aspectRatio: 'square',
    },
  },

  // Restaurant Section
  restaurant: {
    diningRoom: {
      id: 'rest-room',
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
      category: 'RESTAURANT',
      title: 'Warm Family Dining Room',
      shortCaption: 'Dine-in restaurant serving families and guests around the clock',
      alt: 'Warm and inviting restaurant interior with contemporary booths and family seating',
      aspectRatio: 'landscape',
    },
    tableSetup: {
      id: 'rest-table',
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=85',
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

  // Comprehensive Masonry Gallery Collection
  gallery: [
    {
      id: 'gal-b1',
      url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85',
      category: 'BANQUET',
      title: 'Grand Banquet Celebration Hall',
      shortCaption: 'Spacious celebration hall prepared for weddings and receptions',
      alt: 'Illuminated wedding celebration hall with chandeliers and guest tables',
      featured: true,
      aspectRatio: 'landscape',
    },
    {
      id: 'gal-t1',
      url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85',
      category: 'TERRACE',
      title: 'Open Sky Terrace Garden',
      shortCaption: 'Elevated venue for starlight dining and breezy evening parties',
      alt: 'Wide terrace garden with evening outdoor seating and scenic lighting',
      featured: true,
      aspectRatio: 'panoramic',
    },
    {
      id: 'gal-r1',
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85',
      category: 'RESTAURANT',
      title: 'Comfortable Family Dining Section',
      shortCaption: 'Air-conditioned dining area with 24-hour dine-in and takeaway',
      alt: 'Warm family restaurant interior with tables set for lunch and dinner',
      featured: false,
      aspectRatio: 'square',
    },
    {
      id: 'gal-e1',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85',
      category: 'EVENTS',
      title: 'Wedding Reception Decor & Stage',
      shortCaption: 'Royal gold and floral arrangements for auspicious marital rites',
      alt: 'Celebration table decorated with floral centerpieces and crystal accents',
      featured: true,
      aspectRatio: 'portrait',
    },
    {
      id: 'gal-b2',
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85',
      category: 'BANQUET',
      title: 'Banquet Hall Ceremony Layout',
      shortCaption: 'Ample capacity and stage setup for marriage ceremonies and tilak',
      alt: 'Interior banquet hall decorated for an Indian wedding celebration',
      featured: false,
      aspectRatio: 'landscape',
    },
    {
      id: 'gal-t2',
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85',
      category: 'TERRACE',
      title: 'Terrace Garden Evening Ambiance',
      shortCaption: 'Warm lighting and breezy open atmosphere for family gatherings',
      alt: 'Terrace garden illuminated by string lights at twilight',
      featured: false,
      aspectRatio: 'landscape',
    },
    {
      id: 'gal-e2',
      url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1000&q=85',
      category: 'EVENTS',
      title: 'Family Celebrations & Birthday Parties',
      shortCaption: 'Special arrangement for anniversaries, milestones, and parties',
      alt: 'Festive celebration hall with ambient lighting and event setup',
      featured: false,
      aspectRatio: 'portrait',
    },
    {
      id: 'gal-r2',
      url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=85',
      category: 'RESTAURANT',
      title: 'Restaurant Table Setup & Hospitality',
      shortCaption: 'Continuous 24-hour service for travelers and local residents',
      alt: 'Refined restaurant dining table with cutlery and glassware',
      featured: false,
      aspectRatio: 'square',
    },
    {
      id: 'gal-b3',
      url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=85',
      category: 'BANQUET',
      title: 'Evening Celebration Lighting',
      shortCaption: 'Festive hospitality and memorable moments in Bhabua',
      alt: 'Celebration hall with sparkling festive lighting and elegant ambiance',
      featured: false,
      aspectRatio: 'landscape',
    },
  ],
};
