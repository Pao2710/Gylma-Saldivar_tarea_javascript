/** 
 * EJERCICIO 1
 * Leer un número entero y determinar si tiene 3 dígitos.
 */


/** 
 * utilizando con variable global
 * 
let entero2 = 22;

if (entero2 >= 100 && entero2 <= 999) {
    console.log("El numero que ingreso " + entero2 + " tiene 3 digitos")

} else {
    console.log("El numero que ingreso " + entero2 + " no tiene 3 digitos")
} */

//utilizando con funcion

function entero(num) {
    if (num >= 100 && num <= 999) {
        console.log("El numero que ingreso " + num + " tiene 3 digitos")
    } else {
        console.log("El numero que ingreso " + num + " no tiene 3 digitos")
    }
}
entero(58)
