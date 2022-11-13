/**
 *ejercicio 6
 *Elaborar un algoritmo para leer las notas de 1 estudiantes.
Calcular el promedio de cada estudiante de la siguiente manera:
Nota 1 (20%)
Nota 2 (30%)
Nota 3 (50%)
 */

function notas(nota1, nota2, nota3) {
    var promedio1 = (nota1 * 0.20);
    var promedio2 = (nota2 * 0.30);
    var promedio3 = (nota3 * 0.50);
    var total = promedio1 + promedio2 + promedio3;

    console.log(`El promedio de sus notas es: ${total}`);
}
notas(85, 97, 78);