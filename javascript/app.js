const INGRESOS = [
    new Ingreso("Sueldo", 3005500.00),
    new Ingreso("Alquileres", 1000000.00)
];
const EGRESOS = [
    new Egreso("Alquiler", 320000.00),
    new Egreso("Comida", 150000.00)
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
let cargarCabecero = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = (totalEgresos()/totalIngresos() * 100);
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}
let formatoMoneda = (valor)=>{
    return valor.toLocaleString('es-US',{style:'currency', currency: 'USD', minimumFractionDigits: 2});
}
const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-US',{style:'percent', minimumFractionDigits: 2})
}