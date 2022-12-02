class Casa {
  constructor() {

  }
  techo = 1;
  puertas = 2;
  agregarPuertas(num) {
    this.puertas += num;
  }
}

const miCasa = new Casa();

console.log('Numero de puertas de mi casa: ' + miCasa.puertas);
miCasa.agregarPuertas(4);
console.log('Numero de puertas de mi casa luego de la refaccion: ' + miCasa.puertas);
 