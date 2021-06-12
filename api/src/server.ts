import express, { json, Response, Request, NextFunction } from 'express';
import logging from './config/logging';
import config, { SERVER_NAMESPACE } from './config/config';
import cors from 'cors';
const app = express();
/** Log the request */
app.use((req: Request, res: Response, next: NextFunction) => {
  logging.info(
    `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`,
    SERVER_NAMESPACE
  );

  next();
});

/** Middleware */
app.use(json());
app.use(cors());

/** Routes go here */

app.listen(config.server.port, () => {
  logging.info(
    SERVER_NAMESPACE,
    `Server is running ${config.server.hostname}:${config.server.port}`
  );
});
