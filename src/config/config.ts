import dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  MYNAME,
  NODE_ENV,
  PGHOST,
  PGUSER,
  PGDATABASE,
  PGDATABASE_TEST,
  PGPASSWORD,
  PGPORT,
} = process.env;

export default {
  port: PORT,
  myName: MYNAME,
  dbHost: PGHOST,
  pgUser: PGUSER,
  pgDd: NODE_ENV === 'dev' ? PGDATABASE : PGDATABASE_TEST,
  pgPasssword: PGPASSWORD,
  pgPort: PGPORT
};
