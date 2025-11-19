import express from "express";
import { operar } from "../controllers/operarController.js";

const router = express.Router();

router.post("/operar", operar);

export default router;
