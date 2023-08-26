function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

let peso = parseFloat(prompt("Ingrese su peso"));
let altura = parseFloat(prompt("Ingrase su altura"));

let imc = calcularIMC(peso, altura);

console.log(`Tu indice se masa corporal es: ${imc.toFixed(2)}`);
