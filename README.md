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

## 파일 구성

| 파일 | 설명 |
| --- | --- |
| `index.html` | 실습용 HTML (`main.js`를 `defer`로 불러옴) |
| `main.js` | 실습 코드. 끝난 단원은 주석으로 남겨두고, 마지막 단원만 실행 |
| `getType.js` | 데이터 타입을 정확히 알려주는 `getType` 함수 (모듈) |

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
