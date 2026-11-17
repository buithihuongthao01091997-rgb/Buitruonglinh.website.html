import { useState } from 'react';
import { Play } from 'lucide-react';
import {
  ARTIST_INFO,
  DISCOGRAPHY,
  LATEST_RELEASE,
  TOP_TRACKS,
} from '../data/siteData';
import { ResilientImage } from '../components/ResilientImage';

type DiscographyFilter = 'all' | 'single' | 'collab' | 'album';

const FILTERS: { id: DiscographyFilter; label: string }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'single', label: 'SINGLES' },
  { id: 'collab', label: 'COLLABS' },
  { id: 'album', label: 'ALBUM' },
];

export function MusicPage() {
  const [filter, setFilter] = useState<DiscographyFilter>('all');

  const filteredAlbums =
    filter === 'all'
      ? DISCOGRAPHY
      : DISCOGRAPHY.filter((item) => item.type === filter);

  return (
    <main className="w-[92%] max-w-[1400px] mx-auto pt-[106px] pb-16 grid grid-cols-1 lg:grid-cols-[1.05fr_1.2fr] gap-10 lg:gap-12">
      {/* Cột trái: Latest Release + Spotify Popular Tracks */}
      <section className="min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-7 mb-12">
          <div className="w-[180px] sm:w-[42%] aspect-square shrink-0 rounded overflow-hidden bg-[#242838] border border-white/10">
            <ResilientImage
              src={LATEST_RELEASE.cover}
              alt={`Bìa single ${LATEST_RELEASE.title}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold tracking-[1.5px] text-[#a9adc1] uppercase mb-3 tabular-nums">
              {LATEST_RELEASE.releaseDate}
            </p>
            <h1 className="text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.2] tracking-[0.04em] text-white mb-4">
              {LATEST_RELEASE.title}
            </h1>
            <p className="text-[14px] leading-[1.7] text-[#a9adc1] mb-6">
              {LATEST_RELEASE.description}
            </p>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={LATEST_RELEASE.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#b8dcff] text-[#050914] text-[12px] font-bold tracking-[1px] hover:-translate-y-0.5 hover:bg-white transition-all whitespace-nowrap shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                PLAY
              </a>
              <a
                href={LATEST_RELEASE.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#39445b] text-white text-[12px] font-bold tracking-[1px] hover:-translate-y-0.5 hover:border-[#b8dcff] transition-all whitespace-nowrap shrink-0"
              >
                WATCH MV
              </a>
            </div>
          </div>
        </div>

        {/* Spotify Top Tracks Box */}
        <div className="w-full rounded-[10px] overflow-hidden bg-[#17191f] border border-[#242630]">
          <div className="flex items-center gap-4 p-4 bg-[#202127]">
            <div className="w-[72px] h-[72px] shrink-0 rounded-[7px] overflow-hidden bg-[#34313b]">
              <ResilientImage
                src={ARTIST_INFO.avatarImage}
                alt="Ảnh đại diện buitruonglinh"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[14px] font-bold text-white mb-1">
                {ARTIST_INFO.stageName}
              </p>
              <p className="text-[11px] text-[#aaaab3]">Popular tracks</p>
              <a
                href={ARTIST_INFO.spotifyArtistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-2.5 py-1 text-[10px] font-semibold text-white border border-[#777780] rounded hover:border-[#b8dcff] hover:text-[#b8dcff] transition-colors"
              >
                Follow on Spotify
              </a>
            </div>
          </div>

          <div className="px-4 py-2 divide-y divide-[#303139]">
            {TOP_TRACKS.map((track, idx) => (
              <div
                key={track.id}
                className="flex items-center justify-between gap-3 py-3 text-[12px] text-[#e5e5e9]"
              >
                <a
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b8dcff] transition-colors flex items-center gap-2 min-w-0 truncate"
                >
                  <span className="text-[#a5a5ad] tabular-nums text-[11px] shrink-0">
                    {idx === 0 ? '▶' : `${idx + 1}.`}
                  </span>
                  <span className="truncate">{track.title}</span>
                </a>
                <span className="text-[#a5a5ad] tabular-nums shrink-0 text-[11px]">
                  {track.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cột phải: Discography */}
      <section className="min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-[18px] font-bold tracking-[3px] text-white uppercase">
            DISCOGRAPHY
          </h2>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Lọc đĩa nhạc">
            {FILTERS.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(item.id)}
                  className={`px-3.5 py-2 rounded-full text-[10px] font-bold tracking-wider border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#b8dcff] text-[#050914] border-[#b8dcff]'
                      : 'bg-transparent text-white border-[#39445b] hover:border-[#b8dcff]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-6">
          {filteredAlbums.map((album) => (
            <article key={album.id} className="min-w-0 group">
              <div className="w-full aspect-square rounded-[5px] overflow-hidden bg-[#242838] border border-white/10 mb-3">
                <ResilientImage
                  src={album.cover}
                  alt={`Bìa album ${album.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex items-start justify-between gap-2.5">
                <div className="min-w-0">
                  <h3 className="text-[15px] font-bold leading-snug tracking-[0.03em] text-white">
                    {album.title}
                  </h3>
                  <p className="text-[12px] text-[#a9adc1] mt-0.5 tabular-nums">
                    {album.meta}
                  </p>
                </div>

                <a
                  href={album.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Nghe ${album.title} trên Spotify`}
                  className="w-[34px] h-[34px] shrink-0 rounded-full bg-[#b8dcff] text-[#050914] flex items-center justify-center hover:-translate-y-0.5 hover:bg-white transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
