import garbaPosterImage from '../assets/images/garba_night_poster_1790928271345.jpg';
import garbaDancersImage from '../assets/images/garba_dancers_art_1790928286318.jpg';

export interface TicketTypeInfo {
  id: '1_day' | '2_days';
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  validity: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
}

export const GARBA_EVENT_DATA = {
  eventName: 'GARBA NIGHT 4.0',
  subHeading: 'The Grandest Dandiya & Garba Celebration in Bhabua, Kaimur',
  edition: '4.0',
  dates: '17 & 18 October 2026',
  dateDay1: '17 October 2026',
  dateDay2: '18 October 2026',
  timings: '6:00 PM to 11:30 PM',
  venue: 'Sharda Palace Hotel & Banquet, Bhabua, Kaimur (Bihar)',
  contactPhone: '9955986296',
  whatsappNumber: '9955986296',
  fullAddress: 'Sharda Palace, NH-219 / Mohania-Bhabua Road, Bhabua, Kaimur, Bihar - 821101',
  googleMapsUrl: 'https://maps.google.com/?q=Sharda+Palace+Bhabua+Kaimur',
  
  // Date thresholds
  eventStartDate: new Date('2026-10-17T18:00:00+05:30'),
  eventEndDate: new Date('2026-10-18T23:59:59+05:30'),
  
  images: {
    heroPoster: garbaPosterImage,
    dancersArt: garbaDancersImage,
  },

  tickets: [
    {
      id: '1_day',
      name: '1 Day Pass',
      tagline: 'Single Day Grand Celebration Entry',
      price: 149,
      originalPrice: 199,
      validity: 'Valid for either 17 October OR 18 October 2026',
      badge: 'Flexible Day Pass',
      isPopular: false,
      features: [
        'Single Person Entry for 1 Selected Day',
        'High-Energy Live DJ & Dandiya Beats',
        'Entry to Grand Navratri Dance Arena',
        'Dandiya Sticks Available at Venue',
        'Access to Festive Food & Drink Stalls',
        'Eligible for Daily Best Dancer Contest',
      ],
    },
    {
      id: '2_days',
      name: '2 Days Pass',
      tagline: 'Full Event 2-Day Extravaganza Pass',
      price: 249,
      originalPrice: 399,
      validity: 'Valid for BOTH 17 and 18 October 2026',
      badge: '⭐ Best Value (Save ₹49)',
      isPopular: true,
      features: [
        'Complete Access for Both 17 & 18 October',
        'Two Nights of Non-stop Garba Celebration',
        'Priority VIP Entry Check-in Lane',
        'Eligible for Grand Finale Mega Trophy & Gifts',
        'Access to Exclusive Photo Booths',
        'Maximum Savings & Festival Experience',
      ],
    },
  ] as TicketTypeInfo[],

  rules: [
    'Tickets are strictly valid only on 17 & 18 October 2026.',
    '1 Day Pass holders can enter on either 17 October OR 18 October as chosen in the booking.',
    '2 Days Pass holders enjoy entry on both nights (17 & 18 October).',
    'Booking will be automatically disabled after 18 October 2026.',
    'Traditional festive dress (Kurta/Chaniya Choli) recommended for prize consideration.',
    'Family, couple, and female safe environment with dedicated security.',
  ],

  highlights: [
    {
      title: 'High-Bass Live DJ & Folk Beats',
      description: 'Non-stop Gujarati Garba, Bollywood, and festive fusion beats curated by top DJs.',
      icon: 'music',
    },
    {
      title: 'Grand Palace Dance Arena',
      description: 'Opulent illumination, LED walls, and spacious dance floor at Sharda Palace.',
      icon: 'sparkles',
    },
    {
      title: 'Mega Prizes & Trophies',
      description: 'Awards for Best Dressed Couple, Best Garba Performer, and Best Group.',
      icon: 'trophy',
    },
    {
      title: 'Dandiya Sticks on Venue',
      description: 'Premium wooden and illuminated dandiya sticks available at convenience counters.',
      icon: 'flame',
    },
    {
      title: 'Festive Food & Refreshments',
      description: 'Hygienic Navratri fast specials, chaat, mocktails, and live culinary counters.',
      icon: 'utensils',
    },
    {
      title: '100% Safe & Family Friendly',
      description: 'Zero alcohol policy, strict CCTV monitoring, and dedicated family security.',
      icon: 'shield',
    },
  ],
};
