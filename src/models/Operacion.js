import mongoose from 'mongoose';

const OperacionSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true,
        enum: ['suma', 'resta', 'multiplicacion', 'division', 'expresion']
    },
    expresion: {
        type: String
    },
    a: Number,
    b: Number,
    resultado: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Operacion', OperacionSchema);