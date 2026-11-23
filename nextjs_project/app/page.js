// ==================== 14. Next.js 2 ====================
// ===== 클라이언트 컴포넌트 사용 (슬라이드 6~7) =====
// react/index.html 에서 만든 Header, HomePage 를 page.js 로 옮김
// Next.js 는 기본적으로 서버 컴포넌트 → 서버 컴포넌트는 useState() hook 을 지원하지 않음
// 그래서 useState 를 쓰는 Like 버튼은 'use client' 를 붙인 like-button.js 로 분리
import LikeButton from './like-button';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

// HomePage() 를 디폴트로 설정 (main 함수 개념)
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}

// ===== 14. Next.js 1 : create-next-app 기본 페이지 (끝난 단원이라 주석 처리) =====
/*
import Image from "next/image";
import styles from "./page.module.css";

// ===== 14. Next.js 1 : page.js =====
// function Home() 가 main component
// → 앞의 react/index.html 에서 만든 HomePage() 컴포넌트가 변환된 것으로 볼 수 있음
// (슬라이드는 TypeScript를 No로 골라서 page.tsx 대신 page.js 로 생성됨)
function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>
            To get started, edit the{" "}
            <code className={styles.code}>page.js</code> file.
          </h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
*/
