const arr = [1,5,3,6,8,9];
let newArr = arr.filter((item,i,items) => {
    console.log(i);
    console.log(item);
    console.log(items);
    console.log("___________________");
    return item%2 == 0;
}
)
console.log(newArr);
