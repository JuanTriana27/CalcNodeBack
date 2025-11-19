import 'dotenv/config';

export const PORT = process.env.PORT || 3000;

export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;
export const DB_NAME = process.env.DB_NAME;
export const DB_HOST = process.env.DB_HOST;

export const MONGO_URI =
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=${DB_NAME}`;
