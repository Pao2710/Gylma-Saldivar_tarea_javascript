/**
 * Ejercicio 2
 * En un cierto país el impuesto que se debe pagar por artículos importados se 
 * calcula mediante las siguientes reglas:
 * 
 * $0.00 - $20.00 No genera impuesto
 * $20.01 - $40.00  30%
 * $40.01 - $500.00 40%
 * $500.01 en adelante  50%
 */


function impuestos(valor) {
    if (valor >= 0 && valor <= 20) {
        console.log("Usted no genera impuesto");
    } else {
        if (valor >= 20.01 && valor <= 40.00) {
            console.log("Usted genera un impuesto del 30%");
        } else {
            if (valor >= 40.01 && valor <= 500.00) {
                console.log("Usted genera un impuesto del 40%");
            } else {
                if (valor >= 500.01) {
                    console.log("Usted genera un impuesto del 50%");
                }
            }
        }
    }
}
impuestos(520);