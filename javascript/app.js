const INGRESOS = [
    new Ingreso("Sueldo", 3000000.00),
    new Ingreso("Alquileres", 1000000.00)
];
const EGRESOS = [
    new Egreso("Alquiler", 320000.00),
    new Egreso("Comida", 250000.00)
];
let cargarApp = () => {
    cargarCabecero();
}
let totalIngresos = () => {
    let totalIngreso = 0;
    for(let ingreso of INGRESOS){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () => {
    let totalEgreso = 0;
    for(let egreso of EGRESOS){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabeceero = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById("presupuesto").innerHTML = presupuesto;
}