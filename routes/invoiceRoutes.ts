import express from 'express';
import { generateInvoice } from '../controllers/invoiceController';

const router = express.Router();

router.post('/generate-invoice', generateInvoice);

export default router;
