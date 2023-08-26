function diaDeLaSemana(numero) {
    switch (numero) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número no válido. Introduce un número entre 1 y 7.";
    }
}
let numeroDia = parseInt(prompt("Introduce un número del 1 al 7:"));
let dia = diaDeLaSemana(numeroDia);

console.log(`El número ${numeroDia} corresponde al día: ${dia}`);
