import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import {
  ARTIST_INFO,
  GALLERY_ITEMS,
  NEWS_SLIDES,
  OFFICIAL_VIDEOS,
} from '../data/siteData';
import { useStore } from '../context/StoreContext';
import { ResilientImage } from '../components/ResilientImage';

function SocialIcons() {
  const socials = [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@buitruonglinh',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/buitruonglinhh',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M22.7 12A10.7 10.7 0 1 0 10.3 22.6v-7.5H7.8V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3.1h-2.3v7.5A10.7 10.7 0 0 0 22.7 12Z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/buitruonglinh/',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.7 1.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@buitruonglinh',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M19.6 6.6A4.8 4.8 0 0 1 15.8 2h-3.3v13.7a2.9 2.9 0 1 1-2-2.7V9.6a6.3 6.3 0 1 0 5.3 6.2V8.8a8.2 8.2 0 0 0 4.8 1.5V7c-.3 0-.7-.2-1-.4Z" />
        </svg>
      ),
    },
    {
      name: 'Threads',
      href: 'https://www.threads.com/@buitruonglinh',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12.2 2C6.8 2 3 5.8 3 12s3.8 10 9.4 10c3.7 0 6.5-1.5 8.1-4.1l-1.9-1.1c-1.2 1.9-3.3 3-6.1 3-4.3 0-7.2-3-7.2-7.8 0-4.9 3-7.8 7.1-7.8 4 0 6.5 2.4 6.5 6.2 0 2.1-.9 3.6-2.3 3.6-.8 0-1.3-.5-1.3-1.4V8.5h-2.1v1.1c-.7-.8-1.7-1.3-2.9-1.3-2.3 0-4 1.8-4 4.2s1.7 4.2 4 4.2c1.4 0 2.5-.6 3.2-1.6.5 1 1.5 1.6 2.8 1.6 2.6 0 4.4-2.2 4.4-5.7C21 5.6 17.5 2 12.2 2Zm-1.4 12.6c-1.2 0-2-.9-2-2.1s.8-2.1 2-2.1 2 .9 2 2.1-.8 2.1-2 2.1Z" />
        </svg>
      ),
    },
    {
      name: 'Spotify',
      href: 'https://open.spotify.com/artist/7Cp2hGcriAaDUAWpXnSEwm',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.7.7 0 0 1-1 .2c-2.6-1.6-5.9-2-9.8-1.1a.7.7 0 1 1-.3-1.3c4.3-1 7.9-.6 10.9 1.2a.7.7 0 0 1 .2 1Zm1.2-2.7a.9.9 0 0 1-1.2.3c-3-1.8-7.5-2.4-11.1-1.3a.9.9 0 1 1-.5-1.7c4-1.2 9-.6 12.5 1.5a.9.9 0 0 1 .3 1.2Zm.1-2.9C14.3 8.7 8.4 8.5 5 9.5a1 1 0 0 1-.6-1.9c3.9-1.2 10.5-.9 14.6 1.5a1 1 0 0 1-1.1 1.7Z" />
        </svg>
      ),
    },
    {
      name: 'Apple Music',
      href: 'https://music.apple.com/vn/artist/buitruonglinh/1470596882',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M16.5 12.7c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.2 1-4.1 2.5-1.8 3-.5 7.5 1.2 10 .8 1.2 1.8 2.6 3.1 2.5 1.3-.1 1.7-.8 3.3-.8 1.5 0 1.9.8 3.3.8 1.4 0 2.2-1.2 3-2.4 1-1.4 1.3-2.7 1.4-2.8-.1 0-2.6-1-2.6-4Zm-2.5-7.4c.7-.9 1.2-2 1-3.3-1 .1-2.3.7-3 1.6-.6.7-1.2 2-1 3.1 1.1.1 2.3-.5 3-1.4Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap gap-5 mt-6" aria-label="Mạng xã hội">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          title={s.name}
          aria-label={s.name}
          className="text-white/90 hover:text-[#b8dcff] hover:-translate-y-0.5 transition-all duration-200 p-1"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export function HomePage() {
  const { navigate } = useStore();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = NEWS_SLIDES.length;

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [isPaused, totalSlides]);

  const goToSlide = (idx: number) => {
    setSlideIndex(((idx % totalSlides) + totalSlides) % totalSlides);
  };

  return (
    <main>
      {/* 1. HERO */}
      <section
        id="home"
        className="relative flex items-center min-h-[82vh] md:min-h-[100svh] pt-[76px] pb-10 overflow-hidden bg-gradient-to-br from-[#1a1f45] to-[#07080f]"
      >
        <img
          src={ARTIST_INFO.heroImage}
          alt="Bùi Trường Linh"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-[58%_center] md:object-right pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#07080f]/90 via-[#07080f]/60 to-[#07080f]/15"
        />

        <div className="relative z-10 w-[90%] max-w-[1100px] mx-auto pt-12">
          <h1 className="font-script text-[48px] sm:text-[64px] md:text-[90px] font-normal leading-[1.08] text-white">
            {ARTIST_INFO.displayName}
          </h1>
          <p className="mt-2.5 text-[#a9adc1] text-[10px] sm:text-[11px] tracking-[2.5px] sm:tracking-[3px] uppercase">
            BUITRUONGLINH OFFICIAL WEBSITE
          </p>
          <SocialIcons />
        </div>
      </section>

      {/* 2. LATEST NEWS */}
      <section id="latest-news" className="py-14">
        <div className="w-[90%] max-w-[1100px] mx-auto">
          <h2 className="mb-5 text-[18px] font-bold tracking-[3px] text-white uppercase">
            LATEST NEWS
          </h2>

          <div
            className="relative overflow-hidden rounded-xl border border-white/10"
            aria-label="Tin tức nổi bật"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {NEWS_SLIDES.map((slide) => {
                const content = (
                  <>
                    <ResilientImage
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#050710]/80 via-[#050710]/35 to-[#050710]/20"
                    />
                    <div className="relative z-10 max-w-[90%] text-center px-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
                      <h3 className="text-[20px] sm:text-[28px] font-bold tracking-[2px] text-white">
                        {slide.title}
                      </h3>
                      <p className="mt-1.5 text-[12px] sm:text-[13px] text-[#e8ecf3]">
                        {slide.subtitle}
                      </p>
                    </div>
                  </>
                );

                if (slide.internalPage) {
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => navigate(slide.internalPage!)}
                      className="relative isolate flex items-center justify-center min-w-full h-[200px] sm:h-[260px] cursor-pointer bg-[#0b1220] border-0 p-0 text-left"
                    >
                      {content}
                    </button>
                  );
                }

                return (
                  <a
                    key={slide.id}
                    href={slide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative isolate flex items-center justify-center min-w-full h-[200px] sm:h-[260px] bg-[#0b1220]"
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => goToSlide(slideIndex - 1)}
              aria-label="Slide trước"
              className="hidden sm:grid place-items-center absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#050914]/70 text-white hover:bg-[#050914] hover:text-[#b8dcff] transition-colors border border-white/15 cursor-pointer z-20"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => goToSlide(slideIndex + 1)}
              aria-label="Slide tiếp theo"
              className="hidden sm:grid place-items-center absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#050914]/70 text-white hover:bg-[#050914] hover:text-[#b8dcff] transition-colors border border-white/15 cursor-pointer z-20"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-center gap-2.5 mt-4" aria-label="Chọn slide">
            {NEWS_SLIDES.map((slide, idx) => {
              const active = idx === slideIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Slide ${idx + 1}: ${slide.title}`}
                  aria-current={active ? 'true' : undefined}
                  className={`w-2.5 h-2.5 rounded-full border-0 cursor-pointer transition-colors ${
                    active ? 'bg-[#b8dcff]' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SPOTIFY */}
      <section id="spotify" className="py-12">
        <div className="w-[90%] max-w-[1100px] mx-auto">
          <h2 className="mb-5 text-[18px] font-bold tracking-[3px] text-white uppercase">
            SPOTIFY
          </h2>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0b1220]">
            <iframe
              src={ARTIST_INFO.spotifyEmbedUrl}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Bùi Trường Linh trên Spotify"
              className="block w-full h-[352px] border-0"
            />
          </div>
        </div>
      </section>

      {/* 4. OFFICIAL MEDIA */}
      <section id="official-media" className="py-12 pb-16">
        <div className="w-[90%] max-w-[1100px] mx-auto">
          <h2 className="mb-5 text-[18px] font-bold tracking-[3px] text-white uppercase">
            OFFICIAL MEDIA
          </h2>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {OFFICIAL_VIDEOS.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative h-[200px] md:h-[175px] rounded-[10px] overflow-hidden bg-[#0b1220] border border-white/10">
                  <ResilientImage
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex items-center justify-center"
                  >
                    <span className="w-11 h-11 rounded-full bg-[#050914]/75 border border-white/25 flex items-center justify-center text-white group-hover:scale-110 group-hover:text-[#b8dcff] transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </span>
                  </div>
                </div>
                <h3 className="mt-2.5 text-[15px] font-bold tracking-[0.03em] text-white group-hover:text-[#b8dcff] transition-colors">
                  {video.title}
                </h3>
                <p className="text-[12px] text-[#a9adc1] mt-0.5 tabular-nums">
                  {video.date}
                </p>
              </a>
            ))}
          </div>

          {/* Gallery Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-8"
            aria-label="Thư viện hình ảnh"
          >
            {GALLERY_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group relative aspect-[4/5] overflow-hidden bg-[#0d1022] border border-white/10 block"
              >
                <ResilientImage
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span className="text-[11px] font-semibold tracking-wider text-white uppercase">
                    {item.platform} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
