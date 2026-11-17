import { useEffect, useRef, useState } from 'react';
import { Bell, ShoppingBag, Menu, X } from 'lucide-react';
import { ARTIST_NOTIFICATIONS, PageId } from '../data/siteData';
import { useStore } from '../context/StoreContext';

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'TRANG CHỦ' },
  { id: 'about', label: 'GIỚI THIỆU' },
  { id: 'music', label: 'ÂM NHẠC' },
  { id: 'schedule', label: 'LỊCH TRÌNH' },
  { id: 'shop', label: 'CỬA HÀNG' },
];

export function Header() {
  const { currentPage, navigate, cartCount } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notiRef.current && !notiRef.current.contains(e.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setNotificationsOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleNavClick = (page: PageId) => {
    setMobileMenuOpen(false);
    setNotificationsOpen(false);
    navigate(page);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 min-h-[68px] md:min-h-[76px] flex items-center justify-between md:justify-start gap-6 lg:gap-10 px-[5%] md:px-[clamp(22px,4.3vw,76px)] border-b border-[#c2cbeb]/[0.09] transition-colors duration-300 ${
        scrolled
          ? 'bg-[#040811]/95 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Zone 1: Brand wordmark */}
      <button
        type="button"
        onClick={() => handleNavClick('home')}
        aria-label="Bùi Trường Linh Official"
        className="font-script text-[18px] sm:text-[20px] font-bold tracking-[-0.01em] text-white whitespace-nowrap shrink-0 cursor-pointer bg-transparent border-0 p-0 focus-visible:outline-2 focus-visible:outline-[#b8dcff]"
      >
        buitruonglinh
        <span className="font-sans text-[7px] align-top ml-[3px] text-[#b8dcff] tracking-normal font-semibold">
          OFFICIAL
        </span>
      </button>

      {/* Zone 2: Desktop Navigation */}
      <nav
        aria-label="Menu chính"
        className="hidden md:flex items-center justify-center gap-[clamp(20px,4vw,64px)] flex-1 h-[76px]"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`relative py-[27px] text-[11px] lg:text-[12px] tracking-[0.11em] whitespace-nowrap shrink-0 bg-transparent border-0 cursor-pointer transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#b8dcff] ${
                isActive ? 'text-white font-medium' : 'text-[#e8ecf3] hover:text-white'
              }`}
            >
              {item.label}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-[17px] left-0 right-0 h-[2px] bg-[#b8dcff] shadow-[0_0_16px_#73a8dd]"
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Zone 3: Actions */}
      <div className="flex items-center gap-3 md:gap-4 shrink-0">
        {/* Notifications Popover */}
        <div className="relative" ref={notiRef}>
          <button
            type="button"
            onClick={() => setNotificationsOpen((prev) => !prev)}
            aria-label="Thông báo"
            aria-expanded={notificationsOpen}
            title="Thông báo"
            className="grid place-items-center p-2 text-[#e8ecf3] hover:text-[#b8dcff] transition-colors cursor-pointer bg-transparent border-0 focus-visible:outline-2 focus-visible:outline-[#b8dcff]"
          >
            <Bell className="w-[19px] h-[19px]" strokeWidth={1.6} />
          </button>

          {notificationsOpen && (
            <div
              role="region"
              aria-label="Thông báo mới nhất"
              className="absolute right-0 mt-2 w-[300px] sm:w-[340px] bg-[#0b1220] border border-white/15 rounded-lg shadow-2xl overflow-hidden z-50"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <span className="text-xs font-bold tracking-[0.14em] uppercase text-white">
                  THÔNG BÁO MỚI
                </span>
                <button
                  type="button"
                  onClick={() => setNotificationsOpen(false)}
                  aria-label="Đóng thông báo"
                  className="text-[#a9adc1] hover:text-white p-1 cursor-pointer bg-transparent border-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="divide-y divide-white/10">
                {ARTIST_NOTIFICATIONS.map((noti) => (
                  <button
                    key={noti.id}
                    type="button"
                    onClick={() => handleNavClick(noti.targetPage)}
                    className="w-full text-left px-4 py-3 hover:bg-white/[0.04] transition-colors cursor-pointer bg-transparent border-0 block"
                  >
                    <p className="text-[11px] font-semibold text-[#b8dcff] tracking-wide mb-1 tabular-nums">
                      {noti.date}
                    </p>
                    <p className="text-[13px] font-semibold text-white leading-snug">
                      {noti.title}
                    </p>
                    <p className="text-[12px] text-[#a9adc1] mt-1 leading-relaxed">
                      {noti.detail}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Cart Link */}
        <button
          type="button"
          onClick={() => {
            setMobileMenuOpen(false);
            setNotificationsOpen(false);
            navigate('shop', currentPage === 'shop' ? 'cart' : undefined);
          }}
          aria-label="Giỏ hàng"
          title="Giỏ hàng"
          className="relative grid place-items-center p-2 text-[#e8ecf3] hover:text-[#b8dcff] transition-colors cursor-pointer bg-transparent border-0 focus-visible:outline-2 focus-visible:outline-[#b8dcff]"
        >
          <ShoppingBag className="w-[19px] h-[19px]" strokeWidth={1.6} />
          <span
            id="cart-count"
            className="absolute top-0 right-0 min-w-[16px] h-[16px] px-1 rounded-full bg-[#b8dcff] text-[#050914] text-[10px] font-bold leading-[16px] text-center tabular-nums"
          >
            {cartCount}
          </span>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          id="menuToggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={mobileMenuOpen}
          className="md:hidden grid place-items-center p-1.5 text-[#e8ecf3] hover:text-white cursor-pointer bg-transparent border-0 focus-visible:outline-2 focus-visible:outline-[#b8dcff]"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="nav-menu"
          aria-label="Menu di động"
          className="md:hidden absolute top-[68px] left-0 right-0 px-[5%] pt-3 pb-5 bg-[#040811]/[0.98] backdrop-blur-lg border-t border-white/15 flex flex-col"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative text-left py-3.5 text-[12px] tracking-[0.11em] bg-transparent border-0 cursor-pointer transition-colors ${
                  isActive ? 'text-white font-semibold' : 'text-[#e8ecf3]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="block mt-1.5 w-[45px] h-[2px] bg-[#b8dcff] shadow-[0_0_12px_#73a8dd]"
                  />
                )}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}
