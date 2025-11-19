import mongoose from "mongoose";

const HistorialSchema = new mongoose.Schema({
    operacion: String,
    resultado: Number,
    fecha: { type: Date, default: Date.now }
}, { collection: "operacions" });

export default mongoose.model("operacions", HistorialSchema);
