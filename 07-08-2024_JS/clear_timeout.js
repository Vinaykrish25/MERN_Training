const timeOut = setTimeout(() => {
    console.log("This message will get cleared")
},3000);
clearTimeout(timeOut);

// const timeOut = setTimeout(() => {
//     console.log("This message will get cleared")
// },3000);
// setTimeout(() => {
//     clearTimeout((timeOut))
// })