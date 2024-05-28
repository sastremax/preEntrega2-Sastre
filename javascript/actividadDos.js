// simulador de presupuesto de un consultorio medico y luego fichas medicas para ingreso de datos con ARRAYS para las/los terapeutas//

// Fichas medicas  //

let ficha = [];
let idProgresivo = 1;
function agregarFichas() {    
    let apellido = prompt("Ingrese el apellido del paciente: ");
    let nombre = prompt("Ingrese el nombre del paciente: ");
    let edad = parseInt(prompt("Ingrese la edad del paciente: "));
    let diagnostico = prompt("Ingrese el diagnostico del paciente: ");
    let fechaNacimiento = prompt("Ingrese la fecha de nacimiento del paciente: (DD-MM-YYYY)");
    let dni = parseInt(prompt("Ingrese el DNI del paciente: "));
    let cud = (prompt("El paciente tiene CUD? (si/no)").toLowerCase() === "si");
    let obraSocial = prompt("Ingrese la obra social del paciente: ");
    let titularObraSocial = prompt("Ingrese el nombre del titular de la obra social del paciente: ");
    let numeroAfiliado = parseInt(prompt("Ingrese el número de afiliado del paciente: "));
    let escuela = prompt("Ingrese el nombre de la escuela del paciente: ");
    let mama = prompt("Ingrese el nombre de la madre del paciente: ");
    let papa = prompt("Ingrese el nombre del padre del paciente: ");
    let celularMama = parseInt(prompt("Ingrese el numero de celular de la madre del paciente: "));
    let celularPapa = parseInt(prompt("Ingrese el numero de celular del padre del paciente: "));
    let neurologo = prompt("Ingrese el nombre del neurologo del paciente: (si no lo sabe, escriba 'no lo se')");
    let pediatra = prompt("Ingrese el nombre del pediatra del paciente: (si no lo sabe, escriba 'no lo se')");
    let domicilio = prompt("Ingrese el domicilio del paciente: ");
    let recomendacion = prompt("Ingrese Quien les recomendo nuestro consultorio: ");

    let fichaObjeto = {
        apellido: apellido,
        nombre: nombre,
        edad: edad,
        diagnostico: diagnostico,
        fechaNacimiento: fechaNacimiento,
        dni: dni,
        cud: cud,
        obraSocial: obraSocial,
        titularObraSocial: titularObraSocial,
        numeroAfiliado: numeroAfiliado,
        escuela: escuela,
        mama: mama,
        papa: papa,
        celularMama: celularMama,
        celularPapa: celularPapa,
        neurologo: neurologo,
        pediatra: pediatra,
        domicilio: domicilio,
        recomendacion: recomendacion
    };
    ficha.push(fichaObjeto); 

/*
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
    let mensaje = `El saldo en el mes de ${mes} del año ${año} es ${saldo} `;
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

*/