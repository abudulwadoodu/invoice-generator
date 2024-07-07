import express from 'express';
import { getAllCustomers, getAllProducts, getAllPromoCodes, getAllInvoices } from '../controllers/dataController';

const router = express.Router();

router.get('/customers', getAllCustomers);
router.get('/products', getAllProducts);
router.get('/promo-codes', getAllPromoCodes);
router.get('/invoices', getAllInvoices);

export default router;
