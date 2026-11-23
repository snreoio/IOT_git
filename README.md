# IOT_git

2026학년도 2학기 **지능사물인터넷** 수업 실습 기록

## 실행 방법

```bash
npm install      # 패키지 설치
npm run dev      # 로컬 서버 실행 → http://localhost:1234
npm run build    # dist 폴더로 빌드
```

- 번들러: `parcel-bundler` (v1)
- 결과는 브라우저 개발자도구(F12) 콘솔에서 확인

### React 실습 (`react/`)

- `react/dom.html`, `react/index.html`을 브라우저에서 바로 열기 (CDN으로 React 18 + Babel 로딩, 인터넷 필요)

### Next.js 실습 (`nextjs_project/`)

```bash
cd nextjs_project
npm install      # 패키지 설치
npm run dev      # 개발 서버 실행 → http://localhost:3000
```

### Next.js 대시보드 실습 (`nextjs-dashboard/`)

```bash
cd nextjs-dashboard
npm install      # 패키지 설치 (슬라이드는 pnpm i)
npm run dev      # 개발 서버 실행 → http://localhost:3000
```

- 슬라이드는 `pnpm`을 쓰지만, 이 PC에서는 pnpm(corepack)이 서명 오류로 실행되지 않아 npm으로 생성함

## 파일 구성

| 파일 | 설명 |
| --- | --- |
| `index.html` | 실습용 HTML (`main.js`를 `defer`로 불러옴) |
| `main.js` | 실습 코드. 끝난 단원은 주석으로 남겨두고, 마지막 단원만 실행 |
| `getType.js` | 데이터 타입을 정확히 알려주는 `getType` 함수 (모듈) |
| `react/dom.html` | DOM 메서드로 `<h1>` 만들기 |
| `react/index.html` | React 실습. 끝난 단원은 주석으로 남겨두고, 마지막 단원(State)만 실행 |
| `nextjs_project/` | `npx create-next-app`으로 만든 Next.js 프로젝트 (App Router, JavaScript) |
| `nextjs_project/app/like-button.js` | `'use client'` 클라이언트 컴포넌트 (Like 버튼) |
| `nextjs-dashboard/` | Next.js Learn 대시보드 starter-example (TypeScript, Tailwind) |

---

## 수업 기록

### 2026-11-09 · 13. Javascript 1

- **패키지 생성 및 Hello world**: `npm init -y`, `npm i parcel-bundler -D`, `package.json`에 `dev`/`build` 스크립트 추가, `index.html` + `main.js` 작성
- **데이터 타입**: `typeof`로 타입 확인 (`null`, 객체, 배열은 모두 `object`), `Object.prototype.toString`으로 정확한 타입을 알려주는 `getType` 함수 작성
- **모듈 만들기**: `getType`을 `getType.js`로 분리해 `export default`, `main.js`에서 `import`
- **산술 연산자**: `+ - * / %`
- **변수 선언과 초기화**: `let`(재할당 가능), `const`(재할당 불가), `var`(함수 스코프, 잘 안 씀), 할당 연산자 `+=`
- **비교 연산자**: `===`, `!==`, `<`, `>`, `<=`
- **논리 연산자**: `&&`, `||`, `!`
- **삼항 연산자**: `조건 ? 참 : 거짓`
- **조건문**: `if / else if / else`, `switch`
- **For 문**: `for (시작조건; 종료조건; 변화조건)`
- **For 문 응용**: `querySelector`로 `<ul>`을 찾고, `createElement`로 `<li>`를 만들어 `appendChild`로 추가, `addEventListener('click', ...)`로 클릭 이벤트 처리
- **변수 유효범위**: `const`/`let`은 블록 스코프, `var`는 함수 스코프
- **형 변환**: `==`는 자동 형변환을 하므로 `===` 사용을 권장, truthy/falsy 값

### 2026-11-10 · 13. Javascript 2, 3

- **함수**: 함수 선언, 익명 함수, `arguments` 객체
- **화살표 함수**: `(x) => { ... }`, 축약형 `x => x ** 2`, 객체를 반환할 때는 `({ ... })`
- **즉시 실행 함수 (IIFE)**: `(function () { ... })()`, 앞 명령어 끝에 세미콜론
- **호이스팅**: 함수 선언은 끌어올려지지만, 변수에 익명 함수를 할당하면 적용 안 됨
- **타이머 함수**: `setTimeout` / `clearTimeout`, `setInterval` / `clearInterval`
- **콜백 함수**: 콜백을 받아 `Hello` 다음에 `Done!` 출력
- **객체의 속성과 메서드**, **생성자 함수** (`new`), **prototype**으로 메서드 공유
- **this**: 일반 함수는 호출 위치, 화살표 함수는 선언된 범위에서 `this` 결정
- **객체 메서드 간략 선언**, **ES6 Classes** (`class`, `constructor`), **상속** (`extends`, `super`)

### 2026-11-16 · 14. Next.js 1

- **렌더링**: SSR / CSR / SSG 구분, React는 기본 CSR → SEO에 불리할 수 있어서 Next.js가 SSR을 지원
- **DOM 메서드 예제** (`react/dom.html`): `getElementById`, `createElement`, `createTextNode`, `appendChild`로 `<h1>` 추가
- **React 시작하기** (`react/index.html`): CDN으로 `react`, `react-dom` 로딩, `ReactDOM.createRoot(app).render(...)`. JSX는 Babel 없이 실행하면 에러 → `@babel/standalone` 추가 후 `<script type="text/jsx">`
- **JSX 규칙**: single root, 모든 태그 닫기, camelCase (`className`)
- **Components**: 컴포넌트는 대문자로 시작하는 함수, `<Header />`로 호출. **Nesting**: `HomePage` 안에 `Header`
- **Props**: `props.title`, 객체 분해 `{ title }`, 중괄호 안에서 JavaScript 사용 (`createTitle(title)`), 배열 `map`으로 `<li key={name}>` 반복
- **event handler**: `<button onClick={handleClick}>`
- **State**: `const [likes, setLikes] = React.useState(0)`으로 Like 버튼 클릭 횟수 표시
- **Next.js로 확장** (`nextjs_project/`): `npx create-next-app` (TypeScript·ESLint·Tailwind·`src/`·import alias = No, App Router = Yes). `app/page.js`의 `Home()`이 main component, `app/layout.js`가 main layout, `npm run dev` → `localhost:3000`

### 2026-11-23 · 14. Next.js 2

- **서버와 클라이언트 환경**: 네트워크 경계, 사용자와 상호작용이 필요한 요소는 클라이언트, 여러 페이지에 공통인 요소는 서버. 서버 컴포넌트 렌더링 결과는 RSC payload로 클라이언트에 전송
- **클라이언트 컴포넌트 사용** (`nextjs_project/`): `react/index.html`의 `Header`, `HomePage`를 `app/page.js`로 옮기고 `export default function HomePage()`. Next.js는 기본이 서버 컴포넌트라 `useState`를 못 씀 → `'use client'`를 붙인 `app/like-button.js`로 분리
- **Dashboard 프로젝트 생성** (`nextjs-dashboard/`): `npx create-next-app@latest nextjs-dashboard --example ".../dashboard/starter-example"`
- **폴더 구성**: `app/lib`(데이터 함수, `placeholder-data.ts`), `app/ui`(UI 컴포넌트), `public`(정적 파일). `.ts`는 TypeScript, `type Invoice = { ... status: 'pending' | 'paid' }`로 타입 정의
- **Global styles**: `app/layout.tsx` 맨 윗줄에 `import '@/app/ui/global.css'`
- **Tailwind**: `className="text-blue-500"`처럼 유틸리티 클래스로 스타일링
- **CSS Modules**: `app/ui/home.module.css`의 `.shape`(검은 삼각형)를 `styles.shape`로 `page.tsx`에 적용
- **clsx**: `app/ui/invoices/status.tsx`에서 `status`가 `pending`이면 회색, `paid`면 초록색
- **Fonts**: `app/ui/fonts.ts`에 `Inter`(layout의 body), `Lusitana`(page의 `<p>`) 추가, `<AcmeLogo />` 주석 제거
- **Images**: `next/image`의 `<Image>`로 `hero-desktop.png`(md 이상), `hero-mobile.png`(모바일) 추가
