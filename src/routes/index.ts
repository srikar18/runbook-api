import { Router } from 'express';
import { ResponseHelper } from '../utils/ResponseHelper';

const router = Router();

// Health check
router.get('/health', (req, res) => {
  ResponseHelper.sendOk(res, { message: 'OK' });
});

export default router; 