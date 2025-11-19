import { obtenerHistorialService } from '../services/historial.service.js';

export const obtenerHistorial = async (req, res) => {
    try {
        const historial = await obtenerHistorialService();
        res.json({ historial });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};