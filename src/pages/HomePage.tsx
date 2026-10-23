import React from 'react';
import { Navbar } from '../components/common/Navbar';
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
import { RoomsSection } from '../components/home/RoomsSection';
import { GallerySection } from '../components/home/GallerySection';
import { BookingSection } from '../components/home/BookingSection';
import { ContactSection } from '../components/home/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#1A1A1A]">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <FestivalsSection />
        <AboutSection />
        <ServicesSection />
        <BanquetSection />
        <BanquetCateringSection />
        <TerraceGardenSection />
        <RestaurantSection />
        <RoomsSection />
        <GallerySection />
        <BookingSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};
