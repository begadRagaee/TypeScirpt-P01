import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

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

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
