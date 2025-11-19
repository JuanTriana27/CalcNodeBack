import app from './src/app.js';
import { PORT } from './src/config/index.js';
import { connectDB } from "./src/config/database.js";

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});