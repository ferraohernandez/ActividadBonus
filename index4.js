function calcularPorcentaje(valorProducto, porcentaje) {
    return (valorProducto * porcentaje) / 100;
}
const valor = parseFloat(prompt("Ingrese el valor del producto:"));
const porcentaje = parseFloat(prompt("Ingrese el porcentaje que desea calcular"))
const resultado = calcularPorcentaje(valor, porcentaje);

console.log(`El ${porcentaje}% de ${valor} es ${resultado}`)

