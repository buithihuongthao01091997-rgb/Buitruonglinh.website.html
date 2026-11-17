export type PageId = 'home' | 'about' | 'music' | 'schedule' | 'shop';

export interface NewsSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href?: string;
  internalPage?: PageId;
}

export interface OfficialVideo {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  url: string;
}

export interface GalleryItem {
  id: string;
  label: string;
  image: string;
  url: string;
  platform: 'YouTube' | 'Instagram';
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface TopTrack {
  id: string;
  title: string;
  duration: string;
  url: string;
}

export interface AlbumItem {
  id: string;
  title: string;
  type: 'single' | 'collab' | 'album';
  meta: string;
  cover: string;
  spotifyUrl: string;
}

export interface ScheduleEvent {
  id: string;
  monthKey: 'oct' | 'nov' | 'dec';
  monthLabel: string;
  day: string;
  weekday: string;
  type: string;
  title: string;
  location: string;
  detailHeading: string;
  detailSubheading: string;
  poster: string;
  paragraphs: string[];
  linkLabel: string;
  linkUrl: string;
}

export interface ShopProduct {
  id: number;
  category: 'album' | 'merchandise';
  name: string;
  price: number;
  priceLabel: string;
  image: string;
  checkoutImage?: string;
  status: 'available' | 'upcoming' | 'sold-out';
  buttonText: string;
}

export interface ArtistNotification {
  id: string;
  title: string;
  detail: string;
  date: string;
  targetPage: PageId;
}

export const ARTIST_INFO = {
  stageName: 'buitruonglinh',
  displayName: 'bui truong linh',
  realName: 'Bùi Trường Linh',
  tagline: 'Ca sĩ · Nhạc sĩ · Người kể chuyện bằng âm nhạc',
  heroImage: 'https://i.ibb.co/rRxnkvCm/TKW-BTL-2.png',
  portraitImage: 'https://i.postimg.cc/T1t5zM1y/buitruonglinh.png',
  concertImage: 'https://i.postimg.cc/sDB2jZ0k/concert.jpg',
  avatarImage: 'https://i.postimg.cc/xTjCYJV9/buitruonglinh.jpg',
  management: 'DAO Music Entertainment',
  bookingEmail: 'contact@sturdyhill.com',
  hotline: '0966445533',
  spotifyEmbedUrl:
    'https://open.spotify.com/embed/artist/7Cp2hGcriAaDUAWpXnSEwm?theme=0',
  spotifyArtistUrl:
    'https://open.spotify.com/artist/7Cp2hGcriAaDUAWpXnSEwm',
};

export const PERSONAL_DETAILS = [
  { label: 'Nghệ danh', value: 'buitruonglinh' },
  { label: 'Tên thật', value: 'Bùi Trường Linh' },
  { label: 'Ngày sinh', value: '06.04.1999' },
  { label: 'Quê quán', value: 'Hà Nội' },
  { label: 'Lĩnh vực hoạt động', value: 'Ca sĩ · Nhạc sĩ sáng tác' },
  {
    label: 'Học vấn',
    value:
      'Học viện Âm nhạc Quốc gia Việt Nam; Nhạc viện TP.HCM (Thanh nhạc)',
  },
  { label: 'Đơn vị quản lý', value: 'DAO Music Entertainment' },
];

export const MILESTONES: Milestone[] = [
  {
    year: '2007',
    title: 'Những nốt nhạc đầu tiên',
    description:
      'Bắt đầu học violin từ năm 8 tuổi tại Học viện Âm nhạc Quốc gia Việt Nam, đặt nền móng cho hành trình gắn bó với âm nhạc.',
  },
  {
    year: '2020–2021',
    title: '“Đường Tôi Chở Em Về”',
    description:
      'Ca khúc giúp buitruonglinh đến gần hơn với khán giả trẻ, mở ra bước ngoặt đáng nhớ trên con đường hoạt động âm nhạc.',
  },
  {
    year: '2022',
    title: '“Big Song Big Deal”',
    description:
      'Tiếp tục khẳng định dấu ấn sáng tác và khám phá những hướng đi mới qua chương trình âm nhạc.',
  },
  {
    year: '2024',
    title: '“Từng Ngày Như Mãi Mãi”',
    description:
      'Ra mắt album đầu tay gồm 14 ca khúc, kể câu chuyện tình yêu qua nhiều giai đoạn cảm xúc — một dấu mốc quan trọng trong hành trình nghệ thuật.',
  },
  {
    year: '2025',
    title: '“Anh Trai Say Hi”',
    description:
      'Đạt danh hiệu Á quân, mở rộng màu sắc biểu diễn và kết nối với nhiều khán giả hơn qua những trải nghiệm âm nhạc mới.',
  },
  {
    year: '2026',
    title: 'Live Concert “Từng Ngày”',
    description:
      'Đánh dấu 10 năm theo đuổi âm nhạc bằng concert cá nhân đầu tiên, đưa những ca khúc và câu chuyện của mình đến gần hơn với khán giả trên sân khấu trực tiếp.',
  },
];

export const NEWS_SLIDES: NewsSlide[] = [
  {
    id: 'slide-1',
    title: 'TỪNG NGÀY NHƯ MÃI MÃI',
    subtitle: 'Album mới của Bùi Trường Linh',
    image: 'https://i.ibb.co/G4JHt1jW/image-3.png',
    href: 'https://youtube.com/playlist?list=PLSDKted1Ajy-pfBPLugNd3fKMwLN6uSo1&si=3PpxQ-tVZKOfq97F',
  },
  {
    id: 'slide-2',
    title: 'PHYSICAL ALBUM',
    subtitle: 'Khám phá phiên bản album vật lý',
    image:
      'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/490540423_679723731314520_6354946320121902851_n.jpg?stp=dst-jpg_tt6&cstp=mx2000x2000&ctp=s2000x2000&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=p4gQJAdkY9IQ7kNvwGW6d7C&_nc_oc=AdoxNe-sSnTzaCoDsNwy2oHI61b6FhcrQ_N_wIN47Go8vtc_m3PA_LZ9a4D01561TdOSbCoHc_nDIWc3GwbY1D-3&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&_nc_gid=HVrR3bF91Qqr5_ZP47tHQg&_nc_ss=7b2a8&oh=00_AQTG7UvScmeaZjP4RJj4PeOnT7LQOtugHVCv3cJ3PZR0cQ&oe=6B01975F',
    internalPage: 'shop',
  },
  {
    id: 'slide-3',
    title: 'LIVE CONCERT TỪNG NGÀY',
    subtitle: 'Live Concert đầu tiên của Bùi Trường Linh',
    image:
      'https://i.ibb.co/v4JRSYfR/658898117-17946302745149162-4903571106824960634-n-1.jpg',
    href: 'https://ticket.1zone.vn/events/tung-ngay-live-concert-22476',
  },
];

export const OFFICIAL_VIDEOS: OfficialVideo[] = [
  {
    id: 'vid-1',
    title: 'Sớm Như Vậy / buitruonglinh',
    date: 'Apr 9, 2026',
    thumbnail: 'https://i.ibb.co/TM8JySrL/maxresdefault-2.jpg',
    url: 'https://youtu.be/6hNenqz0ISA',
  },
  {
    id: 'vid-2',
    title: 'Vấn Vương / buitruonglinh',
    date: 'Apr 17, 2025',
    thumbnail: 'https://i.ibb.co/ZkVgzqL/maxresdefault-1-1.jpg',
    url: 'https://youtu.be/XeVKRHR7gcM',
  },
  {
    id: 'vid-3',
    title: 'Giờ Thì / buitruonglinh',
    date: 'Dec 12, 2024',
    thumbnail: 'https://i.ibb.co/svnD6vCs/hq720-1-1.avif',
    url: 'https://www.youtube.com/watch?v=69ZDBWoj5YM',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    label: 'Xem thêm trên YouTube',
    image: 'https://i.ibb.co/TqNYsrLW/oar2-2.jpg',
    url: 'https://youtu.be/HF493xTZOXA?si=jROc4IU-dav9GLj_',
    platform: 'YouTube',
  },
  {
    id: 'gal-2',
    label: 'Xem thêm trên YouTube',
    image: 'https://i.ibb.co/8gjfrWXy/images-1-1.jpg',
    url: 'https://youtu.be/caGGhA2hId0?si=1fh2eMERbjOBXh8x',
    platform: 'YouTube',
  },
  {
    id: 'gal-3',
    label: 'Xem thêm trên Instagram',
    image:
      'https://i.ibb.co/prjvqPMB/Save-Inta-com-731580654-18538992109076211-3616911432368759531-n.jpg',
    url: 'https://www.instagram.com/p/DaQHqRkEx-f/',
    platform: 'Instagram',
  },
  {
    id: 'gal-4',
    label: 'Xem thêm trên Instagram',
    image:
      'https://i.ibb.co/1YZXj7TW/Save-Inta-com-729389809-18537610387076211-4873772941269848021-n.jpg',
    url: 'https://www.instagram.com/p/DaDjOtGE1YK',
    platform: 'Instagram',
  },
];

export const LATEST_RELEASE = {
  releaseDate: 'Latest Release · 09.04.2026',
  title: 'Sớm Như Vậy',
  description:
    'Single mở đầu cho hành trình âm nhạc 2026 của buitruonglinh — tự sự nhẹ nhàng, sâu lắng về những rung động còn vương lại.',
  cover: 'https://i.postimg.cc/gkcJdXbp/som-nhu-vay.jpg',
  spotifyUrl: 'https://open.spotify.com/track/0GXZXSDFSbJjqdGifjSaig',
  youtubeUrl: 'https://www.youtube.com/watch?v=6hNenqz0ISA',
};

export const TOP_TRACKS: TopTrack[] = [
  {
    id: 'track-1',
    title: 'MRT (feat. Xuân Định K.Y, buitruonglinh, CAPTAIN BOY & HYO)',
    duration: '05:31',
    url: 'https://open.spotify.com/track/7aBUKC55ymgBw7M5gdppte',
  },
  {
    id: 'track-2',
    title: 'Giờ Thì',
    duration: '04:37',
    url: 'https://open.spotify.com/track/7mblTCdc14ylJ1JW71MODb',
  },
  {
    id: 'track-3',
    title: 'Từng Ngày Yêu Em',
    duration: '03:36',
    url: 'https://open.spotify.com/track/3Ids3RXurYBgySph53qWnB',
  },
];

export const DISCOGRAPHY: AlbumItem[] = [
  {
    id: 'alb-1',
    title: 'Sớm Như Vậy',
    type: 'single',
    meta: 'Single · 2026',
    cover: 'https://i.postimg.cc/gkcJdXbp/som-nhu-vay.jpg',
    spotifyUrl: 'https://open.spotify.com/track/0GXZXSDFSbJjqdGifjSaig',
  },
  {
    id: 'alb-2',
    title: 'Vấn Vương',
    type: 'single',
    meta: 'Single · 2025',
    cover: 'https://i.postimg.cc/4N4dZ7kM/van-vuong.jpg',
    spotifyUrl: 'https://open.spotify.com/track/0wZQeFW2ZcIbCTnxnKx5O9',
  },
  {
    id: 'alb-3',
    title: 'Giờ Thì',
    type: 'single',
    meta: 'Single · 2024',
    cover: 'https://i.postimg.cc/xjZ9MJVr/images.jpg',
    spotifyUrl: 'https://open.spotify.com/track/7mblTCdc14ylJ1JW71MODb',
  },
  {
    id: 'alb-4',
    title: 'Nơi Anh Thuộc Về',
    type: 'single',
    meta: 'Single · 2026',
    cover: 'https://i.postimg.cc/HsWxHc1p/noi-anh-thuoc-ve.jpg',
    spotifyUrl: 'https://open.spotify.com/album/5SMqtKAg4qxG7wVMn5wtjU',
  },
  {
    id: 'alb-5',
    title: 'Thế Giới Của Anh',
    type: 'collab',
    meta: 'Collab',
    cover: 'https://i.postimg.cc/28j6mbNN/the-gioi-cua-anh.jpg',
    spotifyUrl: 'https://open.spotify.com/track/0CY9y1F7RcRSV3raHljdxu',
  },
  {
    id: 'alb-6',
    title: 'Từng Ngày Như Mãi Mãi',
    type: 'album',
    meta: 'Album · 2024',
    cover: 'https://i.postimg.cc/zG02MQSJ/sddefault.jpg',
    spotifyUrl: 'https://open.spotify.com/album/2DCbDdIBNRxx0SxLtgyd4D',
  },
];

export const SCHEDULE_EVENTS: ScheduleEvent[] = [
  {
    id: 'detailFirst',
    monthKey: 'oct',
    monthLabel: 'OCTOBER 2026',
    day: '18',
    weekday: 'SUN',
    type: 'LIVE PERFORMANCE',
    title: 'Special Music Event',
    location: 'Hà Nội, Việt Nam',
    detailHeading: 'TỪNG NGÀY',
    detailSubheading: 'A NIGHT OF MUSIC AND EMOTIONS',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8YMUuilFWROI4UfYZCN3r3r4jSWQRyytz_jHI0qIhq7WZCSVPHsh92Jr&s=10',
    paragraphs: [
      'Hãy cùng Bùi Trường Linh tham gia đêm biểu diễn âm nhạc trực tiếp đặc biệt tại Hà Nội. Sự kiện mang âm nhạc của anh đến với sân khấu, mang đến cho khán giả cơ hội thưởng thức những ca khúc quen thuộc trong không gian trình diễn trực tiếp.',
      'Từ những giai điệu giàu cảm xúc đến các màn trình diễn đáng nhớ, sự kiện là dịp tôn vinh sự kết nối giữa nghệ sĩ và khán giả thông qua âm nhạc.',
    ],
    linkLabel: 'Mua vé tại đây:',
    linkUrl: 'https://www.facebook.com/buitruonglinhofficial/?locale=vi_VN',
  },
  {
    id: 'detailSecond',
    monthKey: 'oct',
    monthLabel: 'OCTOBER 2026',
    day: '25',
    weekday: 'SUN',
    type: 'APPEARANCE',
    title: 'Music & Community Event',
    location: 'Hà Nội, Việt Nam',
    detailHeading: 'RISING STAR OF THE YEAR',
    detailSubheading: 'CÙNG KẾT NỐI VỚI NHAU CÙNG NHỮNG GIAI ĐIỆU ÂM NHẠC',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhCJ3FZF6WoXxfzz9sHW7DuUfZMzFxmfndv76qkQbGe8hz6v_XikZFD0&s=10',
    paragraphs: [
      'Buổi gặp gỡ đặc biệt này là dịp để Bùi Trường Linh đến gần hơn với người hâm mộ thông qua những cuộc trò chuyện, chia sẻ và hoạt động giao lưu thân mật. Đây là cơ hội để khán giả trực tiếp gặp gỡ nghệ sĩ, lắng nghe những câu chuyện về hành trình âm nhạc cũng như hiểu hơn về con người phía sau những giai điệu.',
      'Không chỉ dừng lại ở âm nhạc, sự kiện còn tạo nên một không gian gần gũi, nơi người hâm mộ có thể giao lưu, chia sẻ trải nghiệm, bày tỏ tình cảm và kết nối với nhau thông qua tình yêu dành cho Bùi Trường Linh.',
    ],
    linkLabel: 'Tìm hiểu thêm:',
    linkUrl: 'https://www.facebook.com/buitruonglinhofficial/?locale=vi_VN',
  },
  {
    id: 'detailThird',
    monthKey: 'nov',
    monthLabel: 'NOVEMBER 2026',
    day: '08',
    weekday: 'SUN',
    type: 'FAN EVENT',
    title: 'Meet & Greet',
    location: 'Hà Nội, Việt Nam',
    detailHeading: 'A LITTLE CLOSER',
    detailSubheading: 'A DAY TO SHARE, CONNECT AND CREATE MEMORIES',
    poster:
      'https://bazaarvietnam.vn/wp-content/uploads/2026/03/buitruonglinh-concert-tung-ngay-bzvn-1.jpg',
    paragraphs: [
      'Không chỉ đơn thuần là một buổi gặp gỡ người hâm mộ, A Little Closer là dịp đặc biệt để Bùi Trường Linh và khán giả cùng gặp gỡ, chia sẻ câu chuyện và tạo nên những kỷ niệm đáng nhớ thông qua những cuộc trò chuyện thân mật, hoạt động thú vị và khoảnh khắc ý nghĩa. Sự kiện là dịp tôn vinh tình cảm, sự ủng hộ và mối liên kết đặc biệt giữa Linh và cộng đồng người hâm mộ.',
      'Hãy cùng Bùi Trường Linh tạo nên những khoảnh khắc khó quên ngay lúc này nhé!',
    ],
    linkLabel: 'Tìm hiểu thêm:',
    linkUrl: 'https://www.facebook.com/buitruonglinhofficial/?locale=vi_VN',
  },
  {
    id: 'detailFourth',
    monthKey: 'dec',
    monthLabel: 'DECEMBER 2026',
    day: '20',
    weekday: 'SUN',
    type: 'SPECIAL EVENT',
    title: 'Year End Music Night',
    location: 'Hà Nội, Việt Nam',
    detailHeading: 'AFTERGLOW',
    detailSubheading: 'LET THE MUSIC STAY WITH US',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkM0DC7DPZA6fsEcRf-cf0TX4DnvESAREebNbQ1UIOYOdFIcsuUICF90E&s=10',
    paragraphs: [
      'Khi năm cũ dần khép lại, Afterglow mời khán giả cùng Bùi Trường Linh trải qua một đêm nhạc đáng nhớ, ngập tràn âm nhạc và cảm xúc. Thông qua những màn trình diễn cuốn hút cùng các giai điệu thân thuộc, concert sẽ tái hiện những kỷ niệm, câu chuyện và cảm xúc đã tạo nên dấu ấn trong suốt một năm qua.',
      'Không chỉ đơn thuần là một buổi biểu diễn âm nhạc, đây còn là dịp để cùng nhìn lại hành trình đã qua, tạo nên những kỷ niệm mới và chào đón một chương mới. Hãy để mỗi giai điệu trở thành lời kết đẹp cho năm cũ và khởi đầu ý nghĩa cho những điều sắp tới.',
    ],
    linkLabel: 'Tìm hiểu thêm:',
    linkUrl: 'https://www.facebook.com/buitruonglinhofficial/?locale=vi_VN',
  },
];

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: 100,
    category: 'album',
    name: 'SỚM NHƯ VẬY',
    price: 0,
    priceLabel: 'Chưa mở bán',
    image:
      'https://cdn.phototourl.com/anon/2026-11-16-68c99895-2870-4796-af9f-85bbdd247b3f.jpg',
    status: 'upcoming',
    buttonText: 'CHƯA MỞ BÁN',
  },
  {
    id: 0,
    category: 'album',
    name: 'TỪNG NGÀY NHƯ MÃI MÃI',
    price: 529000,
    priceLabel: '529.000đ',
    image:
      'https://cdn.phototourl.com/anon/2026-11-16-21890d89-a587-4932-8a00-ca67f22fc3a4.jpg',
    checkoutImage:
      'https://cdn.phototourl.com/anon/2026-11-15-9199c512-6078-441b-8edd-6567d98db7c8.png',
    status: 'available',
    buttonText: 'THÊM VÀO GIỎ',
  },
  {
    id: 101,
    category: 'album',
    name: 'VỌNG',
    price: 499000,
    priceLabel: '499.000đ',
    image:
      'https://cdn.phototourl.com/anon/2026-11-16-59c41887-6f87-47ef-8885-407a22469371.jpg',
    status: 'sold-out',
    buttonText: 'HẾT HÀNG',
  },
  {
    id: 1,
    category: 'merchandise',
    name: 'ÁO ARCHER',
    price: 449000,
    priceLabel: '449.000đ',
    image:
      'https://cdn.phototourl.com/anon/2026-11-16-c4e7899e-0632-45b0-87da-b983ae000923.png',
    checkoutImage:
      'https://cdn.phototourl.com/anon/2026-11-15-808a62f5-e8f2-4c68-99a5-b313d6588e6c.png',
    status: 'available',
    buttonText: 'THÊM VÀO GIỎ',
  },
  {
    id: 2,
    category: 'merchandise',
    name: 'TÚI TOTE ARCHER',
    price: 249000,
    priceLabel: '249.000đ',
    image:
      'https://cdn.phototourl.com/anon/2026-11-16-09197f5e-2409-4037-89ac-22aa9afa6316.png',
    checkoutImage:
      'https://cdn.phototourl.com/anon/2026-11-15-65fea7a0-6b63-4af6-bdd0-cce6d675b22d.png',
    status: 'available',
    buttonText: 'THÊM VÀO GIỎ',
  },
  {
    id: 3,
    category: 'merchandise',
    name: 'ÁO TỪNG NGÀY',
    price: 499000,
    priceLabel: '499.000đ',
    image:
      'https://cdn.phototourl.com/anon/2026-11-16-a41d88de-e883-4104-92a9-76c6f71a6fb8.png',
    checkoutImage:
      'https://cdn.phototourl.com/anon/2026-11-15-e3e01775-12ee-4038-abad-5f0b6b4dbf65.png',
    status: 'available',
    buttonText: 'THÊM VÀO GIỎ',
  },
];

export const ARTIST_NOTIFICATIONS: ArtistNotification[] = [
  {
    id: 'noti-1',
    title: 'Single mới “Sớm Như Vậy” đã phát hành',
    detail: 'Nghe ngay trên Spotify và xem MV chính thức trên YouTube.',
    date: '09.04.2026',
    targetPage: 'music',
  },
  {
    id: 'noti-2',
    title: 'Lịch trình biểu diễn Thu – Đông 2026',
    detail: '4 đêm diễn và gặp gỡ người hâm mộ tại Hà Nội từ tháng 10 đến tháng 12.',
    date: '18.10.2026',
    targetPage: 'schedule',
  },
  {
    id: 'noti-3',
    title: 'Physical Album & Merchandise chính hãng',
    detail: 'Album Từng Ngày Như Mãi Mãi và bộ sưu tập Archer đang mở bán.',
    date: 'Cửa hàng',
    targetPage: 'shop',
  },
];

export function formatVND(amount: number): string {
  return amount.toLocaleString('vi-VN') + 'đ';
}
