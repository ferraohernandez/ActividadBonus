function obtenerMesYSigno(numero) {
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const signosZodiaco = [
        "capricornio - acuario", "acuario - piscis", "piscis - aries", "aries - tauro", 
        "tauro - géminis", "géminis - cáncer", "cáncer - leo", "leo - virgo", 
        "virgo - libra", "libra - escorpio", "escorpio - sagitario", "sagitario - capricornio"
    ];

    if (numero >= 1 && numero <= 12) {
        return `${meses[numero - 1]}, ${signosZodiaco[numero - 1]}`;
    } else {
        return 'Número inválido.';
    }
}

const numero = parseInt(prompt("Ingrese un número entre 1 y 12:"));

console.log(obtenerMesYSigno(numero));


