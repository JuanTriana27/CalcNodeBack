import { Router } from "express";
import calcRoutes from "./calcRoutes.js";
import historialRoutes from "./historial.routes.js";

const router = Router();

router.use("/calc", calcRoutes);
router.use("/historial", historialRoutes);

export default router;
