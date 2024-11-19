((a, b) => {
    console.log(a + b);
})(10, 24);

// 고차 함수
const add = (a) => {
    return (b) => {
        return a + b;
    }
}

console.log(add(1)(5));


// 가장 가까운 스코프 (함수 깊이?) 변수를 출력
var x = 10;

function foo() {
    var x = 100;
    console.log(x)

    function bar() {
        var x = 1000
        console.log(x);
    }

    bar()
}

console.log(x)
foo()