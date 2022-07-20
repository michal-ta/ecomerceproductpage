let mainPicture=document.querySelector(".main_picture");
let result =document.querySelector(".result");
let quantityAdd=document.querySelector(".mark_plus");
let quantityMinus=document.querySelector(".mark_minus");

//changing numbers inside of box with total ''requested parts''
//increase quanitty 
quantityAdd.addEventListener("click", increment);
        
function increment(){
    result.innerText=Number(result.innerText) +1;
}

//decrease quantity
quantityMinus.addEventListener("click", decrease);

//avoid to go into minus value 
function decrease(){
    if (result.innerText > 0){
    result.innerText=Number(result.innerText) -1;
    }
}

