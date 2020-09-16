const Paciente = require('../models/Paciente');

//Cuando se crea el nuevo cliente
exports.nuevoCliente = async(req, res, next) => {
    //Crear objecto paciente
    const paciente = new Paciente(req.body);
    try {
        await paciente.save();
        res.json({ mensaje: 'El cliente se ha agregado correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
    
}

//Obtiene todos los pacientes
exports.obtenerPacientes = async(req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Obtiene un paciente por su ID
exports.obtenerPaciente = async(req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Actualizar registro de un paciente
exports.actualizarPaciente = async(req, res, next) => {
    try {
        const pacienteActualizado = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.json(pacienteActualizado);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar paciente
exports.eliminarPaciente = async(req, res, next) => {
    try {
        await Paciente.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'El paciente ha sido eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}