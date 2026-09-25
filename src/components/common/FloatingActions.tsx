import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end print:hidden">
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-3 bg-white text-stone-700 border border-stone-200 rounded-full shadow-md hover:bg-stone-50 hover:text-stone-900 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#2E7D5A]"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Floating Call */}
      <a
        href="tel:09955986296"
        aria-label="Call Sharda Palace"
        className="p-3 bg-white text-[#2E7D5A] border border-[#2E7D5A]/30 rounded-full shadow-md hover:bg-[#2E7D5A] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2E7D5A]"
        title="Call 099559 86296"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919955986296?text=Hello%20Sharda%20Palace%2C%20I%20would%20like%20to%20enquire%20about%20booking"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="p-3 bg-[#2E7D5A] text-white rounded-full shadow-lg hover:bg-[#256649] hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2E7D5A]"
        title="WhatsApp Enquiry"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
};
