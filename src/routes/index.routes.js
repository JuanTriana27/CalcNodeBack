import { Router } from 'express';
import calcRoutes from './calcRoutes.js';

const router = Router();

// Reenvía todo lo de calc.routes.js
router.use('/', calcRoutes);

export default router;
