import express from 'express';
import cors from 'cors';
import routes from './routes/index.routes.js';

const app = express();

// Configuración de CORS dinámica
const allowedOrigins = process.env.NODE_ENV === 'production'
    ? [
        'https://calculadora-front-node.vercel.app',
        'https://calcnodeback.onrender.com'
    ]
    : [
        'http://localhost:4200',
        'http://localhost:3000'
    ];

app.use(cors({
    origin: function (origin, callback) {
        // Permitir requests sin origen (como mobile apps o curl)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log('Origen bloqueado por CORS:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/test-cors', (req, res) => {
    res.json({
        message: 'CORS test successful',
        timestamp: new Date().toISOString(),
        allowedOrigins: allowedOrigins
    });
});

export default app;