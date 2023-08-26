function esPar(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let numero = parseInt(prompt("Ingrese un número: "));

if (esPar(numero)) {
    console.log(`El número ${numero} es par.`);
} else {
    console.log(`El número ${numero} es impar.`);
}
