let  iconcart = document.querySelector(".icon-cart");
let closecart = document.querySelector(".cerrar");
let body = document.querySelector("body");
let cart = [];

function redireccion(){
    location.href = "factura.html"
}


const products = [
  { id: 1, name: "CALDO CON AREPA", price: 12000 },
  { id: 2, name: "ARROZ Y PECHUGA", price: 15000 },
  { id: 3, name: "BANDEJA PAISA", price: 20000 },
  { id: 4, name: "SOPA DE PESCADO", price: 22000 },
  { id: 5, name: "SOPA DE FRIJOES", price: 18000 },
  { id: 6, name: "PESCADO FRITO", price: 16000 },
  { id: 7, name: "SANCOCHO", price: 10000 },
  { id: 8, name: "MONDONGO", price: 25000 }
];

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    updateCartDisplay();
}


function updateCartDisplay() {
  const cartElement = document.getElementById("cart");
  const totalElement = document.getElementById("total");
  cartElement.innerHTML = "";
  let total = 0;

  cart.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`; 
    const removeButton = document.createElement("button");
    removeButton.textContent = "Eliminar";
    removeButton.onclick = () => removeFromCart(product.id);
    li.appendChild(removeButton);
    cartElement.appendChild(li);
    total += product.price;
  });
  totalElement.textContent = total;
}




iconcart.addEventListener("click", () => {
  body.classList.toggle("showcart");
} )

closecart.addEventListener("click", () => {
  body.classList.toggle("showcart");
} )