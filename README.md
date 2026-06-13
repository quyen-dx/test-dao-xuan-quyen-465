# Test ReactJS Intern - Đào Xuân Quyến

## Giới thiệu

Đây là bài test ReactJS Intern được xây dựng bằng Next.js và TypeScript.

Ứng dụng mô phỏng giao diện xem video ngắn dạng cuộn dọc giống TikTok hoặc Facebook Reels.

## Chức năng đã làm

-Hiển thị danh sách video bằng dữ liệu giả.
-Cuộn dọc từng video.
-Click vào video để phát hoặc tạm dừng.
-Tự động phát video khi cuộn tới.
-Tự động dừng video khi cuộn sang video khác.
-Thả tim và tăng/giảm số lượt thích.
-Responsive trên Desktop và Mobile.
-Navbar bên trái trên Desktop và dưới cùng trên Mobile.

## Cách xử lý Auto Play / Pause

Mình sử dụng Intersection Observer API để theo dõi từng Video Card.

Khi video xuất hiện đủ trong màn hình thì video sẽ tự phát.

Khi người dùng cuộn sang video khác thì video cũ sẽ tự dừng.

Mình sử dụng:

```ts
threshold: 0.7
```

Điều này có nghĩa là video cần xuất hiện khoảng 70% trong màn hình thì mới được coi là đang được xem.

## Cách xử lý Play / Pause

Sử dụng useRef để lấy thẻ video.

Khi click vào video:

-Nếu video đang dừng thì phát.
-Nếu video đang phát thì tạm dừng.

## Cách chạy dự án

Cài package:

```bash
npm install
```

Chạy dự án:

```bash
npm run dev
```

Mở trình duyệt:

```txt
http://localhost:3000
```
