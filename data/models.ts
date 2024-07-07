export interface Product {
    productId: string;
    name: string;
    price: number;
    taxRate: number;
}

export interface Customer {
    customerId: string;
    name: string;
    loyaltyDiscount: number;
    orderHistory: OrderHistory[];
}

export interface PromoCode {
    code: string;
    discount: number;
}

export interface OrderItem {
    productId: string;
    quantity: number;
    promoCode?: string;
}

export interface OrderHistory {
    subTotal: number;
    date: string;
}

export interface OrderItemDetail extends OrderItem {
    productName: string;
    pricePerUnit: number;
    itemTotal: number;
    itemPromoDiscount: number;
}

export interface Invoice {
    invoiceId: string;
    customerDetails: Customer;
    orderItems: OrderItemDetail[];
    subTotal: number;
    taxAmount: number;
    loyaltyDiscount: number;
    promoDiscount: number;
    totalAmount: number;
    date: string;
}
