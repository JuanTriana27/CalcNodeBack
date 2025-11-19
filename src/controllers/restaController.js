import { restarService } from '../services/resta.service.js';


export const restar = async (req, res) => {
    try {
        const { a, b } = req.body;

        const resultado = await restarService(a, b);

        res.json({ resultado });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};