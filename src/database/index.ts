import { Pool } from 'pg';
import config from '../config/config';

const pool = new Pool({
  host: config.dbHost,
  database: config.pgDd,
  user: config.pgUser,
  password: config.pgPasssword,
  port: parseInt(config.pgPort as string, 10),
  max: 4,
});

pool.on('error', (error: Error) => {
  console.error(error.message);
});

export default pool;
