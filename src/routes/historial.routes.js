import { Router } from "express";
import { getHistorial } from "../controllers/historialController.js";

const router = Router();

router.get("/", getHistorial);

export default router;
