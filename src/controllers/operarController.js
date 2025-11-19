import { operarService } from '../services/operar.service.js';

export const operar = async (req, res) => {
    try {
        const { expresion } = req.body;

        const resultado = await operarService(expresion);

        res.json({ resultado });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
