let precio = 400000;
let cantidad = 0;
const precioSpan = document.querySelector(".precio-inicial"); // Muestra el precio base
const cantidadSpan = document.querySelector(".cantidad"); // Muestra la cantidad seleccionada
const totalSpan = document.querySelector(".valor-total"); // Muestra el total a pagar
precioSpan.innerHTML = precio;
function actualizarTotal() {
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = cantidad * precio;
}
function incrementar() {
    cantidad++;
    actualizarTotal();
}
function decrementar() {
    if (cantidad > 0) { // Evita valores negativos
        cantidad--;
        actualizarTotal();
    }
}
