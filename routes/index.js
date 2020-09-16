const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

module.exports = function() {
    //Añade nuevos pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );

    //Obtiene todos los registros de pacientes de la BD
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    //Obtiene un paciente en especifico (ID)
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    //Actualizar un registro con un ID específico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    //Eliminar un paciente por su ID
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    );

    return router;
}