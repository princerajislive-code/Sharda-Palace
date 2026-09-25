import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle, AlertCircle, Calendar, Clock, Users, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { EventType } from '../../types';

export const BookingSection: React.FC = () => {
  const { addEnquiry, simulatedDate } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Marriage Function' as EventType,
    eventDate: '',
    timeSlot: 'Evening' as 'Morning' | 'Afternoon' | 'Evening' | 'Full Day',
    guests: '150 - 250 Guests',
    specialRequest: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [lastReferenceId, setLastReferenceId] = useState('');

  const eventTypes: EventType[] = [
    'Marriage Function',
    'Banquet Event',
    'Terrace Garden Party',
    'Family Gathering',
    'Birthday Celebration',
    'Anniversary',
    'Restaurant Private Dining',
    'Corporate Gathering',
    'Other',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name.';
    }

    const cleanPhone = formData.phone.replace(/[\s-+]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.eventDate) {
      errs.eventDate = 'Please select a date for your event.';
    } else if (new Date(formData.eventDate) < new Date(simulatedDate)) {
      errs.eventDate = 'Event date cannot be in the past.';
    }

    if (!formData.guests.trim()) {
      errs.guests = 'Please specify estimated number of guests.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    addEnquiry({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      eventType: formData.eventType,
      eventDate: formData.eventDate,
      timeSlot: formData.timeSlot,
      guests: formData.guests.trim(),
      specialRequest: formData.specialRequest.trim(),
    });

    const ref = `SP-${Math.floor(100000 + Math.random() * 900000)}`;
    setLastReferenceId(ref);
    setSubmitted(true);
  };

  const handleWhatsAppEnquiry = () => {
    const text = `Hello Sharda Palace, I would like to enquire about an event booking.%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Guest')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A*Event:* ${encodeURIComponent(formData.eventType)}%0A*Date:* ${encodeURIComponent(formData.eventDate || 'TBD')}%0A*Timing:* ${encodeURIComponent(formData.timeSlot)}%0A*Guests:* ${encodeURIComponent(formData.guests || 'N/A')}%0A*Special Request:* ${encodeURIComponent(formData.specialRequest || 'None')}`;
    window.open(`https://wa.me/919955986296?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventType: 'Marriage Function',
      eventDate: '',
      timeSlot: 'Evening',
      guests: '150 - 250 Guests',
      specialRequest: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="book" className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-[#F2F2EF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7D5A] font-sans mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B56C]" />
            <span>Event Reservation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            Plan Your Celebration at Sharda Palace
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Reserve the Banquet Hall, Terrace Garden, or Restaurant for your auspicious date in Bhabua.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          {submitted ? (
            /* Success State */
            <div className="p-8 sm:p-14 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#2E7D5A] border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                  Reference: {lastReferenceId}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                  Enquiry Received with Thanks
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed pt-1">
                  Thank you, <strong>{formData.name}</strong>. Our management team at Sharda Palace will review your requirements for <strong>{formData.eventType}</strong> on <strong>{formData.eventDate}</strong> and reach out shortly.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-ui font-medium rounded-md text-white bg-[#2E7D5A] hover:bg-[#256649] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Details via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-ui font-medium rounded-md text-stone-700 bg-[#FAFAF8] hover:bg-stone-100 border border-stone-200 transition-colors"
                >
                  <span>Submit Another Enquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
              {/* Row 1: Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 font-sans">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Singh"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#FAFAF8] focus:bg-white focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-400 ring-1 ring-rose-200' : 'border-stone-200 focus:border-[#2E7D5A]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 font-sans">
                    Mobile Phone <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit number (e.g. 9955986296)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#FAFAF8] focus:bg-white focus:outline-none transition-colors font-mono tabular-nums ${
                      errors.phone ? 'border-rose-400 ring-1 ring-rose-200' : 'border-stone-200 focus:border-[#2E7D5A]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 font-sans">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#FAFAF8] focus:bg-white focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-400 ring-1 ring-rose-200' : 'border-stone-200 focus:border-[#2E7D5A]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Event Details */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 font-sans">
                    Event Type <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value as EventType })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-200 bg-[#FAFAF8] focus:bg-white focus:border-[#2E7D5A] focus:outline-none"
                  >
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 font-sans">
                    Event Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#FAFAF8] focus:bg-white focus:outline-none ${
                        errors.eventDate ? 'border-rose-400 ring-1 ring-rose-200' : 'border-stone-200 focus:border-[#2E7D5A]'
                      }`}
                    />
                  </div>
                  {errors.eventDate && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.eventDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 font-sans">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-200 bg-[#FAFAF8] focus:bg-white focus:border-[#2E7D5A] focus:outline-none"
                  >
                    <option value="Morning">Morning (8 AM – 2 PM)</option>
                    <option value="Afternoon">Afternoon (12 PM – 5 PM)</option>
                    <option value="Evening">Evening (5 PM – 11 PM)</option>
                    <option value="Full Day">Full Day (24 Hours Event)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 font-sans">
                    Estimated Guests <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 200 Guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#FAFAF8] focus:bg-white focus:outline-none ${
                      errors.guests ? 'border-rose-400 ring-1 ring-rose-200' : 'border-stone-200 focus:border-[#2E7D5A]'
                    }`}
                  />
                  {errors.guests && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.guests}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 font-sans">
                  Special Request or Venue Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Details regarding stage decoration, terrace setup, dining preferences, or specific timings..."
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-200 bg-[#FAFAF8] focus:bg-white focus:border-[#2E7D5A] focus:outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-100">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <Clock className="w-3.5 h-3.5 text-[#2E7D5A]" />
                  <span>Immediate response during business hours & 24h reception</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppEnquiry}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-ui font-medium rounded-md text-[#2E7D5A] hover:text-[#256649] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-ui font-medium rounded-md text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] transition-all shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
