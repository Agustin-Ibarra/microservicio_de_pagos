import express from 'express';
import { Router } from 'express';
import { paymentForItems, subscriptionPayments } from '../routes/payments.js';
import { checkItems, checkSubscriptionItem } from '../middlewares/middleware.js';

const router = Router();

router.use(express.json());
router.use('/payment_items',checkItems);
router.use('/payment_subscription',checkSubscriptionItem);
router.post('/payment_items',paymentForItems);
router.post('/payment_subscription',subscriptionPayments);

export default router;