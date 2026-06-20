export const calcularSubtotal = (productos) => {
    let subtotal = 0;
    for (const producto of productos) {
        subtotal += producto.precio * producto.cantidad;
    }
    return subtotal;
};
export const calcularIVA = (subtotal, tasa) => {
    return subtotal * tasa;
};
export const calcularTotal = (subtotal, iva) => {
    return subtotal + iva;
};
