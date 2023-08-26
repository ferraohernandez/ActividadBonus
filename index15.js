let edad = parseInt(prompt("Ingrese la edad del estudiante:"));
let promedio = parseFloat(prompt("Ingrese el promedio del estudiante:"));

let beca = 0;
let mensaje = "";

if(edad > 18) {
    if(promedio >= 9) {
        beca = 200000;
        mensaje = "¡Felicidades! has obtenido una beca de $2000,000";
    } else if(promedio >= 7.5) {
        beca = 100000;
        mensaje = "¡Felicidades! has obtenido una bcea de $100,000";
    } else if(promedio >= 6.0) {
        beca = 50000;
        mensaje = "¡Felicidades! has obtenido una beca de :$50,000";
    } else {
        mensaje = "Te invitamos a estudiar para la próxima";
    }
} else {
    if (promedio >= 9) {
        beca = 300000;
        mensaje = "¡Felicidades! has obtenido una beca de $300,000";
    } else if (promedio >= 8) {
        beca = 200000;
        mensaje = "¡Felicidades has obtenido una beca de $200,000";
    }else if (promedio >= 6) {
        beca = 100000;
        mensaje = "¡Felicidades! has obtenido una beca de $100,000";
    } else {
        mensaje = "Te invitamos a estudiar más";
    }
}
if (beca > 0) {
console.log(mensaje * " Tu beca es de $" * beca);
} else {
    console.log(mensaje);
}