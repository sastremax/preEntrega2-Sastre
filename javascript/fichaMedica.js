// simulador de presupuesto de un consultorio medico y luego fichas medicas para ingreso de datos con ARRAYS para las/los terapeutas//

// Fichas medicas  //

let ficha = [];
let idProgresivo = 1;

let agregarFichaBoton = document.getElementById("agregarFichaBoton");
let contenedorFormulario = document.getElementById("formularioAgregarFicha");

agregarFichaBoton.addEventListener("click", function() {
    agregarFichas();
    });

// funcion para agregar fichas de pacientes
function agregarFichas() {
    let apellido = prompt("Ingrese el apellido del paciente: "); 
    let nombre = prompt("Ingrese el nombre del paciente: ");    
    let diagnostico = prompt("Ingrese el diagnostico del paciente: ");
    let fechaNacimiento = prompt("Ingrese la fecha de nacimiento del paciente: (DD-MM-YYYY): ");
    function calculoEdad(fechaNacimiento) {
        const FECHAACTUAL = new Date();
        const FECHANACIMIENTO = new Date(fechaNacimiento);
        let edad = FECHAACTUAL.getFullYear() - FECHANACIMIENTO.getFullYear();
        const MES = FECHAACTUAL.getMonth() - FECHANACIMIENTO.getMonth();
        if (MES < 0 || (MES === 0 && FECHAACTUAL.getDate() < FECHANACIMIENTO.getDate())) {
            edad--;
        }
        return edad;
    }
    let edad = calculoEdad(fechaNacimiento);
    let dni = parseInt(prompt("Ingrese el DNI del paciente (sin puntos): "));
    let cud = (prompt("El paciente tiene CUD? (si/no)").toLowerCase() === "si");
    let obraSocial = prompt("Ingrese la obra social del paciente: ");
    let titularObraSocial = prompt("Ingrese el nombre del titular de la obra social del paciente: ");
    let numeroAfiliado = (prompt("Ingrese el número de afiliado del paciente: "));
    let escuela = prompt("Ingrese el nombre de la escuela del paciente: ");
    let mama = prompt("Ingrese el apellido y nombre de la madre del paciente: ");
    let celularMama = prompt("Ingrese el numero de celular de la madre del paciente: (si no lo sabe, escriba 'no lo se')");
    let papa = prompt("Ingrese el apellido y nombre del padre del paciente: ");    
    let celularPapa = prompt("Ingrese el numero de celular del padre del paciente: (si no lo sabe, escriba 'no lo se')");
    let neurologo = prompt("Ingrese el nombre del neurologo del paciente: (si no lo sabe, escriba 'no lo se')");
    let pediatra = prompt("Ingrese el nombre del pediatra del paciente: (si no lo sabe, escriba 'no lo se')");
    let domicilio = prompt("Ingrese el domicilio del paciente: (si no lo sabe, escriba 'no lo se')");
    let recomendacion = prompt("Ingrese Quien les recomendo nuestro consultorio: (si no lo sabe, escriba 'no lo se')");

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