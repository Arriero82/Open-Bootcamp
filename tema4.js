const test = 5;

function determinarNumero(numero) {
  if (numero > 0) {
    return "Este número es positivo";
  } else if (numero == 0) {
    return "Este numero es cero";
  } else {
    return "Este numero es negativo";
  }
}
console.log(determinarNumero(test));

let numeroWhile = 0;
while (numeroWhile < 3) {
  console.log("Ejecucion de estructura while, numero: " + numeroWhile);
  numeroWhile++;
}

do {
  console.log("Ejecucion de estructura do while, numero: " + numeroWhile);
} while (numeroWhile < 0);

//const estacion = "";
const estacion = "Primavera"

switch (estacion) {
  case "Verano":
    console.log("Estamos en verano");
    break;

  case "Otoño":
    console.log("Estamos en otoño");
    break;

  case "Invierno":
    console.log("Estamos en invierno");
    break;

  case "Primavera":
    console.log("Estamos en primavera");
    break;
  default:
    console.log(
      "No se ha ingresado una estación valida o no tiene mayúsculas en la primer letra"
    );
    break;
}
