import { Router } from 'express';
import { sumar } from '../controllers/sumaController.js';
import { restar } from '../controllers/restaController.js';
import { operar } from '../controllers/operarController.js';
import { getHistorial } from '../controllers/historialController.js';

const router = Router();

router.post('/sumar', sumar);
router.post('/restar', restar);
router.post('/operar', operar);
router.get('/historial', getHistorial);
    
export default router;
