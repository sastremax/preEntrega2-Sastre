// simulador de presupuesto de un consultorio medico y luego fichas medicas para ingreso de datos con ARRAYS para las/los terapeutas//

// variables declaradas y algunas inicializadas //

let mes = "";
let año = "";
let ingresos = 0;
let egresos = 0;
let respuesta = "";
let totalGastosProductos;
let totalGastosServicios;
let resultado;
let historial = "";


// funcion para validar el año ingresado //

function validarAño() {
    año = prompt("Ingrese el año a calcular: ");
    while (año < 2020 || isNaN(año) || año.toString() !== año) {
    console.log("El año ingresado no es válido.");
    año = prompt("Ingrese el año a calcular: ");    
    }
    return año;
}

// funciojn para validar el mes ingresado //

function validarMes() {
    mes = prompt("Ingrese el mes a calcular: ").toLowerCase();
    while (mes !== "enero" && mes !== "febrero" && mes !== "marzo" && mes !== "abril" && mes !== "mayo" && mes !== "junio" &&
    mes !== "julio" && mes !== "agosto" && mes !== "septiembre" && mes !== "octubre" && mes !== "noviembre" && mes !== "diciembre") {
    console.log("El mes ingresado no es válido.");
    mes = prompt("Ingrese el mes a calcular: ").toLowerCase();    
    }
    return mes;
}

// funcion para ingresar gastos de forma individual por cada producto //

function ingresarGastosProductos() {
    let totalGastosProductos = 0;
    let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos comprados en el mes de " + mes));
    for (let i = 1; i < cantidadProductos + 1; i++) {
        let gasto = parseInt(prompt("Ingrese el monto del gasto individual del producto: " + i + " en el mes de " + mes));
        while (isNaN(gasto) || gasto < 0) {
            console.log("El monto ingresado no es válido.");
            gasto = parseInt(prompt("Ingrese el gasto del producto " + i + " en el mes de " + mes));
        }
        totalGastosProductos += gasto;
    }
    return totalGastosProductos;
}

// funcion para ingresar gastos de forma individual por servicios de empleados //

function ingresarGastosServicios(gastosServicios) {
    let totalGastosServicios = 0;
    let cantidadEmpleados = parseInt(prompt("Ingrese la cantidad de empleados:"));
    for (let i = 0; i < cantidadEmpleados; i++) {
        let gasto = parseInt(prompt("Ingrese el sueldo para el empleado " + (i + 1) + ":"));
        while (isNaN(gasto) || gasto < 0) {
            console.log("El monto ingresado no es válido.");
            gasto = parseInt(prompt("Ingrese el sueldo para el empleado " + (i + 1) + ":"));
        }
        totalGastosServicios += gasto;
    }
    return totalGastosServicios;
}

// funcion para registrar las ganancias de forma mensual //

function ingresarGanancias(mes, año) {
    let ganancias = parseInt(prompt("Ingrese las ganancias del mes de " + mes + " del año " + año));
    while (isNaN(ganancias) || ganancias < 0) {
        console.log("El monto ingresado no es válido.");
        ganancias = parseInt(prompt("Ingrese las ganancias del mes de " + mes + " del año " + año));
    }
    return ganancias;
}

// Función para calcular el saldo
function calcularSaldo(ingresos, egresos, mes, año) {
    let saldo = ingresos - egresos;
    let mensaje = "El saldo en el mes de " + mes + " del año " + año + " es ";
    if (saldo >= 0) {
        mensaje += "positivo";
    } else {
        mensaje += "negativo";
    }
    mensaje += ". Ingresos: " + ingresos + ", Egresos: " + egresos + ", Saldo: " + saldo + ".";    
    historial += mensaje + "\n";
}

//  funcion para gestionar el presupuesto //

function gestionarPresupuesto() {
    año = validarAño();
    mes = validarMes();
    totalGastosProductos = ingresarGastosProductos();
    totalGastosServicios = ingresarGastosServicios();
    ingresos = ingresarGanancias(mes, año);
    egresos = totalGastosProductos + totalGastosServicios;
    calcularSaldo(ingresos, egresos, mes, año);    
    do {
        respuesta = prompt("¿Desea seguir ingresando saldos? (si/no)").toLowerCase();
        if (respuesta === "si" || respuesta === "s") {
            año = validarAño();
            mes = validarMes();
            totalGastosProductos = ingresarGastosProductos();
            totalGastosServicios = ingresarGastosServicios();
            ingresos = ingresarGanancias(mes, año);
            egresos = totalGastosProductos + totalGastosServicios;
            calcularSaldo(ingresos, egresos, mes, año);
        }
    } while (respuesta === "si" || respuesta === "s");
}

gestionarPresupuesto();

console.log("Historial de saldos:\n" + historial);