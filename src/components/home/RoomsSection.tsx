import React, { useState, useMemo, useEffect } from 'react';
import { 
  Bed, 
  Check, 
  Wind, 
  Users, 
  Calendar, 
  ArrowRight, 
  X, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck,
  Clock
} from 'lucide-react';
import { SHARDA_ROOMS, RoomItem, RoomFilterType } from '../../data/roomsData';
import { useApp } from '../../context/AppContext';

export const RoomsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<RoomFilterType>('ALL');
  const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Booking Form State
  const [guestName, setGuestName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [checkInDate, setCheckInDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [checkOutDate, setCheckOutDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [guestCount, setGuestCount] = useState<number>(2);
  const [roomCount, setRoomCount] = useState<number>(1);
  const [formError, setFormError] = useState<string | null>(null);

  const { addEnquiry } = useApp();

  // Prevent body scroll when modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Filtered rooms logic
  const filteredRooms = useMemo(() => {
    if (activeFilter === 'ALL') return SHARDA_ROOMS;
    if (activeFilter === 'AC') return SHARDA_ROOMS.filter((r) => r.acType === 'AC');
    if (activeFilter === 'NON-AC') return SHARDA_ROOMS.filter((r) => r.acType === 'NON-AC');
    if (activeFilter === 'DELUXE') return SHARDA_ROOMS.filter((r) => r.tier === 'DELUXE');
    if (activeFilter === 'STANDARD') return SHARDA_ROOMS.filter((r) => r.tier === 'STANDARD');
    return SHARDA_ROOMS;
  }, [activeFilter]);

  // Open booking modal for a specific room
  const handleOpenBooking = (room: RoomItem) => {
    setSelectedRoom(room);
    setFormError(null);
    setIsModalOpen(true);
  };

  // Calculate duration of stay in nights
  const numberOfNights = useMemo(() => {
    if (!checkInDate || !checkOutDate) return 0;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }, [checkInDate, checkOutDate]);

  // Date validation check
  const isDateRangeValid = useMemo(() => {
    if (!checkInDate || !checkOutDate) return false;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    return end.getTime() > start.getTime();
  }, [checkInDate, checkOutDate]);

  // Confirm booking & launch WhatsApp
  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedRoom) return;

    if (!guestName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!isDateRangeValid || numberOfNights < 1) {
      setFormError('Check-out date must be after check-in date (minimum 1 night stay).');
      return;
    }

    if (guestCount < 1) {
      setFormError('Number of guests must be at least 1.');
      return;
    }

    if (roomCount < 1) {
      setFormError('Number of rooms must be at least 1.');
      return;
    }

    setFormError(null);

    // Save to AppContext for Admin Dashboard records
    try {
      addEnquiry({
        name: guestName.trim(),
        phone: cleanPhone,
        email: '',
        eventType: 'Other',
        eventDate: checkInDate,
        timeSlot: 'Full Day',
        guests: `${guestCount} Guest(s) / ${roomCount} Room(s)`,
        specialRequest: `Room Booking: ${selectedRoom.name} (${selectedRoom.tier}, ${selectedRoom.acType}). Check-in: ${checkInDate}, Check-out: ${checkOutDate}, ${numberOfNights} night(s).`,
      });
    } catch {
      // safe fallback
    }

    // Prepare WhatsApp message as strictly requested
    const pricePerNightStr = selectedRoom.pricePerNight 
      ? `₹${selectedRoom.pricePerNight}` 
      : 'Tariff on Request';

    const estimatedTotalStr = selectedRoom.pricePerNight
      ? `₹${selectedRoom.pricePerNight * numberOfNights * roomCount}`
      : 'Tariff on Request';

    const whatsappMessage = 
      `SHARDA PALACE ROOM BOOKING\n\n` +
      `Guest Name: ${guestName.trim()}\n` +
      `Mobile: ${cleanPhone}\n` +
      `Room: ${selectedRoom.name}\n` +
      `Room Type: ${selectedRoom.tier}\n` +
      `AC / NON-AC: ${selectedRoom.acType}\n` +
      `Check-in: ${checkInDate}\n` +
      `Check-out: ${checkOutDate}\n` +
      `Guests: ${guestCount}\n` +
      `Rooms: ${roomCount}\n` +
      `Price/Night: ${pricePerNightStr}\n` +
      `Number of Nights: ${numberOfNights}\n` +
      `Estimated Total: ${estimatedTotalStr}\n\n` +
      `Please confirm room availability and tariff at Sharda Palace, Bhabua.`;

    const whatsappUrl = `https://wa.me/919955986296?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsModalOpen(false);
  };

  const filterOptions: RoomFilterType[] = ['ALL', 'AC', 'NON-AC', 'DELUXE', 'STANDARD'];

  return (
    <section id="rooms" className="py-20 sm:py-24 bg-[#FAFAF8] border-b border-[#F2F2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7D5A] font-sans mb-3">
            <Bed className="w-3.5 h-3.5" />
            <span>Rooms & Stay</span>
            <span className="text-stone-300">·</span>
            <span>Hotel Accommodations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Book Your Stay at Sharda Palace
          </h2>
          <p className="mt-3.5 text-stone-600 text-sm sm:text-base leading-relaxed">
            Serene, clean and comfortable guest accommodations in Bhabua. Featuring spacious air-conditioned and standard rooms with attached bathrooms, ideal for wedding families and visiting guests.
          </p>
        </div>

        {/* Room Filters */}
        <div className="flex items-center justify-center mb-10 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-stone-200 shadow-2xs overflow-x-auto max-w-full">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#2E7D5A] text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Large Real Sharda Palace Room Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-stone-100 shrink-0">
                <img
                  src={room.imagePath}
                  alt={room.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Badges on Image */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-sans font-bold tracking-wider uppercase bg-[#1A1A1A]/85 backdrop-blur-xs text-[#D6B56C] border border-[#D6B56C]/30 shadow-2xs">
                    {room.tier}
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] font-sans font-bold tracking-wider uppercase backdrop-blur-xs shadow-2xs ${
                      room.acType === 'AC'
                        ? 'bg-emerald-900/85 text-emerald-200 border border-emerald-500/40'
                        : 'bg-stone-800/85 text-stone-200 border border-stone-600/40'
                    }`}
                  >
                    {room.acType}
                  </span>
                </div>

                {/* Capacity Overlay at bottom-left */}
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-white text-xs font-medium">
                  <Users className="w-3.5 h-3.5 text-[#D6B56C]" />
                  <span>{room.capacityText}</span>
                </div>
              </div>

              {/* Room Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#2E7D5A] transition-colors">
                    {room.name}
                  </h3>

                  {/* Visual Subtitle line */}
                  <div className="mt-1 text-[11px] font-sans font-semibold tracking-wider uppercase text-stone-500">
                    {room.tier} • {room.acType} • {room.capacityText.toUpperCase()}
                  </div>

                  {/* Short Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {room.shortDescription}
                  </p>

                  {/* Verified Amenities List */}
                  <div className="mt-4 pt-3.5 border-t border-stone-100">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block mb-2 font-sans">
                      Verified Room Features
                    </span>
                    <ul className="space-y-1.5">
                      {room.amenities.map((amenity, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-[#2E7D5A] shrink-0 mt-0.5" />
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tariff & Book Room CTA */}
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 block">
                        TARIFF
                      </span>
                      {room.pricePerNight ? (
                        <div className="font-serif text-lg sm:text-xl font-bold text-[#2E7D5A]">
                          ₹{room.pricePerNight}{' '}
                          <span className="text-xs font-sans text-stone-500 font-normal">/ NIGHT</span>
                        </div>
                      ) : (
                        <div className="text-xs font-semibold text-stone-800 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#D6B56C]" />
                          <span>Tariff on Request</span>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
                      Direct Booking
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenBooking(room)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] active:bg-[#236347] transition-all shadow-2xs hover:shadow-xs group/btn cursor-pointer"
                  >
                    <span>BOOK ROOM</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Room Policy Information Strip (From Verified Project Data) */}
        <div className="mt-12 sm:mt-16 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2E7D5A] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-stone-900 block text-sm">
                Function Room Check-in & Vacate Timings
              </span>
              <span className="text-stone-500 text-xs">
                Rooms provided at 09:00 AM on the day of function; vacated by 08:00 AM the following day.
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/919955986296?text=Hello%20Sharda%20Palace%2C%20I%20would%20like%20to%20inquire%20about%20room%20availability%20and%20tariff."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#2E7D5A]" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Booking Form Modal */}
      {isModalOpen && selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsModalOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-room-booking-title"
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden z-10 max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-100 bg-[#FAFAF8] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/10 text-[#2E7D5A] flex items-center justify-center shrink-0">
                  <Bed className="w-4 h-4" />
                </div>
                <div>
                  <h3 id="modal-room-booking-title" className="font-serif text-base sm:text-lg font-bold text-[#1A1A1A]">
                    Book Room Accommodation
                  </h3>
                  <p className="text-[11px] text-stone-500 font-sans">
                    Sharda Palace Hotel & Banquet, Bhabua
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <form onSubmit={handleConfirmBooking} className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
              {/* Selected Room Preview Card */}
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center gap-3">
                <img
                  src={selectedRoom.imagePath}
                  alt={selectedRoom.name}
                  className="w-16 h-16 rounded-lg object-cover shrink-0 border border-stone-200"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-sans font-bold uppercase px-1.5 py-0.5 rounded bg-[#1A1A1A] text-[#D6B56C]">
                      {selectedRoom.tier}
                    </span>
                    <span className="text-[9px] font-sans font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      {selectedRoom.acType}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#1A1A1A] mt-1 truncate">
                    {selectedRoom.name}
                  </h4>
                  <div className="text-[11px] text-stone-500">
                    Capacity: {selectedRoom.capacityText} • {selectedRoom.tariffLabel}
                  </div>
                </div>
              </div>

              {/* Error Notice */}
              {formError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                  {formError}
                </div>
              )}

              {/* Form Fields */}
              <div className="space-y-3.5">
                {/* Selected Room Selector */}
                <div>
                  <label htmlFor="booking-room-select" className="block text-xs font-semibold text-stone-700 mb-1">
                    Selected Room Category
                  </label>
                  <select
                    id="booking-room-select"
                    value={selectedRoom.id}
                    onChange={(e) => {
                      const found = SHARDA_ROOMS.find((r) => r.id === e.target.value);
                      if (found) setSelectedRoom(found);
                    }}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E7D5A] bg-white text-stone-900"
                  >
                    {SHARDA_ROOMS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} ({r.tier} • {r.acType})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guest Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="booking-guest-name" className="block text-xs font-semibold text-stone-700 mb-1">
                      Guest Name *
                    </label>
                    <input
                      id="booking-guest-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E7D5A] text-stone-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-mobile" className="block text-xs font-semibold text-stone-700 mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      id="booking-mobile"
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E7D5A] text-stone-900"
                    />
                  </div>
                </div>

                {/* Dates: Check-in & Check-out */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="booking-checkin" className="block text-xs font-semibold text-stone-700 mb-1">
                      Check-in Date *
                    </label>
                    <input
                      id="booking-checkin"
                      type="date"
                      required
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E7D5A] text-stone-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-checkout" className="block text-xs font-semibold text-stone-700 mb-1">
                      Check-out Date *
                    </label>
                    <input
                      id="booking-checkout"
                      type="date"
                      required
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E7D5A] text-stone-900"
                    />
                  </div>
                </div>

                {/* Guests & Room Count */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="booking-guests" className="block text-xs font-semibold text-stone-700 mb-1">
                      Number of Guests
                    </label>
                    <select
                      id="booking-guests"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E7D5A] bg-white text-stone-900"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="booking-rooms" className="block text-xs font-semibold text-stone-700 mb-1">
                      Number of Rooms
                    </label>
                    <select
                      id="booking-rooms"
                      value={roomCount}
                      onChange={(e) => setRoomCount(Number(e.target.value))}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E7D5A] bg-white text-stone-900"
                    >
                      {[1, 2, 3, 4, 5, 7].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Room' : 'Rooms'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Automatic Calculation Summary Box */}
              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-stone-700">
                  <span>Number of Nights:</span>
                  <span className="font-semibold text-stone-900">
                    {numberOfNights > 0 ? `${numberOfNights} Night(s)` : 'Invalid Date Range'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-stone-700">
                  <span>Rooms Selected:</span>
                  <span className="font-semibold text-stone-900">{roomCount} Room(s)</span>
                </div>
                <div className="flex items-center justify-between text-stone-700">
                  <span>Price Per Night:</span>
                  <span className="font-semibold text-stone-900">
                    {selectedRoom.pricePerNight ? `₹${selectedRoom.pricePerNight}` : 'Tariff on Request'}
                  </span>
                </div>
                <div className="pt-2 border-t border-emerald-200/60 flex items-center justify-between font-serif text-sm font-bold text-[#1A1A1A]">
                  <span>Estimated Total:</span>
                  <span className="text-[#2E7D5A]">
                    {selectedRoom.pricePerNight
                      ? `₹${selectedRoom.pricePerNight * numberOfNights * roomCount}`
                      : 'Confirmed on WhatsApp'}
                  </span>
                </div>
              </div>

              {/* WhatsApp Notice & Confirmation Button */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-white bg-[#2E7D5A] hover:bg-[#236347] active:bg-[#1a4a35] transition-colors shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CONFIRM ROOM BOOKING</span>
                </button>

                <p className="text-[11px] text-center text-stone-500">
                  On confirmation, WhatsApp will open with your pre-filled details to verify room availability with the front desk.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
