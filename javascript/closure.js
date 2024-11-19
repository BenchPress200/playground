function Counter() {
    var counter = 0;

    return {
        increase: function () {
            return ++counter;
        },
        decrease: function () {
            return --counter;
        },
        counter: function () {
            console.log('counter에 접근!');
            return counter;
        }
    }
}

var c = Counter()

console.log(c.increase())
console.log(c.increase())
console.log(c.increase())
console.log(c.decrease())
console.log(c.counter())


// 왜 5만 다섯 번 출력?
// -> 함수 스코프가 아닌 변수는 전역변수이므로 i는 전역변수
// -> setTimeout 호출은 비동기로 이뤄지고 첫 번째 호출전에 i가 setTimeout 다섯 번 호출하고 i를 5로 업데이트 해놓음
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 1000)
}

// let으로 선언하면 블록레벨 스코프 가능
// 해당 i는 각 순회 setTimeout의 i값으로 바인딩
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 1000)
}


// 클로저 활용
for (var i = 0; i < 5; i++) {
    setTimeout(
        (function (sec) {
            return function () {
                console.log(sec)
            }
        })(i),
        i * 1000)

}