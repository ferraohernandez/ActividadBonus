function calcularDescuento(producto) {
    switch (producto.toLowerCase()) {
      case 'carro':
      case 'moto':
        return 15;
      case 'bicicleta':
      case 'patineta':
        return 10;
      case 'scooter eléctrico':
        return 5;
      default:
        return 0;
    }
  }
  
  let producto = prompt("Introduce el producto que compraste (carro, moto, bicicleta, patineta, scooter eléctrico):");
  
  let descuento = calcularDescuento(producto);
  
  console.log(`Tu descuento es del ${descuento}%.`);
  