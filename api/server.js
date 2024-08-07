const express = require('express');
const cors = require('cors');
const chance = require('chance').Chance();
const app = express();
const port = process.env.PORT || 3000;
const corsOpciones = {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
};
app.use(cors(corsOpciones));
app.use(express.json());
let proximoId = 1;
const GENERARPACIENTEALEATORIO = () => {
    const fechaMinima = new Date();
    fechaMinima.setFullYear(fechaMinima.getFullYear() - 25);
    const fechaMaxima = new Date();
    fechaMaxima.setFullYear(fechaMaxima.getFullYear() - 2);
    const fechaNacimiento = new Date(fechaMinima.getTime() + Math.random() * (fechaMaxima.getTime() - fechaMinima.getTime()));        
    const celularMadre = chance.integer({ min: 11000000, max: 11999999 }).toString();
    const celularPadre = chance.integer({ min: 11000000, max: 11999999 }).toString();
    const numeroAfiliado = chance.string({ length: 10, alpha: true, numeric: true });
    return {
        id: proximoId++,
        apellido: chance.last(),
        nombre: chance.first(),            
        diagnostico: chance.sentence({ words: 7 }),
        fechaNacimiento: fechaNacimiento.toISOString().split('T')[0],
        edad: chance.age({min: 1, max: 25}),
        dni: chance.integer({ min: 35000000, max: 69999999 }),
        cud: chance.bool() ? 'sí' : 'no',
        obraSocial: chance.company(),
        domicilio: chance.address(),
        titularObraSocial: chance.name(),
        numeroAfiliado: numeroAfiliado,
        escuela: chance.company(),
        madre: chance.name(),
        celularMadre: celularMadre.toString(),
        padre: chance.name(),
        celularPadre: celularPadre.toString(),
        neurologo: chance.name(),
        pediatra: chance.name()
    };
};
let pacientes = [];
for (let i = 0; i < 200; i++) {
    pacientes.push(GENERARPACIENTEALEATORIO());
}
app.get("/api/pacientes", (req, res) => {
    res.json(pacientes);
});
app.get("/api/pacientes/:id", (req, res) => {
    const ID = parseInt(req.params.id);
    const paciente = pacientes.find(p => p.id === ID);
    if (paciente) {
        res.json(paciente);
    } else {
        res.status(404).json({message: "Paciente no encontrado" });
    }
});
app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});    
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});