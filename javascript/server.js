const express = require('express');
const Chance = require('chance');
const APP = express();
APP.use(express.json());    
const chance = new Chance();
    const GENERARPACIENTEALEATORIO = () => {
        return {
            apellido: chance.last(),
            nombre: chance.first(),            
            diagnostico: chance.sentence({ words: 7 }),
            fechaNacimiento: chance.birthday({ string: true }),
            edad: chance.age({min: 1, max: 25}),
            dni: chance.integer({ min: 35000000, max: 69999999 }),
            cud: chance.bool() ? 'sí' : 'no',
            obraSocial: chance.company(),
            domicilio: chance.address(),
            titularObraSocial: chance.name(),
            numeroAfiliado: chance.string({ length: 10, alpha: false, numeric: true }),
            escuela: chance.company(),
            madre: chance.name(),
            celularMama: chance.phone(),
            padre: chance.name(),
            celularPapa: chance.phone(),
            neurologo: chance.name(),
            pediatra: chance.name()
        };
    };
    let pacientes = [];
    for (let i = 0; i < 50; i++) {
        pacientes.push(GENERARPACIENTEALEATORIO());
    }
    APP.get("/api/pacientes", (req, res) => {
        res.json(pacientes);
    });
    APP.get("/api/pacientes/:id", (req, res) => {
        const ID = parseInt(req.params.id);
        if (ID>=0 && ID<pacientes.length) {
            res.json(pacientes[ID]);
        } else {
            res.status(404).json({message: "Paciente no encontrado" });
        }
    });
    const PORT = process.env.PORT || 3000;
    APP.listen(PORT, () => {
        console.log(`servidor escuchando en http://localhost:${PORT}`);
    });