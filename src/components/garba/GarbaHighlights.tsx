import React from 'react';
import { Music, Sparkles, Trophy, Flame, Utensils, Shield, Check, Heart, Award } from 'lucide-react';
import { GARBA_EVENT_DATA } from '../../data/garbaEvent';

export const GarbaHighlights: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'music':
        return <Music className="w-5 h-5 text-red-400" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'trophy':
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 'flame':
        return <Flame className="w-5 h-5 text-orange-400" />;
      case 'utensils':
        return <Utensils className="w-5 h-5 text-emerald-400" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0E0617] text-white relative border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>WHAT TO EXPECT AT 4.0</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Grand Festivities & Highlights
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            Celebrate the divine Navratri energy with traditional Garba, high-energy Dandiya beats, vibrant attire, and royal hospitality at Sharda Palace.
          </p>
        </div>

        {/* Feature Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Dancers Art Visual Spotlight */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-[0_15px_40px_rgba(245,158,11,0.2)] group">
              <img
                src={GARBA_EVENT_DATA.images.dancersArt}
                alt="Garba Night Traditional Dancers and Festive Celebration"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-amber-400/30">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>Grand Costume & Garba Competition</span>
                </div>
                <p className="text-xs text-stone-300">
                  Wear your finest Gujarati Chaniya Choli or Kurta Pajama to win exciting prizes on both nights!
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GARBA_EVENT_DATA.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-amber-500/20 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-3 w-fit rounded-xl bg-black/60 border border-white/10 mb-3">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Guidelines & Rules Card */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-amber-500/30">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-200 mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-400" />
            <span>Important Guidelines for Attendees</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-300">
            {GARBA_EVENT_DATA.rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
