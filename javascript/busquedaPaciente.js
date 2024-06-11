// busqueda de paciente por apellido

let idProgresivo = 1;

let buscarFichaBoton = document.getElementById("buscarFichaBoton");

buscarFichaBoton.addEventListener("click", function() {
    let busquedaApellido = prompt("Desea buscar una ficha de paciente por apellido? (si/no)").toLowerCase();
    if (busquedaApellido === "si" || busquedaApellido === "s") {
        mostrarFichaPorApellido();
    }
});

function mostrarFichaPorApellido() {
    let apellido = prompt("Ingrese el apellido del paciente:").toLowerCase();
    let paciente = ficha.find(paciente => paciente.apellido.toLowerCase() === apellido);
    let mensajeContainer = document.getElementById('mensaje');
    let fichasContainer = document.getElementById('fichasContainer');
    
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
        mensajeContainer.innerHTML = "ficha encontrada";
    } else {
        mensajeContainer.innerHTML = "ficha no encontrada"; 
    }
}