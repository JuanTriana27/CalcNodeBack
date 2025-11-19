import Operacion from '../models/Operacion.js';

// Servicio para obtener el historial de operaciones desde la base de datos
export const obtenerHistorialService = async () => {
    const historial = await Operacion.find().sort({ fecha: -1 });
    return historial;
};