/**
 * EJERCIO 3
 * El costo de las llamadas telefónicas internacionales depende de la zona geográfica en la que se encuentre el país destino y del número de minutos hablados. En la siguiente tabla se presenta el costo del minuto por zona. A cada zona se le ha asociado una clave.
Nota: Para llamadas con duración menor a 30 minutos se hace descuento del 10%.

 */



function costosLlamadas(clave, tiempoMin) {
    let tiempollama, costoMin, descuento;

    switch (clave) {
        case 12:
            costoMin = 2.00;
            tiempollama = tiempoMin * costoMin;
            descuento = tiempollama - (tiempollama * 0.10);

            tiempoMin <= 30 ? console.log("Se le aplicara un descuento de: " + descuento) : console.log("Su costo de la llamada es: " + tiempollama)
            break;

        case 15:
            costoMin = 2.20;
            tiempollama = tiempoMin * costoMin;
            descuento = tiempollama - (tiempollama * 0.10);

            tiempoMin <= 30 ? console.log("Se le aplicara un descuento de: " + descuento) : console.log("Su costo de la llamada es: " + tiempollama)
            break;

        case 18:
            costoMin = 4.50;
            tiempollama = tiempoMin * costoMin;
            descuento = tiempollama - (tiempollama * 0.10);

            tiempoMin <= 30 ? console.log("Se le aplicara un descuento de: " + descuento) : console.log("Su costo de la llamada es: " + tiempollama)
            break

        case 19:
            costoMin = 3.50;
            tiempollama = tiempoMin * costoMin;
            descuento = tiempollama - (tiempollama * 0.10);

            tiempoMin <= 30 ? console.log("Se le aplicara un descuento de: " + descuento) : console.log("Su costo de la llamada es: " + tiempollama)
            break

        case 23:
            costoMin = 6.00;
            tiempollama = tiempoMin * costoMin;
            descuento = tiempollama - (tiempollama * 0.10);

            tiempoMin <= 30 ? console.log("Se le aplicara un descuento de: " + descuento) : console.log("Su costo de la llamada es: " + tiempollama)
            break

        case 25:
            costoMin = 6.00;
            tiempollama = tiempoMin * costoMin;
            descuento = tiempollama - (tiempollama * 0.10);

            tiempoMin <= 30 ? console.log("Se le aplicara un descuento de: " + descuento) : console.log("Su costo de la llamada es: " + tiempollama)
            break

        case 29:
            costoMin = 5.00;
            tiempollama = tiempoMin * costoMin;
            descuento = tiempollama - (tiempollama * 0.10);

            tiempoMin <= 30 ? console.log("Se le aplicara un descuento de: " + descuento) : consolelog("Su costo de la llamada es: " + tiempollama)
            break

        default:
            console.log("La clave que usted ingreso es invalida, intente nuevamente");
            break
    }

}
costosLlamadas(25, 100)