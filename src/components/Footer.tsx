import { ARTIST_INFO } from '../data/siteData';

export function Footer() {
  return (
    <footer className="py-8 px-5 border-t border-[#222c42] text-[#929db3] text-[11px] leading-[1.6] tracking-[2px] text-center">
      <div className="w-[90%] max-w-[1100px] mx-auto">
        <h3 className="mb-2.5 text-[#929db3] text-[12px] font-bold tracking-[2px] uppercase">
          CONNECT WITH BÙI TRƯỜNG LINH
        </h3>
        <p className="mb-1 text-[#929db3] text-[11px]">
          Công ty quản lý: {ARTIST_INFO.management}
        </p>
        <p className="mb-1 text-[#929db3] text-[11px]">
          Booking:{' '}
          <a
            href={`mailto:${ARTIST_INFO.bookingEmail}`}
            className="hover:text-[#b8dcff] transition-colors"
          >
            {ARTIST_INFO.bookingEmail}
          </a>
        </p>
        <p className="mb-1 text-[#929db3] text-[11px] tabular-nums">
          Hotline: {ARTIST_INFO.hotline}
        </p>
        <p className="mt-4 text-[#929db3] text-[11px]">
          © 2026 BÙI TRƯỜNG LINH · Đồ án môn Thiết kế Web
        </p>
      </div>
    </footer>
  );
}
