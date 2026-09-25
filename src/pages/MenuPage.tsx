import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Clock, Phone, ArrowLeft, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { FloatingActions } from '../components/common/FloatingActions';
import { AnnouncementBanner } from '../components/common/AnnouncementBanner';

export const MenuPage: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#1A1A1A]">
      <AnnouncementBanner />
      <Navbar />

      <main className="flex-1 py-16 sm:py-24 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-ui font-medium text-stone-600 hover:text-[#2E7D5A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Sharda Palace Home</span>
            </Link>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8 sm:p-14 text-center">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D6B56C] font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CATERING & RESTAURANT ARCHITECTURE</span>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#FAFAF8] border border-stone-200 text-[#2E7D5A] flex items-center justify-center mx-auto mb-6">
              <Utensils className="w-8 h-8" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4">
              DIGITAL MENU COMING SOON
            </h1>

            <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
              Our culinary team at Sharda Palace is cataloging our comprehensive dining and banquet menu. In the meantime, our restaurant is fully active for both <strong>Dine-in</strong> and <strong>Takeaway</strong> round the clock in Bhabua.
            </p>

            {/* Verified Current Availability */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left mb-10">
              <div className="p-4 bg-[#FAFAF8] rounded-xl border border-stone-200/80">
                <div className="flex items-center gap-2 text-[#2E7D5A] font-semibold text-xs mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>24-Hour Kitchen</span>
                </div>
                <div className="font-serif text-sm font-bold text-[#1A1A1A]">Dine-in Service</div>
                <p className="text-xs text-stone-500 mt-1">
                  Fresh preparations served in our family dining room.
                </p>
              </div>

              <div className="p-4 bg-[#FAFAF8] rounded-xl border border-stone-200/80">
                <div className="flex items-center gap-2 text-[#2E7D5A] font-semibold text-xs mb-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Prompt Orders</span>
                </div>
                <div className="font-serif text-sm font-bold text-[#1A1A1A]">Takeaway Counter</div>
                <p className="text-xs text-stone-500 mt-1">
                  Call ahead to place your order for rapid pickup.
                </p>
              </div>
            </div>

            {/* Call to Order Direct CTA */}
            <div className="p-6 bg-[#FAFAF8] rounded-xl border border-[#D6B56C]/30 max-w-lg mx-auto space-y-3">
              <div className="text-xs font-semibold text-stone-700">
                To inquire about today's fresh preparations or place a takeaway parcel order:
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                <a
                  href="tel:09955986296"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-ui font-medium rounded-md text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: 099559 86296</span>
                </a>
                <a
                  href="https://wa.me/919955986296?text=Hello%20Sharda%20Palace%2C%20I%20would%20like%20to%20know%20about%20today%27s%20menu%20and%20takeaway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-ui font-medium rounded-md text-[#2E7D5A] bg-white border border-[#2E7D5A]/30 hover:border-[#2E7D5A] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Future Ready Notification Signup */}
            <div className="mt-12 pt-8 border-t border-stone-100 max-w-md mx-auto">
              <h3 className="font-serif text-base font-bold text-[#1A1A1A] mb-2">
                Be First to Access the Online Menu
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Leave your mobile number or email to receive a notification once the interactive digital menu launches.
              </p>

              {subscribed ? (
                <div className="p-3 bg-emerald-50 text-[#2E7D5A] border border-emerald-200 rounded-lg text-xs font-medium flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>You are on the preview notification list. Thank you!</span>
                </div>
              ) : (
                <form onSubmit={handleNotifySubmit} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter phone or email"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="flex-1 px-3.5 py-2 text-xs rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white focus:outline-none focus:border-[#2E7D5A]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-ui font-medium rounded-md text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] transition-colors whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};
