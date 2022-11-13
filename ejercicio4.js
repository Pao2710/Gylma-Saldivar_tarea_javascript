/**
 * Ejercicio 4
 * Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número 
 * ingresado por el usuario.
 */

function ingresar(numero) {
    let total;

    for (let i = 1; i <= 12; i++) {
        total = numero * i;
        console.log(numero + " x " + i + " = " + total);
    }
}
ingresar(5);