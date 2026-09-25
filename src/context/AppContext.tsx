import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { FestivalEvent, BookingEnquiry, GalleryPhoto, ReviewItem } from '../types';
import { INITIAL_EVENTS, INITIAL_ENQUIRIES, INITIAL_GALLERY, INITIAL_REVIEWS } from '../data/initialData';

interface AppContextType {
  events: FestivalEvent[];
  visibleEvents: FestivalEvent[];
  activeAnnouncementText: string | null;
  addEvent: (event: Omit<FestivalEvent, 'id' | 'createdAt'>) => void;
  updateEvent: (id: string, updates: Partial<FestivalEvent>) => void;
  deleteEvent: (id: string) => void;
  toggleEventActive: (id: string) => void;
  setFeaturedEvent: (id: string) => void;

  enquiries: BookingEnquiry[];
  addEnquiry: (enquiry: Omit<BookingEnquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateEnquiryStatus: (id: string, status: BookingEnquiry['status']) => void;
  deleteEnquiry: (id: string) => void;

  gallery: GalleryPhoto[];
  addGalleryPhoto: (photo: Omit<GalleryPhoto, 'id'>) => void;
  deleteGalleryPhoto: (id: string) => void;

  reviews: ReviewItem[];
  addReview: (review: Omit<ReviewItem, 'id'>) => void;
  deleteReview: (id: string) => void;

  simulatedDate: string;
  setSimulatedDate: (date: string) => void;
  resetSimulatedDate: () => void;

  isAdminAuthenticated: boolean;
  loginAdmin: (pass: string) => boolean;
  logoutAdmin: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Reference default date is September 24, 2026
const DEFAULT_SYSTEM_DATE = '2026-09-24';

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Events
  const [events, setEvents] = useState<FestivalEvent[]>(() => {
    try {
      const saved = localStorage.getItem('sharda_events');
      return saved ? JSON.parse(saved) : INITIAL_EVENTS;
    } catch {
      return INITIAL_EVENTS;
    }
  });

  // Enquiries
  const [enquiries, setEnquiries] = useState<BookingEnquiry[]>(() => {
    try {
      const saved = localStorage.getItem('sharda_enquiries');
      return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
    } catch {
      return INITIAL_ENQUIRIES;
    }
  });

  // Gallery
  const [gallery, setGallery] = useState<GalleryPhoto[]>(() => {
    try {
      const saved = localStorage.getItem('sharda_gallery');
      return saved ? JSON.parse(saved) : INITIAL_GALLERY;
    } catch {
      return INITIAL_GALLERY;
    }
  });

  // Reviews
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem('sharda_reviews');
      return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  // Simulated / system date for date-based events
  const [simulatedDate, setSimulatedDateState] = useState<string>(() => {
    return localStorage.getItem('sharda_sim_date') || DEFAULT_SYSTEM_DATE;
  });

  // Admin Auth
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('sharda_admin_auth') === 'true';
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('sharda_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('sharda_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('sharda_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('sharda_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const setSimulatedDate = (date: string) => {
    setSimulatedDateState(date);
    localStorage.setItem('sharda_sim_date', date);
  };

  const resetSimulatedDate = () => {
    setSimulatedDate(DEFAULT_SYSTEM_DATE);
  };

  // Smart date-based visibility:
  // 1. Active === true
  // 2. Currently active (startDate <= simulatedDate <= endDate)
  //    OR Upcoming within 45 days (startDate > simulatedDate AND startDate <= simulatedDate + 45 days)
  // 3. If endDate < simulatedDate, it is considered expired and archived
  const visibleEvents = useMemo(() => {
    const today = new Date(simulatedDate).getTime();
    const upcomingLimit = today + 45 * 24 * 60 * 60 * 1000;

    return events.filter(evt => {
      if (!evt.active) return false;
      const start = new Date(evt.startDate).getTime();
      const end = new Date(evt.endDate).getTime();

      // Currently running
      const isCurrentlyActive = today >= start && today <= (end + 24 * 60 * 60 * 1000);
      // Upcoming within 45 days
      const isUpcomingSoon = start > today && start <= upcomingLimit;

      return isCurrentlyActive || isUpcomingSoon;
    }).sort((a, b) => {
      // Prioritize featured, then nearest start date
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });
  }, [events, simulatedDate]);

  // Smart Seasonal Announcement:
  // Derived from currently active or featured upcoming festival.
  // If no event matches, automatically hide the banner.
  const activeAnnouncementText = useMemo(() => {
    if (visibleEvents.length === 0) return null;
    const today = new Date(simulatedDate).getTime();
    
    // Find if there's an ongoing active event right now
    const ongoing = visibleEvents.find(evt => {
      const start = new Date(evt.startDate).getTime();
      const end = new Date(evt.endDate).getTime();
      return today >= start && today <= (end + 24 * 60 * 60 * 1000);
    });

    if (ongoing) {
      return `${ongoing.name}${ongoing.hindiName ? ` (${ongoing.hindiName})` : ''} at Sharda Palace — Bookings Open`;
    }

    // Otherwise next featured upcoming event
    const upcoming = visibleEvents[0];
    if (upcoming) {
      return `Upcoming: ${upcoming.name} — Reserve your banquet & dining at Sharda Palace`;
    }

    return null;
  }, [visibleEvents, simulatedDate]);

  // Event handlers
  const addEvent = (data: Omit<FestivalEvent, 'id' | 'createdAt'>) => {
    const newEvent: FestivalEvent = {
      ...data,
      id: `evt-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setEvents(prev => [newEvent, ...prev]);
  };

  const updateEvent = (id: string, updates: Partial<FestivalEvent>) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, ...updates } : e));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const toggleEventActive = (id: string) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, active: !e.active } : e));
  };

  const setFeaturedEvent = (id: string) => {
    setEvents(prev => prev.map(e => ({ ...e, featured: e.id === id })));
  };

  // Enquiry handlers
  const addEnquiry = (data: Omit<BookingEnquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEnquiry: BookingEnquiry = {
      ...data,
      id: `enq-${Date.now()}`,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
  };

  const updateEnquiryStatus = (id: string, status: BookingEnquiry['status']) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries(prev => prev.filter(e => e.id !== id));
  };

  // Gallery handlers
  const addGalleryPhoto = (data: Omit<GalleryPhoto, 'id'>) => {
    const newPhoto: GalleryPhoto = {
      ...data,
      id: `gal-${Date.now()}`,
    };
    setGallery(prev => [newPhoto, ...prev]);
  };

  const deleteGalleryPhoto = (id: string) => {
    setGallery(prev => prev.filter(g => g.id !== id));
  };

  // Reviews handlers
  const addReview = (data: Omit<ReviewItem, 'id'>) => {
    const newReview: ReviewItem = {
      ...data,
      id: `rev-${Date.now()}`,
    };
    setReviews(prev => [newReview, ...prev]);
  };

  const deleteReview = (id: string) => {
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  // Admin Auth
  const loginAdmin = (pass: string): boolean => {
    // Accepts "admin" or "sharda@2026" or "sharda"
    if (pass.trim() === 'admin' || pass.trim() === 'sharda@2026' || pass.trim() === 'sharda') {
      setIsAdminAuthenticated(true);
      localStorage.setItem('sharda_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('sharda_admin_auth');
  };

  return (
    <AppContext.Provider
      value={{
        events,
        visibleEvents,
        activeAnnouncementText,
        addEvent,
        updateEvent,
        deleteEvent,
        toggleEventActive,
        setFeaturedEvent,
        enquiries,
        addEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        gallery,
        addGalleryPhoto,
        deleteGalleryPhoto,
        reviews,
        addReview,
        deleteReview,
        simulatedDate,
        setSimulatedDate,
        resetSimulatedDate,
        isAdminAuthenticated,
        loginAdmin,
        logoutAdmin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
