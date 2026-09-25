import React from 'react';
import { 
  Building2, 
  Trees, 
  Utensils, 
  HeartHandshake, 
  Users, 
  Cake, 
  Sparkles, 
  Coffee, 
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'banquet-hall',
      title: 'Banquet Hall',
      icon: Building2,
      description: 'Expansive indoor venue with ceremonial stage arrangements and banquet dining seating for milestone celebrations.',
      target: '#banquet',
    },
    {
      id: 'terrace-garden',
      title: 'Terrace Garden',
      icon: Trees,
      description: 'Open-air terrace space elevated above the city for breezy evening gatherings, starlight dinners, and receptions.',
      target: '#terrace',
    },
    {
      id: 'restaurant',
      title: 'Restaurant',
      icon: Utensils,
      description: 'Welcoming dining section offering authentic flavors, family dining tables, and continuous 24-hour service.',
      target: '#restaurant',
    },
    {
      id: 'wedding-functions',
      title: 'Wedding Functions',
      icon: HeartHandshake,
      description: 'Comprehensive venue arrangements for marriage ceremonies, sangeet, tilak, engagement, and wedding receptions.',
      target: '#banquet',
    },
    {
      id: 'family-celebrations',
      title: 'Family Celebrations',
      icon: Users,
      description: 'Specialized arrangements for anniversaries, family get-togethers, festive reunions, and intimate banquets.',
      target: '#book',
    },
    {
      id: 'birthday-parties',
      title: 'Birthday Parties',
      icon: Cake,
      description: 'Festive setups for milestone birthdays and children parties with custom stage and decoration assistance.',
      target: '#book',
    },
    {
      id: 'party-events',
      title: 'Party / Celebrations',
      icon: Sparkles,
      description: 'Flexible venue options across the banquet hall and terrace garden for private and social celebratory events.',
      target: '#book',
    },
    {
      id: 'dine-in',
      title: 'Dine-in',
      icon: Coffee,
      description: 'Comfortable air-conditioned family restaurant seating for daily dining, breakfast, lunch, and late dinner.',
      target: '#restaurant',
    },
    {
      id: 'takeaway',
      title: 'Takeaway',
      icon: ShoppingBag,
      description: 'Prompt takeaway packaging service for meals, festive family orders, and quick parcel pickup.',
      target: '#restaurant',
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#FAFAF8] border-b border-[#F2F2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7D5A] font-sans mb-3">
            <span>Verified Services</span>
            <span className="text-stone-300">·</span>
            <span>Hospitality & Events</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            Comprehensive Venue & Hospitality Services
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            From grand marital rites to intimate family meals, Sharda Palace provides tailored spaces and factual services in Bhabua.
          </p>
        </div>

        {/* 9 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <a
                key={svc.id}
                href={svc.target}
                className="group relative p-7 rounded-xl bg-white border border-stone-200/80 hover:border-[#D6B56C]/60 transition-all duration-200 hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-[#FAFAF8] border border-stone-200/60 flex items-center justify-center text-[#2E7D5A] group-hover:bg-[#2E7D5A] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-stone-400">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A] group-hover:text-[#2E7D5A] transition-colors mb-2">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium group-hover:text-[#1A1A1A]">
                  <span>Explore Arrangement</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
