const INGRESOS = [    
    new Ingreso("Alquileres", 500000.00),    
];
const EGRESOS = [
    new Egreso("Alquiler Consultorio", 320000.00),    
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
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
let formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-US',{style:'percent', minimumFractionDigits: 2})
}

let cargarIngresos = ()=>{
    let ingresosHTML = ``;
    for(let ingreso of INGRESOS){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">+ ${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn1" title="Eliminar">
                    <ion-icon name="close-circle-outline"
                    onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                </button>
            </div>
        </div>                                
    </div>
    `;
    return ingresoHTML;
}

let eliminarIngreso = (id)=>{
    let indiceEliminar = INGRESOS.findIndex( ingreso => ingreso.id === id);
    INGRESOS.splice(indiceEliminar,1);
    cargarCabecero();
    cargarIngresos();
}

let cargarEgresos = (id)=>{
    let egresosHTML = ``;
    for(let egreso of EGRESOS){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

let crearEgresoHTML = (egreso)=>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">- ${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn2" title="Eliminar">
                    <ion-icon name="close-circle-outline"
                    onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                </button>
            </div>
        </div>                                
    </div>
    `;
    return egresoHTML;
}

let eliminarEgreso = (id)=>{
    let indiceEliminar = EGRESOS.findIndex( egreso => egreso.id === id);
    EGRESOS.splice(indiceEliminar,1);
    cargarCabecero();
    cargarEgresos();
}

let agregarDato = ()=>{
    let forma = document.forms["forma"];
    let tipo = forma ["tipo"];
    let descripcion = forma ["descripcion"];
    let valor = forma ["valor"];
    if(descripcion.value !== "" && valor.value !== ""){
        if(tipo.value === "ingreso"){
            INGRESOS.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
        }else if(tipo.value === "egreso"){
            EGRESOS.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}

