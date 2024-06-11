// busqueda de paciente por apellido

let ficha = [];
let idProgresivo = 1;

let buscarFichaBoton = document.getElementById("buscarFichaBoton");

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

let respuestaApellido = prompt("Desea buscar una ficha de paciente por apellido? (si/no)").toLowerCase();
while ((respuestaApellido === "si") || (respuestaApellido === "s")) {
    mostrarFichaPorApellido();
    respuestaApellido = prompt("¿Desea buscar otra ficha de paciente por apellido? (si/no)").toLowerCase();
}

console.log(ficha);