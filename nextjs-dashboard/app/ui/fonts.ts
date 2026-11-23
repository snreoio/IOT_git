// ===== 14. Next.js 2 : Optimizing Fonts (슬라이드 19) =====
// 구글 폰트에서 Inter(앱 전체), Lusitana(특정 요소용 secondary font)를 임포트
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
