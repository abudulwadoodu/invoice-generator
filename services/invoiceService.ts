import { products, customers, promoCodes, invoices } from '../data/data';
import { OrderItem, OrderItemDetail, Invoice } from '../data/models';

export function calculateInvoice(customerId: string, orderItems: OrderItem[]): Invoice {
    const customer = customers.find(c => c.customerId === customerId);
    if (!customer) {
        throw new Error('Invalid customerId');
    }

    let subTotal = 0;
    let taxAmount = 0;
    let promoDiscount = 0;
    const orderItemsWithDetails: OrderItemDetail[] = [];

    for (const item of orderItems) {
        const product = products.find(p => p.productId === item.productId);
        if (!product) {
            throw new Error('Invalid productId');
        } else if(item.quantity <= 0) {
            throw new Error(`Invalid item quantity for the product ${product.productId}`);
        }

        const itemTotal = product.price * item.quantity;
        subTotal += itemTotal;
        taxAmount += itemTotal * product.taxRate;

        let itemPromoDiscount = 0;
        if (item.promoCode) {
            const promo = promoCodes.find(p => p.code === item.promoCode);
            if (promo) {
                itemPromoDiscount = itemTotal * promo.discount;
                promoDiscount += itemPromoDiscount;
            }
        }

        orderItemsWithDetails.push({
            ...item,
            productName: product.name,
            pricePerUnit: product.price,
            itemTotal,
            itemPromoDiscount,
        });
    }

    const loyaltyDiscount = subTotal * customer.loyaltyDiscount;
    const totalAmount = subTotal + taxAmount - loyaltyDiscount - promoDiscount;
    const date = new Date().toISOString();

    const invoice: Invoice = {
        invoiceId: `INV-00${invoices.length + 1}`,
        customerDetails: customer,
        orderItems: orderItemsWithDetails,
        subTotal,
        taxAmount,
        loyaltyDiscount,
        promoDiscount,
        totalAmount,
        date,
    };

    // Update customer loyalty based on shopping
    customer.loyaltyDiscount += subTotal * .01; // Increment loyalty discount for frequent shoppers
    

    invoices.push(invoice);
    return invoice;
}
