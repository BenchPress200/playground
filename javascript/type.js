// undefind -> 선언됐지만 할당되지 않은 값
// null -> 명시적으로 비어 있음을 나타내는 값

let foo;
console.log(foo); // undefined 출력

foo = null;
console.log(foo);

const maxInteger = Math.pow(2, 53);
console.log(maxInteger - 1 === Number.MAX_SAFE_INTEGER);