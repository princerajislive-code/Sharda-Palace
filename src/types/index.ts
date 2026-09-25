export type EventCategory = 
  | 'Festival'
  | 'Seasonal'
  | 'Special Event'
  | 'Wedding'
  | 'Restaurant'
  | 'Banquet';

export interface FestivalEvent {
  id: string;
  name: string;
  hindiName?: string;
  startDate: string; // ISO date 'YYYY-MM-DD'
  endDate: string;   // ISO date 'YYYY-MM-DD'
  shortDescription: string;
  bannerImage?: string;
  ctaText: string;
  ctaLink: string;
  active: boolean;
  featured: boolean;
  category: EventCategory;
  createdAt: string;
}

export type EventType = 
  | 'Marriage Function'
  | 'Banquet Event'
  | 'Terrace Garden Party'
  | 'Family Gathering'
  | 'Birthday Celebration'
  | 'Anniversary'
  | 'Restaurant Private Dining'
  | 'Corporate Gathering'
  | 'Other';

export interface BookingEnquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  eventType: EventType;
  eventDate: string; // YYYY-MM-DD
  timeSlot: 'Morning' | 'Afternoon' | 'Evening' | 'Full Day';
  guests: string;
  specialRequest?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  relativeTime: string;
  text: string;
  eventType?: string;
  verifiedGoogleReview: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'All' | 'Banquet Hall' | 'Terrace Garden' | 'Restaurant' | 'Celebrations';
  description: string;
  imageUrl: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface MenuItemDraft {
  id: string;
  name: string;
  category: string;
  description: string;
  isVegetarian: boolean;
  status: 'Draft' | 'Upcoming';
}
