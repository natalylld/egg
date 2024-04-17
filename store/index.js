/*let totalApagar = 0;
const cantidad = Number(prompt("¿Cuántos productos desea llevar?"));

for (let index = 1; index <= cantidad; index++) {
  const nombre = prompt("¿Qué producto desea llevar?");
  const cantidad = Number(prompt("¿Cuántas unidades?"));
  const precio = Number(prompt("¿Cuánto sale cada unidad?"));
  let subtotal = cantidad * precio;
  totalApagar = totalApagar + subtotal;
}

alert("El total a pagar es: " + totalApagar);
*/
const comprar = () => {
  let totalApagar = 0;
  for (let index = 1; index <= 3; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    let subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
  }
  console.log(totalApagar);
  return totalApagar;
};

const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;

//const totall = comprar() + comprar() + comprar();
