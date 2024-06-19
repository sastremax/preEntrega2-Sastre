document.addEventListener("DOMContentLoaded", function () {
    // Variables globales
    let fichas = JSON.parse(localStorage.getItem("fichas")) || [];
    let idProgresivo = localStorage.getItem("idProgresivo") || 1;
    let fichasContainer = document.getElementById("fichasContainer");
    let mensajeContainer = document.getElementById("mensaje");

    // Función principal para inicializar la página
    function inicializarPagina() {
        crearBotones();
        cargarEventListeners();        
    }

    // Función para crear los botones dinámicamente
    function crearBotones() {
        let contenedorRecuadros = document.querySelector('.contenedor-recuadros');
    
        // Crear contenedor para la primera fila de botones
        let primeraFila = document.createElement('div');
        primeraFila.classList.add('fila-botones');
    
        // Crear botones para la primera fila
        crearBotonPresupuesto(primeraFila);
        crearBotonPacientesNuevos(primeraFila);
        crearBotonBuscarFicha(primeraFila);
    
        // Agregar la primera fila al contenedor principal
        contenedorRecuadros.appendChild(primeraFila);
    
        // Crear contenedor para la segunda fila de botones
        let segundaFila = document.createElement('div');
        segundaFila.classList.add('fila-botones');
    
        // Crear botones para la segunda fila
        crearBotonListadoPacientes(segundaFila);
        crearBotonLimpiar(segundaFila);
        crearBotonesModificarEliminar(segundaFila);
    
        // Agregar la segunda fila al contenedor principal
        contenedorRecuadros.appendChild(segundaFila);

        // Crear contenedor para las fichas de pacientes
        let contenedorFichas = document.createElement('div');
        contenedorFichas.classList.add('contenedor-fichas');
        contenedorRecuadros.appendChild(contenedorFichas);
    }

    function crearBotonPresupuesto(contenedor) {
        let presupuestoRecuadro = document.createElement('div');
        presupuestoRecuadro.classList.add('recuadro', 'presupuesto');
        let presupuestoTitulo = document.createElement('p');
        presupuestoTitulo.textContent = "Presupuesto";
        let presupuestoBoton = document.createElement('button');
        presupuestoBoton.textContent = "Calcular Presupuesto";
        presupuestoBoton.addEventListener('click', function () {
            console.log("Botón Presupuesto clickeado");            
        });
        presupuestoRecuadro.appendChild(presupuestoTitulo);
        presupuestoRecuadro.appendChild(presupuestoBoton);
        contenedor.appendChild(presupuestoRecuadro);
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
            agregarFicha();
        });
        pacientesRecuadro.appendChild(pacientesTitulo);
        pacientesRecuadro.appendChild(agregarFichaBoton);
        contenedor.appendChild(pacientesRecuadro);
    }
    
    // Función para crear botón de Búsqueda de fichas
    function crearBotonBuscarFicha(contenedor) {
        let buscarRecuadro = document.createElement('div');
        buscarRecuadro.classList.add('recuadro');
        let buscarTitulo = document.createElement('p');
        buscarTitulo.textContent = "Búsqueda de fichas";
        let buscarFichaBoton = document.createElement('button');
        buscarFichaBoton.textContent = "Buscar ficha por apellido";
        buscarFichaBoton.addEventListener('click', function () {
            mostrarFichaPorApellido();
        });
        buscarRecuadro.appendChild(buscarTitulo);
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
    
    // Función para cargar event listeners adicionales si es necesario
    function cargarEventListeners() {
        // Cargar event listeners globales si es necesario
    }
    
    // Función para limpiar las fichas mostradas
    function limpiarFichasMostradas() {
        fichasContainer.innerHTML = ""; // Limpiar el contenido del contenedor
        mensajeContainer.textContent = "";
    }
    
    // Función para agregar una nueva ficha médica
    function agregarFicha() {
        let nuevaFicha = crearFichaDesdePrompt();
        if (nuevaFicha) {
            fichas.push(nuevaFicha);
            guardarFichasEnStorage();
            mensajeContainer.textContent = "Ficha agregada correctamente";
            mostrarTodosLosPacientes(); // Actualizar listado de pacientes
        }
    }
    
    // Función para crear una ficha médica a partir de los datos ingresados por el usuario
    function crearFichaDesdePrompt() {
        let apellido = prompt("Ingrese el apellido del paciente: ");
        if (!apellido) {  // Si se cancela el ingreso, retornar null
            return null;
        }
        let nombre = prompt("Ingrese el nombre del paciente: ");
        let diagnostico = prompt("Ingrese el diagnóstico del paciente: ");
        let fechaNacimiento = prompt("Ingrese la fecha de nacimiento del paciente (YYYY-MM-DD): ");
        let edad = calcularEdad(fechaNacimiento);
        let dni = parseInt(prompt("Ingrese el DNI del paciente (sin puntos): "));
        let cud = prompt("El paciente tiene CUD? (si/no)");
        let obraSocial = prompt("Ingrese la obra social del paciente: ");
        let titularObraSocial = prompt("Ingrese el nombre del titular de la obra social del paciente: ");
        let numeroAfiliado = prompt("Ingrese el número de afiliado del paciente: ");
        let escuela = prompt("Ingrese el nombre de la escuela del paciente: ");
        let mama = prompt("Ingrese el apellido y nombre de la madre del paciente: ");
        let celularMama = prompt("Ingrese el número de celular de la madre del paciente (si no lo sabe, escriba 'no lo se'): ");
        let papa = prompt("Ingrese el apellido y nombre del padre del paciente: ");
        let celularPapa = prompt("Ingrese el número de celular del padre del paciente (si no lo sabe, escriba 'no lo se'): ");
        let neurologo = prompt("Ingrese el nombre del neurologo del paciente (si no lo sabe, escriba 'no lo se'): ");
        let pediatra = prompt("Ingrese el nombre del pediatra del paciente (si no lo sabe, escriba 'no lo se'): ");
    
        return {            
            apellido,
            nombre,
            diagnostico,
            fechaNacimiento,
            edad,
            dni,
            cud,
            obraSocial,
            titularObraSocial,
            numeroAfiliado,
            escuela,
            mama,
            celularMama,
            papa,
            celularPapa,
            neurologo,
            pediatra,
            ficha: idProgresivo++,
        };
    }
    
    // Función para calcular la edad a partir de la fecha de nacimiento
    function calcularEdad(fechaNacimiento) {
        // Lógica para calcular la edad aquí
        return 0; // Temporalmente retorna 0
    }
    
    // Función para guardar las fichas en el almacenamiento local
    function guardarFichasEnStorage() {
        localStorage.setItem("fichas", JSON.stringify(fichas));
        localStorage.setItem("idProgresivo", idProgresivo);
    }
    
    // Función para mostrar todas las fichas de pacientes
    function mostrarTodosLosPacientes() {
        limpiarFichasMostradas();
        if (fichas.length > 0) {
            fichas.forEach(function (paciente) {
                mostrarFicha(paciente);
            });
        } else {
            mensajeContainer.textContent = "No hay pacientes registrados";
        }
    }
    
    // Función para mostrar una ficha de paciente específica
    function mostrarFicha(paciente) {
        let fichaContainer = document.createElement("div");
        fichaContainer.classList.add("fichaPaciente");
    
        let idPaciente = document.createElement("p");
        idPaciente.textContent = `FICHA: ${paciente.id}`;        
        fichaContainer.appendChild(idPaciente);
    
        let datosPaciente = document.createElement("div");
        datosPaciente.innerHTML = `
            <p>Apellido: <strong>${paciente.apellido.toUpperCase()}</strong></p>            
            <p>Nombre: <strong>${paciente.nombre}</strong></p>
            <p>Diagnóstico: <strong>${paciente.diagnostico}</strong></p>
            <p>Fecha de Nacimiento: <strong>${paciente.fechaNacimiento}</strong></p>
            <p>Edad: <strong>${paciente.edad}</strong></p>
            <p>DNI: <strong>${paciente.dni}</strong></p>
            <p>CUD: <strong>${paciente.cud}</strong></p>
            <p>Obra Social: <strong>${paciente.obraSocial}</strong></p>
            <p>Titular Obra Social: <strong>${paciente.titularObraSocial}</strong></p>
            <p>Número de Afiliado: <strong>${paciente.numeroAfiliado}</strong></p>
            <p>Escuela: <strong>${paciente.escuela}</strong></p>
            <p>Madre: <strong>${paciente.mama}</strong></p>
            <p>Celular Madre: <strong>${paciente.celularMama}</strong></p>
            <p>Padre: <strong>${paciente.papa}</strong></p>
            <p>Celular Padre: <strong>${paciente.celularPapa}</strong></p>
            <p>Neurólogo: <strong>${paciente.neurologo}</strong></p>
            <p>Pediatra: <strong>${paciente.pediatra}</strong></p>            
        `;
        fichaContainer.appendChild(datosPaciente);
    
        // Agregar la ficha al contenedor de fichas
        let contenedorFichas = document.querySelector('.contenedor-fichas');
        fichasContainer.appendChild(fichaContainer);
    }
    
    // Función para buscar y mostrar una ficha por apellido
    function mostrarFichaPorApellido() {
        let apellidoBuscar = prompt("Ingrese el apellido del paciente a buscar: ");
        limpiarFichasMostradas();
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
            return paciente.idPaciente === idModificar;
        });
        
        // Si se encontró al paciente
        if (pacienteEncontrado) {
            // Mostrar mensaje de confirmación
            mensajeContainer.textContent = `Modificando ficha del paciente: ${idModificar}`;
            
            // Solicitar al usuario los nuevos datos
        
           
            // Actualizar el array 'fichas' en la posición correspondiente
            // (no es necesario en este caso porque 'pacienteEncontrado' ya es una referencia al objeto en 'fichas')
            
            // Guardar las fichas actualizadas en el localStorage
            guardarFichasEnStorage();
            
            // Actualizar la interfaz llamando a mostrarTodosLosPacientes()
            mostrarTodosLosPacientes(); // Esta función debería reflejar los cambios realizados
        } else {
            // Si no se encontró al paciente, mostrar mensaje de error
            mensajeContainer.textContent = `No se encontró ningún paciente con el ID ${idModificar}`;
        }
    }
    
    // Función para eliminar una ficha de paciente
    function eliminarFicha() {
        // Solicitar al usuario el ID del paciente a eliminar
        let idEliminar = parseInt(prompt("Ingrese el número de la ficha del paciente a eliminar: "));
        
        // Validar si el ID ingresado es válido
        if (!idEliminar || isNaN(idEliminar)) {
            mensajeContainer.textContent = "Debe ingresar un número de FICHA válido";
            return;
        }
        
        // Buscar al paciente por su ID en el array 'fichas'
        let indiceEliminar = fichas.findIndex(function (paciente) {
            return paciente.id === idEliminar;
        });
        
        // Si se encontró al paciente
        if (indiceEliminar !== -1) {
            
            fichas.splice(indiceEliminar, 1);
            
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
    
    // Inicializar la página
    inicializarPagina();
});