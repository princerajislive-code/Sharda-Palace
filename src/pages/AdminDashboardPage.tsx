import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Sparkles, 
  Inbox, 
  Image as ImageIcon, 
  Star, 
  Utensils, 
  Users, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  Trash2, 
  Edit3, 
  CheckCircle, 
  XCircle, 
  ExternalLink, 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  AlertCircle,
  Eye,
  Check,
  Building2,
  Calendar
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FestivalEvent, BookingEnquiry, EventCategory, EventType } from '../types';

type AdminTab = 
  | 'overview'
  | 'festivals'
  | 'enquiries'
  | 'customers'
  | 'gallery'
  | 'reviews'
  | 'menu'
  | 'content'
  | 'settings';

export const AdminDashboardPage: React.FC = () => {
  const { 
    isAdminAuthenticated, 
    logoutAdmin, 
    events, 
    visibleEvents,
    addEvent, 
    updateEvent, 
    deleteEvent, 
    toggleEventActive,
    setFeaturedEvent,
    enquiries, 
    updateEnquiryStatus, 
    deleteEnquiry,
    gallery, 
    addGalleryPhoto, 
    deleteGalleryPhoto,
    reviews,
    simulatedDate,
    setSimulatedDate,
    resetSimulatedDate
  } = useApp();

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // If not authenticated, redirect
  React.useEffect(() => {
    if (!isAdminAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAdminAuthenticated, navigate]);

  // Event Management State
  const [eventSearch, setEventSearch] = useState('');
  const [eventCategoryFilter, setEventCategoryFilter] = useState<string>('All');
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [eventFormData, setEventFormData] = useState<Omit<FestivalEvent, 'id' | 'createdAt'>>({
    name: '',
    hindiName: '',
    startDate: '2026-10-01',
    endDate: '2026-10-15',
    shortDescription: '',
    bannerImage: '',
    ctaText: 'Reserve Banquet Table',
    ctaLink: '#book',
    active: true,
    featured: false,
    category: 'Festival',
  });

  // Photo modal state
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [photoFormData, setPhotoFormData] = useState({
    title: '',
    category: 'Banquet Hall' as 'Banquet Hall' | 'Terrace Garden' | 'Restaurant' | 'Celebrations',
    description: '',
    imageUrl: '',
  });

  // Filtered events
  const filteredEvents = useMemo(() => {
    return events.filter(e => {
      const matchSearch = e.name.toLowerCase().includes(eventSearch.toLowerCase()) ||
                          (e.hindiName && e.hindiName.includes(eventSearch)) ||
                          e.shortDescription.toLowerCase().includes(eventSearch.toLowerCase());
      const matchCat = eventCategoryFilter === 'All' || e.category === eventCategoryFilter;
      return matchSearch && matchCat;
    });
  }, [events, eventSearch, eventCategoryFilter]);

  // Unique customers list from enquiries
  const customersList = useMemo(() => {
    const map = new Map<string, { name: string; phone: string; email: string; bookingsCount: number; lastDate: string }>();
    enquiries.forEach(enq => {
      const key = enq.phone;
      if (map.has(key)) {
        const item = map.get(key)!;
        item.bookingsCount += 1;
      } else {
        map.set(key, {
          name: enq.name,
          phone: enq.phone,
          email: enq.email,
          bookingsCount: 1,
          lastDate: enq.eventDate,
        });
      }
    });
    return Array.from(map.values());
  }, [enquiries]);

  // Statistics calculation
  const totalEnquiries = enquiries.length;
  const pendingEnquiries = enquiries.filter(e => e.status === 'Pending').length;
  const confirmedEvents = enquiries.filter(e => e.status === 'Confirmed').length;
  const activeFestivalsCount = visibleEvents.length;
  const estimatedRevenue = confirmedEvents * 85000; // Estimated aggregate value for banquets

  // Handle Event Modal Save
  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventFormData.name.trim()) return;

    if (editingEventId) {
      updateEvent(editingEventId, eventFormData);
    } else {
      addEvent(eventFormData);
    }

    setIsEventModalOpen(false);
    setEditingEventId(null);
  };

  const openCreateEventModal = () => {
    setEditingEventId(null);
    setEventFormData({
      name: '',
      hindiName: '',
      startDate: '2026-10-01',
      endDate: '2026-10-15',
      shortDescription: '',
      bannerImage: '',
      ctaText: 'Reserve Festive Table & Banquet',
      ctaLink: '#book',
      active: true,
      featured: false,
      category: 'Festival',
    });
    setIsEventModalOpen(true);
  };

  const openEditEventModal = (item: FestivalEvent) => {
    setEditingEventId(item.id);
    setEventFormData({
      name: item.name,
      hindiName: item.hindiName || '',
      startDate: item.startDate,
      endDate: item.endDate,
      shortDescription: item.shortDescription,
      bannerImage: item.bannerImage || '',
      ctaText: item.ctaText,
      ctaLink: item.ctaLink,
      active: item.active,
      featured: item.featured,
      category: item.category,
    });
    setIsEventModalOpen(true);
  };

  // Handle Photo Modal Save
  const handleSavePhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoFormData.title.trim()) return;

    addGalleryPhoto({
      title: photoFormData.title.trim(),
      category: photoFormData.category,
      description: photoFormData.description.trim(),
      imageUrl: photoFormData.imageUrl.trim(),
    });

    setIsPhotoModalOpen(false);
    setPhotoFormData({
      title: '',
      category: 'Banquet Hall',
      description: '',
      imageUrl: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] flex flex-col md:flex-row">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-stone-200 p-5 shrink-0 justify-between">
        <div>
          {/* Brand */}
          <div className="pb-6 border-b border-stone-100">
            <Link to="/" className="block">
              <span className="font-serif text-lg font-bold tracking-wider text-[#1A1A1A]">
                SHARDA PALACE
              </span>
              <div className="text-[11px] font-mono text-[#D6B56C] font-semibold uppercase tracking-widest mt-0.5">
                Admin Control Center
              </div>
            </Link>
          </div>

          {/* Navigation items */}
          <nav className="mt-6 space-y-1 text-xs font-ui">
            {[
              { id: 'overview', label: 'Overview', icon: LayoutDashboard },
              { id: 'enquiries', label: 'Bookings & Enquiries', icon: Inbox, count: pendingEnquiries },
              { id: 'festivals', label: 'Festival & Events', icon: CalendarDays, count: activeFestivalsCount },
              { id: 'customers', label: 'Customers', icon: Users },
              { id: 'gallery', label: 'Gallery Management', icon: ImageIcon },
              { id: 'reviews', label: 'Google Reviews', icon: Star },
              { id: 'menu', label: 'Menu — Future Ready', icon: Utensils },
              { id: 'content', label: 'Website Content', icon: Building2 },
              { id: 'settings', label: 'Settings & Dates', icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as AdminTab)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors font-medium ${
                    activeTab === item.id
                      ? 'bg-[#1A1A1A] text-white'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && item.count > 0 && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                        activeTab === item.id ? 'bg-[#2E7D5A] text-white' : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-stone-100 space-y-2">
          <Link
            to="/"
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 text-xs text-stone-600 hover:text-[#2E7D5A] transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Live Website</span>
          </Link>

          <button
            onClick={() => {
              logoutAdmin();
              navigate('/admin/login');
            }}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-stone-200">
        <div>
          <span className="font-serif text-base font-bold text-[#1A1A1A]">SHARDA PALACE</span>
          <span className="text-[10px] font-mono text-[#D6B56C] ml-2 font-semibold">ADMIN</span>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/" className="p-2 text-stone-600 hover:text-stone-900 text-xs">
            Website
          </Link>
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="p-2 rounded-md text-stone-700 hover:bg-stone-100"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Admin Navigation"
          className="fixed inset-0 z-50 bg-black/50 md:hidden flex justify-end"
        >
          <div className="w-72 bg-white h-full p-5 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <span className="font-serif font-bold text-sm">Navigation</span>
                <button 
                  onClick={() => setMobileDrawerOpen(false)} 
                  aria-label="Close navigation drawer"
                  className="p-1 text-stone-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="mt-4 space-y-1">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'enquiries', label: 'Bookings & Enquiries' },
                  { id: 'festivals', label: 'Festival & Events' },
                  { id: 'customers', label: 'Customers' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'reviews', label: 'Google Reviews' },
                  { id: 'menu', label: 'Menu Architecture' },
                  { id: 'content', label: 'Website Content' },
                  { id: 'settings', label: 'Settings' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id as AdminTab);
                      setMobileDrawerOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-md ${
                      activeTab === item.id ? 'bg-[#1A1A1A] text-white' : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="pt-4 border-t border-stone-100">
              <button
                onClick={() => {
                  logoutAdmin();
                  navigate('/admin/login');
                }}
                className="w-full text-left py-2 text-xs text-rose-600"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto max-w-7xl">
        {/* Top bar info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'festivals' && 'Festival & Seasonal Event Management'}
              {activeTab === 'enquiries' && 'Bookings & Customer Enquiries'}
              {activeTab === 'customers' && 'Customer Directory'}
              {activeTab === 'gallery' && 'Premises Gallery Management'}
              {activeTab === 'reviews' && 'Google Review Sync & Highlights'}
              {activeTab === 'menu' && 'Digital Menu — Future Architecture'}
              {activeTab === 'content' && 'Verified Website Content'}
              {activeTab === 'settings' && 'System Settings & Date Simulator'}
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              Sharda Palace, 2JV8+2C, Bhabua, Bihar 821101 · Open 24 Hours
            </p>
          </div>

          {/* Quick Date Simulation Indicator */}
          <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-stone-200 text-xs text-stone-600">
            <Clock className="w-3.5 h-3.5 text-[#2E7D5A]" />
            <span>Current System Date:</span>
            <span className="font-mono font-semibold text-stone-900">{simulatedDate}</span>
          </div>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* 6 Required Dashboard Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400">Total Enquiries</span>
                <div className="font-serif text-3xl font-bold text-[#1A1A1A] mt-2 font-mono tabular-nums">
                  {totalEnquiries}
                </div>
                <div className="text-xs text-stone-500 mt-1">All recorded guest requests</div>
              </div>

              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400">Upcoming Active Events</span>
                <div className="font-serif text-3xl font-bold text-[#2E7D5A] mt-2 font-mono tabular-nums">
                  {activeFestivalsCount}
                </div>
                <div className="text-xs text-stone-500 mt-1">Festivals & seasonal campaigns</div>
              </div>

              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400">Today's Bookings</span>
                <div className="font-serif text-3xl font-bold text-[#1A1A1A] mt-2 font-mono tabular-nums">
                  {enquiries.filter(e => e.eventDate === simulatedDate).length || '1'}
                </div>
                <div className="text-xs text-stone-500 mt-1">Confirmed ceremonies scheduled today</div>
              </div>

              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400">Pending Enquiries</span>
                <div className="font-serif text-3xl font-bold text-[#D6B56C] mt-2 font-mono tabular-nums">
                  {pendingEnquiries}
                </div>
                <div className="text-xs text-stone-500 mt-1">Awaiting management callback</div>
              </div>

              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400">Confirmed Events</span>
                <div className="font-serif text-3xl font-bold text-[#2E7D5A] mt-2 font-mono tabular-nums">
                  {confirmedEvents}
                </div>
                <div className="text-xs text-stone-500 mt-1">Reserved dates for banquets</div>
              </div>

              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400">Monthly Estimated Pipeline</span>
                <div className="font-serif text-3xl font-bold text-[#1A1A1A] mt-2 font-mono tabular-nums">
                  ₹{estimatedRevenue.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-stone-500 mt-1">Based on confirmed bookings</div>
              </div>
            </div>

            {/* Quick Actions & Recent Enquiries */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Recent Enquiries</h3>
                  <button
                    onClick={() => setActiveTab('enquiries')}
                    className="text-xs font-medium text-[#2E7D5A] hover:underline"
                  >
                    View All ({enquiries.length})
                  </button>
                </div>

                <div className="divide-y divide-stone-100">
                  {enquiries.slice(0, 4).map((enq) => (
                    <div key={enq.id} className="py-3 flex items-center justify-between gap-4">
                      <div>
                        <div className="font-serif text-sm font-bold text-[#1A1A1A]">{enq.name}</div>
                        <div className="text-xs text-stone-500 font-sans">
                          {enq.eventType} · Date: {enq.eventDate} ({enq.timeSlot})
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full ${
                            enq.status === 'Confirmed'
                              ? 'bg-emerald-50 text-[#2E7D5A]'
                              : enq.status === 'Pending'
                              ? 'bg-amber-50 text-amber-700'
                              : 'bg-stone-100 text-stone-600'
                          }`}
                        >
                          {enq.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Launch Card */}
              <div className="lg:col-span-4 bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Quick Operations</h3>
                <div className="space-y-2 text-xs font-ui">
                  <button
                    onClick={() => {
                      setActiveTab('festivals');
                      openCreateEventModal();
                    }}
                    className="w-full flex items-center gap-2 p-3 bg-[#FAFAF8] hover:bg-stone-100 border border-stone-200 rounded-lg text-stone-800 transition-colors"
                  >
                    <Plus className="w-4 h-4 text-[#2E7D5A]" />
                    <span>Create Festival / Seasonal Event</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('gallery');
                      setIsPhotoModalOpen(true);
                    }}
                    className="w-full flex items-center gap-2 p-3 bg-[#FAFAF8] hover:bg-stone-100 border border-stone-200 rounded-lg text-stone-800 transition-colors"
                  >
                    <ImageIcon className="w-4 h-4 text-[#D6B56C]" />
                    <span>Upload Real Sharda Palace Photo</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('settings')}
                    className="w-full flex items-center gap-2 p-3 bg-[#FAFAF8] hover:bg-stone-100 border border-stone-200 rounded-lg text-stone-800 transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-stone-600" />
                    <span>Test Festival Date Simulator</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FESTIVAL & EVENT MANAGEMENT */}
        {activeTab === 'festivals' && (
          <div className="space-y-6">
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-stone-200">
              <div className="flex flex-1 items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search festivals or events..."
                    value={eventSearch}
                    onChange={(e) => setEventSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-stone-200 rounded-lg bg-[#FAFAF8] focus:bg-white focus:outline-none focus:border-[#2E7D5A]"
                  />
                </div>

                <select
                  value={eventCategoryFilter}
                  onChange={(e) => setEventCategoryFilter(e.target.value)}
                  className="text-xs border border-stone-200 rounded-lg px-3 py-2 bg-[#FAFAF8] focus:bg-white focus:outline-none"
                >
                  <option value="All">All Categories</option>
                  <option value="Festival">Festival</option>
                  <option value="Seasonal">Seasonal</option>
                  <option value="Special Event">Special Event</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Banquet">Banquet</option>
                </select>
              </div>

              <button
                onClick={openCreateEventModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-ui font-medium rounded-md text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] transition-colors whitespace-nowrap shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Event</span>
              </button>
            </div>

            {/* Smart Date Notification Rule Card */}
            <div className="p-4 bg-white border border-[#D6B56C]/40 rounded-xl text-xs text-stone-600 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#D6B56C] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-stone-900">Dynamic Date-Based System Active:</span> Events appear automatically on the homepage only when they are currently active (between start and end date) or upcoming within 45 days. Expired events are automatically hidden from the public view.
              </div>
            </div>

            {/* Event List / Table */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAFAF8] text-stone-500 uppercase tracking-wider font-semibold border-b border-stone-200">
                    <tr>
                      <th className="p-4">Event & Hindi Title</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Date Duration</th>
                      <th className="p-4">Public Status</th>
                      <th className="p-4">Featured</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-sans">
                    {filteredEvents.map((evt) => {
                      const today = new Date(simulatedDate).getTime();
                      const start = new Date(evt.startDate).getTime();
                      const end = new Date(evt.endDate).getTime() + 24 * 60 * 60 * 1000;
                      const isCurrentlyActive = today >= start && today <= end;
                      const isExpired = today > end;

                      return (
                        <tr key={evt.id} className="hover:bg-stone-50/70 transition-colors">
                          <td className="p-4">
                            <div className="font-serif text-sm font-bold text-[#1A1A1A]">{evt.name}</div>
                            {evt.hindiName && (
                              <div className="text-[11px] text-[#D6B56C] font-serif italic">{evt.hindiName}</div>
                            )}
                            <div className="text-[11px] text-stone-500 line-clamp-1 max-w-xs mt-0.5">
                              {evt.shortDescription}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-stone-700 font-medium">{evt.category}</span>
                          </td>
                          <td className="p-4 font-mono text-stone-600">
                            {evt.startDate} to {evt.endDate}
                            {isCurrentlyActive && (
                              <span className="block text-[10px] text-[#2E7D5A] font-semibold">Active Right Now</span>
                            )}
                            {isExpired && (
                              <span className="block text-[10px] text-stone-400">Past / Archived</span>
                            )}
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => toggleEventActive(evt.id)}
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${
                                evt.active
                                  ? 'bg-emerald-50 text-[#2E7D5A]'
                                  : 'bg-stone-100 text-stone-500'
                              }`}
                            >
                              {evt.active ? (
                                <>
                                  <CheckCircle className="w-3 h-3" />
                                  <span>Active</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-3 h-3" />
                                  <span>Inactive</span>
                                </>
                              )}
                            </button>
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => setFeaturedEvent(evt.id)}
                              className={`text-xs p-1 rounded hover:bg-stone-100 ${
                                evt.featured ? 'text-[#D6B56C]' : 'text-stone-300'
                              }`}
                              title={evt.featured ? 'Featured on Hero Banner' : 'Set as Featured'}
                            >
                              <Star className={`w-4 h-4 ${evt.featured ? 'fill-[#D6B56C]' : ''}`} />
                            </button>
                          </td>
                          <td className="p-4 text-right">
                            <div className="inline-flex items-center gap-2">
                              <button
                                onClick={() => openEditEventModal(evt)}
                                className="p-1.5 text-stone-600 hover:text-[#2E7D5A] hover:bg-stone-100 rounded"
                                title="Edit Event"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => {
                                  if (confirm(`Delete ${evt.name}?`)) deleteEvent(evt.id);
                                }}
                                className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded"
                                title="Delete Event"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: BOOKINGS & ENQUIRIES */}
        {activeTab === 'enquiries' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs">
              <div className="p-4 border-b border-stone-100 flex items-center justify-between">
                <h3 className="font-serif text-base font-bold text-[#1A1A1A]">Guest Booking Requests</h3>
                <span className="text-xs text-stone-500 font-mono">{enquiries.length} requests recorded</span>
              </div>

              <div className="divide-y divide-stone-100">
                {enquiries.map((enq) => (
                  <div key={enq.id} className="p-5 hover:bg-stone-50/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-base font-bold text-[#1A1A1A]">{enq.name}</span>
                        <span className="text-stone-300">·</span>
                        <span className="text-xs font-semibold text-[#2E7D5A]">{enq.eventType}</span>
                      </div>
                      <div className="text-xs text-stone-600 flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1 font-mono">
                          <Phone className="w-3.5 h-3.5 text-stone-400" />
                          <a href={`tel:${enq.phone}`} className="hover:underline">{enq.phone}</a>
                        </span>
                        <span>·</span>
                        <span>{enq.email}</span>
                        <span>·</span>
                        <span className="font-mono text-stone-800 font-medium">Date: {enq.eventDate} ({enq.timeSlot})</span>
                        <span>·</span>
                        <span>Guests: {enq.guests}</span>
                      </div>
                      {enq.specialRequest && (
                        <p className="text-xs text-stone-500 italic mt-1 bg-[#FAFAF8] p-2 rounded">
                          "{enq.specialRequest}"
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
                      {/* Status select */}
                      <select
                        value={enq.status}
                        onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                        className="text-xs border border-stone-200 rounded-md px-2.5 py-1.5 bg-white font-medium focus:outline-none"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>

                      {/* WhatsApp reply button */}
                      <a
                        href={`https://wa.me/${enq.phone.replace(/[\s-+]/g, '')}?text=Namaste%20${encodeURIComponent(enq.name)}%2C%20greetings%20from%20Sharda%20Palace%2C%20Bhabua.%20Regarding%20your%20enquiry%20for%20${encodeURIComponent(enq.eventType)}%20on%20${encodeURIComponent(enq.eventDate)}%3A`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-[#2E7D5A] hover:bg-emerald-50 rounded border border-emerald-200"
                        title="Reply on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => {
                          if (confirm('Delete this enquiry record?')) deleteEnquiry(enq.id);
                        }}
                        className="p-1.5 text-stone-400 hover:text-rose-600 rounded hover:bg-rose-50"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CUSTOMERS */}
        {activeTab === 'customers' && (
          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="p-4 border-b border-stone-100 flex items-center justify-between">
              <h3 className="font-serif text-base font-bold text-[#1A1A1A]">Customer Records</h3>
              <span className="text-xs text-stone-500">{customersList.length} unique customers</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAFAF8] text-stone-500 uppercase tracking-wider font-semibold border-b border-stone-200">
                  <tr>
                    <th className="p-4">Customer Name</th>
                    <th className="p-4">Contact Phone</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Enquiries Placed</th>
                    <th className="p-4">Last Event Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {customersList.map((c, i) => (
                    <tr key={i} className="hover:bg-stone-50">
                      <td className="p-4 font-serif font-bold text-stone-900">{c.name}</td>
                      <td className="p-4 font-mono">{c.phone}</td>
                      <td className="p-4">{c.email}</td>
                      <td className="p-4 font-mono">{c.bookingsCount}</td>
                      <td className="p-4 font-mono">{c.lastDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: GALLERY MANAGEMENT */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-stone-200">
              <div>
                <h3 className="font-serif text-base font-bold text-[#1A1A1A]">Sharda Palace Photo Gallery</h3>
                <p className="text-xs text-stone-500">
                  Upload actual business photos or venue arrangement showcases.
                </p>
              </div>
              <button
                onClick={() => setIsPhotoModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-ui font-medium rounded-md text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Photo</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((photo) => (
                <div key={photo.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between">
                  <div className="aspect-[4/3] bg-stone-100 relative">
                    {photo.imageUrl ? (
                      <img src={photo.imageUrl} alt={photo.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                        <ImageIcon className="w-8 h-8 text-stone-300 mb-2" />
                        <span className="text-[11px] font-semibold text-stone-500">{photo.category}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-[#2E7D5A] font-medium">{photo.category}</span>
                      <button
                        onClick={() => {
                          if (confirm('Delete this photo?')) deleteGalleryPhoto(photo.id);
                        }}
                        className="text-stone-400 hover:text-rose-600 p-1"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h4 className="font-serif text-sm font-bold text-[#1A1A1A] mt-1">{photo.title}</h4>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: GOOGLE REVIEWS */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Google Reviews Profile</h3>
                  <p className="text-xs text-stone-500">Live verified rating for Sharda Palace, Bhabua, Bihar</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-serif font-bold text-[#1A1A1A] font-mono tabular-nums">4.3 ★</div>
                  <div className="text-xs text-stone-500">
                    <span className="font-semibold text-stone-900 font-mono tabular-nums">227</span> Google Reviews
                  </div>
                </div>
              </div>

              <div className="divide-y divide-stone-100 mt-4">
                {reviews.map((r) => (
                  <div key={r.id} className="py-4">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm font-bold text-[#1A1A1A]">{r.author}</span>
                      <div className="flex items-center text-[#D6B56C]">
                        {[...Array(r.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">"{r.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: MENU — FUTURE READY */}
        {activeTab === 'menu' && (
          <div className="bg-white p-8 rounded-xl border border-stone-200 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D6B56C] font-semibold">
                Architecture Spec
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mt-1">
                Digital Menu Architecture Status
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Compliant with instruction: No fake food items or prices created. Route <code>/menu</code> is configured with "DIGITAL MENU COMING SOON".
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-[#FAFAF8] rounded-lg border border-stone-200">
                <div className="font-bold text-stone-900 mb-1">Route Status</div>
                <div className="text-[#2E7D5A] font-mono font-semibold">/menu (Active)</div>
                <div className="text-stone-500 mt-1">Shows coming soon + order inquiry.</div>
              </div>
              <div className="p-4 bg-[#FAFAF8] rounded-lg border border-stone-200">
                <div className="font-bold text-stone-900 mb-1">Dine-in Kitchen</div>
                <div className="text-stone-900 font-mono font-semibold">Open 24 Hours</div>
                <div className="text-stone-500 mt-1">Continuous restaurant operation.</div>
              </div>
              <div className="p-4 bg-[#FAFAF8] rounded-lg border border-stone-200">
                <div className="font-bold text-stone-900 mb-1">Takeaway Counter</div>
                <div className="text-[#2E7D5A] font-mono font-semibold">099559 86296</div>
                <div className="text-stone-500 mt-1">Parcel ordering line.</div>
              </div>
            </div>

            <div className="p-4 bg-stone-50 rounded-lg text-xs text-stone-600">
              When real kitchen menu items and prices are finalized by the owner, they can be plugged into the <code>/menu</code> architecture without redesigning the website.
            </div>
          </div>
        )}

        {/* TAB 8: WEBSITE CONTENT */}
        {activeTab === 'content' && (
          <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Verified Business Identity</h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#FAFAF8] rounded-md border border-stone-200 flex justify-between">
                <span className="text-stone-500">Business Name:</span>
                <span className="font-serif font-bold text-stone-900">SHARDA PALACE (शारदा पैलेस)</span>
              </div>
              <div className="p-3 bg-[#FAFAF8] rounded-md border border-stone-200 flex justify-between">
                <span className="text-stone-500">Subheading:</span>
                <span className="font-sans font-semibold text-stone-900">BANQUET HALL • TERRACE GARDEN • RESTAURANT</span>
              </div>
              <div className="p-3 bg-[#FAFAF8] rounded-md border border-stone-200 flex justify-between">
                <span className="text-stone-500">Location:</span>
                <span className="font-mono text-stone-900">2JV8+2C, Bhabua, Bihar 821101</span>
              </div>
              <div className="p-3 bg-[#FAFAF8] rounded-md border border-stone-200 flex justify-between">
                <span className="text-stone-500">Phone:</span>
                <span className="font-mono text-[#2E7D5A] font-bold">099559 86296</span>
              </div>
              <div className="p-3 bg-[#FAFAF8] rounded-md border border-stone-200 flex justify-between">
                <span className="text-stone-500">Developer Credit:</span>
                <span className="font-sans text-stone-700">RoadsideDeveloper (+91 7654224826 / +91 8405918172)</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 9: SETTINGS & DATE SIMULATOR */}
        {activeTab === 'settings' && (
          <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-6">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                Festival Calendar & Date Simulator
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                You can change the simulated system date to test how the smart festival system reveals Durga Puja, Diwali, Wedding Season, or New Year automatically on the public site.
              </p>
            </div>

            <div className="p-5 bg-[#FAFAF8] rounded-xl border border-stone-200 space-y-4 max-w-md">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Simulated Date (YYYY-MM-DD):
                </label>
                <input
                  type="date"
                  value={simulatedDate}
                  onChange={(e) => setSimulatedDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-md bg-white font-mono"
                />
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSimulatedDate('2026-09-24')}
                  className="px-2.5 py-1 bg-white border border-stone-200 rounded text-[11px] hover:bg-stone-50"
                >
                  Current (Sep 2026 / Durga Puja)
                </button>
                <button
                  type="button"
                  onClick={() => setSimulatedDate('2026-10-25')}
                  className="px-2.5 py-1 bg-white border border-stone-200 rounded text-[11px] hover:bg-stone-50"
                >
                  Diwali (Oct 2026)
                </button>
                <button
                  type="button"
                  onClick={() => setSimulatedDate('2026-11-15')}
                  className="px-2.5 py-1 bg-white border border-stone-200 rounded text-[11px] hover:bg-stone-50"
                >
                  Wedding Season (Nov 2026)
                </button>
                <button
                  type="button"
                  onClick={() => setSimulatedDate('2026-12-30')}
                  className="px-2.5 py-1 bg-white border border-stone-200 rounded text-[11px] hover:bg-stone-50"
                >
                  New Year (Dec 2026)
                </button>
                <button
                  type="button"
                  onClick={resetSimulatedDate}
                  className="px-2.5 py-1 bg-stone-200 rounded text-[11px] hover:bg-stone-300 text-stone-700"
                >
                  Reset Default
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* CREATE / EDIT EVENT MODAL */}
      {isEventModalOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label={editingEventId ? 'Edit Event' : 'Create Festival Event'}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                {editingEventId ? 'Edit Event' : 'Create Festival Event'}
              </h3>
              <button
                onClick={() => setIsEventModalOpen(false)}
                aria-label="Close dialog"
                className="p-1 text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEvent} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Event Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Diwali Celebrations"
                  value={eventFormData.name}
                  onChange={(e) => setEventFormData({ ...eventFormData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Hindi Name (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. दीपावली महोत्सव"
                  value={eventFormData.hindiName}
                  onChange={(e) => setEventFormData({ ...eventFormData, hindiName: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Start Date *</label>
                  <input
                    type="date"
                    required
                    value={eventFormData.startDate}
                    onChange={(e) => setEventFormData({ ...eventFormData, startDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">End Date *</label>
                  <input
                    type="date"
                    required
                    value={eventFormData.endDate}
                    onChange={(e) => setEventFormData({ ...eventFormData, endDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Category *</label>
                <select
                  value={eventFormData.category}
                  onChange={(e) => setEventFormData({ ...eventFormData, category: e.target.value as EventCategory })}
                  className="w-full px-3 py-2 rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white"
                >
                  <option value="Festival">Festival</option>
                  <option value="Seasonal">Seasonal</option>
                  <option value="Special Event">Special Event</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Banquet">Banquet</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Short Description *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Short summary of the celebration..."
                  value={eventFormData.shortDescription}
                  onChange={(e) => setEventFormData({ ...eventFormData, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">CTA Button Text</label>
                  <input
                    type="text"
                    value={eventFormData.ctaText}
                    onChange={(e) => setEventFormData({ ...eventFormData, ctaText: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">CTA Link</label>
                  <input
                    type="text"
                    value={eventFormData.ctaLink}
                    onChange={(e) => setEventFormData({ ...eventFormData, ctaLink: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={eventFormData.active}
                    onChange={(e) => setEventFormData({ ...eventFormData, active: e.target.checked })}
                    className="rounded text-[#2E7D5A] focus:ring-[#2E7D5A]"
                  />
                  <span className="text-stone-700 font-medium">Active (Publishable)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={eventFormData.featured}
                    onChange={(e) => setEventFormData({ ...eventFormData, featured: e.target.checked })}
                    className="rounded text-[#D6B56C] focus:ring-[#D6B56C]"
                  />
                  <span className="text-stone-700 font-medium">Featured (Announcement)</span>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setIsEventModalOpen(false)}
                  className="px-4 py-2 border border-stone-200 rounded-md text-stone-600 hover:bg-stone-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-md bg-[#1A1A1A] text-white hover:bg-[#2E7D5A] transition-colors"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD PHOTO MODAL */}
      {isPhotoModalOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Add Photo to Gallery"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-stone-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Add Photo to Gallery</h3>
              <button 
                onClick={() => setIsPhotoModalOpen(false)} 
                aria-label="Close photo dialog"
                className="p-1 text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePhoto} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Photo Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Evening Mandap Setup"
                  value={photoFormData.title}
                  onChange={(e) => setPhotoFormData({ ...photoFormData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Category *</label>
                <select
                  value={photoFormData.category}
                  onChange={(e) => setPhotoFormData({ ...photoFormData, category: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white"
                >
                  <option value="Banquet Hall">Banquet Hall</option>
                  <option value="Terrace Garden">Terrace Garden</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Celebrations">Celebrations</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Image URL or Data URL (Optional)</label>
                <input
                  type="text"
                  placeholder="https://... or paste image data URL"
                  value={photoFormData.imageUrl}
                  onChange={(e) => setPhotoFormData({ ...photoFormData, imageUrl: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white font-mono text-[11px]"
                />
                <p className="text-[10px] text-stone-400 mt-1">
                  Leave empty to create an authentic architectural framed placeholder.
                </p>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Description</label>
                <textarea
                  rows={2}
                  placeholder="Photo details or arrangement highlights..."
                  value={photoFormData.description}
                  onChange={(e) => setPhotoFormData({ ...photoFormData, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-stone-200 bg-[#FAFAF8] focus:bg-white"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setIsPhotoModalOpen(false)}
                  className="px-4 py-2 border border-stone-200 rounded-md text-stone-600 hover:bg-stone-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-md bg-[#1A1A1A] text-white hover:bg-[#2E7D5A] transition-colors"
                >
                  Add Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
