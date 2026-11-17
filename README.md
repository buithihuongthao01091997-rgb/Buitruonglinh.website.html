# buitruonglinh | Official Website

Website chính thức giới thiệu ca sĩ – nhạc sĩ **Bùi Trường Linh**, bao gồm 5 phân khu chính:

- **Trang chủ (`#home`)**: Hero banner, mạng xã hội, slider Latest News, trình phát Spotify và thư viện Official Media.
- **Giới thiệu (`#about`)**: Thông tin cá nhân, phong cách nghệ thuật và dòng thời gian hành trình âm nhạc (2007–2026).
- **Âm nhạc (`#music`)**: Single mới nhất, Spotify Popular Tracks và Discography với bộ lọc `ALL / SINGLES / COLLABS / ALBUM`.
- **Lịch trình (`#schedule`)**: Lịch biểu diễn theo tháng (`ALL / OCT / NOV / DEC`) và trang xem chi tiết từng sự kiện.
- **Cửa hàng (`#shop`)**: Danh mục Album & Merchandise, giỏ hàng lưu trên `localStorage`, trang thanh toán và biên nhận đơn hàng.

## Cài đặt & chạy thử trên máy (Local)

Yêu cầu: [Node.js](https://nodejs.org/) (v20+)

```bash
npm install
npm run dev
```

Mở trình duyệt tại `http://localhost:3000`.

## Build sản phẩm

```bash
npm run build
```

Thư mục đầu ra sau khi build nằm tại `dist/`.

## Đưa lên GitHub & bật GitHub Pages

1. Đẩy toàn bộ mã nguồn lên repository GitHub (nhánh `main`).
2. Vào **Settings → Pages** trên repository GitHub.
3. Tại mục **Build and deployment → Source**, chọn **GitHub Actions**.
4. File workflow `.github/workflows/deploy.yml` sẽ tự động build và xuất bản website lên GitHub Pages.
