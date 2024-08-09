const arr = [1,5,3,6,8,92,2,10,2];
let newArr = arr.find((item,i,items) => {
    console.log(i);
    console.log(item);
    console.log(items);
    console.log("___________________");
    // return item*2
    return item == 2
}
)
console.log(newArr);
