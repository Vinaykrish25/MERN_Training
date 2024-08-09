let leapy=[];
let arr=[2001,2002,2003,2004,2005,2006,2007,2008,2009,2010];
leapy.push(arr.filter((item)=>{
        if((((item%4)==0) && ((item%100)!=0))||((item%400)==0))
        {
            return item
        }
}))
console.log(leapy);