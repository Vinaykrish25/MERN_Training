function add(a,b=10){
    c = a+b
    function add1(c){
        return c
    }
    return add1(c)
}
console.log(add(4))
console.log(c)
