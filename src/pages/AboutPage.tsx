import { ARTIST_INFO, MILESTONES, PERSONAL_DETAILS } from '../data/siteData';
import { ResilientImage } from '../components/ResilientImage';

export function AboutPage() {
  return (
    <main className="pt-[76px]">
      {/* Khối 1: Ảnh chân dung & Thông tin cá nhân */}
      <section
        id="about"
        className="w-[90%] max-w-[1200px] mx-auto py-10 md:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      >
        <div className="flex justify-center">
          <div className="w-full max-w-[520px] rounded-md overflow-hidden bg-[#0b1220]/50">
            <ResilientImage
              src={ARTIST_INFO.portraitImage}
              alt="Bùi Trường Linh trong trang phục trắng"
              className="w-full max-h-[680px] object-contain mx-auto"
            />
          </div>
        </div>

        <div>
          <h1 className="text-[clamp(28px,3.4vw,40px)] font-semibold tracking-[0.04em] leading-[1.2] text-white text-center">
            {ARTIST_INFO.displayName}
          </h1>
          <p className="text-center text-[#a9adc1] mt-2.5 mb-10 text-[14px]">
            {ARTIST_INFO.tagline}
          </p>

          {/* Thông tin cá nhân */}
          <section className="border-t border-white/15 pt-6 mb-10">
            <h2 className="mb-5 text-[18px] font-bold tracking-[3px] text-white uppercase">
              Thông tin cá nhân
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-x-5 gap-y-3 text-[14px]">
              {PERSONAL_DETAILS.map((row) => (
                <div key={row.label} className="contents">
                  <dt className="text-[#aeb9ce] font-medium">{row.label}</dt>
                  <dd className="text-[#e8ecf3] tabular-nums">{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Phong cách nghệ thuật */}
          <section id="style" className="border-t border-white/15 pt-6">
            <h2 className="mb-4 text-[18px] font-bold tracking-[3px] text-white uppercase">
              Phong cách nghệ thuật
            </h2>
            <h3 className="text-[#b8dcff] text-[16px] font-bold tracking-[0.04em] mb-3">
              Âm nhạc là cách tôi kể chuyện
            </h3>
            <p className="text-[#a9adc1] text-[14px] leading-relaxed mb-3">
              Từ những bản tình ca nhẹ nhàng đến những sân khấu nhiều năng lượng,
              buitruonglinh không ngừng khám phá những cách thể hiện mới mà vẫn giữ
              sự chân thành trong âm nhạc.
            </p>
            <p className="text-[#a9adc1] text-[14px] leading-relaxed">
              Mỗi ca khúc là một câu chuyện riêng. Và khi câu chuyện ấy chạm đến
              người nghe, âm nhạc trở thành sợi dây kết nối những cảm xúc tưởng
              chừng chỉ thuộc về mỗi người.
            </p>
          </section>
        </div>
      </section>

      {/* Khối 2: Hành trình âm nhạc & Cột mốc */}
      <section
        id="journey"
        className="w-[90%] max-w-[1200px] mx-auto py-12 pb-16 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      >
        <div>
          <p className="text-[#b8dcff] text-[12px] font-bold tracking-[3px] uppercase mb-2">
            Hành trình âm nhạc
          </p>
          <h2 className="mb-4 text-[18px] font-bold tracking-[3px] text-white uppercase">
            Những dấu mốc quan trọng
          </h2>
          <p className="text-[#a9adc1] text-[14px] leading-relaxed mb-6">
            Mỗi cột mốc là một trải nghiệm,
            <br />
            mỗi chặng đường là một phiên bản trưởng thành hơn
            <br />
            của buitruonglinh.
          </p>
          <div className="rounded-md overflow-hidden border border-white/10 bg-[#0b1220]">
            <ResilientImage
              src={ARTIST_INFO.concertImage}
              alt="Bùi Trường Linh biểu diễn bên cây đàn piano"
              loading="lazy"
              className="w-full h-[280px] object-cover"
            />
          </div>
        </div>

        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {MILESTONES.map((item) => (
            <article
              key={item.year}
              className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-2 sm:gap-4 py-5"
            >
              <span className="text-[#b8dcff] font-bold text-[14px] tabular-nums">
                {item.year}
              </span>
              <div>
                <h3 className="text-[16px] font-bold tracking-[0.04em] text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[#a9adc1] text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
