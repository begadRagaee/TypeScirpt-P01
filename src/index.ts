import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import errorMiddleware from './middleware/error.middleware';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
// Middelware to parse incoming Request
app.use(express.json());
// HTTP Request Log Middelwere
app.use(morgan('common'));
// HTTP Security Middelwere
app.use(helmet());
// Apply the rate limiting middleware to all requests
app.use(
  rateLimit({
    windowMs: 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: 'Too Many Request From ip , Please Try Again after an 15 minutes',
  })
);

app.get('/', (req: Request, res: Response) => {
  throw new Error('Error exist');
  res.json({
    message: 'hello world 🌍',
  });
});

app.post('/', (req: Request, res: Response) => {
  res.json({
    message: 'hello world 🌍',
    data: req.body,
  });
});

app.use(errorMiddleware);

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message: 'oHH you are lost, read the api doc to find your way back home 😃',
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
