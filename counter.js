let counterValue=document.getElementById("counter-value")


let incBtn=document.getElementById("btn-inc")
let decBtn=document.getElementById("btn-dec")
let resBtn=document.getElementById("btn-res")

let counter=0;

incBtn.onclick=()=>{
    //alert("increase button")
++counter
   counterValue.textContent=counter
}


decBtn.onclick=()=>{
   // alert("Decrease button")
    --counter
    counterValue.textContent=counter
}

resBtn.onclick=()=>{
    counter=0;
    counterValue.textContent=counter;
  //  alert("Reset button")
}

