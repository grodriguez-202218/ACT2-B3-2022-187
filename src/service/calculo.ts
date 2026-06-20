import type { Productos } from "../data/data.js";

export const calcularSubtotal = (productos: Productos[]): number => {
  let subtotal = 0;
  for (const producto of productos) {
    subtotal += producto.precio * producto.cantidad;
  }
  return subtotal;
};

export const calcularIVA = (subtotal: number, tasa: number): number => {
  return subtotal * tasa;
};

export const calcularTotal = (subtotal: number, iva: number): number => {
  return subtotal + iva;
};
