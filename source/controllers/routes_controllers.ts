import express from 'express';
import { Router } from 'express';
import { paymentForItems } from './routes/payments';
import { checkItems } from './middlewares/middleware';

const router = Router();

router.use(express.json());
router.use('/payment_items',checkItems);
router.post('/payment_items',paymentForItems);

export default router;