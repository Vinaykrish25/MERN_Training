const interval = setInterval(() =>{
    console.log("Welcome")
}, 1000)
setTimeout(() => {
    clearInterval(interval)
    console.log("STOP")
},5000)