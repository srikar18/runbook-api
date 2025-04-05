import { Router } from 'express';
import { ResponseHelper } from '../utils/ResponseHelper';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

const router = Router();
const swaggerDocument = YAML.load(path.join(__dirname, '../config/openapi.yml'));

// Health check
router.get('/health', (req, res) => {
  ResponseHelper.sendOk(res, { message: 'OK' });
});

// API Documentation
if (process.env.NODE_ENV === 'development') {
  router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

export default router;
