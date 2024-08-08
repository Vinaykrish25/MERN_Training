function myfunc(){
    const data = document.getElementsByClassName("para")
    document.body.removeChild(data[1].remove())
}

const act = () => {
    const element = document.activeElement.tagName
    const data = document.getElementsByClassName("para")
    document.write(data[0].innerHTML)
    
}