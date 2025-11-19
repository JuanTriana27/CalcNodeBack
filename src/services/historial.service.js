import Historial from "../models/historial.model.js";

export const obtenerHistorial = async () => {
    return await Historial.find().sort({ fecha: -1 });
};