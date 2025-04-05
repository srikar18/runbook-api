import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import { ResponseHelper } from './utils/ResponseHelper';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/runbook/api/v1', routes);

// 404 Handler
app.use((req, res) => {
  ResponseHelper.sendNotFound(res);
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  ResponseHelper.sendInternalServerError(res, err?.message, err);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
