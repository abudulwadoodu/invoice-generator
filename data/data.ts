import { Product, Customer, PromoCode, Invoice } from './models';

export const products: Product[] = [
    { productId: 'p1', name: 'Product 1', price: 100, taxRate: 0.1 },
    { productId: 'p2', name: 'Product 2', price: 200, taxRate: 0.15 },
    // Add more products as needed
];

export const customers: Customer[] = [
    { customerId: 'c1', name: 'Customer 1', loyaltyDiscount: 0.05, orderHistory: [] },
    { customerId: 'c2', name: 'Customer 2', loyaltyDiscount: 0.1, orderHistory: [] },
    // Add more customers as needed
];

export const promoCodes: PromoCode[] = [
    { code: 'PROMO10', discount: 0.1 },
    { code: 'PROMO20', discount: 0.2 },
    // Add more promo codes as needed
];

export const invoices: Invoice[] = [];
