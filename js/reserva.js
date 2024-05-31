function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const cedula = document.getElementById("cedula").value;
    const fecha = document.getElementById("fecha").value;
    const cantidad = document.getElementById("cantidad").value;
  
    if (nombre.trim() === "" || cedula.trim() === "" || fecha.trim() === ""  || cantidad.trim() === "") {
      alert("Completa Todos Los Campos Antes de Realiazar La Reserva");
      return false; // La validación falla si algún campo está vacío
    } else {
      alert("Reserva Realizado Con Exito");
      window.location.href = "index.html";
      return true; // La validación es exitosa si todos los campos están completos
    }
  }
  