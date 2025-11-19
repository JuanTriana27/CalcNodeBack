import mongoose from "mongoose";

const historialSchema = new mongoose.Schema({
    operacion: { type: String, required: true },
    a: { type: Number, required: true },
    b: { type: Number, required: true },
    resultado: { type: Number, required: true },
    fecha: { type: Date, default: Date.now }
});

export default mongoose.model("Historial", historialSchema);