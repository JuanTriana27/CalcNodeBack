import express from 'express';
import cors from 'cors';
import routes from './routes/index.routes.js';

const app = express();

app.use(cors({
    origin: [
        'http://localhost:4200',
        'https://calculadora-front-node.vercel.app',
        'https://calculadora-front-node.vercel.app/'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Backend running' });
});

export default app;
