import { obtenerHistorial } from "../services/historial.service.js";

export const getHistorial = async (req, res) => {
    try {
        const data = await obtenerHistorial();
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ error: "Error obteniendo historial" });
    }
};