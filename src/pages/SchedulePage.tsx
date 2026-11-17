import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { SCHEDULE_EVENTS, ScheduleEvent } from '../data/siteData';
import { ResilientImage } from '../components/ResilientImage';

type MonthFilter = 'all' | 'oct' | 'nov' | 'dec';

const MONTH_BUTTONS: { id: MonthFilter; label: string }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'oct', label: 'OCT' },
  { id: 'nov', label: 'NOV' },
  { id: 'dec', label: 'DEC' },
];

export function SchedulePage() {
  const [selectedMonth, setSelectedMonth] = useState<MonthFilter>('all');
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(
    null
  );

  const visibleEvents =
    selectedMonth === 'all'
      ? SCHEDULE_EVENTS
      : SCHEDULE_EVENTS.filter((ev) => ev.monthKey === selectedMonth);

  const groupedMonths = Array.from(
    new Map(
      visibleEvents.map((ev) => [
        ev.monthLabel,
        visibleEvents.filter((item) => item.monthLabel === ev.monthLabel),
      ])
    ).entries()
  );

  const handleOpenDetail = (ev: ScheduleEvent) => {
    setSelectedEvent(ev);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleBack = () => {
    setSelectedEvent(null);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <main className="w-[86%] max-w-[1200px] mx-auto pt-[110px] pb-16">
      {/* Tiêu đề chung */}
      <section className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8">
        <h1 className="text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.2] tracking-[0.04em] text-white">
          MEET LINH
          <br />
          ON THE ROAD
        </h1>
        <p className="text-[#a9adc1] text-[14px]">
          Upcoming performances and special appearances.
        </p>
      </section>

      {!selectedEvent ? (
        /* Danh sách sự kiện */
        <section id="schedulePage">
          <div
            className="flex flex-wrap gap-2 mb-5"
            role="tablist"
            aria-label="Lọc theo tháng"
          >
            {MONTH_BUTTONS.map((btn) => {
              const active = selectedMonth === btn.id;
              return (
                <button
                  key={btn.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedMonth(btn.id)}
                  className={`min-w-[58px] px-3 py-1.5 text-[12px] font-bold tracking-wider transition-colors cursor-pointer border-0 ${
                    active
                      ? 'bg-[#b8dcff] text-[#050914]'
                      : 'bg-[#3a383f] text-[#f5f3f5] hover:bg-[#6e6b75]'
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-6">
            {groupedMonths.map(([monthLabel, events]) => (
              <section
                key={monthLabel}
                className="border-t border-[#4a464f] pt-4"
              >
                <h2 className="mb-4 text-[18px] font-bold tracking-[3px] text-white uppercase">
                  {monthLabel}
                </h2>

                <div className="divide-y divide-white/[0.06]">
                  {events.map((ev) => (
                    <article
                      key={ev.id}
                      className="grid grid-cols-[72px_1fr_auto] sm:grid-cols-[90px_1fr_auto] items-center gap-4 py-3.5"
                    >
                      <div className="tabular-nums">
                        <strong className="block text-[26px] font-normal text-white leading-tight">
                          {ev.day}
                        </strong>
                        <span className="block mt-0.5 text-[#a9adc1] text-[12px] font-bold">
                          {ev.weekday}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <span className="block mb-1 text-[#a9adc1] text-[11px] font-bold tracking-wider uppercase">
                          {ev.type}
                        </span>
                        <h3 className="text-[16px] font-bold tracking-[0.04em] text-white mb-0.5">
                          {ev.title}
                        </h3>
                        <p className="text-[#a9adc1] text-[13px]">
                          {ev.location}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleOpenDetail(ev)}
                        className="inline-flex items-center gap-1 text-[#e7e5eb] hover:text-[#b8dcff] text-[13px] font-bold bg-transparent border-0 cursor-pointer py-2 px-1 transition-colors whitespace-nowrap shrink-0"
                      >
                        DETAIL
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      ) : (
        /* Chi tiết sự kiện */
        <section id={selectedEvent.id} className="detail-page">
          <div className="grid grid-cols-[90px_1fr_auto] sm:grid-cols-[120px_1fr_auto] items-center gap-4 py-4 border-t border-b border-[#4a464f]">
            <div className="tabular-nums">
              <span className="block mb-1 text-[#a9adc1] text-[11px] font-bold tracking-[1px]">
                {selectedEvent.monthLabel}
              </span>
              <strong className="block text-[26px] font-normal text-white leading-tight">
                {selectedEvent.day}
              </strong>
              <span className="block mt-0.5 text-[#a9adc1] text-[12px] font-bold">
                {selectedEvent.weekday}
              </span>
            </div>

            <div className="min-w-0">
              <span className="block mb-1 text-[#a9adc1] text-[11px] font-bold tracking-wider uppercase">
                {selectedEvent.type}
              </span>
              <h3 className="text-[16px] font-bold tracking-[0.04em] text-white mb-0.5">
                {selectedEvent.title}
              </h3>
              <p className="text-[#a9adc1] text-[13px]">
                {selectedEvent.location}
              </p>
            </div>

            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1 text-[#e7e5eb] hover:text-[#b8dcff] text-[13px] font-bold bg-transparent border-0 cursor-pointer py-2 px-1 transition-colors whitespace-nowrap shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
              BACK
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[310px_1fr] gap-8 lg:gap-10 mt-7 items-start">
            <div className="w-full max-w-[320px] aspect-[2/2.7] bg-[#161a28] border border-white/10 overflow-hidden">
              <ResilientImage
                src={selectedEvent.poster}
                alt={`Poster ${selectedEvent.title}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="mb-3 text-[20px] font-bold tracking-[3px] text-white uppercase">
                {selectedEvent.detailHeading}
              </h2>
              <h3 className="mb-4 text-[15px] font-bold tracking-[0.04em] text-[#b8dcff]">
                {selectedEvent.detailSubheading}
              </h3>

              {selectedEvent.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="mb-4 text-[#a9adc1] text-[14px] leading-relaxed"
                >
                  {para}
                </p>
              ))}

              <p className="mt-6 font-bold text-white text-[14px] flex items-center gap-2 flex-wrap">
                <span>{selectedEvent.linkLabel}</span>
                <a
                  href={selectedEvent.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#b8dcff] hover:text-white italic underline transition-colors"
                >
                  Xem thông tin chính thức
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
