

let rec1 = document.querySelector(".rec1");
let rec2 = document.querySelector(".rec2");
let rec3 = document.querySelector(".rec3");


function clickHandler(e){
  if(e.type === "click"){
  	alert(rec1.textContent);
  }
}

rec1.addEventListener("click", clickHandler);
rec1.addEventListener("click", clickHandler);
rec1.addEventListener("click", clickHandler);