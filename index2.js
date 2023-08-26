function cuadrado(numero) {
    return numero * numero;
}

const numero1 = parseFloat(prompt('Introduce el primer número:'));
const numero2 = parseFloat(prompt('Introduce el segundo número:'));


console.log(`El cuadrado de ${numero1} es: ${cuadrado(numero1)}`);
console.log(`El cuadrado de ${numero2} es: ${cuadrado(numero2)}`);

