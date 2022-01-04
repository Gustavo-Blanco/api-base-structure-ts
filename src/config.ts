import { config } from 'dotenv'
import { join } from 'path';

config({ path: join(__dirname, '../.env') });

const { PORT, DB_CONNECTION_URL } = process.env;

export const env = {
    PORT: PORT || '3000',
    DB_CONNECTION_URL: DB_CONNECTION_URL || 'mysql://root:pass@localhost:3306/db'
};

