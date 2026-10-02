import React, { useState, useEffect } from 'react';
import { Ticket, Calendar, User, Phone, CheckCircle, MessageCircle, AlertTriangle, ShieldCheck, ArrowRight, Sparkles, XCircle } from 'lucide-react';
import { GARBA_EVENT_DATA } from '../../data/garbaEvent';

interface GarbaBookingFormProps {
  selectedTicketType: '1_day' | '2_days';
  onTicketTypeChange: (type: '1_day' | '2_days') => void;
  isEventEnded: boolean;
}

export const GarbaBookingForm: React.FC<GarbaBookingFormProps> = ({
  selectedTicketType,
  onTicketTypeChange,
  isEventEnded,
}) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState<'17_oct' | '18_oct' | 'both_days'>('17_oct');
  const [ticketQuantity, setTicketQuantity] = useState<number>(1);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [bookingSuccessModal, setBookingSuccessModal] = useState<boolean>(false);

  // Keep date selection aligned with ticket type
  useEffect(() => {
    if (selectedTicketType === '2_days') {
      setSelectedDate('both_days');
    } else if (selectedDate === 'both_days') {
      setSelectedDate('17_oct');
    }
  }, [selectedTicketType]);

  const currentPassInfo = selectedTicketType === '1_day' ? GARBA_EVENT_DATA.tickets[0] : GARBA_EVENT_DATA.tickets[1];
  const unitPrice = currentPassInfo.price;
  const totalAmount = unitPrice * ticketQuantity;

  // Selected date human text
  const getDateLabel = () => {
    if (selectedTicketType === '2_days') {
      return '17 & 18 October 2026 (Both Days Full Pass)';
    }
    return selectedDate === '17_oct'
      ? '17 October 2026 (Day 1 - Saturday)'
      : '18 October 2026 (Day 2 - Sunday Grand Finale)';
  };

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (isEventEnded) {
      setErrorMsg('Event ended – ticket booking is now closed.');
      return;
    }

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const cleanMobile = mobileNumber.replace(/\D/g, '');
    if (cleanMobile.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Format WhatsApp message strictly per requirements
    const dateText = getDateLabel();
    const passName = currentPassInfo.name;

    const message = 
`🎉 *GARBA NIGHT 4.0 - TICKET BOOKING INQUIRY*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${fullName.trim()}
📱 *Mobile Number:* ${cleanMobile}
🎟️ *Ticket Type:* ${passName} (₹${unitPrice}/person)
📅 *Selected Date:* ${dateText}
👥 *Number of Tickets:* ${ticketQuantity}
💰 *Total Amount:* ₹${totalAmount}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Venue:* Sharda Palace Hotel & Banquet, Bhabua, Kaimur
⚡ *Validity:* Tickets valid only on 17 & 18 October 2026.

Please confirm my booking and share payment options. Thank you!`;

    const whatsappUrl = `https://wa.me/91${GARBA_EVENT_DATA.whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Show modal confirmation & open WhatsApp
    setBookingSuccessModal(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-[#0A0412] text-white relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>INSTANT WHATSAPP BOOKING</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Book Your Garba Night Passes
          </h2>
          <p className="mt-2 text-stone-300 text-sm sm:text-base">
            Fill in the details below to reserve your entry pass directly on WhatsApp with instant confirmation.
          </p>
        </div>

        {/* Closed or Active Notice Card */}
        {isEventEnded ? (
          <div className="mb-8 p-6 rounded-2xl bg-red-950/80 border-2 border-red-600 text-center shadow-xl">
            <XCircle className="w-10 h-10 text-red-400 mx-auto mb-2 animate-bounce" />
            <h3 className="font-serif text-2xl font-bold text-red-200 uppercase">
              EVENT ENDED – TICKET BOOKING CLOSED
            </h3>
            <p className="text-stone-300 text-sm mt-2">
              Garba Night 4.0 concluded on 18 October 2026. Online pass reservations are now closed. Thank you for your immense love!
            </p>
          </div>
        ) : (
          <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-amber-950/60 via-red-950/40 to-amber-950/60 border border-amber-500/40 flex items-center justify-between flex-wrap gap-3 shadow-lg">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-amber-200">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>TICKETS VALID ONLY ON 17 & 18 OCTOBER 2026</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Official Booking</span>
            </div>
          </div>
        )}

        {/* Booking Form Card */}
        <div className="bg-gradient-to-b from-stone-900/95 to-[#12081C]/95 rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md">
          <form onSubmit={handleBookNow} className="space-y-6">
            
            {/* Step 1: Ticket Type Interactive Switcher */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                1. Select Ticket Type *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* 1 Day Pass Option */}
                <div
                  onClick={() => !isEventEnded && onTicketTypeChange('1_day')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedTicketType === '1_day'
                      ? 'bg-amber-500/15 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)] ring-1 ring-amber-400'
                      : 'bg-black/40 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-base">1 Day Pass</span>
                    <span className="font-mono text-xl font-extrabold text-amber-300">₹149</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    Valid for either 17 October OR 18 October 2026
                  </p>
                </div>

                {/* 2 Days Pass Option */}
                <div
                  onClick={() => !isEventEnded && onTicketTypeChange('2_days')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all relative ${
                    selectedTicketType === '2_days'
                      ? 'bg-amber-500/15 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)] ring-1 ring-amber-400'
                      : 'bg-black/40 border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="absolute -top-2.5 right-4 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Save ₹49
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-base">2 Days Pass</span>
                    <span className="font-mono text-xl font-extrabold text-yellow-400">₹249</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    Valid for BOTH 17 and 18 October 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Date Selection (conditioned on ticket type) */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                2. Select Event Date *
              </label>

              {selectedTicketType === '1_day' ? (
                <div className="space-y-2">
                  <p className="text-xs text-stone-300 mb-3">
                    Choose which night you will attend Garba Night 4.0:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedDate === '17_oct'
                          ? 'bg-red-950/40 border-red-500 text-white ring-1 ring-red-400'
                          : 'bg-black/50 border-white/10 text-stone-300 hover:border-white/20'
                      }`}
                    >
                      <input
                        type="radio"
                        name="eventDate"
                        checked={selectedDate === '17_oct'}
                        onChange={() => setSelectedDate('17_oct')}
                        disabled={isEventEnded}
                        className="text-amber-500 focus:ring-amber-500 h-4 w-4 bg-black border-stone-600"
                      />
                      <div>
                        <div className="text-sm font-bold">17 October 2026 (Saturday)</div>
                        <div className="text-xs text-stone-400">Day 1 - Grand Opening & DJ Night</div>
                      </div>
                    </label>

                    <label
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedDate === '18_oct'
                          ? 'bg-red-950/40 border-red-500 text-white ring-1 ring-red-400'
                          : 'bg-black/50 border-white/10 text-stone-300 hover:border-white/20'
                      }`}
                    >
                      <input
                        type="radio"
                        name="eventDate"
                        checked={selectedDate === '18_oct'}
                        onChange={() => setSelectedDate('18_oct')}
                        disabled={isEventEnded}
                        className="text-amber-500 focus:ring-amber-500 h-4 w-4 bg-black border-stone-600"
                      />
                      <div>
                        <div className="text-sm font-bold">18 October 2026 (Sunday)</div>
                        <div className="text-xs text-stone-400">Day 2 - Grand Finale & Awards</div>
                      </div>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-sm font-bold text-white">17 & 18 October 2026 (Both Nights)</div>
                      <div className="text-xs text-amber-200">Full 2-Day Access Pass automatically activated</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-amber-400 text-black text-xs font-extrabold uppercase">
                    Both Days Included
                  </span>
                </div>
              )}
            </div>

            {/* Step 3: Customer Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  3. Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    disabled={isEventEnded}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-black/60 border border-white/15 focus:border-amber-400 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-stone-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  4. Mobile Number (WhatsApp) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    disabled={isEventEnded}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className="w-full bg-black/60 border border-white/15 focus:border-amber-400 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-stone-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Number of Tickets */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                5. Number of Tickets *
              </label>
              
              <div className="flex items-center gap-4 flex-wrap">
                {/* Counter */}
                <div className="flex items-center border border-white/20 rounded-xl bg-black/50 p-1">
                  <button
                    type="button"
                    disabled={isEventEnded || ticketQuantity <= 1}
                    onClick={() => setTicketQuantity((prev) => Math.max(1, prev - 1))}
                    className="w-10 h-10 flex items-center justify-center text-lg font-bold text-amber-300 hover:bg-white/10 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    -
                  </button>
                  <span className="w-14 text-center font-mono text-xl font-bold text-white">
                    {ticketQuantity}
                  </span>
                  <button
                    type="button"
                    disabled={isEventEnded || ticketQuantity >= 20}
                    onClick={() => setTicketQuantity((prev) => Math.min(20, prev + 1))}
                    className="w-10 h-10 flex items-center justify-center text-lg font-bold text-amber-300 hover:bg-white/10 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Quick Presets */}
                <div className="flex items-center gap-2">
                  {[1, 2, 4, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      disabled={isEventEnded}
                      onClick={() => setTicketQuantity(num)}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                        ticketQuantity === num
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-black/30 border-white/10 text-stone-400 hover:border-white/30'
                      }`}
                    >
                      {num} {num === 1 ? 'Pass' : 'Passes'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 5: Total Amount Breakdown */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-black/80 via-amber-950/30 to-black/80 border border-amber-500/30 flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                  Calculation Summary
                </span>
                <span className="text-sm text-stone-200 mt-1 block">
                  {ticketQuantity} × {currentPassInfo.name} (₹{unitPrice} each)
                </span>
                <span className="text-xs text-amber-300/80 block mt-0.5">
                  Valid for: {selectedTicketType === '2_days' ? 'Both 17 & 18 Oct' : selectedDate === '17_oct' ? '17 Oct' : '18 Oct'}
                </span>
              </div>

              <div className="text-right">
                <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                  Total Payable
                </span>
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
                  ₹{totalAmount}
                </span>
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-500/60 text-red-200 text-xs font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* BOOK NOW Button */}
            <button
              type="submit"
              disabled={isEventEnded}
              className={`w-full py-4 px-6 rounded-2xl font-extrabold uppercase tracking-wider text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl ${
                isEventEnded
                  ? 'bg-stone-800 text-stone-500 border border-stone-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-red-600 via-amber-500 to-red-600 hover:from-red-500 hover:to-amber-400 text-white shadow-[0_0_35px_rgba(239,68,68,0.5)] hover:scale-[1.02] cursor-pointer'
              }`}
            >
              <Ticket className="w-5 h-5" />
              <span>{isEventEnded ? 'Event Ended – Booking Closed' : `BOOK NOW (₹${totalAmount})`}</span>
              {!isEventEnded && <MessageCircle className="w-5 h-5 ml-1 text-emerald-300" />}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-stone-400 text-center pt-2">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Clicking Book Now sends your booking details directly to official WhatsApp: <strong>9955986296</strong></span>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {bookingSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#140A1E] border-2 border-amber-400 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center shadow-[0_0_50px_rgba(245,158,11,0.4)] relative">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-9 h-9 text-emerald-400" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Booking Initiated on WhatsApp!
            </h3>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
              Your Garba Night 4.0 booking details have been prepared for customer support on WhatsApp (<strong>9955986296</strong>). Please send the WhatsApp message to receive your e-pass and payment confirmation.
            </p>

            <div className="bg-black/50 rounded-2xl p-4 border border-white/10 text-left text-xs space-y-2 mb-6 text-stone-300">
              <div><strong>Name:</strong> {fullName}</div>
              <div><strong>Phone:</strong> {mobileNumber}</div>
              <div><strong>Ticket:</strong> {ticketQuantity} × {currentPassInfo.name}</div>
              <div><strong>Date:</strong> {getDateLabel()}</div>
              <div><strong>Total Amount:</strong> <span className="text-amber-300 font-bold font-mono text-sm">₹{totalAmount}</span></div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/91${GARBA_EVENT_DATA.whatsappNumber}?text=${encodeURIComponent(
                  `🎉 *GARBA NIGHT 4.0 - TICKET BOOKING INQUIRY*\nName: ${fullName}\nMobile: ${mobileNumber}\nTicket: ${currentPassInfo.name} (Qty: ${ticketQuantity})\nDate: ${getDateLabel()}\nTotal: ₹${totalAmount}\nVenue: Sharda Palace Bhabua`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>

              <button
                type="button"
                onClick={() => setBookingSuccessModal(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-stone-300 font-medium text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
