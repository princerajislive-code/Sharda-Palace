import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Shield, Phone, ArrowUpRight, Sparkles, Calendar, UtensilsCrossed } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BrandLogo, LogoStyle } from './BrandLogo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [logoVariant] = useState<LogoStyle>(() => {
    try {
      const saved = localStorage.getItem('sharda_logo_variant');
      return (saved as LogoStyle) || 'monogram';
    } catch {
      return 'monogram';
    }
  });

  const { isAdminAuthenticated } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll listener for sticky glass effect & reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 15);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          const navOffset = 70;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    } else if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Preserving all existing navigation links
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Garba Night 4.0', href: '#garba', badge: '17-18 Oct' },
    { label: 'About', href: '#about' },
    { label: 'Banquet', href: '#banquet' },
    { label: 'Catering', href: '#catering' },
    {
      label: 'Digital Menu',
      href: 'https://sharda-palace-banquet-hall-terrace.vercel.app/',
      isSpecial: true,
      tagline: 'Terrace Garden Rooftop',
    },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Reading / Scroll progress indicator */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#2E7D5A] via-[#D6B56C] to-[#2E7D5A] z-[70] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_16px_rgba(0,0,0,0.06)] border-b border-stone-200/80'
            : 'bg-white/90 backdrop-blur-md border-b border-stone-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[68px] lg:h-[70px]">
            {/* Left: Brand Identity (Compact, responsive, zero overlap) */}
            <div className="flex items-center shrink-0">
              <Link
                to="/"
                className="group flex items-center gap-2 sm:gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D5A] rounded-lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                aria-label="Sharda Palace Home"
              >
                <BrandLogo
                  variant={logoVariant}
                  className="w-9 h-9 sm:w-10 sm:h-10 lg:w-[44px] lg:h-[44px] drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
                />
                <div className="flex flex-col min-w-0">
                  <div className="flex items-baseline gap-1.5 leading-none">
                    <span className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-[0.06em] text-[#1A1A1A] group-hover:text-[#2E7D5A] transition-colors truncate">
                      SHARDA PALACE
                    </span>
                    <span className="hidden xs:inline-block text-[11px] sm:text-xs font-serif italic text-[#C5A25D] font-medium shrink-0">
                      शारदा पैलेस
                    </span>
                  </div>
                  <span className="text-[8px] sm:text-[9px] tracking-[0.14em] uppercase font-sans text-stone-500 font-semibold truncate max-w-[170px] sm:max-w-[240px] lg:max-w-none mt-0.5">
                    Banquet Hall • Rooftop Restaurant
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links (>= 1024px / lg) */}
            <nav
              className="hidden lg:flex items-center gap-2 xl:gap-3.5 text-[13px] xl:text-[13.5px] font-medium text-stone-600"
              aria-label="Primary Navigation"
            >
              {navLinks.map((item) => {
                const isExternal = item.href.startsWith('http://') || item.href.startsWith('https://');

                // Special treatment for Digital Menu as a distinctive premium CTA
                if (isExternal || item.isSpecial) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#1B5E20] bg-gradient-to-r from-emerald-50 via-emerald-100/60 to-amber-50/70 border border-emerald-300/80 shadow-2xs hover:shadow-xs hover:border-[#2E7D5A] hover:bg-[#2E7D5A] hover:text-white transition-all duration-200 whitespace-nowrap"
                      title="Explore The Terrace Garden Rooftop Digital Menu"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7D5A] group-hover:bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7D5A] group-hover:bg-white"></span>
                      </span>
                      <UtensilsCrossed className="w-3.5 h-3.5 text-[#C5A25D] group-hover:text-amber-200 transition-colors" />
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-emerald-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  );
                }

                // Regular desktop navigation links
                const isActive =
                  item.href.startsWith('/') && item.href !== '/'
                    ? location.pathname === item.href
                    : false;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`relative px-2.5 py-1.5 rounded-md hover:text-[#1A1A1A] hover:bg-stone-100/60 transition-colors whitespace-nowrap cursor-pointer ${
                      isActive ? 'text-[#2E7D5A] font-semibold bg-emerald-50/50' : ''
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-sans font-bold uppercase rounded-full bg-amber-100 text-amber-800 border border-amber-200/80">
                        {item.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Group */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Admin Portal Shortcut (Desktop + Tablet) */}
              <Link
                to={isAdminAuthenticated ? '/admin' : '/admin/login'}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 border border-stone-200/90 hover:border-stone-300 rounded-lg transition-colors bg-stone-50/80 hover:bg-stone-100/90 whitespace-nowrap"
                title="Staff & Management Portal"
              >
                <Shield className="w-3.5 h-3.5 text-stone-500" />
                <span className="hidden md:inline">{isAdminAuthenticated ? 'Admin Panel' : 'Admin'}</span>
              </Link>

              {/* Primary "Book / Enquire" CTA (Desktop + Tablet) */}
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#book');
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] rounded-lg transition-colors shadow-2xs hover:shadow-xs whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D6B56C]" />
                <span>Book Now</span>
              </a>

              {/* Mobile "Menu" Shortcut pill (visible on < 640px to access digital menu easily) */}
              <a
                href="https://sharda-palace-banquet-hall-terrace.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex sm:hidden items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold text-[#1e573e] bg-emerald-50 border border-emerald-200/80 shadow-2xs"
                title="Digital Menu"
              >
                <UtensilsCrossed className="w-3 h-3 text-[#2E7D5A]" />
                <span>Menu</span>
              </a>

              {/* Mobile / Tablet Hamburger Toggle Button (< 1024px) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100/80 border border-stone-200/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D5A] transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-menu"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-stone-900 animate-in spin-in-90 duration-150" />
                ) : (
                  <Menu className="w-5 h-5 text-stone-800" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Backdrop Overlay (< 1024px) */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-16 sm:top-[68px] lg:top-[70px] bg-black/40 backdrop-blur-xs z-40 lg:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Navigation Drawer Panel (< 1024px) */}
        <div
          id="mobile-navigation-menu"
          className={`fixed top-16 sm:top-[68px] lg:top-[70px] left-0 right-0 z-50 lg:hidden bg-white border-b border-stone-200 shadow-xl transition-all duration-300 ease-out max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-68px)] overflow-y-auto ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto visible'
              : 'opacity-0 -translate-y-2 pointer-events-none invisible'
          }`}
        >
          <div className="px-4 py-4 sm:px-6 space-y-4 max-w-lg mx-auto">
            {/* Special Highlight: Digital Menu CTA inside Mobile Menu */}
            <div className="pt-1">
              <a
                href="https://sharda-palace-banquet-hall-terrace.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-emerald-50 via-emerald-100/60 to-amber-50/70 border border-emerald-300/80 shadow-xs hover:border-[#2E7D5A] hover:bg-[#2E7D5A] hover:text-white transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600/10 flex items-center justify-center text-[#2E7D5A] group-hover:bg-white/20 group-hover:text-white shrink-0">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 font-serif text-sm font-bold text-[#1A1A1A] group-hover:text-white">
                      <span>Digital Menu</span>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7D5A] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7D5A]"></span>
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-600 group-hover:text-stone-200">
                      The Terrace Garden Rooftop Restaurant
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#2E7D5A] group-hover:text-white shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* All Existing Navigation Links in Clean Touch-Friendly List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 border-t border-stone-100">
              {navLinks.map((item) => {
                // If it is the external digital menu, we already placed the hero card above
                if (item.isSpecial) return null;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-50 active:bg-stone-100 transition-colors cursor-pointer"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-sans font-bold uppercase rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                        {item.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Quick Actions & Contact inside Mobile Menu */}
            <div className="pt-3 border-t border-stone-100 space-y-2.5">
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#book');
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] active:bg-[#236347] rounded-lg transition-colors shadow-2xs"
              >
                <Calendar className="w-4 h-4 text-[#D6B56C]" />
                <span>Book / Enquire Now</span>
              </a>

              <div className="flex items-center justify-between pt-1 text-xs text-stone-600">
                <a
                  href="tel:09955986296"
                  className="inline-flex items-center gap-1.5 font-medium hover:text-[#2E7D5A] p-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2E7D5A]" />
                  <span>099559 86296</span>
                </a>

                <Link
                  to={isAdminAuthenticated ? '/admin' : '/admin/login'}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1 font-medium text-stone-600 hover:text-stone-900 p-1"
                >
                  <Shield className="w-3.5 h-3.5 text-stone-400" />
                  <span>{isAdminAuthenticated ? 'Admin Panel' : 'Staff Login'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
