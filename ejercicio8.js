/**
 * EJERCICIO 8
 * Elabore un algoritmo con un menú simple con las cuatro operaciones básicas: sumar, restar, multiplicar, dividir.
 */


function operacion(num1, num2) {
    var num1, num2, total;
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let dividir = num1 / num2;

    console.log("Su Suma total es: " + suma)
    console.log("Su Resta total es: " + resta)
    console.log("Su Multiplicacion total es: " + multiplicacion)
    console.log("Su Dividir total es: " + dividir)

}
operacion(10, 2);