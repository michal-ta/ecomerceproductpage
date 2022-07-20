let mainPicture=document.querySelector(".main_picture");
let result =document.querySelector(".result");
let quantityAdd=document.querySelector(".mark_plus");
let quantityMinus=document.querySelector(".mark_minus");

quantityAdd.addEventListener("click", increment);
    console.log(increment);
function increment(){
    result.innerText=Number(result.innerText) + 1;
}


quantityMinus.addEventListener("click", decrease);
function decrease(){
    if (result.innerText > 0){
    result.innerText=Number(result.innerText) -1;
    }
}