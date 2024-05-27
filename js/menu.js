let  iconcart = document.querySelector(".icon-cart");
let closecart = document.querySelector(".cerrar");
let body = document.querySelector("body");

iconcart.addEventListener("click", () => {
  body.classList.toggle("showcart");
} )

closecart.addEventListener("click", () => {
  body.classList.toggle("showcart");
} )