// simulador de presupuesto de un consultorio medico //

// Ingresos y Egresos //

let mes = prompt("Ingrese el mes: ");
let ingresos = parseInt(prompt("Ingrese el monto de los ingresos en el mes de " + mes + ":"));
let egresos = parseInt(prompt("Ingrese el monto de los egresos: "));

// switch para determinar el mes //



// funcion para determinar el saldo //

function saldo(ingresos, egresos) {
    if (ingresos > egresos) {
    console.log("El saldo es positivo");
    } else {
    console.log("El saldo es negativo");
    }
}
