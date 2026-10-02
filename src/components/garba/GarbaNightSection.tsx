import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Ticket,
  CheckCircle2,
  Music,
  Send,
  MessageCircle,
  Phone,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const GarbaNightSection: React.FC = () => {
  const { addEnquiry } = useApp();

  // Ticket selection state: '1day' | '2days'
  const [selectedTicket, setSelectedTicket] = useState<'1day' | '2days'>('2days');
  const [selectedDate, setSelectedDate] = useState<'2026-10-17' | '2026-10-18'>('2026-10-17');
  const [passCount, setPassCount] = useState<number>(2);

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<{
    referenceId: string;
    name: string;
    ticketType: string;
    dateText: string;
    passes: number;
    totalAmount: number;
  } | null>(null);

  // Countdown timer to 17 Oct 2026, 18:30:00 IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-17T18:30:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Pricing calculations
  const pricePerPass = selectedTicket === '1day' ? 149 : 249;
  const totalAmount = passCount * pricePerPass;
  const savings = selectedTicket === '2days' ? passCount * (149 * 2 - 249) : 0;

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      errors.name = 'Please enter name.';
    }

    const cleanPhone = phone.replace(/[\s-+]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone.trim()) {
      errors.phone = 'Mobile required.';
    } else if (!phoneRegex.test(cleanPhone)) {
      errors.phone = 'Enter valid 10-digit number.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const ref = `GN4-${Math.floor(10000 + Math.random() * 90000)}`;
    const dateText =
      selectedTicket === '2days'
        ? '17 & 18 October 2026 (Both Days)'
        : selectedDate === '2026-10-17'
        ? 'Saturday, 17 October 2026'
        : 'Sunday, 18 October 2026';

    const ticketTypeName = selectedTicket === '2days' ? '2 Days Season Pass (₹249)' : '1 Day Pass (₹149)';

    // Register enquiry in AppContext
    addEnquiry({
      name: fullName.trim(),
      phone: phone.trim(),
      email: `${phone.trim()}@guest.shardapalace.com`,
      eventType: 'Garba Night 4.0',
      eventDate: selectedTicket === '2days' ? '2026-10-17' : selectedDate,
      timeSlot: 'Evening',
      guests: `${passCount} Pass(es) [${ticketTypeName}]`,
      specialRequest: `Ref: ${ref} | Total: ₹${totalAmount}`,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmed({
        referenceId: ref,
        name: fullName.trim(),
        ticketType: ticketTypeName,
        dateText,
        passes: passCount,
        totalAmount,
      });
    }, 300);
  };

  const getWhatsAppMessage = () => {
    const dateLabel =
      selectedTicket === '2days'
        ? '17 & 18 October 2026 (2 Days Season Pass)'
        : selectedDate === '2026-10-17'
        ? '17 October 2026 (Day 1)'
        : '18 October 2026 (Day 2)';

    return encodeURIComponent(
      `Hello Sharda Palace! 🪔✨\n\nI want to book tickets for *GARBA NIGHT 4.0*:\n` +
        `• *Name:* ${fullName.trim() || 'Guest'}\n` +
        `• *Phone:* ${phone.trim() || 'Direct WhatsApp'}\n` +
        `• *Ticket:* ${selectedTicket === '2days' ? '2 Days Pass (₹249)' : '1 Day Pass (₹149)'}\n` +
        `• *Date:* ${dateLabel}\n` +
        `• *Passes:* ${passCount}\n` +
        `• *Total:* ₹${totalAmount}\n\n` +
        `Please confirm my passes!`
    );
  };

  const handleDirectWhatsApp = () => {
    const text = getWhatsAppMessage();
    window.open(`https://wa.me/919955986296?text=${text}`, '_blank');
  };

  return (
    <div id="garba" className="relative bg-[#0d0b07] text-[#FAFAF8] overflow-hidden border-b border-[#D6B56C]/30 py-2.5 sm:py-3.5">
      {/* Background ambient festival lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(214,181,108,0.1),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3 sm:px-4 space-y-2.5 relative z-10">

        {/* ========================================================================= */}
        {/* 2. GARBA NIGHT 4.0 MAIN POSTER (ULTRA-COMPACT WIDESCREEN HERO) */}
        {/* ========================================================================= */}
        <section id="garba-poster" className="relative">
          <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-[#D6B56C]/40 shadow-sm bg-[#12100A]">
            <div className="relative w-full h-24 sm:h-32 md:h-36 overflow-hidden group">
              <img
                src="/garba_poster.jpg"
                alt="Garba Night 4.0 Main Poster"
                className="w-full h-full object-cover object-center transform group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35" />

              {/* Poster Overlay Info */}
              <div className="absolute inset-0 p-3 sm:p-4 flex items-center justify-between gap-3">
                <div className="max-w-md">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-[#D6B56C] text-black px-1.5 py-0.5 rounded">
                      SHARDA PALACE PRESENTS
                    </span>
                    <span className="text-[9px] font-semibold text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-600/30">
                      Edition 4.0
                    </span>
                  </div>

                  <h1 className="font-serif text-lg sm:text-2xl font-black text-white tracking-wide leading-tight">
                    GARBA NIGHT <span className="text-[#E5C880]">4.0</span>
                  </h1>

                  <p className="text-[10px] sm:text-xs text-stone-300 line-clamp-1 mt-0.5">
                    Dandiya Raas • DJ & Live Dhol • Free Dandiya Sticks • Food Stalls
                  </p>
                </div>

                <a
                  href="#garba-tickets"
                  className="shrink-0 px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-bold text-black bg-gradient-to-r from-[#D6B56C] to-[#F3E3B6] hover:from-amber-400 hover:to-amber-300 transition-all shadow flex items-center gap-1"
                >
                  <Ticket className="w-3.5 h-3.5 text-black" />
                  <span>Book from ₹149</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. EVENT DATES: 17 & 18 OCTOBER 2026 (SLIM BAR) */}
        {/* ========================================================================= */}
        <section id="garba-dates" className="bg-gradient-to-r from-[#17140B] via-[#211B0C] to-[#17140B] rounded-lg p-2 sm:p-2.5 px-3 border border-[#D6B56C]/30 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="inline-flex items-center gap-1 font-bold text-[#E5C880]">
                <Calendar className="w-3.5 h-3.5 text-[#E5C880]" />
                Event Dates: 17 & 18 October 2026
              </span>
              <span className="text-stone-500 hidden sm:inline">•</span>
              <span className="text-stone-300 flex items-center gap-1 text-[11px]">
                <Clock className="w-3 h-3 text-[#D6B56C]" /> 6:30 PM Onwards
              </span>
              <span className="text-stone-500 hidden md:inline">•</span>
              <span className="text-stone-300 hidden md:flex items-center gap-1 text-[11px]">
                <MapPin className="w-3 h-3 text-[#D6B56C]" /> Sharda Palace, Bhabua
              </span>
            </div>

            {/* Micro Countdown */}
            <div className="shrink-0 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded border border-[#D6B56C]/25 text-[10px]">
              <span className="text-stone-400 font-medium">Starts in:</span>
              <span className="font-mono font-bold text-[#E5C880]">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4 & 5. TICKET BOOKING: ₹149 / ₹249 & BOOKING FORM (INTEGRATED COMPACT CARD) */}
        {/* ========================================================================= */}
        <div className="bg-[#12100A] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-[#D6B56C]/40 shadow-sm space-y-3">

          {/* ITEM 4: TICKET SELECTION PILLS */}
          <section id="garba-tickets" className="space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-[#E5C880] uppercase tracking-wider">
                4. Ticket Booking: ₹149 (1 Day) / ₹249 (2 Days)
              </span>
              <span className="text-stone-400">Click pass to select</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* 1 Day Pass Option */}
              <div
                onClick={() => setSelectedTicket('1day')}
                className={`p-2.5 rounded-lg cursor-pointer transition-all border flex items-center justify-between ${
                  selectedTicket === '1day'
                    ? 'bg-[#1C180E] border-[#D6B56C] shadow-xs ring-1 ring-[#D6B56C]/50'
                    : 'bg-black/40 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${selectedTicket === '1day' ? 'border-[#D6B56C] bg-[#D6B56C]' : 'border-stone-600'}`}>
                    {selectedTicket === '1day' && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                  </div>
                  <div>
                    <span className="font-bold text-xs text-white block">1 Day Pass</span>
                    <span className="text-[10px] text-stone-400">Choose 17 or 18 Oct • Dandiya sticks included</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-black text-sm text-[#E5C880]">₹149</span>
                  <span className="text-[9px] text-stone-400 block">/ person</span>
                </div>
              </div>

              {/* 2 Days Season Pass Option */}
              <div
                onClick={() => setSelectedTicket('2days')}
                className={`p-2.5 rounded-lg cursor-pointer transition-all border flex items-center justify-between relative ${
                  selectedTicket === '2days'
                    ? 'bg-[#1C180E] border-[#D6B56C] shadow-xs ring-1 ring-[#D6B56C]/50'
                    : 'bg-black/40 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div className="absolute -top-1.5 right-3 bg-gradient-to-r from-[#D6B56C] to-amber-400 text-black font-extrabold text-[8px] uppercase tracking-wider px-1.5 py-0.2 rounded-full">
                  SAVE ₹49 ⭐
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${selectedTicket === '2days' ? 'border-[#D6B56C] bg-[#D6B56C]' : 'border-stone-600'}`}>
                    {selectedTicket === '2days' && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                  </div>
                  <div>
                    <span className="font-bold text-xs text-white block">2 Days Season Pass</span>
                    <span className="text-[10px] text-stone-400">Both 17 & 18 Oct • Free Sticks & Lucky Draw</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-black text-sm text-[#E5C880]">₹249</span>
                  <span className="text-[9px] text-stone-400 block line-through">₹298</span>
                </div>
              </div>
            </div>

            {/* If 1 Day: mini date picker */}
            {selectedTicket === '1day' && (
              <div className="flex items-center gap-2 text-xs pt-0.5">
                <span className="text-stone-400 text-[11px]">Select Date:</span>
                <button
                  type="button"
                  onClick={() => setSelectedDate('2026-10-17')}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium border ${selectedDate === '2026-10-17' ? 'bg-[#2E7D5A] border-[#2E7D5A] text-white' : 'bg-black/50 border-stone-800 text-stone-400'}`}
                >
                  Sat, 17 Oct
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDate('2026-10-18')}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium border ${selectedDate === '2026-10-18' ? 'bg-[#2E7D5A] border-[#2E7D5A] text-white' : 'bg-black/50 border-stone-800 text-stone-400'}`}
                >
                  Sun, 18 Oct
                </button>
              </div>
            )}
          </section>

          {/* ITEM 5: COMPACT BOOKING FORM */}
          <section id="garba-booking" className="pt-2 border-t border-stone-800/80">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-bold text-[#E5C880] uppercase tracking-wider">
                5. Booking Form
              </span>
              <span className="text-stone-400 text-[10px]">Instant Pass Reservation</span>
            </div>

            {bookingConfirmed ? (
              <div className="bg-[#1C180E] border border-[#D6B56C] rounded-lg p-3 text-center space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center justify-center gap-2 text-[#E5C880] font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Passes Reserved for {bookingConfirmed.name}!</span>
                </div>
                <p className="text-[11px] text-stone-300">
                  Ref: <strong className="text-[#E5C880]">{bookingConfirmed.referenceId}</strong> | {bookingConfirmed.passes} Pass(es) | Total: <strong className="text-[#E5C880]">₹{bookingConfirmed.totalAmount}</strong>
                </p>
                <div className="flex items-center justify-center gap-2 pt-1">
                  <button
                    onClick={handleDirectWhatsApp}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Confirm on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setBookingConfirmed(null)}
                    className="px-2.5 py-1.5 rounded text-xs text-stone-300 hover:text-white bg-stone-800"
                  >
                    Book More
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                  {/* Passes Counter (3 cols) */}
                  <div className="sm:col-span-3 flex items-center justify-between bg-black/60 px-2 py-1.5 rounded-md border border-stone-800">
                    <span className="text-[11px] text-stone-400">Passes:</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setPassCount((p) => Math.max(1, p - 1))}
                        className="px-2 py-0.5 text-stone-300 hover:text-white text-xs font-bold bg-stone-800 rounded"
                      >
                        –
                      </button>
                      <span className="font-mono text-xs font-bold text-white px-1">
                        {passCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => setPassCount((p) => Math.min(20, p + 1))}
                        className="px-2 py-0.5 text-stone-300 hover:text-white text-xs font-bold bg-stone-800 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Name (3 cols) */}
                  <div className="sm:col-span-3">
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Name *"
                      className="w-full px-2.5 py-1.5 rounded-md bg-black/60 border border-stone-800 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-[#D6B56C]"
                    />
                    {formErrors.name && (
                      <p className="text-[9px] text-red-400 mt-0.5">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Mobile (3 cols) */}
                  <div className="sm:col-span-3">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit Mobile *"
                      className="w-full px-2.5 py-1.5 rounded-md bg-black/60 border border-stone-800 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-[#D6B56C]"
                    />
                    {formErrors.phone && (
                      <p className="text-[9px] text-red-400 mt-0.5">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Submit Button (3 cols) */}
                  <div className="sm:col-span-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-1.5 px-3 rounded-md text-xs font-bold text-black bg-gradient-to-r from-[#D6B56C] to-[#F3E3B6] hover:from-amber-400 hover:to-amber-300 transition-all shadow flex items-center justify-center gap-1 cursor-pointer h-full min-h-[32px]"
                    >
                      <Send className="w-3 h-3 text-black" />
                      <span>{isSubmitting ? 'Booking...' : `Book (${passCount}) • ₹${totalAmount}`}</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </section>
        </div>

        {/* ========================================================================= */}
        {/* 6. WHATSAPP BOOKING BUTTON (SLIM INLINE BAR) */}
        {/* ========================================================================= */}
        <section id="garba-whatsapp" className="bg-[#14110A] rounded-lg p-2 sm:p-2.5 px-3 border border-[#D6B56C]/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <span className="text-stone-300 text-[11px] text-center sm:text-left">
              <strong className="text-white">6. WhatsApp Booking:</strong> Instant pass confirmation & digital tickets
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDirectWhatsApp}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-[11px] font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>Book on WhatsApp (+91 99559 86296)</span>
              </button>

              <a
                href="tel:09955986296"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium text-stone-300 hover:text-white bg-black/50 border border-stone-800"
              >
                <Phone className="w-3 h-3 text-[#D6B56C]" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
