import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundRoute from './app/middleware/notFountRoute';
const app: Application = express();

app.use(
  cors({ origin: 'https://assigment-client.netlify.app', credentials: true }),
);
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.use('/api', router);

app.use(globalErrorHandler);
// not found route
app.use(notFoundRoute);

export default app;
