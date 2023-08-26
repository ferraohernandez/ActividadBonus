function mayorDeTres(n1, n2, n3) {
    if(n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n1 && n2 > n3) {
        return n2;
    } else {
        return n3;
    }
}
let n1 = parseFloat(prompt("Ingrese primer número"));
let n2 = parseFloat(prompt("Ingrese segundo número"));
let n3 = parseFloat(prompt("Ingrese tercer número"));

let mayor = mayorDeTres(n1, n2, n3);
console.log(`El mayor de los tres números ingresados es: ${mayor}`)




