function color(){
    const data = document.getElementsByClassName("para")
    for (let i = 3;i < data.length;i++){
        data[i].style.color = "red"
    }
}