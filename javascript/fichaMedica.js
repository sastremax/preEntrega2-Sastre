// simulador de presupuesto de un consultorio medico y luego fichas medicas para ingreso de datos con ARRAYS para las/los terapeutas//

// Fichas medicas  //

document.addEventListener("DOMContentLoaded", function () {
    let ficha = [];
    let idProgresivo = 1;

    let agregarFichaBoton = document.getElementById("agregarFichaBoton");
    let fichasContainer = document.getElementById("fichasContainer");
    let mensajeContainer = document.getElementById("mensaje");
    let accesoListadoPacientes = document.getElementById("accesoListadoPacientes");

    agregarFichaBoton.addEventListener("click", function () {
        agregarFicha();
    });

    accesoListadoPacientes.addEventListener("click", function() {
        mostrarTodosLosPacientes();
    });

    // funcion para agregar fichas de pacientes
    function agregarFicha() {
        let apellido = prompt("Ingrese el apellido del paciente: ");
        let nombre = prompt("Ingrese el nombre del paciente: ");
        let diagnostico = prompt("Ingrese el diagnostico del paciente: ");
        let fechaNacimiento = prompt("Ingrese la fecha de nacimiento del paciente: (DD-MM-YYYY): ");        
        let edad = calcularEdad(fechaNacimiento);
        let dni = parseInt(prompt("Ingrese el DNI del paciente (sin puntos): "));
        let cud = prompt("El paciente tiene CUD? (si/no)");
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
        mensajeContainer.innerHTML = "Ficha agregada correctamente";
    }

    function calcularEdad(fechaNacimiento) {        
        const fechaNac = new Date(fechaNacimiento);
        const fechaActual = new Date();
        let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
        if (fechaNac.getMonth() > fechaActual.getMonth() || (fechaNac.getMonth() === fechaActual.getMonth() && fechaNac.getDate() > fechaActual.getDate())) {
            edad--;
        }
        return edad;
    }

    // busqueda de paciente por apellido
    let buscarFichaBoton = document.getElementById("buscarFichaBoton");

    buscarFichaBoton.addEventListener("click", function () {
        let busquedaApellido = prompt("Desea buscar una ficha de paciente por apellido? (si/no)").toLowerCase();
        if (busquedaApellido === "si" || busquedaApellido === "s") {
            mostrarFichaPorApellido();
        }
    });

    function mostrarFichaPorApellido() {
        let apellido = prompt("Ingrese el apellido del paciente:").toLowerCase();
        let paciente = ficha.find(paciente => paciente.apellido.toLowerCase() === apellido);

        if (paciente) {
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
            mensajeContainer.innerHTML = "";
        } else {
            mensajeContainer.innerHTML = "Ficha no encontrada";           
        }
    }

    function mostrarTodosLosPacientes() {
        fichasContainer.innerHTML = "";
        ficha.forEach(paciente => {
            let fichaPaciente = document.createElement("div");
            fichaPaciente.classList.add("fichaPaciente");
            let pacienteHTML = `
                <div class="fichaPaciente">
                    <p>ID: ${paciente.id}</p>
                    <p>Nombre: ${paciente.nombre}</p>
                    <p>Apellido: ${paciente.apellido}</p>
                    <p>Edad: ${paciente.edad}</p>
                    <p>Diagnostico: ${paciente.diagnostico}</p>
                    <p>Fecha de nacimiento: ${paciente.fechaNacimiento}</p>
                    <p>DNI: ${paciente.dni}</p>
                    <p>CUD: ${paciente.cud}</p>
                    <p>Obra social: ${paciente.obraSocial}</p>
                    <p>Titular de la obra social: ${paciente.titularObraSocial}</p>
                    <p>Número de afiliado: ${paciente.numeroAfiliado}</p>
                    <p>Escuela: ${paciente.escuela}</p>
                    <p>Mamá: ${paciente.mama}</p>
                    <p>Papá: ${paciente.papa}</p>
                    <p>Celular mamá: ${paciente.celularMama}</p>
                    <p>Celular papá: ${paciente.celularPapa}</p>
                    <p>Neurólogo: ${paciente.neurologo}</p>
                    <p>Pediatra: ${paciente.pediatra}</p>
                    <p>Domicilio: ${paciente.domicilio}</p>
                    <p>Recomendación: ${paciente.recomendacion}</p>
                </div>
            `;
            fichaPaciente.innerHTML = pacienteHTML;
            fichasContainer.appendChild(fichaPaciente);
        });
    }
});