import pg from 'pg'
import dotenv from 'dotenv'
import fs from 'fs/promises';
import path from 'path';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    idleTimeoutMillis: 30000,
    max: 10
})

const connectDB = async () => {
    try {
        const client = await pool.connect();
        console.log('Database connected successfully');
        client.release();
    } catch (error) {
        console.log('Database connection failed', error);
        process.exit(1);
    }
};

const loadQuery = async (fileName) => {
    const filePath = path.join(process.cwd(), 'src/queries', fileName);
    return fs.readFile(filePath, 'utf-8');
  };

export {pool, connectDB, loadQuery};
