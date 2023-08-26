function determinarDiasDelMes(numeroMes) {
    let dias;
  
    switch (numeroMes) {
      case 1:  // Enero
      case 3:  // Marzo
      case 5:  // Mayo
      case 7:  // Julio
      case 8:  // Agosto
      case 10: // Octubre
      case 12: // Diciembre
        dias = 31;
        break;
      case 4:  // Abril
      case 6:  // Junio
      case 9:  // Septiembre
      case 11: // Noviembre
        dias = 30;
        break;
      default:
        return "Número de mes no válido. Introduce un número del 1 al 12.";
    }
  
    return `El mes ${numeroMes} tiene ${dias} días.`;
  }
  
  let numeroMes = parseInt(prompt("Introduce el número del mes (1 al 12):"));
  console.log(determinarDiasDelMes(numeroMes));
  




