document.addEventListener("DOMContentLoaded", function () {
    let fichas = JSON.parse(localStorage.getItem("fichas")) || [];
    let idProgresivo = parseInt(localStorage.getItem("idProgresivo")) || 1;
    let fichasContainer = document.getElementById("fichasContainer");
    let mensajeContainer = document.getElementById("mensaje");
    let formulario = document.getElementById("fichaMedicaFormulario");                

    inicializarPagina();

    function inicializarPagina() {
        crearBotones();
    }

    function crearBotones() {
        let contenedorRecuadros = document.querySelector('.contenedor-recuadros');
        let primeraFila = document.createElement('div');
        primeraFila.classList.add('fila-botones');
        crearBotonPacientesNuevos(primeraFila);
        crearBotonBuscarFicha(primeraFila);
        crearBotonListadoPacientes(primeraFila);
        contenedorRecuadros.appendChild(primeraFila);
        let segundaFila = document.createElement('div');
        segundaFila.classList.add('fila-botones');
        crearBotonLimpiar(segundaFila);
        crearBotonesModificarEliminar(segundaFila);        
        contenedorRecuadros.appendChild(segundaFila);
        let terceraFila = document.createElement('div');
        terceraFila.classList.add('fila-botones'); 
        crearBotonPresupuesto(terceraFila);       
        contenedorRecuadros.appendChild(terceraFila);
        let contenedorFichas = document.createElement('div');
        contenedorFichas.classList.add('contenedor-fichas');
        contenedorRecuadros.appendChild(contenedorFichas);
    }

    function crearBotonPacientesNuevos(contenedor) {
        let pacientesRecuadro = document.createElement('div');
        pacientesRecuadro.classList.add('recuadro');
        let pacientesTitulo = document.createElement('p');
        pacientesTitulo.textContent = "Pacientes nuevos";
        let agregarFichaBoton = document.createElement('button');
        agregarFichaBoton.textContent = "Agregar Ficha";
        agregarFichaBoton.addEventListener('click', function () {
            mostrarFormulario();
        });
        pacientesRecuadro.appendChild(pacientesTitulo);
        pacientesRecuadro.appendChild(agregarFichaBoton);
        contenedor.appendChild(pacientesRecuadro);
        return agregarFichaBoton;
    }

    function crearBotonBuscarFicha(contenedor) {
        let buscarRecuadro = document.createElement('div');
        buscarRecuadro.classList.add('recuadro');
        let buscarTitulo = document.createElement('p');
        buscarTitulo.textContent = "Búsqueda de fichas";
        let buscarFichaBoton = document.createElement('button');
        buscarFichaBoton.textContent = "OK";
        buscarFichaBoton.addEventListener('click', function () {
            Swal.fire({
                title: "Buscar por apellido",
                input: "text",
                inputPlaceholder: "Ingrese el apellido del paciente",
                showCancelButton: true,
                confirmButtonText: "Ok",
                cancelButtonText: "Cancelar",
                preConfirm: (apellido) => {
                    if (!apellido) {
                        Swal.showValidationMessage('Debe ingresar un apellido');
                    }
                    return apellido;
                }
            }).then((resultado) => {
                if (resultado.isConfirmed) {
                    let apellido = resultado.value;
                    mostrarFichaPorApellido(apellido);
                }
            });
        });
        buscarRecuadro.appendChild(buscarTitulo);
        buscarRecuadro.appendChild(buscarFichaBoton);
        contenedor.appendChild(buscarRecuadro);
    }

    function crearBotonListadoPacientes(contenedor) {
        let listadoRecuadro = document.createElement('div');
        listadoRecuadro.classList.add('recuadro');
        let listadoTitulo = document.createElement('p');
        listadoTitulo.textContent = "Listado de Pacientes";
        let accesoListadoPacientesBoton = document.createElement('button');
        accesoListadoPacientesBoton.textContent = "Acceso";
        accesoListadoPacientesBoton.addEventListener('click', function () {
            mostrarTodosLosPacientes();
        });
        listadoRecuadro.appendChild(listadoTitulo);
        listadoRecuadro.appendChild(accesoListadoPacientesBoton);
        contenedor.appendChild(listadoRecuadro);
    }

    function crearBotonLimpiar(contenedor) {
        let limpiarBoton = document.createElement('div');
        limpiarBoton.classList.add('recuadro');
        let limpiarTitulo = document.createElement('p');
        limpiarTitulo.textContent = "Limpiar";
        let accesoLimpiarPacientesBoton = document.createElement('button');
        accesoLimpiarPacientesBoton.textContent = "Pantalla";
        accesoLimpiarPacientesBoton.addEventListener('click', function () {
            limpiarFichasMostradas();
        });
        limpiarBoton.appendChild(limpiarTitulo);
        limpiarBoton.appendChild(accesoLimpiarPacientesBoton);
        contenedor.appendChild(limpiarBoton);
    }

    function crearBotonesModificarEliminar(contenedor) {
        let modificarEliminarRecuadro = document.createElement('div');
        modificarEliminarRecuadro.classList.add('recuadro', 'modificar-eliminar');
        let modificarFichaBoton = document.createElement('button');
        modificarFichaBoton.textContent = "Modificar Ficha";
        modificarFichaBoton.addEventListener('click', function () {
            modificarFicha();
        });
        let eliminarFichaBoton = document.createElement('button');
        eliminarFichaBoton.textContent = "Eliminar Ficha";
        eliminarFichaBoton.addEventListener('click', function () {
            eliminarFicha();
        });
        let separador = document.createElement('span');
        separador.textContent = "|";
        modificarEliminarRecuadro.appendChild(modificarFichaBoton);
        modificarEliminarRecuadro.appendChild(separador);
        modificarEliminarRecuadro.appendChild(eliminarFichaBoton);
        contenedor.appendChild(modificarEliminarRecuadro);
    }

    function crearBotonPresupuesto(contenedor) {
        let btnPresupuesto = document.createElement('div');
        btnPresupuesto.classList.add('recuadro');
        let listadoTitulo = document.createElement('p');
        listadoTitulo.textContent = "Presupuesto";
        let presupuestoBoton = document.createElement('button');
        presupuestoBoton.textContent = "Ir al Presupuesto";
        presupuestoBoton.addEventListener('click', function () {
            window.location.href = "presupuesto.html";            
        });
        btnPresupuesto.appendChild(listadoTitulo);
        btnPresupuesto.appendChild(presupuestoBoton);
        contenedor.appendChild(btnPresupuesto);
    }

    function limpiarFichasMostradas() {
        fichasContainer = document.getElementById("fichasContainer");
        if (fichasContainer) {
            fichasContainer.innerHTML = "";
        }
        mensajeContainer = document.getElementById("mensajeContainer");
        if (mensajeContainer) {
            mensajeContainer.textContent = "";
        }
        let contenedor = document.getElementById("formularioContenedor");
        if (contenedor) {
            contenedor.innerHTML = "";
        }
    }

    function mostrarFormulario() {
        let formularioHTML = `
            <form id="formulario">
                <h2>Crear una Ficha Médica</h2>
                <label for="apellidoPaciente">Apellido del paciente:</label>
                <input type="text" id="apellidoPaciente" required>
                <label for="nombrePaciente">Nombre del paciente:</label>
                <input type="text" id="nombrePaciente" required>
                <label for="diagnosticoPaciente">Diagnóstico del paciente:</label>
                <input type="text" id="diagnosticoPaciente" required>
                <label for="fechaNacimientoPaciente">Fecha de Nacimiento del paciente:</label>
                <input type="date" id="fechaNacimientoPaciente" required>
                <label for="dniPaciente">DNI:</label>
                <input type="text" id="dniPaciente" required>
                <label for="cudPaciente">CUD (si/no?):</label> 
                <input type="text" id="cudPaciente">
                <label for="obraSocialPaciente">Obra Social del paciente:</label> 
                <input type="text" id="obraSocialPaciente"> 
                <label for="domicilioPaciente">Domicilio:</label> 
                <input type="text" id="domicilioPaciente"> 
                <label for="titularObraSocialPaciente">Titular de la Obra Social:</label> 
                <input type="text" id="titularObraSocialPaciente"> 
                <label for="numAfiliadoPaciente">Número del Afiliado:</label> 
                <input type="text" id="numAfiliadoPaciente"> 
                <label for="escuelaPaciente">Escuela:</label> 
                <input type="text" id="escuelaPaciente"> 
                <label for="nombreMadrePaciente">Nombre de la Madre:</label> 
                <input type="text" id="nombreMadrePaciente"> 
                <label for="celularMadrePaciente">Celular de la Madre:</label> 
                <input type="text" id="celularMadrePaciente"> 
                <label for="nombrePadrePaciente">Nombre del Padre:</label> 
                <input type="text" id="nombrePadrePaciente"> 
                <label for="celularPadrePaciente">Celular del Padre:</label> 
                <input type="text" id="celularPadrePaciente"> 
                <label for="neurologoPaciente">Neurólogo:</label> 
                <input type="text" id="neurologoPaciente"> 
                <label for="pediatraPaciente">Pediatra:</label> 
                <input type="text" id="pediatraPaciente"> 
                <button type="button" id="guardarFichaBoton">Guardar Ficha</button>
                <button type="button" id="limpiarFichaBoton">Volver</button>
            </form> 
        `;
        let contenedor = document.getElementById("formularioContenedor");
        if (contenedor) {
            contenedor.innerHTML = formularioHTML;
            let guardarFichaBoton = document.getElementById("guardarFichaBoton");
            if (guardarFichaBoton) {
                guardarFichaBoton.addEventListener("click", guardarFichasDeFormulario);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se encontró el botón de guardar dentro del formulario.',
                    backdrop: "#FF0000"
                });
            }
            document.getElementById("limpiarFichaBoton").addEventListener("click", limpiarFichasMostradas);
            document.getElementById("guardarFichaBoton").addEventListener("click", guardarFichasDeFormulario);
            document.getElementById("btnMostrarTodos").addEventListener("click", mostrarTodosLosPacientes);
            document.getElementById("btnBuscarPorApellido").addEventListener("click", mostrarFichaPorApellido);
            document.getElementById("btnModificarFicha").addEventListener("click", modificarFicha);
            document.getElementById("btnEliminarFicha").addEventListener("click", eliminarFicha);   
            document.getElementById("btnPresupuesto").addEventListener("click", function () {
                window.location.href = "presupuesto.html";
            });         
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se encontró el contenedor del formulario.',
                backdrop: "#FF0000"
            });
        }
    }

    function guardarFichasDeFormulario() {
        formulario = document.getElementById("formulario");
        let apellido, nombre, diagnostico, fechaNacimiento, dni, cud, obraSocial, domicilio, titularObraSocial, numAfiliado, escuela, nombreMadre, celularMadre, nombrePadre, celularPadre, neurologo, pediatra;
        if (formulario) {
            apellido = document.getElementById("apellidoPaciente").value;
            nombre = document.getElementById("nombrePaciente").value;
            diagnostico = document.getElementById("diagnosticoPaciente").value;
            fechaNacimiento = document.getElementById("fechaNacimientoPaciente").value;
            dni = document.getElementById("dniPaciente").value;
            cud = document.getElementById("cudPaciente").value;
            obraSocial = document.getElementById("obraSocialPaciente").value;
            domicilio = document.getElementById("domicilioPaciente").value;
            titularObraSocial = document.getElementById("titularObraSocialPaciente").value;
            numAfiliado = document.getElementById("numAfiliadoPaciente").value;
            escuela = document.getElementById("escuelaPaciente").value;
            nombreMadre = document.getElementById("nombreMadrePaciente").value;
            celularMadre = document.getElementById("celularMadrePaciente").value;
            nombrePadre = document.getElementById("nombrePadrePaciente").value;
            celularPadre = document.getElementById("celularPadrePaciente").value;
            neurologo = document.getElementById("neurologoPaciente").value;
            pediatra = document.getElementById("pediatraPaciente").value;
        }
        let esValido = apellido && nombre && diagnostico && fechaNacimiento && dni && obraSocial && domicilio && titularObraSocial && numAfiliado && escuela && nombreMadre && celularMadre && nombrePadre && celularPadre && neurologo && pediatra;
        if (esValido) {
            if (isNaN(dni) || dni.length < 8) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "El campo DNI debe ser un número válido y tener al menos 8 caracteres",
                    backdrop: "#FF0000"
                });
                return;
            }
            if (isNaN(celularMadre)) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "El campo Celular de la madre debe ser un número válido",
                    backdrop: "#FF0000"
                });
                return;
            }
            if (isNaN(celularPadre)) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "El Celular del padre debe ser un número válido sin guiones",
                    backdrop: "#FF0000"
                });
                return;
            }
            let fechaActual = new Date();
            let fechaIngresada = new Date(fechaNacimiento);
            if (fechaIngresada >= fechaActual) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "La fecha de nacimiento debe ser anterior al día de hoy",
                    backdrop: "#FF0000"
                });
                return;
            }
            let nuevoId = idProgresivo;
            let ficha = { id: nuevoId, apellido, nombre, diagnostico, fechaNacimiento, dni, cud, obraSocial, domicilio, titularObraSocial, numAfiliado, escuela, nombreMadre, celularMadre, nombrePadre, celularPadre, neurologo, pediatra };
            fichas.push(ficha);
            idProgresivo++;
            localStorage.setItem("fichas", JSON.stringify(fichas));
            localStorage.setItem("idProgresivo", idProgresivo.toString());
            Swal.fire({
                icon: "success",
                title: "Ficha",
                text: "Ficha del paciente guardada con éxito",
                backdrop: "#008000"
            }).then(() => {
                formulario.reset();
                formulario.style.display = "none";
                limpiarFichasMostradas();
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Ficha",
                text: "La ficha no pudo ser guardada, complete todos los campos",
                backdrop: "#FF0000"
            });
        }
    }

    function guardarFichasEnStorage() {
        localStorage.setItem("fichas", JSON.stringify(fichas));
        localStorage.setItem("idProgresivo", idProgresivo.toString());
    }

    function mostrarTodosLosPacientes() {
        limpiarFichasMostradas();
        if (fichas.length === 0) {
            Swal.fire({
                icon: "info",
                title: "Ficha",
                text: "No hay fichas médicas para mostrar",
            });
        } else {
            let htmlMensaje = construirMensajeFichas(fichas);
            mostrarCartel(htmlMensaje);
        }
    }

    function mostrarFichaPorApellido(apellidoBuscar) {
        limpiarFichasMostradas();
        if (apellidoBuscar) {
            let pacientesEncontrados = fichas.filter(function (paciente) {
                return paciente.apellido.toLowerCase() === apellidoBuscar.toLowerCase();
            });
            if (pacientesEncontrados.length > 0) {
                let htmlMensaje = construirMensajeFichas(pacientesEncontrados);
                mostrarCartel(htmlMensaje);
            } else {
                Swal.fire({
                    icon: "info",
                    title: "Ficha",
                    text: "No se encontraron fichas con ese apellido",
                });
            }
        } else {
            Swal.fire({
                icon: "info",
                title: "Ficha",
                text: "Debe ingresar un apellido para buscar",
            });
        }
    }

    function construirMensajeFichas(pacientes) {
        let htmlMensaje = "";
        pacientes.forEach(function (paciente) {
            htmlMensaje += `
                <div class="ficha">
                    <strong style="display: block; text-align: center;">FICHA: ${paciente.id}</strong>
                    <p>Apellido: <strong>${paciente.apellido.toUpperCase()}</strong></p>
                    <p>Nombre: <strong>${paciente.nombre}</strong></p>
                    <p>Diagnóstico: <strong>${paciente.diagnostico}</strong></p>
                    <p>Fecha de Nacimiento: <strong>${paciente.fechaNacimiento}</strong></p>
                    <p>Edad: <strong>${calcularEdad(paciente.fechaNacimiento)}</strong></p>
                    <p>DNI: <strong>${paciente.dni}</strong></p>
                    <p>CUD: <strong>${paciente.cud}</strong></p>
                    <p>Obra Social: <strong>${paciente.obraSocial}</strong></p>
                    <p>Domicilio: <strong>${paciente.domicilio}</strong></p>
                    <p>Titular Obra Social: <strong>${paciente.titularObraSocial}</strong></p>
                    <p>Número de Afiliado: <strong>${paciente.numAfiliado}</strong></p>
                    <p>Escuela: <strong>${paciente.escuela}</strong></p>
                    <p>Madre: <strong>${paciente.madre}</strong></p>
                    <p>Celular Madre: <strong>${paciente.celularMadre}</strong></p>
                    <p>Padre: <strong>${paciente.padre}</strong></p>
                    <p>Celular Padre: <strong>${paciente.celularPadre}</strong></p>
                    <p>Neurólogo: <strong>${paciente.neurologo}</strong></p>
                    <p>Pediatra: <strong>${paciente.pediatra}</strong></p>
                </div>
            `;
        });
        return htmlMensaje;
    }

    function mostrarCartel(htmlMensaje) {
        Swal.fire({
            title: "Ficha de Paciente",
            html: htmlMensaje,
            icon: "info",
            confirmButtonText: "Cerrar",
            backdrop: "#FFFF00",
            customClass: {
                content: 'text-align: left;',
                closeButton: 'button-class'
            },
            showClass: {
                popup: 'animate__animated animate__backInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutUp'
            }
        });
    }

    function calcularEdad(fechaNacimiento) {
        let hoy = new Date();
        let cumpleanios = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - cumpleanios.getFullYear();
        let mes = hoy.getMonth() - cumpleanios.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanios.getDate())) {
            edad--;
        }
        return edad;
    }

    function modificarFicha() {
        Swal.fire({
            title: "Modificar Ficha",
            text: "Ingrese el número de FICHA del paciente a modificar: ",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
                step: 1,
                min: 1,
            },
            showCancelButton: true,
            confirmButtonText: "Buscar",
            cancelButtonText: "Cancelar",
            showLoaderOnConfirm: true,
            preConfirm: (idModificar) => {
                if (!idModificar || isNaN(idModificar)) {
                    Swal.showValidationMessage("Debe ingresar un número de FICHA");
                }
            }
        }).then((resultado) => {
            if (resultado.isConfirmed) {
                let idModificar = parseInt(resultado.value);
                let pacienteEncontrado = fichas.find(paciente => paciente.id === idModificar);
                if (pacienteEncontrado) {
                    mostrarElCampo(pacienteEncontrado, idModificar);
                } else {
                    Swal.fire({
                        icon: "info",
                        title: `No se encontró ningún paciente con la ficha # ${idModificar} `,
                    });
                }
            }
        });
    }

    function mostrarElCampo(pacienteEncontrado, idModificar) {
        Swal.fire({
            title: `Modificando ficha del paciente: ${idModificar} `,
            input: "select",
            inputOptions: {
                apellido: "Apellido",
                nombre: "Nombre",
                diagnostico: "Diagnóstico",
                fechaNacimiento: "Fecha de Nacimiento",
                edad: "Edad",
                dni: "DNI",
                cud: "CUD",
                obraSocial: "Obra Social",
                domicilio: "Domicilio",
                titularObraSocial: "Titular de Obra Social",
                numeroAfiliado: "Número de Afiliado",
                escuela: "Escuela",
                madre: "Nombre de la Madre",
                celularMama: "Celular de la Madre",
                padre: "Nombre del Padre",
                celularPapa: "Celular del Padre",
                neurologo: "Neurólogo",
                pediatra: "Pediatra",
            },
            inputPlaceholder: "Seleccione el campo a modificar",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Debe seleccionar un campo para modificar';
                }
            }
        }).then((resultado) => {
            if (resultado.isConfirmed) {
                let campoModificar = resultado.value;
                modificarElCampo(pacienteEncontrado, idModificar, campoModificar);
            }
        });
    }

    function modificarElCampo(pacienteEncontrado, idModificar, campoModificar) {
        Swal.fire({
            title: `Modificar ${campoModificar} (actual: ${pacienteEncontrado[campoModificar]}): `,
            input: "text",
            inputValue: pacienteEncontrado[campoModificar],
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            inputValidator: (value) => {
                if (!value) {
                    return `Debe ingresar un ${campoModificar} válido`;
                }
            }
        }).then((resultado) => {
            if (resultado.isConfirmed) {
                pacienteEncontrado[campoModificar] = resultado.value;
                guardarFichasEnStorage();
                Swal.fire({
                    icon: 'success',
                    title: 'Ficha modificada',
                    text: `Se guardaron los cambios en la ficha del paciente #${idModificar} `,
                    backdrop: "#008000"
                });
            }
        });
    }

    function eliminarFicha() {
        Swal.fire({
            title: "Eliminar Ficha",
            input: "number",
            inputLabel: "Ingrese el número de FICHA del paciente a eliminar",
            inputPlaceholder: "Número de FICHA",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            inputValidator: (value) => {
                if (!value || isNaN(value)) {
                    return 'Debe ingresar un número de FICHA válido';
                }
            }
        }).then((resultado) => {
            if (resultado.isConfirmed) {
                let idEliminar = parseInt(resultado.value);
                let indicePaciente = fichas.findIndex(function (paciente) {
                    return parseInt(paciente.id) === idEliminar;
                });
                if (indicePaciente !== -1) {
                    fichas.splice(indicePaciente, 1);
                    guardarFichasEnStorage();
                    Swal.fire('Eliminado', `Se eliminó la ficha del paciente número: ${idEliminar} `, 'success');
                    mostrarTodosLosPacientes();
                } else {
                    Swal.fire('Error', `No se encontró ningún paciente con la ficha: ${idEliminar} `, 'error');
                }
            }
        });
    }
});