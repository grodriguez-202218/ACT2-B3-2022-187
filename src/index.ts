import { carrito, TASA_IVA } from "./data/data.js";
import { calcularSubtotal, calcularIVA, calcularTotal } from "./service/calculo.js";

const subtotal = calcularSubtotal(carrito);
const iva = calcularIVA(subtotal, TASA_IVA);
const total = calcularTotal(subtotal, iva);

console.log("Detalle de la compra:");
carrito.forEach((producto) => {
  console.log(`- ${producto.nombre}: ${producto.cantidad} x Q${producto.precio} = Q${producto.precio * producto.cantidad}`);
});

console.log(`Subtotal: Q${subtotal}`);
console.log(`IVA (12%): Q${iva}`);
console.log(`Total: Q${total}`);
