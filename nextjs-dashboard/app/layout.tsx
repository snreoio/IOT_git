// ==================== 14. Next.js 2 ====================
// ===== CSS Styling : Global styles (슬라이드 15) =====
// Top-level component(layout.tsx) 맨 윗줄에서 global.css 를 임포트 → 모든 route 에 CSS 규칙 적용
import '@/app/ui/global.css';
// ===== Optimizing Fonts (슬라이드 19) : Inter 폰트를 body 에 적용 =====
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased : 폰트를 부드럽게 보이게 하는 Tailwind 클래스 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
