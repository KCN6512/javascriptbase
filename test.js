// const names = {
//     first: 'Alexander',
//     second: 'Kirill',
//     fourth() {
//         console.log('fourth as function')
//     }
// }
// const name = 'Vova'
// names[name] = 'Vovan'
// names.third = 'asdasd'
// names['popular'] = true
// console.log(names)

// delete names.third
// console.log(names)
// console.log(JSON.stringify(names))
// //2:04:00
// names.fourth()


const post = {
    title: 'aasdasd',
    likesQty: 5
}

const stringifiedJSON = JSON.stringify(post)
const parsedJSON = JSON.parse(stringifiedJSON)
console.log(stringifiedJSON)
console.log(parsedJSON)


function fn(a,b,c) {
    return a * b * c
}

console.log(fn(1,2,3))

a = 5
b = 5

console.log(a==b)

const newpost = {
    ...post,
    jija: 123
}

console.log(newpost)
console.table(newpost)

//4:31:36 / 10:55:33 Конкатенация строк

