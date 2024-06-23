import prompt from 'prompt';

// simulador de presupuesto de un consultorio medico y luego fichas medicas para ingreso de datos con ARRAYS para las/los terapeutas//

// variables declaradas y algunas inicializadas //

let mes = "";
let año = "";
let ingresos = 0;
let egresos = 0;
let respuesta = "";
let totalGastosProductos;
let totalGastosServicios;
let resultado;
let historial = "";


// funcion para validar el año ingresado //

/*

function miFuncion() {
    console.log("Ejecutando miFuncion");

}
miFuncion();


let numero = 1;
let maximo = 5;
let acumuladorSuma = 0;
while (numero <= maximo) {
    console.log(`${acumuladorSuma} + ${numero}`);
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
    numero++;
}

function impares() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !==0) {
        console.log(i + " es impar");
        }
    }
}

impares();

function mayorDeEdad(edad) {
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}

mayorDeEdad(19);

Consigna.
Tomando como base los ejemplos de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones.
En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
Aspectos a incluir
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, 
que incluya la definición de un algoritmo en JavaScript que emplee bucles e instrucciones condicionales.
Podrás encontrar un ejemplo en la carpeta “Ejemplos de actividades”

Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado 

let suma = 0;
const CANTIDAD = 10;

for (let i = 1; i <= CANTIDAD; i++) {
    let num = parseInt(prompt("Ingrese un número"));
    suma += num;    
    alert(`${num} + ${suma - num} = ${suma}`);
}

function esPar() {
    let numero = prompt("Ingrese un numero: "); 
    numero = parseInt(numero);
    if (isNaN(numero)) {
        console.log("No ingresaste un número");
        return;
    }
    
    if (numero % 2 == 0) {        
        console.log("El número es par");
    } else {    
        console.log("El número es impar");
}
}
esPar();

Pedir un texto mediante prompt, concatenar un valor en cada repetición,
realizando una salida por cada resultado, hasta que se ingresa “ESC”. 

let texto = prompt("Ingrese un texto");
let textoFinal = texto;
let textoJunto = " ";

while (textoJunto.toUpperCase() != "ESC") {
    textoJunto = prompt("Ingrese un texto para concatenar al anterior");     
    textoFinal = textoFinal + " " + textoJunto; 
    console.log(textoFinal); 
}

// ciclo por condiciones:

let suma2 = 0;
while (suma2 <= 100) {
    let num2 = parseInt(prompt("Ingrese un numero:"))    
    let sumaAnterior2 = suma2;
    suma2 += num2;
    console.log(`${num2} + ${sumaAnterior2} = ${suma2}`);   
}

Consigna. 
Tomando como base los ejemplos de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones.
En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
Aspectos a incluir
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, 
que incluya la definición de un algoritmo en JavaScript que emplee bucles e instrucciones condicionales.
Podrás encontrar un ejemplo en la carpeta “Ejemplos de actividades”

Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado 
ciclo por conteo/contador:


let suma = 0;
for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("Ingrese un número"));
    let sumaAnterior = suma;    
    suma += num;    
    alert(`${num} + ${sumaAnterior} = ${suma}`);
}


let a, b, c, d, e, f;

// suma
a = 3 + 4;
console.log(a);

// resta
b = 6 -2
console.log(b)

// multiplicacion
c = a * 2;
console.log(c);

// division
d = b / 2.5;
console.log(d); 
console.log(typeof d);

// modulo
e = a % b;
console.log(e);

//potencia
f = 2 ** 3;
console.log(f);

a = 5;
b = 3;
c = ++a * b--;
console.log(c);
console.log(a);
console.log(b);

//  operadores logicos

let u = true;
let i = false;
console.log(u);
console.log(i);

// operador and

console.log(`${u} && ${i} -> ${u && i}`);

// operador ! not

console.log(`${u} -> ${!u}`)

let num1 = parseInt(prompt("Ingrese un numero del 1 al 1000"));

if ((num1 !="") && (num1 >1000)) {
    alert("el número elegido es mayor a 1000");
}

let texto = prompt("Hola");

if ((texto == "Hola") || (texto == "hola") || (texto == "HOLA") ) {
    alert("Hola, que tal?");
} else {
    alert("El texto ingresado es: "+texto+" y es distinto a Hola");
}

let num2 = parseInt(prompt("Ingrese otro número:"));

if ((num2 >10) && (num2 <50)) {
    alert("El número ingresado está entre 10 y 50");
}

let minimo = 10;
let maximo = 50;
let valor = parseInt(prompt("Ingrese un número entre 10 y 50"));
    if (valor > minimo && valor < maximo) {
    alert("El número ingresado está entre 10 y 50");
    }

*/

function validarAño() {
    año = prompt("Ingrese el año a calcular: ");
    while (año < 2020 || isNaN(año) || año.toString() !== año) {
    console.log("El año ingresado no es válido.");
    año = prompt("Ingrese el año a calcular: ");    
    }
    return año;
}

// funciojn para validar el mes ingresado //

function validarMes() {
    mes = prompt("Ingrese el mes a calcular: ").toLowerCase();
    while (mes !== "enero" && mes !== "febrero" && mes !== "marzo" && mes !== "abril" && mes !== "mayo" && mes !== "junio" &&
    mes !== "julio" && mes !== "agosto" && mes !== "septiembre" && mes !== "octubre" && mes !== "noviembre" && mes !== "diciembre") {
    console.log("El mes ingresado no es válido.");
    mes = prompt("Ingrese el mes a calcular: ").toLowerCase();    
    }
    return mes;
}

// funcion para ingresar gastos de forma individual por cada producto //

function ingresarGastosProductos() {
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

// funcion para ingresar gastos de forma individual por servicios de empleados //

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

// funcion para registrar las ganancias de forma mensual //

function ingresarGanancias(mes, año) {
    let ganancias = parseInt(prompt("Ingrese las ganancias del mes de " + mes + " del año " + año));
    while (isNaN(ganancias) || ganancias < 0) {
        console.log("El monto ingresado no es válido.");
        ganancias = parseInt(prompt("Ingrese las ganancias del mes de " + mes + " del año " + año));
    }
    return ganancias;
}

// Función para calcular el saldo
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

//  funcion para gestionar el presupuesto //

function gestionarPresupuesto() {
    año = validarAño();
    mes = validarMes();
    totalGastosProductos = ingresarGastosProductos();
    totalGastosServicios = ingresarGastosServicios();
    ingresos = ingresarGanancias(mes, año);
    egresos = totalGastosProductos + totalGastosServicios;
    calcularSaldo(ingresos, egresos, mes, año);    
    do {
        respuesta = prompt("¿Desea seguir ingresando saldos? (si/no)").toLowerCase();
        if (respuesta === "si" || respuesta === "s") {
            año = validarAño();
            mes = validarMes();
            totalGastosProductos = ingresarGastosProductos();
            totalGastosServicios = ingresarGastosServicios();
            ingresos = ingresarGanancias(mes, año);
            egresos = totalGastosProductos + totalGastosServicios;
            calcularSaldo(ingresos, egresos, mes, año);
        }
    } while (respuesta === "si" || respuesta === "s");
}

gestionarPresupuesto();

console.log("Historial de saldos:\n" + historial);






function miFuncion() {
    console.log("Ejecutando miFuncion");

}
miFuncion();


let numero = 1;
let maximo = 5;
let acumuladorSuma = 0;
while (numero <= maximo) {
    console.log(`${acumuladorSuma} + ${numero}`);
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
    numero++;
}

function impares() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !==0) {
        console.log(i + " es impar");
        }
    }
}

impares();

function mayorDeEdad(edad) {
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}

mayorDeEdad(19);
/*
Consigna.
Tomando como base los ejemplos de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones.
En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
Aspectos a incluir
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, 
que incluya la definición de un algoritmo en JavaScript que emplee bucles e instrucciones condicionales.
Podrás encontrar un ejemplo en la carpeta “Ejemplos de actividades”

Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado 
*/
let suma = 0;
const CANTIDAD = 10;

for (let i = 1; i <= CANTIDAD; i++) {
    let num = parseInt(prompt("Ingrese un número"));
    suma += num;    
    alert(`${num} + ${suma - num} = ${suma}`);
}

function esPar() {
    let numero = prompt("Ingrese un numero: "); 
    numero = parseInt(numero);
    if (isNaN(numero)) {
        console.log("No ingresaste un número");
        return;
    }
    
    if (numero % 2 == 0) {        
        console.log("El número es par");
    } else {    
        console.log("El número es impar");
}
}
esPar();

//Pedir un texto mediante prompt, concatenar un valor en cada repetición,
// realizando una salida por cada resultado, hasta que se ingresa “ESC”. 

let texto3 = prompt("Ingrese un texto");
let textoFinal = texto3;
let textoJunto = " ";

while (textoJunto.toUpperCase() != "ESC") {
    textoJunto = prompt("Ingrese un texto para concatenar al anterior");     
    textoFinal = textoFinal + " " + textoJunto; 
    console.log(textoFinal); 
}

// ciclo por condiciones:

let suma2 = 0;
while (suma2 <= 100) {
    let num2 = parseInt(prompt("Ingrese un numero:"))    
    let sumaAnterior2 = suma2;
    suma2 += num2;
    console.log(`${num2} + ${sumaAnterior2} = ${suma2}`);   
}
/*
Consigna. 
Tomando como base los ejemplos de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones.
En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
Aspectos a incluir
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, 
que incluya la definición de un algoritmo en JavaScript que emplee bucles e instrucciones condicionales.
Podrás encontrar un ejemplo en la carpeta “Ejemplos de actividades”

Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado 
ciclo por conteo/contador:


let suma = 0;
for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("Ingrese un número"));
    let sumaAnterior = suma;    
    suma += num;    
    alert(`${num} + ${sumaAnterior} = ${suma}`);
}


let a, b, c, d, e, f;

// suma
a = 3 + 4;
console.log(a);

// resta
b = 6 -2
console.log(b)

// multiplicacion
c = a * 2;
console.log(c);

// division
d = b / 2.5;
console.log(d); 
console.log(typeof d);

// modulo
e = a % b;
console.log(e);

//potencia
f = 2 ** 3;
console.log(f);

a = 5;
b = 3;
c = ++a * b--;
console.log(c);
console.log(a);
console.log(b);

//  operadores logicos

let u = true;
let i = false;
console.log(u);
console.log(i);

// operador and

console.log(`${u} && ${i} -> ${u && i}`);

// operador ! not

console.log(`${u} -> ${!u}`)

let num1 = parseInt(prompt("Ingrese un numero del 1 al 1000"));

if ((num1 !="") && (num1 >1000)) {
    alert("el número elegido es mayor a 1000");
}

let texto = prompt("Hola");

if ((texto == "Hola") || (texto == "hola") || (texto == "HOLA") ) {
    alert("Hola, que tal?");
} else {
    alert("El texto ingresado es: "+texto+" y es distinto a Hola");
}

let num2 = parseInt(prompt("Ingrese otro número:"));

if ((num2 >10) && (num2 <50)) {
    alert("El número ingresado está entre 10 y 50");
}

let minimo = 10;
let maximo2 = 50;
let valor = parseInt(prompt("Ingrese un número entre 10 y 50"));
if (valor > minimo && valor < maximo2) {
    alert("El número ingresado está entre 10 y 50");
}

//metodo de iteracion array

const LETRAS = ["A", "B", "C"];

    for (let index = 0; index < LETRAS.length; index++) {
        const ELEMENTOS = LETRAS[index];
        console.log(ELEMENTOS);
    }

    const LETRAS2 = ["A", "B", "C"];

    LETRAS2.forEach(item => console.log(item));


function operar (num1, num2, operacion){
    return operacion(num1, num2);
}

function suma (a,b){
    return a + b;                 
}

function resta (a,b){
    return a - b;
}

function multiplicar (a,b){
    return a * b;
}

console.log(operar(5,8,suma));

/*
diferencia entre procedicimiento y funcion:
    - procedimiento no retorna un valor
    - funcion retorna un valor

    - la funcion es un objeto que se puede asignar a una variable
    - el procedimiento no se puede asignar a una variable

    - la funcion se puede pasar como parametro
    - el procedimiento no se puede pasar como parametro

    ejemplo de procedimiento:
    function saludar(mensaje){
        console.log('Mensaje: ${mensaje}');
    }

    llamar al procedimiento
    saludar('Hola');

    ejemplo de funcion:
    function sumar(a,b){
        let resultado = a + b;
        return 'resultado: ${resultado}';
    }

    llamar a la funcion
    let argA = 5, argB = 7;
    let resultado = sumar(argA, argB);

    paso por valor y paso por referencia
    - paso por valor: se pasa una copia del valor de la variable
    - paso por referencia: se pasa la direccion de memoria de la variable
    
    paso por valor: pasando informacion de tipo primitivo

    function cambiarValor(parametro){
        parametro = 20;
    }

    let argumento = 10;
    cambiarValor(argumento);
    console.log(argumento);

    paso por referencia: pasando informacion de tipo objeto
    objetos(array, funciones, etc) se pasan por referencia
    
    

    function cambiarValor(parametro){
        parametro[0] = 20;
    }

    let arreglo = [10];
    console.log(`antes de la funcion: ${arreglo[0]}`);
    cambiarValor(arreglo);
    console.log(`despues de la funcion: ${arreglo[0]}`);

    // metodos de array

let array4 = ["jorge", "luis", "maria", "jose"];
console.log(array4.lastIndexOf("jose"));


let array5 = ["jorge", "luis", "maria", "jose"];
console.log(array5.includes("jose"));


// funciones que retornan funciones

function mayorQue(x) {
    return (num) => num > x;
}

const mayorQue10 = mayorQue(10);

const mayorQue20 = mayorQue(20);

console.log(mayorQue10(9));


function asignarOperacion(operacion) {
    if (operacion === "suma") {
        return function(numero1,numero2){
            return numero1 + numero2;
        }
        } else if (operacion === "resta") {
            return(numero1,numero2) => numero1 - numero2;            
        }    
}

let suma = asignarOperacion("suma");
let resta = asignarOperacion("resta");

console.log(suma(4,8));
console.log(resta(9,8));

//metodos de redondeo

let numero1 = 4.5;
let numero2 = 3.2;
console.log(Math.round(numero1));
console.log(Math.round(numero2|));


function resultadoTrabajoFinal(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function aprobado() {
    return resultadoTrabajoFinal(9,10);
}

console.log(aprobado());



function enteroAleatorioEntre(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function generarContraseña(longitud) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let contrasena = "";
    for (let i = 0; i < longitudContrasena; i++) {
        contrasena += caracteres.charAt(enteroAleatorioEntre(0,caracteres.length));
    }
    return contrasena;
}

let longitudContrasena = 7;
let contrasenaAleatoria = generarContraseña(longitudContrasena);
console.log(contrasenaAleatoria);



//  Date

let fecha = new Date();
console.log(fecha);

//fecha especifica

let fechaEspecifica = new Date(2024,5,2,13,45,23);
console.log(fechaEspecifica);



sessionStorage.setItem("nombre", "Jorge");

sugar sintax

una carcteristica que se encuentra en cualquier lenguaje de programacion. no añade funcionalidades. lo que hace es crear un codigo mas facil de leer y escribir
presenta forma compacta de expresar construcciones de codigo.



template literals => el reemplazo de la concatenacion, llevando el codigo a una manera sencilla de AudioListener



let name = "julian";

console.log("hola soy " + name + " tengo 26 años");

console.log(`hola soy ${name} tengo 26 años`);

//operador ternaria

toma 3 OPERADOR
condicion ? valor si es verdadero expresion1 : valor si es falso expresion2


let nombreUsuario= null;

let nombre = nombreUsuario ? nombreUsuario : "invitado";
console.log(nombre);

function obtenerDescuento(edad) {
    return edad > 10 ? 0.1 : 0.2;
}
console.log(obtenerDescuento(15));
console.log(obtenerDescuento(25));

const estaLogueado = true;

const usuario = estaLogueado && {nombre:"jorge", edad: 25};
console.log(usuario);

const usuario ={
    siEstaLogueado: true,
    siEsAdmin:true,
    nombre: "jorge"
}

usuario.siEstaLogueado && console.log(`Bienvenido ${usuario.nombre}`);
usuario.siEstaLogueado && usuario.siEsAdmin && console.log(`tiene acceso`);

//operador logico or: si el primer valor es verdadero, devuelve el primer valor, si no, devuelve el segundo valor
// si el primer operador es falso, devuelve el segundo valor
let usuario2 ={
    nombre: null;
}
let usuarioActivo;

if(usuario.nombre){
    usuarioActivo = usuario.nombre;
}else{
    usuarioActivo = "invitado";
}
console.log(usuarioActivo);

const configuracionUsuario ={
    tema: null,
    lenguaje: "ingles"
    }

    const configuracionPorDefecto ={
    tema: "oscuro",
    lenguaje: "español"
    }

const configuracionFinal ={
    tema: configuracionUsuario.tema || configuracionPorDefecto.tema,
    lenguaje: configuracionUsuario.lenguaje || configuracionPorDefecto.lenguaje
}

console.log(configuracionFinal);


//operador or = retorna el primer operando si este es verdadero, de lo contrario, retorna el segundo operando
//operador Nullish = retorna el primer operando si este no es null o undefined, de lo contrario, retorna el segundo operando

const preferenciasUsurio ={
    colorFondo: null,
    tamañoLetras: 14,
    tema: "claro"
}

const colorFondo = preferenciasUsurio.colorFondo ?? "blanco";
const tamañoLetras = preferenciasUsurio.tamañoLetras ?? 16;
const tema = preferenciasUsurio.tema ?? "oscuro";

console.log(`el color de fondo es ${colorFondo}`);
console.log(`el tamaño de letra es ${tamañoLetras}`);
console.log(`el tema es ${tema}`);


//Destructuracion o destructuring

//es una expresion que permite desempaquetar valores de arreglos u objetos en distintas variables

//destructuracion de arreglos

const PERSONA = {
    nombre: "Walter",
    edad: 27,
    ciudad: "Santa Rosa"
}

let {nombre, edad} = PERSONA; // son las variables que se van a crear
console.log(nombre, edad);


const PERRO ={
    duenio: "marcelo",
    nombre: "Toby",
    raza: "Labrador Retriever",
    color: "blanco",
    edad: 4,
    direccion: {
        calle: "Av. Mitre",
        numero: 750,
        ciudad: "Mar de Ajo",
    }    
}

let {duenio, raza, edad:pedro, direccion:{calle, numero, ciudad}} = PERRO;

console.log(duenio);
console.log(raza);
console.log(calle);
console.log(pedro);


const PRODUCTOS = [
    {id: 1, nombre: "camisa", precio: 2000},
    {id: 2, nombre: "pantalon", precio: 2500},
    {id: 3, nombre: "buzo", precio: 3000},
]

PRODUCTOS.forEach(({nombre, precio}) => {
    console.log(`${nombre}: ${precio}`);
})
   

//Agregar mas de un evento a un elemento

document.addEventListener("DOMContentLoaded", function() {
    let miBoton = document.getElementById("miBoton");

    // ahora el evento "click"
    miBoton.addEventListener("click", function() {
        alert("has echo click en el boton");
    });

    // Evento mouseover
    miBoton.addEventListener("mouseover", function() {
        miBoton.style.backgroundColor = "lightblue";
    });


    // Evento mouseout
    miBoton.addEventListener("mouseout", function() {
        miBoton.style.backgroundcolor = "";
    });


    // Evento dblclick (doble clic)
    miBoton.addEventListener("dblclick", function() {
        miBoton.textContent = "haz hecho doble clic";
    });

});


// Capturar la Tecla ENTER para Confirmar una Acción




//  Formulario con "submit"

    // Espera a que el DOM esté completamente cargado antes de ejecutar el código
    document.addEventListener("DOMContentLoaded", function() { 
        // Obtiene el elemento formulario del DOM con el id 'miFormulario'
        let formulario = document.getElementById("formularioFicha"); 

        // Agrega un event listener para el evento 'submit' del formulario
        formulario.addEventListener("submit", function(event) {
             // Evita el envío del formulario y refresco de la pagina
        event.preventDefault();      

        // ebtener el valor del campo de entrada con id 'nombre' del formulario
        let nombre = document.getElementById("nombre").value;
        // ebtener el valor del campo de entrada con id 'apellido' del formulario    
        let apellido = document.getElementById("apellido").value;

        // imprimir los valores obtenidos en la console
        console.log(`Nombre: ${nombre} Apellido: ${apellido}`);


        alert(`Nombre: ${nombre} Apellido: ${apellido}`);
        });
    });
    */