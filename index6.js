function calcularPorcentaje(hombres, mujeres) {
    let totalEstudiantes = hombres + mujeres;

    let porcentajeHombres = (hombres / totalEstudiantes) * 100;
    let porcentajeMujeres = (mujeres / totalEstudiantes) * 100;

    console.log(`El porcentaje de hombres es: ${porcentajeHombres.toFixed(2)}%`);
    console.log(`El porcentaje de mujeres es: ${porcentajeMujeres.toFixed(2)}%`);
}

let numeroHombres = parseInt(prompt("Ingrese el número de hombres en el grupo: "));
let numeroMujeres = parseInt(prompt("Ingrese el número de mujeres en el grupo: "));

calcularPorcentaje(numeroHombres, numeroMujeres);

