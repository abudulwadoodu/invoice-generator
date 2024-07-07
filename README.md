Task: Advanced Invoice Generation APIObjective:
Create an API endpoint that accepts order details and generates an invoice. The task involves handling customer loyalty discounts, multiple tax rates, and promotional discounts.
Requirements:
Endpoint: /generate-invoice
Method: POST
Request Body:
customerId: String
orderItems: Array of objects representing the items in the order.
Each item should have:
productId: String
quantity: Integer
promoCode: String (optional)
Response:
invoiceId: String
customerDetails: Object
orderItems: Array of objects with product details included
subTotal: Float
taxAmount: Float
loyaltyDiscount: Float
promoDiscount: Float
totalAmount: Float
date: String (ISO format)
Validation:
Ensure all fields are present and valid.
Quantity should be greater than 0.
Calculations:
SubTotal: Sum of (quantity * pricePerUnit) for all items.
TaxAmount: Apply different tax rates based on the product type.
LoyaltyDiscount: Apply a discount based on customer's order history.
PromoDiscount: Apply a promotional discount if a valid promo code is provided.
TotalAmount: subTotal + taxAmount - loyaltyDiscount - promoDiscount.
Constraints:
The code should follow best practices for readability and maintainability.
Use modern ES6+ features.
Proper error handling and input validation.
Use an in-memory store or mock database for storing product data, customer data, promo codes, and invoice data.
Instructions:
No database setup is required. Use in-memory data structures (arrays or objects) to mock the database for storing product data, customer data, promo codes, and invoice data.
The focus should be on writing clean, maintainable code and implementing the required functionality.
You can assume the data for products, customers, and promo codes is already available in in-memory structures.