import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function validatePaymentMethod(method) {
  const validMethods = ['card', 'upi', 'cod'];
  return validMethods.includes(method.toLowerCase());
}

function generateOrderId() {
  return 'ORD' + Date.now();
}

export function processPayment(paymentMethod, couponCode = null) {
  if (!validatePaymentMethod(paymentMethod))
    return { status: 'failed', message: 'Invalid payment method' };

  const cartItems = getCartItems();
  const cartTotal = getCartTotal();

  // Apply discount if provided
  const discountResult = couponCode
    ? applyDiscount(cartTotal, couponCode, cartItems)
    : { originalTotal: cartTotal, discount: 0, finalTotal: cartTotal, message: 'No coupon applied' };

  // Reduce stock for all items
  cartItems.forEach(item => reduceStock(item.productId, item.quantity));

  // Clear cart
  clearCart();

  return {
    orderId: generateOrderId(),
    items: cartItems,
    subtotal: discountResult.originalTotal,
    discount: discountResult.discount,
    total: discountResult.finalTotal,
    paymentMethod,
    status: 'success',
    message: discountResult.message
  };
}
