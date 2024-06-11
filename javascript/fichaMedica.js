// simulador de presupuesto de un consultorio medico y luego fichas medicas para ingreso de datos con ARRAYS para las/los terapeutas//

// Fichas medicas  //

let ficha = [];
let idProgresivo = 1;

// evento para agregar fichas de pacientes

document.addEventListener

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

// busqueda de paciente por apellido
function mostrarFichaPorApellido() {
    let apellido = prompt("Ingrese el apellido del paciente:").toLowerCase();
    let paciente = ficha.find(paciente => paciente.apellido.toLowerCase() === apellido);

    if(paciente) {
        let fichasContainer = document.getElementById('fichasContainer');
        fichasContainer.innerHTML = `
                <div class="fichaPaciente">
                    <p>ID: ${paciente.id}</p>
                    <p>APELLIDO: ${paciente.apellido}</p>
                    <p>NOMBRE: ${paciente.nombre}</p>
                    <p>EDAD: ${paciente.edad}</p>
                    <p>DIAGNÓSTICO: ${paciente.diagnostico}</p>
                    <p>FECHA DE NACIMIENTO: ${paciente.fechaNacimiento}</p>
                    <p>DNI: ${paciente.dni}</p>
                    <p>CUD: ${paciente.cud}</p>
                    <p>OBRA SOCIAL: ${paciente.obraSocial}</p>
                    <p>TITULAR DE LA OBRA SOCIAL: ${paciente.titularObraSocial}</p>
                    <p>NÚMERO DE AFILIADO: ${paciente.numeroAfiliado}</p>
                    <p>ESCUELA: ${paciente.escuela}</p>
                    <p>MAMÁ: ${paciente.mama}</p>
                    <p>PAPÁ: ${paciente.papa}</p>
                    <p>CELULAR MAMÁ: ${paciente.celularMama}</p>
                    <p>CELULAR PAPÁ: ${paciente.celularPapa}</p>
                    <p>NEURÓLOGO: ${paciente.neurologo}</p>
                    <p>PEDIATRA: ${paciente.pediatra}</p>
                    <p>DOMICILIO: ${paciente.domicilio}</p>
                    <p>RECOMENDACIÓN: ${paciente.recomendacion}</p>
                </div>
        `;
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