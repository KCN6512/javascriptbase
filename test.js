const names = {
    first: 'Alexander',
    second: 'Kirill'
}
const name = 'Vova'
names[name] = 'Vovan'
names.third = 'asdasd'
names['popular'] = true
console.log(names)

delete names.third
console.log(names)
console.log(typeof(names.second))

