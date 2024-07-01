// Fichas medicas y prespuesto, los dos codigos en uno solo integrado
document.addEventListener("DOMContentLoaded", function () {
    // Variables globales
    let fichas = JSON.parse(localStorage.getItem("fichas")) || [];
    let idProgresivo = parseInt(localStorage.getItem("idProgresivo")) || 1;
    let fichasContainer = document.getElementById("fichasContainer");
    let mensajeContainer = document.getElementById("mensaje");
    let formulario = document.getElementById("fichaMedicaFormulario");
    let historial = "";

    // Función principal para inicializar la página
    function inicializarPagina() {
        crearBotones();
    }


    // Función para crear los botones dinámicamente
    function crearBotones() {
        let contenedorRecuadros = document.querySelector('.contenedor-recuadros');

        // Crear contenedor para la primera fila de botones
        let primeraFila = document.createElement('div');
        primeraFila.classList.add('fila-botones');

        // Crear botones para la primera fila        
        crearBotonPacientesNuevos(primeraFila);
        crearBotonBuscarFicha(primeraFila);
        crearBotonListadoPacientes(primeraFila);

        // Agregar la primera fila al contenedor principal
        contenedorRecuadros.appendChild(primeraFila);

        // Crear contenedor para la segunda fila de botones
        let segundaFila = document.createElement('div');
        segundaFila.classList.add('fila-botones');

        // Crear botones para la segunda fila

        crearBotonLimpiar(segundaFila);
        crearBotonesModificarEliminar(segundaFila);

        // Agregar la segunda fila al contenedor principal
        contenedorRecuadros.appendChild(segundaFila);

        // Crear contenedor para la tercera fila de botones
        let terceraFila = document.createElement('div');
        terceraFila.classList.add('fila-botones');

        // Crear botones para la tercera fila

        crearBotonPresupuesto(terceraFila);

        // Agregar la tercera fila al contenedor principal
        contenedorRecuadros.appendChild(terceraFila);


        // Crear contenedor para las fichas de pacientes
        let contenedorFichas = document.createElement('div');
        contenedorFichas.classList.add('contenedor-fichas');
        contenedorRecuadros.appendChild(contenedorFichas);
    }


    // Función para crear botón de Pacientes nuevos
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


    // Función para crear botón de Búsqueda de fichas
    function crearBotonBuscarFicha(contenedor) {
        let buscarRecuadro = document.createElement('div');
        buscarRecuadro.classList.add('recuadro');

        let buscarTitulo = document.createElement('p');
        buscarTitulo.textContent = "Búsqueda de fichas";

        let inputApellido = document.createElement('input');
        inputApellido.setAttribute('type', 'text');
        inputApellido.setAttribute('id', 'inputApellido');
        inputApellido.setAttribute('placeholder', 'apellido');

        let buscarFichaBoton = document.createElement('button');
        buscarFichaBoton.textContent = "OK";
        buscarFichaBoton.addEventListener('click', function () {
            mostrarFichaPorApellido();
            inputApellido.value = "";
        });

        buscarRecuadro.appendChild(buscarTitulo);
        buscarRecuadro.appendChild(inputApellido);
        buscarRecuadro.appendChild(buscarFichaBoton);
        contenedor.appendChild(buscarRecuadro);
    }


    // Función para crear botón de Listado de Pacientes
    function crearBotonListadoPacientes(contenedor) {
        let listadoRecuadro = document.createElement('div');
        listadoRecuadro.classList.add('recuadro');
        let listadoTitulo = document.createElement('p');
        listadoTitulo.textContent = "Listado de Pacientes";
        let accesoListadoPacientesBoton = document.createElement('button');
        accesoListadoPacientesBoton.textContent = "Acceso al listado de Pacientes";
        accesoListadoPacientesBoton.addEventListener('click', function () {
            mostrarTodosLosPacientes();
        });
        listadoRecuadro.appendChild(listadoTitulo);
        listadoRecuadro.appendChild(accesoListadoPacientesBoton);
        contenedor.appendChild(listadoRecuadro);
    }


    // Función para crear botón de Limpiar
    function crearBotonLimpiar(contenedor) {
        let limpiarBoton = document.createElement('div');
        limpiarBoton.classList.add('recuadro');
        let limpiarTitulo = document.createElement('p');
        limpiarTitulo.textContent = "Limpiar";
        let accesoLimpiarPacientesBoton = document.createElement('button');
        accesoLimpiarPacientesBoton.textContent = "Limpiar listado de pacientes";
        accesoLimpiarPacientesBoton.addEventListener('click', function () {
            limpiarFichasMostradas();
        });
        limpiarBoton.appendChild(limpiarTitulo);
        limpiarBoton.appendChild(accesoLimpiarPacientesBoton);
        contenedor.appendChild(limpiarBoton);
    }


    // Función para crear botones de Modificar y Eliminar
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

        // Separación visual entre los botones
        let separador = document.createElement('span');
        separador.textContent = "|";
        modificarEliminarRecuadro.appendChild(modificarFichaBoton);
        modificarEliminarRecuadro.appendChild(separador);
        modificarEliminarRecuadro.appendChild(eliminarFichaBoton);
        contenedor.appendChild(modificarEliminarRecuadro);
    }


    // Funcion para crear botón de Presupuesto
    function crearBotonPresupuesto(contenedor) {
        let presupuestoRecuadro = document.createElement('div');
        presupuestoRecuadro.classList.add('recuadro', 'presupuesto');
        let presupuestoTitulo = document.createElement('p');
        presupuestoTitulo.textContent = "Presupuesto";
        let presupuestoBoton = document.createElement('button');
        presupuestoBoton.textContent = "Calcular Presupuesto";
        presupuestoBoton.addEventListener('click', function () {
            gestionarPresupuesto();
            alert("Historial de saldos:\n" + historial)
        });

        presupuestoRecuadro.appendChild(presupuestoTitulo);
        presupuestoRecuadro.appendChild(presupuestoBoton);
        contenedor.appendChild(presupuestoRecuadro);
    }


    // Función para limpiar las fichas mostradas
    function limpiarFichasMostradas() {
        fichasContainer.innerHTML = ""; // Limpiar el contenido del contenedor
        mensajeContainer.textContent = "";
        
    }


    // Función para mostrar el formulario dinamicamente
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
            </form> 
        `;

            let contenedor = document.getElementById("formularioContenedor");
            if (contenedor) {
                contenedor.innerHTML = formularioHTML;
                
                let guardarFichaBoton = document.getElementById("guardarFichaBoton");

                if (guardarFichaBoton) {
                    guardarFichaBoton.addEventListener("click", guardarFichasDeFormulario);
                } else {
                    console.log("No se encontró el botón de guardar dentro del formulario.");
                }
            
                document.getElementById("guardarFichaBoton").addEventListener("click", guardarFichasDeFormulario);
                document.getElementById("btnMostrarTodos").addEventListener("click", mostrarTodosLosPacientes);
                document.getElementById("btnBuscarPorApellido").addEventListener("click", mostrarFichaPorApellido);
                document.getElementById("btnModificarFicha").addEventListener("click", modificarFicha);
                document.getElementById("btnEliminarFicha").addEventListener("click", eliminarFicha);
                document.getElementById("btnMostrarPresupuesto").addEventListener("click", gestionarPresupuesto);

            } else {
                console.log("No se encontró el contenedor del formulario.");
            }
    }


    // Función para agregar una nueva ficha médica desde el formulario
    function guardarFichasDeFormulario() {

        formulario = document.getElementById("formulario");

        let apellido, nombre, diagnostico, fechaNacimiento, dni, cud, obraSocial, domicilio, titularObraSocial, numAfiliado, escuela, nombreMadre, celularMadre, nombrePadre, celularPadre, neurologo, pediatra;

        if (formulario) {
            //Desestructuración para obtener los valores de los campos del formulario
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
        // perador ternario para asignar valores
        let esValido = apellido && nombre && diagnostico && fechaNacimiento && dni && obraSocial && domicilio && titularObraSocial && numAfiliado && escuela && nombreMadre && celularMadre && nombrePadre && celularPadre && neurologo && pediatra;
        let mensaje = esValido ? "Ficha guardada con éxito" : "Debe completar todos los campos del formulario";

        if (esValido) {
            // Procesamiento de la ficha médica si los campos son válidos
            let nuevoId = idProgresivo;
            let ficha = { id: nuevoId, apellido, nombre, diagnostico, fechaNacimiento, dni, cud, obraSocial, domicilio, titularObraSocial, numAfiliado, escuela, nombreMadre, celularMadre, nombrePadre, celularPadre, neurologo, pediatra };
            fichas.push(ficha);
            idProgresivo++;
            localStorage.setItem("fichas", JSON.stringify(fichas));
            localStorage.setItem("idProgresivo", idProgresivo.toString());
        } else {
            alert(mensaje);
        }
        formulario.reset();
    }


    // Función para guardar las fichas en el almacenamiento local
    function guardarFichasEnStorage() {
        localStorage.setItem("fichas", JSON.stringify(fichas));
        localStorage.setItem("idProgresivo", idProgresivo.toString);
    }


    // Función para mostrar todas las fichas de pacientes
    function mostrarTodosLosPacientes() {
        limpiarFichasMostradas();
        if (fichas.length === 0) {
            mensajeContainer.textContent = "No hay fichas médicas para mostrar";
        } else {
            fichas.forEach(function (ficha) {
                mostrarFicha(ficha);
            });
        }
    }


    // Función para buscar y mostrar una ficha por apellido
    function mostrarFichaPorApellido() {
        limpiarFichasMostradas();

        let inputApellido = document.getElementById("inputApellido");
        let apellidoBuscar = inputApellido.value;

        if (apellidoBuscar) {
            let pacientesEncontrados = fichas.filter(function (paciente) {
                return paciente.apellido.toLowerCase() === apellidoBuscar.toLowerCase();
            });
            if (pacientesEncontrados.length > 0) {
                pacientesEncontrados.forEach(function (paciente) {
                    mostrarFicha(paciente);
                });
            } else {
                mensajeContainer.textContent = "No se encontraron pacientes con ese apellido";
            }
        } else {
            mensajeContainer.textContent = "Debe ingresar un apellido para buscar";
        }
    }


    // Función para calcular la edad a partir de la fecha de nacimiento
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


    // Función para mostrar una ficha de paciente específica
    function mostrarFicha(paciente) {
        let fichaContainer = document.createElement("div");
        fichaContainer.classList.add("ficha");

        let idPaciente = document.createElement("p");
        idPaciente.innerHTML = `<strong style="display: block; text-align: center;">FICHA: ${paciente.id}</strong>`;
        fichaContainer.appendChild(idPaciente);

        let datosPaciente = document.createElement("div");
        datosPaciente.innerHTML = `            
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
            <p>Celular Madre: <strong>${paciente.celularMama}</strong></p>
            <p>Padre: <strong>${paciente.padre}</strong></p>
            <p>Celular Padre: <strong>${paciente.celularPapa}</strong></p>
            <p>Neurólogo: <strong>${paciente.neurologo}</strong></p>
            <p>Pediatra: <strong>${paciente.pediatra}</strong></p>            
        `;
        fichaContainer.appendChild(datosPaciente);

        fichasContainer.appendChild(fichaContainer);
    }


    // Función para modificar una ficha de paciente
    function modificarFicha() {
        // Solicitar al usuario el ID del paciente a modificar
        let idModificar = parseInt(prompt("Ingrese el número de FICHA del paciente a modificar: "));

        // Validar si el ID ingresado es válido
        if (!idModificar || isNaN(idModificar)) {
            mensajeContainer.textContent = "Debe ingresar un número de FICHA válido";
            return;
        }

        // Buscar al paciente por su ID en el array 'fichas'
        let pacienteEncontrado = fichas.find(function (paciente) {
            return paciente.id === idModificar;
        });

        // Si se encontró al paciente
        if (pacienteEncontrado) {
            // Mostrar mensaje de confirmación
            mensajeContainer.textContent = `Modificando ficha del paciente: ${idModificar}`;

            // Solicitar al usuario qué campo desea modificar
            let campoModificar = prompt(`Qué campo desea modificar para el paciente: ${pacienteEncontrado.apellido}? (apellido/nombre/diagnostico/fechaNacimiento/edad/dni/cud/obraSocial/titularObraSocial/numeroAfiliado/escuela/madre/celularMama/padre/celularPapa/neurologo/pediatra)`);

            // Validar la respuesta del usuario
            if (!campoModificar) {
                mensajeContainer.textContent = "Debe ingresar un campo válido para modificar";
                return;
            }

            switch (campoModificar) {
                case "apellido":
                    pacienteEncontrado.apellido = prompt(`Modificar apellido (actual: ${pacienteEncontrado.apellido}):`);
                    break;
                case "nombre":
                    pacienteEncontrado.nombre = prompt(`Modificar nombre (actual: ${pacienteEncontrado.nombre}):`);
                    break;
                case "diagnostico":
                    pacienteEncontrado.diagnostico = prompt(`Modificar diagnóstico (actual: ${pacienteEncontrado.diagnostico}):`);
                    break;
                case "fechaNacimiento":
                    pacienteEncontrado.fechaNacimiento = prompt(`Modificar fecha de nacimiento (actual: ${pacienteEncontrado.fechaNacimiento}):`);
                    break;
                case "edad":
                    pacienteEncontrado.edad = parseInt(prompt(`Modificar edad (actual: ${pacienteEncontrado.edad}):`));
                    break;
                case "dni":
                    pacienteEncontrado.dni = prompt(`Modificar DNI (actual: ${pacienteEncontrado.dni}):`);
                    break;
                case "cud":
                    pacienteEncontrado.cud = prompt(`Modificar CUD (actual: ${pacienteEncontrado.cud}):`);
                    break;
                case "obraSocial":
                    pacienteEncontrado.obraSocial = prompt(`Modificar obra social (actual: ${pacienteEncontrado.obraSocial}):`);
                    break;
                case "domicilio":
                    pacienteEncontrado.domicilio = prompt(`Modificar domicilio (actual: ${pacienteEncontrado.domicilio}):`);
                    break;
                case "titularObraSocial":
                    pacienteEncontrado.titularObraSocial = prompt(`Modificar titular de obra social (actual: ${pacienteEncontrado.titularObraSocial}):`);
                    break;
                case "numeroAfiliado":
                    pacienteEncontrado.numeroAfiliado = prompt(`Modificar número de afiliado (actual: ${pacienteEncontrado.numeroAfiliado}):`);
                    break;
                case "escuela":
                    pacienteEncontrado.escuela = prompt(`Modificar escuela (actual: ${pacienteEncontrado.escuela}):`);
                    break;
                case "madre":
                    pacienteEncontrado.madre = prompt(`Modificar nombre de la madre (actual: ${pacienteEncontrado.madre}):`);
                    break;
                case "celularMama":
                    pacienteEncontrado.celularMama = prompt(`Modificar celular de la madre (actual: ${pacienteEncontrado.celularMama}):`);
                    break;
                case "padre":
                    pacienteEncontrado.papa = prompt(`Modificar nombre del padre (actual: ${pacienteEncontrado.padre}):`);
                    break;
                case "celularPapa":
                    pacienteEncontrado.celularPapa = prompt(`Modificar celular del padre (actual: ${pacienteEncontrado.celularPapa}):`);
                    break;
                case "neurologo":
                    pacienteEncontrado.neurologo = prompt(`Modificar neurólogo (actual: ${pacienteEncontrado.neurologo}):`);
                    break;
                case "pediatra":
                    pacienteEncontrado.pediatra = prompt(`Modificar pediatra (actual: ${pacienteEncontrado.pediatra}):`);
                    break;
                default:
                    mensajeContainer.textContent = "Campo inválido";
                    return;
            }

            // Guardar las fichas actualizadas en el localStorage
            guardarFichasEnStorage();

            // Actualizar la interfaz llamando a mostrarTodosLosPacientes()
            mostrarTodosLosPacientes(); // Esta función debería reflejar los cambios realizados
        } else {
            // Si no se encontró al paciente, mostrar mensaje de error
            mensajeContainer.textContent = `No se encontró ningún paciente con la ficha # ${idModificar}`;
        }
    }


    // Función para eliminar una ficha de paciente
    function eliminarFicha() {
        let indicePaciente;

        // Solicitar al usuario el ID del paciente a eliminar
        let idEliminar = parseInt(prompt("Ingrese el número de la ficha del paciente a eliminar: "));

        // Validar si el ID ingresado es válido
        if (!idEliminar || isNaN(idEliminar)) {
            mensajeContainer.textContent = "Debe ingresar un número de FICHA válido";
            return;
        }

        // Buscar al paciente por su ID en el array 'fichas'
        indicePaciente = fichas.findIndex(function (paciente) {
            return paciente.id === idEliminar;
        });

        // Si se encontró al paciente
        if (indicePaciente !== -1) {

            fichas.splice(indicePaciente, 1);

            // Guardar las fichas actualizadas en el localStorage
            guardarFichasEnStorage();

            // Mostrar mensaje de confirmación
            mensajeContainer.textContent = `Se eliminó la ficha del paciente número: ${idEliminar}`;

            // Actualizar la interfaz llamando a mostrarTodosLosPacientes()
            mostrarTodosLosPacientes(); // Esta función debería reflejar la eliminación realizada
        } else {
            // Si no se encontró al paciente, mostrar mensaje de error
            mensajeContainer.textContent = `No se encontró ningún paciente con la ficha: ${idEliminar}`;
        }
    }


    // simulador de presupuesto de Arcoiris
    function gestionarPresupuesto() {
        let año = validarAño();
        let mes = validarMes();

        let totalGastosProductos = ingresarGastosProductos(mes);
        let totalGastosServicios = ingresarGastosServicios();
        let ingresos = ingresarGanancias(mes, año);
        let egresos = totalGastosProductos + totalGastosServicios;

        calcularSaldo(ingresos, egresos, mes, año);

        let resultadoPresupuesto = document.getElementById('resultadoPresupuesto');
        if (resultadoPresupuesto) {
            resultadoPresupuesto.textContent = `Resultado del presupuesto para ${mes} ${año}: 
                Ingresos: ${ingresos}, Egresos: ${egresos}, Saldo: ${ingresos - egresos}`;
        } else {
            console.error('No se encontró el elemento con id "resultadoPresupuesto"');
        }

        do {
            let respuesta = prompt("¿Desea seguir ingresando saldos? (si/no)").toLowerCase();
            if (respuesta === "si" || respuesta === "s") {
                año = validarAño();
                mes = validarMes();
                totalGastosProductos = ingresarGastosProductos(mes);
                totalGastosServicios = ingresarGastosServicios();
                ingresos = ingresarGanancias(mes, año);
                egresos = totalGastosProductos + totalGastosServicios;
                calcularSaldo(ingresos, egresos, mes, año);
            }
        } while (respuesta === "si" || respuesta === "s");
    }


    // Funcion para validar el año
    function validarAño() {
        let año = prompt("Ingrese el año a calcular: ");
        while (año < 2020 || isNaN(año) || año.toString() !== año) {
            console.log("El año ingresado no es válido.");
            año = prompt("Ingrese el año a calcular: ");
        }
        return año;
    }

    //Funcion pra validar el mes
    function validarMes() {
        let mes = prompt("Ingrese el mes a calcular: ").toLowerCase();
        while (mes !== "enero" && mes !== "febrero" && mes !== "marzo" && mes !== "abril" && mes !== "mayo" && mes !== "junio" &&
            mes !== "julio" && mes !== "agosto" && mes !== "septiembre" && mes !== "octubre" && mes !== "noviembre" && mes !== "diciembre") {
            console.log("El mes ingresado no es válido.");
            mes = prompt("Ingrese el mes a calcular: ").toLowerCase();
        }
        return mes;
    }

    //Funcion para ingresar los gastos de los productos
    function ingresarGastosProductos(mes) {
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

    //Funcion para ingresar los gastos de los servicios
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

    //Funcion para ingresar las ganancias
    function ingresarGanancias(mes, año) {
        let ganancias = parseInt(prompt("Ingrese las ganancias del mes de " + mes + " del año " + año));
        while (isNaN(ganancias) || ganancias < 0) {
            console.log("El monto ingresado no es válido.");
            ganancias = parseInt(prompt("Ingrese las ganancias del mes de " + mes + " del año " + año));
        }
        return ganancias;
    }

    //Funcion para calcular el saldo
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

    // Inicializar la página
    inicializarPagina();    
    
});
