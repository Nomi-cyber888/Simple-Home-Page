let mode = document.querySelector(".dmode")
let CurrMode = "light"
let btns1 = document.querySelector(".hb1")
let btns2= document.querySelector(".hb2")
let btns3 = document.querySelector(".hb3")
let btns4 = document.querySelector(".hb4")
let cont = document.querySelector(".content")
let p = document.querySelector("#p1")
let h1 = document.querySelector("#hh")
let lgo = document.querySelector("#logo")
let sp = document.querySelector(".r1")
let sp1 = document.querySelector(".r2")
let footer = document.querySelector("footer")


mode.addEventListener("click", ()=>{
    if (CurrMode === "light"){
        CurrMode = "dark"
        mode.backgroundColor = "white"
        document.body.style.backgroundColor = "black"
        btns1.style.color = "white"
        btns2.style.color = "white"
        btns3.style.color = "white"
        btns4.style.color = "white"
        cont.style.color = "white"
        p.style.color = "white"
        h1.style.color = "rgb(103, 167, 214)"
        sp.style.color = "white"
        sp1.style.color = "white"
        footer.style.color = "white"
        
    } else {
        CurrMode = "light"
        document.body.style.backgroundColor = "rgb(242, 249, 255)"
        document.body.style.color = "black"
        btns1.style.color = "black"
        btns2.style.color = "black"
        btns3.style.color = "black"
        btns4.style.color = "black"
        cont.style.color = "black"
        p.style.color = "rgb(34,51,68)"
        h1.style.color = "rgb(34,51,68)"
        sp.style.color = "black"
        sp1.style.color = "black"
    }
})