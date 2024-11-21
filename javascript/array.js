const arr = [1, 2, 3, 4, 5]
// 배열의 요소순회하면서 연산가능
const doubledArr = arr.map((item) => item * 2)
console.log(doubledArr)

const eventArr = arr.filter((item) => item % 2 === 0)
console.log(eventArr)

const sum = arr.reduce((result, item) => {
    return result + item
}, 0)

console.log(sum)

arr.forEach((item) => console.log(item));