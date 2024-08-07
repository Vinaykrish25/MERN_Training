function swift(arr){
    let arr1 = arr.find((item) => {
        return item%2 == 0
        })
    console.log(arr1)
}
let arr =  [5, 7, 8, 10, 12]
swift(arr)