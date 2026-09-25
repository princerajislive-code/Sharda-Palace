import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageSquare, Heart, Shield, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFAF8] border-t border-[#F2F2EF] text-[#1A1A1A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-200">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#1A1A1A]">
                SHARDA PALACE
              </span>
              <div className="text-sm font-serif italic text-[#D6B56C] font-semibold mt-0.5">
                शारदा पैलेस
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium mt-1">
                BANQUET HALL • TERRACE GARDEN • RESTAURANT
              </p>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              A refined destination in Bhabua for weddings, celebrations, dining, family gatherings, and memorable occasions.
            </p>
            <div className="pt-2 text-xs text-stone-500 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[#D6B56C] font-semibold">4.3 ★</span>
                <span>·</span>
                <span>227 Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#2E7D5A]" />
                <span className="text-[#2E7D5A] font-medium">Open 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#1A1A1A] uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-600">
              <li>
                <a href="/" className="hover:text-[#2E7D5A] transition-colors">Home</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#2E7D5A] transition-colors">The Experience</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#2E7D5A] transition-colors">About Sharda Palace</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2E7D5A] transition-colors">Services & Offerings</a>
              </li>
              <li>
                <a href="#festivals" className="hover:text-[#2E7D5A] transition-colors">Festivals & Special Events</a>
              </li>
              <li>
                <a href="#banquet" className="hover:text-[#2E7D5A] transition-colors">Banquet Hall</a>
              </li>
              <li>
                <a href="#terrace" className="hover:text-[#2E7D5A] transition-colors">Terrace Garden</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#2E7D5A] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#2E7D5A] transition-colors">Guest Reviews</a>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#2E7D5A] transition-colors inline-flex items-center gap-1">
                  <span>Digital Menu (Coming Soon)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D6B56C]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#1A1A1A] uppercase mb-4">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs text-stone-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6B56C] shrink-0 mt-0.5" />
                <span>2JV8+2C, Bhabua, Bihar 821101</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2E7D5A] shrink-0" />
                <a href="tel:09955986296" className="hover:text-[#2E7D5A] font-medium font-mono tabular-nums">
                  099559 86296
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#2E7D5A] shrink-0" />
                <a
                  href="https://wa.me/919955986296?text=Hello%20Sharda%20Palace%2C%20I%20would%20like%20to%20enquire%20about%20booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2E7D5A] font-medium"
                >
                  WhatsApp: +91 99559 86296
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=2JV8%2B2C%2C+Bhabua%2C+Bihar+821101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#2E7D5A] hover:underline font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Developer Credit & Management */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#1A1A1A] uppercase mb-4">
              Credits & Management
            </h4>
            
            <div className="p-4 bg-white rounded-lg border border-stone-200/80 shadow-xs space-y-2">
              <p className="text-xs font-semibold text-[#1A1A1A]">
                Created by RoadsideDeveloper
              </p>
              <p className="text-xs text-stone-500">
                Designed & Developed by RoadsideDeveloper
              </p>
              <div className="pt-2 text-xs space-y-1.5 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="text-stone-400">WhatsApp:</span>
                  <a
                    href="https://wa.me/917654224826"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-stone-700 hover:text-[#2E7D5A] font-medium"
                  >
                    +91 7654224826
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-stone-400">Call:</span>
                  <a
                    href="tel:+918405918172"
                    className="font-mono text-stone-700 hover:text-[#2E7D5A] font-medium"
                  >
                    +91 8405918172
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <Link
                to="/admin/login"
                className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 border border-stone-200 px-3 py-1.5 rounded bg-white transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-stone-400" />
                <span>Admin Login Portal</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} Sharda Palace (शारदा पैलेस), Bhabua. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Banquet Hall</span>
            <span>·</span>
            <span>Terrace Garden</span>
            <span>·</span>
            <span>Restaurant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
