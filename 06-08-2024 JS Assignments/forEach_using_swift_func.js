function swift(arr){
    let to_upper = []
    arr.forEach(item => {
        let element = item.toUpperCase();
        to_upper.push(element)
    });
    console.log(to_upper)
}
let arr = ["apple", "banana"]
swift(arr)