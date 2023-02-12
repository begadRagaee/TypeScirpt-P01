import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { setMaxListeners } from 'events';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'hello world 🌍',
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
