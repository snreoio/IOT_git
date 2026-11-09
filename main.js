// ===== 패키지 생성 및 Hello world =====
//console.log('Hello world');

// ===== 데이터 타입 + 모듈 만들기 =====
//import getType from './getType'
//
//console.log(typeof 'Hello world')
//console.log(typeof 123)
//console.log(typeof true)
//console.log(typeof undefined)
//console.log(typeof null)
//console.log(typeof {})
//console.log(typeof [])
//
//console.log(getType(123))
//console.log(getType(false))
//console.log(getType(null))
//console.log(getType({}))
//console.log(getType([]));

// ===== 산술 연산자 =====
//console.log(2 + 3)
//console.log(4 - 9)
//console.log(4 * 5)
//console.log(15 / 5)
//console.log(7 % 2)

// ===== 변수 선언과 초기화 =====
//let a = 5
//a = a + 1
//console.log("a:", a)
//a += 1         // 할당 연산자
//console.log("a:", a)

// ===== 비교 연산자 =====
//const a = 1
//const b = 1
//const c = 3
//
//console.log(a === b)   // 일치 비교
//console.log(a !== b)   // 불일치 비교
//console.log(a < c)     // less than
//console.log(a > c)     // greater than
//console.log(a <= a)    // less than or equal to

// ===== 논리 연산자 =====
//const a = 1 === 1
//const b = 'AB' === 'AB'
//const c = true
//
//console.log(a)
//console.log(b)
//console.log(c)
//
//console.log('and: ', a && b && c)
//console.log('or: ', a || b || c)
//console.log('not: ', !a)

// ===== 삼항 연산자 =====
//const a = 1 === 2
//
//console.log(a ? '참' : '거짓')  // 삼항 연산자

// ===== 조건문 (if) =====
//const a = 2
//
//if (a === 0){
//    console.log('a is 0')
//} else if ( a === 2) {
//    console.log('a is 2')
//} else {
//    console.log('rest...')
//}

// ===== 조건문 (switch) =====
//const a = 2
//
//switch (a){
//  case 0:
//    console.log('a is 0')
//    break
//  case 2:
//    console.log('a is 2')
//    break
//  default:
//    console.log('rest...')
//}

// ===== For 문 =====
//for (let i = 0; i < 3; i += 1){
//    console.log(i)
//}

// ===== For 문 응용 (index.html에 defer, <ul> 추가 필요) =====
//const ulEl = document.querySelector('ul') // html파일에서 ul 태그 찾기
//console.log(ulEl)
//
//for (let i = 0; i < 3; i += 1){
//    const li = document.createElement('li') // 메모리 상에 li 태그가 만들어짐
//    li.textContent = `list-${i + 1}`    // list 태그의 내용에 list-1 과 같은 문자열 대입
//
//    li.addEventListener('click', function(){
//        console.log(li.textContent)
//    })
//    ulEl.appendChild(li)              // li 태그를 ulEl의 하위태그로 설정
//}

// ===== 변수 유효범위 =====
// 1) 문제 없음
//function scope() {
//  if (true){
//    const a = 123
//    console.log(a)
//  }
//}
//scope()

// 2) 에러 : const는 블록(중괄호) 밖에서 접근 불가
//function scope() {
//  if (true){
//    const a = 123
//
//  }
//  console.log(a)
//}
//scope()

// 3) 변수 a가 블록 내에 있으나 초기화 안됨 (초기화 전 접근)
//function scope() {
//  if (true){
//    console.log(a)
//    const a = 123
//  }
//}
//scope()

// 4) var의 유효범위는 함수 내이므로 정상작동
//function scope() {
//  if (true){
//    var a = 123
//  }
//  console.log(a)
//}
//scope()

// ===== 형 변환 =====
const a = 1
const b = '1'

console.log(a === b)
console.log(a == b)    // == 비교 연산자는 자동 형변환을 해줌. 안 쓰는 것을 권장

//True 로 처리되는 값
// true, {}, [], 1, 'false', -5, '123', ....

//False 로 처리되는 값
// false, '', null, undefined, 0, -0, NaN

if ('false') {
  console.log(123)
}
