// simulador de presupuesto de un consultorio medico //

// variables declaradas e inicializadas //

let mes = "";
let ingresos = 0;
let egresos = 0;

// condicional para validar el mes ingresado //

mes = prompt("Ingrese el mes a calcular: ").toLowerCase();
while (mes !== "enero" && mes !== "febrero" && mes !== "marzo" && mes !== "abril" && mes !== "mayo" && mes !== "junio" &&
    mes !== "julio" && mes !== "agosto" && mes !== "septiembre" && mes !== "octubre" && mes !== "noviembre" && mes !== "diciembre") {
    console.log("El mes ingresado no es válido.");
    mes = prompt("Ingrese otra vez el mes: ").toLowerCase();
}


// Ingreso por parte del usuario de los ingresos y egresos //
ingresos = parseInt(prompt("Ingrese el monto de los ingresos en el mes de " + mes + ":"));
egresos = parseInt(prompt("Ingrese el monto de los egresos en el mes de " + mes + ":"));


// condicional para validar los ingresos y egresos //
while (isNaN(ingresos) || isNaN(egresos) || ingresos < 0 || egresos < 0) {
    if (isNaN(ingresos) || isNaN(egresos)) {
        console.log("El monto ingresado no es un número válido.");
    } else {
        console.log("El monto ingresado no es válido (debe ser un número positivo).");
    }
    ingresos = parseInt(prompt("Ingrese el monto de los ingresos en el mes de " + mes + ":"));
    egresos = parseInt(prompt("Ingrese el monto de los egresos en el mes de " + mes + ":"));
}

// funcion para determinar el saldo //

function saldo(ingresos, egresos, mes) {
    if (ingresos > egresos) {
    console.log("El saldo en el mes de " + mes + " es positivo");
    } else {
    console.log("El saldo en el mes de " + mes + " es negativo");
    }
}


// llamada a la funcion saldo //

saldo(ingresos, egresos);


// suma de saldos //

