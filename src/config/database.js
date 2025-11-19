import mongoose from 'mongoose';
import { MONGO_URI } from './index.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB conectado exitosamente");
    } catch (error) {
        console.error("Error conectando a MongoDB:", error.message);
        process.exit(1);
    }
};
