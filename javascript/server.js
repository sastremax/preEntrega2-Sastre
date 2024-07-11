const express = require('express');
const Chance = require('chance');
const Swal = require('sweetalert2');
const APP = express();
APP.use(express.json());    
const chance = new Chance();
    const GENERARPACIENTEALEATORIO = () => {
        return {
            apellido: CHANCE.last(),
            nombre: CHANCE.first(),            
            diagnostico: CHANCE.sentence({ words: 7 }),
            fechaNacimiento: CHANCE.birthday({ string: true }),
            edad: CHANCE.age({min: 1, max: 25}),
            dni: CHANCE.integer({ min: 35000000, max: 69999999 }),
            cud: CHANCE.bool() ? 'sí' : 'no',
            obraSocial: CHANCE.company(),
            domicilio: CHANCE.address(),
            titularObraSocial: CHANCE.name(),
            numeroAfiliado: CHANCE.string({ length: 10, alpha: false, numeric: true }),
            escuela: CHANCE.company(),
            madre: CHANCE.name(),
            celularMama: CHANCE.phone(),
            padre: CHANCE.name(),
            celularPapa: CHANCE.phone(),
            neurologo: CHANCE.name(),
            pediatra: CHANCE.name()
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
        Swal.fire({
            icon: 'success',
            title: 'Servidor',
            text: `servidor escucha el puerto ${PORT}`,
        });            
    });