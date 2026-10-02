import React from 'react';
import { TopAdBanner } from '../components/garba/TopAdBanner';
import { GarbaNightSection } from '../components/garba/GarbaNightSection';
import { Navbar } from '../components/common/Navbar';
import { AnnouncementBanner } from '../components/common/AnnouncementBanner';
import { Footer } from '../components/common/Footer';
import { FloatingActions } from '../components/common/FloatingActions';

import { HeroSection } from '../components/home/HeroSection';
import { ExperienceSection } from '../components/home/ExperienceSection';
import { FestivalsSection } from '../components/home/FestivalsSection';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { BanquetSection } from '../components/home/BanquetSection';
import { BanquetCateringSection } from '../components/home/BanquetCateringSection';
import { TerraceGardenSection } from '../components/home/TerraceGardenSection';
import { RestaurantSection } from '../components/home/RestaurantSection';
import { GallerySection } from '../components/home/GallerySection';
import { BookingSection } from '../components/home/BookingSection';
import { ContactSection } from '../components/home/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#1A1A1A]">
      {/* 1. Small Advertisement Banner at the top */}
      <TopAdBanner />
      <AnnouncementBanner />
      <Navbar />

      <main className="flex-1">
        {/* Garba Night 4.0 Section with exact requested order:
            2. Garba Night 4.0 Main Poster
            3. Event Dates: 17 & 18 October 2026
            4. Ticket Booking: ₹149 (1 Day) / ₹249 (2 Days)
            5. Booking Form
            6. WhatsApp Booking Button
        */}
        <GarbaNightSection />

        <HeroSection />
        <ExperienceSection />
        <FestivalsSection />
        <AboutSection />
        <ServicesSection />
        <BanquetSection />
        <BanquetCateringSection />
        <TerraceGardenSection />
        <RestaurantSection />
        <GallerySection />
        <BookingSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};
