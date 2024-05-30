function loadInvoice() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) return;

  const invoiceItemsElement = document.getElementById("invoice-items");
  const invoiceTotalElement = document.getElementById("invoice-total");

  let total = 0;
  cart.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    invoiceItemsElement.appendChild(li);
    total += product.price;
  });

  invoiceTotalElement.textContent = total;
}

function goBack() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", loadInvoice);

/*
function alerta(){
    window.alert("Pedido Realizado Con Exito");
}
*/

function validateForm() {
  const name = document.getElementById("name").value;
  const direccion = document.getElementById("direccion").value;
  const telefono = document.getElementById("telefono").value;

  if (name.trim() === "" || direccion.trim() === ""  || telefono.trim() === "" ) {
    alert("Completa Todos Los Campos Antes de Realiazar El Pedido");
    return false; // La validación falla si algún campo está vacío
  }
  else{
    alert("Pedido Realizado Con Exito");
    window.location.href = "menu.html";
    return true; // La validación es exitosa si todos los campos están completos
  }
}