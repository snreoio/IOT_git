// 주석 처리 기준 : 뒤 내용과 이름이 겹쳐서 뒤 내용이 실행 안 되는 앞 내용, 일부러 에러를 내는 예제만 주석 처리

// ==================== 13. Javascript 1 ====================

// ===== 패키지 생성 및 Hello world =====
console.log('Hello world');

// ===== 데이터 타입 + 모듈 만들기 =====
import getType from './getType'

console.log(typeof 'Hello world')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])

console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]));

// ===== 산술 연산자 =====
console.log(2 + 3)
console.log(4 - 9)
console.log(4 * 5)
console.log(15 / 5)
console.log(7 % 2)

// ===== 변수 선언과 초기화 ===== (주석 : 뒤 단원과 변수 a가 겹침)
//let a = 5
//a = a + 1
//console.log("a:", a)
//a += 1         // 할당 연산자
//console.log("a:", a)

// ===== 비교 연산자 ===== (주석 : 뒤 단원과 변수 a, b가 겹침)
//const a = 1
//const b = 1
//const c = 3
//
//console.log(a === b)   // 일치 비교
//console.log(a !== b)   // 불일치 비교
//console.log(a < c)     // less than
//console.log(a > c)     // greater than
//console.log(a <= a)    // less than or equal to

// ===== 논리 연산자 ===== (주석 : 뒤 단원과 변수 a, b가 겹침)
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

// ===== 삼항 연산자 ===== (주석 : 뒤 단원과 변수 a가 겹침)
//const a = 1 === 2
//
//console.log(a ? '참' : '거짓')  // 삼항 연산자

// ===== 조건문 (if) ===== (주석 : 뒤 단원과 변수 a가 겹침)
//const a = 2
//
//if (a === 0){
//    console.log('a is 0')
//} else if ( a === 2) {
//    console.log('a is 2')
//} else {
//    console.log('rest...')
//}

// ===== 조건문 (switch) ===== (주석 : 뒤 단원과 변수 a가 겹침)
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
for (let i = 0; i < 3; i += 1){
    console.log(i)
}

// ===== For 문 응용 (index.html에 defer, <ul> 추가 필요) =====
const ulEl = document.querySelector('ul') // html파일에서 ul 태그 찾기
console.log(ulEl)

for (let i = 0; i < 3; i += 1){
    const li = document.createElement('li') // 메모리 상에 li 태그가 만들어짐
    li.textContent = `list-${i + 1}`    // list 태그의 내용에 list-1 과 같은 문자열 대입

    li.addEventListener('click', function(){
        console.log(li.textContent)
    })
    ulEl.appendChild(li)              // li 태그를 ulEl의 하위태그로 설정
}

// ===== 변수 유효범위 =====
// 1) 문제 없음 (주석 : 아래 4)와 함수 이름 scope가 겹침)
//function scope() {
//  if (true){
//    const a = 123
//    console.log(a)
//  }
//}
//scope()

// 2) 에러 : const는 블록(중괄호) 밖에서 접근 불가 (주석 : 에러 예제)
//function scope() {
//  if (true){
//    const a = 123
//
//  }
//  console.log(a)
//}
//scope()

// 3) 변수 a가 블록 내에 있으나 초기화 안됨 (초기화 전 접근) (주석 : 에러 예제)
//function scope() {
//  if (true){
//    console.log(a)
//    const a = 123
//  }
//}
//scope()

// 4) var의 유효범위는 함수 내이므로 정상작동
function scope() {
  if (true){
    var a = 123
  }
  console.log(a)
}
scope()

// ===== 형 변환 ===== (주석 : 뒤 단원과 변수 a, b가 겹침)
//const a = 1
//const b = '1'
//
//console.log(a === b)
//console.log(a == b)    // == 비교 연산자는 자동 형변환을 해줌. 안 쓰는 것을 권장

//True 로 처리되는 값
// true, {}, [], 1, 'false', -5, '123', ....

//False 로 처리되는 값
// false, '', null, undefined, 0, -0, NaN

if ('false') {
  console.log(123)
}

// ==================== 13. Javascript 2 ====================

// ===== 함수 =====
function sum(x, y){
    return x + y
}

// (주석 : 뒤 단원과 변수 a가 겹침)
//const a = sum(4, 12)
//console.log(a)

console.log(sum(1, 3))

// 익명 함수 : 함수의 이름이 없는 형태
const b = function(x, y){
    return x + y
}
console.log(b(1, 3))

// arguments 객체 : 함수의 매개변수가 없으면, 내재된 arguments 변수가 인자를 받는다
function sum2( ){
    console.log(arguments)
    return arguments[0] + arguments[1]
}

console.log(sum2(3,2))

// ===== 화살표 함수 =====
// 아래의 함수들은 모두 동일한 기능을 함
// 익명함수 (주석 : 뒤 호이스팅 단원과 함수 이름 square가 겹침)
//const square = function (x) {
//    return x ** 2
//}
//console.log('square: ', square(7))

// 화살표 함수 (function 키워드 생략)
const squareArrow = (x) => {
    return x ** 2
}
console.log('squareArrow: ', squareArrow(7))

// 화살표 함수의 축약형 (함수 블록에 return 문만 있을 때)
const squareArrow2 = x => x ** 2
console.log('squareArrow2: ', squareArrow2(7))

// 두 개 이상의 매개변수 사용 시 소괄호로 묶음
const squareArrow3 = (x, y) => x * y
console.log('squareArrow3: ', squareArrow3(3, 4))

// 객체(Object) 자료형
const A = {email: 'sh@ut.ac.kr', tel: '123-4567'}
console.log(A.email)
console.log(A['tel'])

// 객체자료형을 화살표 함수의 반환값으로 사용할 때는 소괄호를 쓰면 됨
const squareArrow4 = (x, y) => ({'3의4승': x ** y})
console.log('squareArrow4: ', squareArrow4(3, 4))

// ===== 즉시 실행 함수 (IIFE) ===== (주석 : 뒤 호이스팅 단원과 변수 a가 겹침)
// 이름이 없는 함수를 만들고 소괄호를 붙여 한번만 실행
// 즉시 실행함수 바로 전 명령어 끝에 세미콜론 붙이기
//const a = 7
//function double(){
//  console.log(a * 2)
//}
//double();
//
//(function () {
//    console.log(a * 2)
//})();
//
//(function () {
//    console.log(a * 2)
//}())

// ===== 호이스팅 =====
// 함수 선언이 유효범위의 최상단으로 끌어올려지는 것처럼 동작하는 것
// 1) 함수 호출이 함수 선언보다 앞에 있어도 문제 없음
const a = 7

square();

function square(){
    console.log(a * a)
}

// 2) 에러 : square 변수에 익명함수를 할당하는 식으로 구현하면 호이스팅이 적용되지 않음 (주석 : 에러 예제)
//const a = 7
//
//square();
//const square = function (){
//    console.log(a * a)
//}

// ===== 타이머 함수 (setTimeout) ===== (주석 : 뒤 콜백 함수 단원과 'Hello' 출력이 겹침)
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
//setTimeout(function () {
//    console.log('Hello')
//}, 3000)
//
//setTimeout(() => console.log('Hello'), 3000)

// Hello world!를 누르면 setTimeout 함수를 종료시키는 코드 (주석 : 아래 setInterval과 변수 timer, h1El이 겹침)
//const timer = setTimeout(() => console.log('Hello'), 3000)  // setTimeout의 식별자 반환
//
//const h1El = document.querySelector('h1')   // h1 태그를 찾아 h1El로 반환
//h1El.addEventListener('click', ()=>{        // click event가 발생하면 함수 실행
//  clearTimeout(timer)                       // setTimeout의 식별자를 입력
//})

// ===== 타이머 함수 (setInterval) ===== (주석 : 뒤 콜백 함수 단원과 'Hello' 출력이 겹침)
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearInterval() : 설정된 Interval 함수를 종료
//const timer = setInterval(() => console.log('Hello'), 3000)
//
//const h1El = document.querySelector('h1')
//h1El.addEventListener('click', ()=>{
//  clearInterval(timer)
//})

// ===== 콜백 함수 =====
// 함수의 인수로 사용되는 함수
// setTimeout(함수1, 시간) : 함수1이 콜백 함수임
// 1) Done!이 Hello보다 먼저 출력 (주석 : 아래 2)와 함수 이름 timeout이 겹침)
//function timeout() {
//    setTimeout(()=>{
//        console.log('Hello')
//    }, 3000)
//}
//
//timeout()
//console.log('Done!')

// 2) 콜백함수를 사용해 Hello 뒤에 Done! 출력
function timeout(callb1) {      // 콜백함수를 받는 매개변수
    setTimeout(()=>{
        console.log('Hello')
        callb1()                // 'Hello' 뒤에 호출
    }, 3000)
}

timeout(()=>{                   // 익명함수를 콜백함수로 사용
    console.log('Done!')
})

// ==================== 13. Javascript 3 ====================

// ===== 객체의 속성과 메서드 ===== (주석 : 뒤 단원과 변수 mike가 겹침)
//const mike = {
//    firstName: 'Mike',      // 속성
//    lastName: 'Tyson',
//    getFullName: function() {       // 메서드
//      return `${this.firstName} ${this.lastName}`   // this : 메서드가 속한 객체(현재는 mike), backtick 사이에 변수 값이 들어감(보간)
//    }
//}
//
//console.log(mike)
//console.log(mike.getFullName())

// ===== 생성자를 이용한 객체 생성 ===== (주석 : 뒤 단원과 변수 mike가 겹침)
//function user(first, last) {
//    this.firstName = first          // 이 부분이 인스턴스가 만들어질 때마다 메모리에 할당됨
//    this.lastName = last
//    this.getFullName = function() {
//      return `${this.firstName} ${this.lastName}`
//    }
//}
//
//const mike = new user('Mike', 'Tyson')    // 키워드 new를 붙여 user()를 생성자함수로 만들기, mike는 인스턴스
//console.log(mike)

// ===== 클래스 (prototype) ===== (주석 : 뒤 단원과 User, mike, anderson이 겹침)
// 생성자 함수의 이름의 첫 문자는 대문자로 하는 것이 관행
//function User(first, last) {
//    this.firstName = first
//    this.lastName = last
//}
//
//// prototype 속성을 사용하면 getFullName 함수가 메모리에 한번만 생성됨. 메모리 절약
//User.prototype.getFullName = function (){
//  return `${this.firstName} ${this.lastName}`
//}
//const mike = new User('Mike', 'Tyson')
//const anderson = new User('Anderson', 'Silva')
//
//// 아래 둘은 모두 동일한 User.prototype.getFullName()을 참조함
//console.log(mike.getFullName())
//console.log(anderson.getFullName())

// ===== this =====
// 일반 함수는 호출 위치에 따라 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의
// ※ 1), 2)를 실행해 볼 때는 맨 위 import getType 단원을 주석 처리해야 함
//    (import가 있으면 최상위 this가 undefined가 되어 arrow()에서 undefined 출력 대신 에러 발생)
// 1) 객체의 메서드 (주석 : 뒤 단원과 변수 mike, anderson이 겹침)
//const mike = {
//    name : 'mike',
//    normal: function () {
//        console.log(this.name)
//    },
//    arrow: () => {
//        console.log(this.name)
//    }
//}
//
//mike.normal()     // normal이 호출될 때, mike에 속해 있으므로 this는 mike가 됨
//mike.arrow()      // undefined
//
//const anderson = {
//   name: 'Anderson',
//   normal: mike.normal,     // 함수를 할당 (호출이 아님)
//   arrow : mike.arrow
//}
//
//anderson.normal()   // 여기서 normal()이 호출되므로, this는 anderson이 됨
//anderson.arrow()    // arrow의 this는 호출 위치와 무관하므로, 결과는 undefined

// 2) 생성자 함수와 prototype (주석 : 뒤 단원과 User, mike가 겹침)
//function User(name){
//    this.name = name
//}
//
//User.prototype.normal = function(){
//    console.log(this.name)
//}
//User.prototype.arrow = () => {
//    console.log(this.name)
//}
//
//const mike = new User('Mike')
//
//mike.normal()     // Mike
//mike.arrow()      // undefined

// 3) 타이머 함수 안의 일반 함수 (주석 : 아래 4)와 변수 timer가 겹침)
// 일반 함수인 function()의 호출 위치는 setTimeout()함수 내의 어딘가이므로 this가 무엇인지 알 수 없다
//const timer = {
//  name: 'mike',
//  timeout: function () {
//    setTimeout(function () {
//      console.log(this.name)
//    }, 2000)
//  }
//}
//timer.timeout()

// 4) 타이머 함수 안의 화살표 함수
// 화살표 함수는 function () 범위에서 this를 찾는데, timeout()이 호출될 때 timer를 this로 가지고 오므로 this는 timer가 됨
const timer = {
  name: 'mike',
  timeout: function () {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout()

// ===== 객체 메서드 간략 선언 ===== (주석 : 뒤 ES6 Classes 단원과 변수 mike가 겹침)
// 아래 두 코드가 동일
//const mike = {
//    name : 'Mike',
//    normal: function (){
//        console.log(this.name)
//    }
//}
//mike.normal()

//const mike = {
//    name : 'Mike',
//    normal(){
//        console.log(this.name)
//    }
//}
//mike.normal()

// ===== ES6 Classes =====
// ES6 부터, 다른 객체지향언어와 유사하게 클래스를 정의할 수 있음
class User{
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }

}
const mike = new User('Mike', 'Tyson')
const anderson = new User('Anderson', 'Silva')

console.log(mike.getFullName())
console.log(anderson.getFullName())

// ===== 상속 =====
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('교통수단', 2)
console.log(myVehicle)

// Vehicle 클래스를 상속받아 새로운 클래스 Bicycle을 만듦. Vehicle은 superclass, Bicycle은 subclass
class Bicycle extends Vehicle {
  constructor(name, wheel){
    super(name, wheel)        // superclass인 Vehicle의 constructor를 가리킴
  }
}
const myBicycle = new Bicycle('자전거1', 2)   // 슬라이드는 new Vehicle
console.log(myBicycle )

// Vehicle 클래스를 상속받아 Car 클래스를 만들고, license라는 속성을 추가함. 이때 constructor의 매개변수를 추가함
class Car extends Vehicle {
    constructor(name, wheel, license){
        super(name, wheel)
        this.license = license
    }
}
const myCar = new Car('소나타', 4, true)      // 슬라이드는 new Vehicle, true는 추가된 인자
console.log(myCar)
