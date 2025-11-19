import { Router } from 'express';
import { sumar } from '../controllers/sumaController.js';
import { obtenerHistorial } from '../controllers/historialController.js';

const router = Router();

router.post('/sumar', sumar);
router.get('/historial', obtenerHistorial);

export default router;
