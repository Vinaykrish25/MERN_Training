let year = [2001,2002,2003,2004,2005,,20062008]
leapy = []
nonleapy = []
year.forEach((item) => {
    if ((((item%4)==0) && ((item%100)!=0))||((item%400)==0)){
        leapy.push(item)
    }
    else{
        nonleapy.push(item)
    }
})
console.log(nonleapy)
console.log(leapy)