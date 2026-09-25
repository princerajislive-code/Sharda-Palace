import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Shield, Phone, ArrowUpRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAdminAuthenticated } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Banquet', href: '#banquet' },
    { label: 'Terrace', href: '#terrace' },
    { label: 'Restaurant', href: '#restaurant' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
    { label: 'Menu', href: '/menu' },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-[#2E7D5A] z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border-b border-[#F2F2EF]'
            : 'bg-white/80 backdrop-blur-sm border-b border-[#F2F2EF]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Zone 1: Brand Wordmark */}
            <Link
              to="/"
              className="group flex flex-col justify-center text-left py-1 focus:outline-none"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl sm:text-[26px] font-bold tracking-[0.08em] text-[#1A1A1A] group-hover:text-[#2E7D5A] transition-colors leading-none">
                  SHARDA PALACE
                </span>
                <span className="text-xs sm:text-sm font-serif italic text-[#D6B56C] font-semibold tracking-normal">
                  शारदा पैलेस
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-sans text-stone-500 font-semibold whitespace-nowrap mt-1">
                BANQUET HALL • TERRACE GARDEN • RESTAURANT
              </span>
            </Link>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
              {navLinks.map((item) => {
                const isRoute = item.href.startsWith('/');
                if (isRoute && item.href !== '/') {
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`hover:text-[#1A1A1A] transition-colors relative py-1 ${
                        location.pathname === item.href
                          ? 'text-[#2E7D5A] font-semibold'
                          : ''
                      }`}
                    >
                      {item.label}
                      {item.label === 'Menu' && (
                        <span className="ml-1 text-[10px] uppercase font-sans tracking-wide text-[#D6B56C] font-medium">
                          Preview
                        </span>
                      )}
                    </Link>
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="hover:text-[#1A1A1A] transition-colors relative py-1"
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Admin & Customer CTA) */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Secondary Admin Button */}
              <Link
                to={isAdminAuthenticated ? '/admin' : '/admin/login'}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-ui font-medium text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300 rounded-md transition-colors bg-[#FAFAF8] hover:bg-stone-50 whitespace-nowrap"
                title="Management Portal"
              >
                <Shield className="w-3.5 h-3.5 text-stone-500" />
                <span>{isAdminAuthenticated ? 'Admin Panel' : 'Admin'}</span>
              </Link>

              {/* Primary Customer CTA */}
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#book');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-ui font-medium text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] rounded-md transition-all shadow-sm whitespace-nowrap"
              >
                <span>Book / Enquire Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <Link
                to={isAdminAuthenticated ? '/admin' : '/admin/login'}
                className="p-2 text-stone-500 hover:text-stone-800 border border-stone-200 rounded-md"
                aria-label="Admin login"
              >
                <Shield className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-b border-stone-200 bg-white px-5 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-100">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.href.startsWith('/')) {
                      setMobileMenuOpen(false);
                      navigate(item.href);
                    } else {
                      handleNavClick(item.href);
                    }
                  }}
                  className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-[#FAFAF8] rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#book');
                }}
                className="w-full text-center py-2.5 px-4 text-xs font-ui font-medium text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] rounded-md transition-colors"
              >
                Book / Enquire Now
              </a>

              <div className="flex items-center justify-between pt-2 text-xs text-stone-500 border-t border-stone-100">
                <a
                  href="tel:09955986296"
                  className="flex items-center gap-1.5 hover:text-[#2E7D5A]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>099559 86296</span>
                </a>
                <Link
                  to={isAdminAuthenticated ? '/admin' : '/admin/login'}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1 text-stone-600 hover:text-stone-900"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Admin Portal</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
