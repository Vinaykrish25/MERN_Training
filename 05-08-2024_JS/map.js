const arr = [1,5,3,6,8,9];
let newArr = arr.map((item,i,items) => {
    console.log(i);
    console.log(item);
    console.log(items);
    console.log("___________________");
    // return item*2
    return item + 
        `"mark1" : "10"  "mark2" : "20"`
       
    
}
)
console.log(newArr);
