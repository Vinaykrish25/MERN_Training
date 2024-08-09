function addItems(){
    const item = document.getElementById("inp").value 
    const para = document.createElement("p")
    para.className = "items"
    para.style.textAlign = "center"
    para.style.fontSize = "30px"
    para.style.color = "black"
    para.style.fontWeight = "900"
    para.style.backgroundColor = "lightgreen"
    para.style.borderRadius = "8px"
    para.textContent = item
    document.getElementById("user-inp").appendChild(para)
    document.replaceChild(para,item)
    document.write(para)
}
function removeItems(){
    var remove = document.getElementsByClassName("items")
    var last = remove.length - 1
    for(let i=last ; i>=0 ; i--){
        document.body.removeChild(remove[i].remove())
    }
}