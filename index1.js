function validarSuma(a, b) {
    const suma = a + b;

    if (suma > 0){
        return "La suma es positiva";
    }
    else if (suma < 0){
        return "La suma es negativa";
    }
    else {
        return "La suma es 0"
    }
}
const num1 = parseFloat(prompt("Ingrese el primer número"))
const num2 = parseFloat(prompt("Ingrese el segundo número"));

console.log(validarSuma(num1, num2));





