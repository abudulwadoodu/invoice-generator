import { Request, Response } from 'express';
import { calculateInvoice } from '../services/invoiceService';
import { OrderItem } from '../data/models';

export function generateInvoice(req: Request, res: Response): void {
    const { customerId, orderItems }: { customerId: string; orderItems: OrderItem[] } = req.body;

    if (!customerId || !Array.isArray(orderItems) || orderItems.length === 0) {
        res.status(400).send({ error: 'Invalid request body' });
        return;
    }

    try {
        const invoice = calculateInvoice(customerId, orderItems);
        res.send(invoice);
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}
