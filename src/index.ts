import express from 'express';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/runbook/api/v1', routes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 