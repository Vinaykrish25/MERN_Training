function change(){
    const para = document.getElementById("para")
    const head = document.createElement("h1")
    document.getElementById("para").appendChild(head)
    head.innerHTML = para.innerHTML
    document.replaceChild(head,para)
    document.write(head)
}