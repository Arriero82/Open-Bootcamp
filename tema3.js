const sumar = function (param1, param2, param3) {
  return param1 + param2 + param3;
};

console.log(sumar(1, 2, 3));

class Coches {
  puertas = 4;
  constructor() {}

  sumar() {
    this.puertas++;
  }
}

let miCoche = new Coches();

miCoche.sumar();

console.log(miCoche.puertas);
