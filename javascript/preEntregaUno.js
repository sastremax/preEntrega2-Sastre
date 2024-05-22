// simulador de presupuesto de un consultorio medico y luego fichas medicas para ingreso de datos con ARRAYS para las terapeutas//

// variables declaradas e inicializadas //

let mes = "";
let ingresos = 0;
let egresos = 0;
let respuesta = "";

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

function ingresarGastosProductos(cantidadGastosProductos) {
    let totalGastosProductos = 0;
    let cantidadProductos = parseInt(prompt(`Ingrese la cantidad de productos comprados en el mes de ${mes}:`));
    for (let i = 0; i < cantidadProductos; i++) {
        let gasto = parseInt(prompt("Ingrese el monto del gasto individual del producto: ${i} en el mes de ${mes}:"));
        while (isNaN(gasto) || gasto < 0) {
            console.log("El monto ingresado no es válido.");
            gasto = parseInt(prompt("Ingrese el gasto del producto ${i} en el mes de ${mes}:"));
        }
        totalGastosProductos += gasto;
    }
    return totalGastosProductos;
}

// funcion para ingresar gastos de forma individual por servicio de empleado //

function ingresarGastosServicios(cantidadGastoServicios) {
    let totalGastos = 0;
    for (let i = 0; i < cantidadGastoServicios; i++) {
        let gasto = parseFloat(prompt("Ingrese el monto del gasto por servicio de empleado:"));
        while (isNaN(gasto) || gasto < 0) {
            console.log("El monto ingresado no es válido.");
            gasto = parseFloat(prompt("Ingrese el monto del gasto por servicio de empleado:"));
        }
        totalGastos += gasto;
    }
    return totalGastos;
}

// funcion para validar los ingresos y los egresos de las terapeutas //
function validarIngresosEgresos(mes) {
    let ingresos = parseInt(prompt("Ingrese el monto de los ingresos en el mes de " + mes + ":"));
    let egresos = parseInt(prompt("Ingrese el monto de los egresos en el mes de " + mes + ":"));
    while (isNaN(ingresos) || isNaN(egresos) || ingresos < 0 || egresos < 0) {
        if (isNaN(ingresos) || isNaN(egresos)) {
            console.log("El monto ingresado no es un número válido.");
        } else {
            console.log("El monto ingresado no es válido (debe ser un número positivo).");
        }
        ingresos = parseInt(prompt("Ingrese el monto de los ingresos en el mes de " + mes + ":"));
        egresos = parseInt(prompt("Ingrese el monto de los egresos en el mes de " + mes + ":"));
    }
    return { ingresos, egresos };
}
// ordenando las funciones //

let mes = validarMes();
let totalGastosProductos = ingresarGastoProducto(mes);
let totalGastosServicios = totalGastosServicios(mes);
let resultado = validarIngresosEgresos(mes, totalGastosProductos, totalGastosServicios);


// funcion para saber el saldo //

function calcularSaldo(ingresos, egresos, mes) {
    if (ingresos > egresos) {
    console.log("El saldo en el mes de " + mes + " es positivo");
    } else {
    console.log("El saldo en el mes de " + mes + " es negativo");
    }
}


// saldo  //

mes = validarMes();
let resultado = validarIngresosEgresos(mes);
ingresos = resultado.ingresos;
egresos = resultado.egresos;
calcularSaldo(ingresos, egresos, mes);


// suma de saldos //

do {
    respuesta = prompt("¿Desea seguir ingresando saldos? (si/no)").toLowerCase();
    if (respuesta === "si") {
        mes = validarMes();
        resultado = validarIngresosEgresos(mes);
        ingresos = resultado.ingresos;
        egresos = resultado.egresos;
        calcularSaldo(ingresos, egresos, mes);
    }
} while (respuesta == "si" || respuesta == "s" || respuesta == "SI");