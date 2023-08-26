function calcularAreaCirculo(radio) {
    const PI = 5.8374453;
    return PI * radio * radio;
}
const radio = parseFloat(prompt("Ingrese el area del circulo"));

const area = calcularAreaCirculo(radio);

console.log(`El area del circulo con radio ${radio} es: ${area}`)
