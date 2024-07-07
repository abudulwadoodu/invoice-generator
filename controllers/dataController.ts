import { Request, Response } from 'express';
import { products, customers, promoCodes, invoices } from '../data/data';

export function getAllCustomers(req: Request, res: Response): void {
    res.send(customers);
}

export function getAllProducts(req: Request, res: Response): void {
    res.send(products);
}

export function getAllPromoCodes(req: Request, res: Response): void {
    res.send(promoCodes);
}

export function getAllInvoices(req: Request, res: Response): void {
    res.send(invoices);
}
