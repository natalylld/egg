let totalApagar = 0;
const cantidad = Number(prompt("¿Cuántos productos desea llevar?"));

for (let index = 1; index <= cantidad; index++) {
  const nombre = prompt("¿Qué producto desea llevar?");
  const cantidad = Number(prompt("¿Cuántas unidades?"));
  const precio = Number(prompt("¿Cuánto sale cada unidad?"));
  let subtotal = cantidad * precio;
  totalApagar = totalApagar + subtotal;
}

alert("El total a pagar es: "+ totalApagar);