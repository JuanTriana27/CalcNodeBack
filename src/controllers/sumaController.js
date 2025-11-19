import { sumarService } from '../services/suma.service.js';


export const sumar = async (req, res) => {
    try {
        const { a, b } = req.body;

        const resultado = await sumarService(a, b);

        res.json({ resultado });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

