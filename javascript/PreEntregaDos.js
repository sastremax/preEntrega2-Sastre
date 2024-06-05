// simulador de presupuesto de un consultorio medico y luego fichas medicas para ingreso de datos con ARRAYS para las/los terapeutas//

// Fichas medicas  //

let ficha = [];
let idProgresivo = 1;
function agregarFichas() {    
    let apellido = prompt("Ingrese el apellido del paciente: ");
    let nombre = prompt("Ingrese el nombre del paciente: ");
    let edad = parseInt(prompt("Ingrese la edad del paciente (solo el número): "));
    let diagnostico = prompt("Ingrese el diagnostico del paciente: ");
    let fechaNacimiento = prompt("Ingrese la fecha de nacimiento del paciente: (DD-MM-YYYY): ");
    let dni = parseInt(prompt("Ingrese el DNI del paciente: "));
    let cud = (prompt("El paciente tiene CUD? (si/no)").toLowerCase() === "si");
    let obraSocial = prompt("Ingrese la obra social del paciente: ");
    let titularObraSocial = prompt("Ingrese el nombre del titular de la obra social del paciente: ");
    let numeroAfiliado = (prompt("Ingrese el número de afiliado del paciente: "));
    let escuela = prompt("Ingrese el nombre de la escuela del paciente: ");
    let mama = prompt("Ingrese el nombre de la madre del paciente: ");
    let papa = prompt("Ingrese el nombre del padre del paciente: ");
    let celularMama = parseInt(prompt("Ingrese el numero de celular de la madre del paciente (solo números): "));
    let celularPapa = parseInt(prompt("Ingrese el numero de celular del padre del paciente (solo números): "));
    let neurologo = prompt("Ingrese el nombre del neurologo del paciente: (si no lo sabe, escriba 'no lo se')");
    let pediatra = prompt("Ingrese el nombre del pediatra del paciente: (si no lo sabe, escriba 'no lo se')");
    let domicilio = prompt("Ingrese el domicilio del paciente: ");
    let recomendacion = prompt("Ingrese Quien les recomendo nuestro consultorio: ");

    const FICHAPACIENTE = {
        id: idProgresivo,
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
    ficha.push(FICHAPACIENTE); 
    idProgresivo++;   
}

let respuestaFicha = prompt("Desea agregar una ficha de paciente nueva? (si/no)").toLowerCase();
while ((respuestaFicha === "si") || (respuestaFicha === "s")) {
    agregarFichas();
    respuestaFicha = prompt("¿Desea agregar otra ficha de paciente nueva? (si/no)").toLowerCase();
}

console.log(ficha);