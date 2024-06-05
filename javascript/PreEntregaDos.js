// simulador de presupuesto de un consultorio medico y luego fichas medicas para ingreso de datos con ARRAYS para las/los terapeutas//

// Fichas medicas  //

let ficha = [];
let idProgresivo = 1;

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
    let dni = parseInt(prompt("Ingrese el DNI del paciente: "));
    let cud = (prompt("El paciente tiene CUD? (si/no)").toLowerCase() === "si");
    let obraSocial = prompt("Ingrese la obra social del paciente: ");
    let titularObraSocial = prompt("Ingrese el nombre del titular de la obra social del paciente: ");
    let numeroAfiliado = (prompt("Ingrese el número de afiliado del paciente: "));
    let escuela = prompt("Ingrese el nombre de la escuela del paciente: ");
    let mama = prompt("Ingrese el nombre de la madre del paciente: ");
    let celularMama = parseInt(prompt("Ingrese el numero de celular de la madre del paciente (solo números): "));
    let papa = prompt("Ingrese el nombre del padre del paciente: ");    
    let celularPapa = parseInt(prompt("Ingrese el numero de celular del padre del paciente (solo números - si no lo sabe no escriba nada y acepte): "));
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

// busqueda de paciente por apellido
function mostrarFichaPorApellido() {
    let apellido = prompt("Ingrese el apellido del paciente:").toLowerCase();
    let paciente = ficha.find(paciente => paciente.apellido.toLowerCase === apellido);

    if(paciente>0) {
        console.log(`Ficha del paciente:
            ID: ${paciente.id}
            APELLIDO: ${paciente.apellido}
            NOMBRE: ${paciente.nombre}
            EDAD: ${paciente.edad}
            DIAGNOSTICO: ${paciente.diagnostico}
            FECHA DE NACIMIENTO: ${paciente.fechaNacimiento}
            DNI: ${paciente.dni}
            CUD: ${paciente.cud}
            OBRA SOCIAL: ${paciente.obraSocial}
            TITULAR DE LA OBRA SOCIAL: ${paciente.titularObraSocial}
            NUMERO DE AFILIADO: ${paciente.numeroAfiliado}
            NOMBRE DE LA ESCUELA: ${paciente.escuela}
            NOMBRE DE LA MAMA: ${paciente.mama}
            NOMBRE DEL PAPA: ${paciente.papa}
            CELULAR DE LA MAMA: ${paciente.celularMama}
            CELULAR DEL PAPA: ${paciente.celularPapa}
            NOMBRE DEL NEUROLOGO: ${paciente.neurologo}
            NOMBRE DEL PEDIATRA: ${paciente.pediatra}
            DOMICILIO: ${paciente.domicilio}
            PERSONA QUE RECOMIENDA: ${paciente.recomendacion}`);
    } else {
        console.log("El paciente no existe");
    }
}



let respuestaFicha = prompt("Desea agregar una ficha de paciente nueva? (si/no)").toLowerCase();
while ((respuestaFicha === "si") || (respuestaFicha === "s")) {
    agregarFichas();
    respuestaFicha = prompt("¿Desea agregar otra ficha de paciente nueva? (si/no)").toLowerCase();
}

let respuestaApellido = prompt("Desea buscar una ficha de paciente por apellido? (si/no)").toLowerCase();
while ((respuestaApellido === "si") || (respuestaApellido === "s")) {
    mostrarFichaPorApellido();
    respuestaApellido = prompt("¿Desea buscar otra ficha de paciente por apellido? (si/no)").toLowerCase();
}

console.log(ficha);