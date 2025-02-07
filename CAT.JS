let bulbImg=document.getElementById("bulb-img")
let catImg=document.getElementById("cat-img")

let onButton=document.getElementById("btn-on")
let offButton=document.getElementById("btn-off")
let switchStatus=document.getElementById("switch-status")

offButton.onclick=function(){

    bulbImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"

    switchStatus.textContent="switched on"
}




onButton.onclick=function(){

    bulbImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"

    switchStatus.textContent="switched off"
}

