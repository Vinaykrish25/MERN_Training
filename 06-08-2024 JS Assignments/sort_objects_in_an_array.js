const arr =[
{name: 'John', age: 30}, 
{name: 'Alice', age: 25}, 
{name: 'Bob', age: 35}]

let names = arr.map((item) => {
    return item.name
})
let sort_names = names.sort()
console.log(sort_names)