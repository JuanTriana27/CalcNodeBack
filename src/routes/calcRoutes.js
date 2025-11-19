import { Router } from 'express';
import { sumar } from '../controllers/sumaController.js';
import { getHistorial } from '../controllers/historialController.js';

const router = Router();

router.post('/sumar', sumar);
router.get('/historial', getHistorial);

export default router;
