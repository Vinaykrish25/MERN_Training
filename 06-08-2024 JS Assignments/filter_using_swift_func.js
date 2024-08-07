function swift(arr){
    let less_than_3=[]
    let great_than_3=[]
   arr.filter((item) => {
        if (item.length<=3){
            less_than_3.push(item)  
        }
        else{
            great_than_3.push(item)
        }
    }
)
console.log(less_than_3)
console.log(great_than_3);
}
let arr=["cat","dog","elephant"]
swift(arr)
