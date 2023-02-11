import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.get('/img', (req: Request, res: Response) => {
    fs.readFile('files/read/logo1.png', function(err, data) {
        if (err) throw err
        res.end(data);
        res.send('<html><body><img src="data:logo1.png;base64,')
    })
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
