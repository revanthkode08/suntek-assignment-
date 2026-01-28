const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

export function validateCoupon(couponCode, cartTotal, cartItems) {
  const coupon = coupons[couponCode];
  if (!coupon) return { valid: false, message: "Coupon code does not exist" };

  if (cartTotal < coupon.minAmount)
    return { valid: false, message: `Cart total must be at least ₹${coupon.minAmount}` };

  if (coupon.category) {
    // Use find() instead of some() to check for category item
    const hasCategoryItem = cartItems.find(item => item.category === coupon.category);
    if (!hasCategoryItem) return { valid: false, message: `Coupon applies only to ${coupon.category}` };
  }

  return { valid: true, message: "Coupon is valid" };
}

export function calculateDiscount(couponCode, cartTotal, cartItems) {
  const coupon = coupons[couponCode];
  if (!coupon) return 0;

  let discount = 0;
  if (coupon.type === 'percentage') {
    if (coupon.category) {
      const categoryTotal = cartItems
        .filter(item => item.category === coupon.category)
        .reduce((sum, item) => sum + item.price * item.quantity, 0);
      discount = (categoryTotal * coupon.value) / 100;
    } else {
      discount = (cartTotal * coupon.value) / 100;
    }
  } else if (coupon.type === 'flat') discount = coupon.value;

  return discount;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
  const validation = validateCoupon(couponCode, cartTotal, cartItems);
  if (!validation.valid)
    return { originalTotal: cartTotal, discount: 0, finalTotal: cartTotal, message: validation.message };

  const discount = calculateDiscount(couponCode, cartTotal, cartItems);
  return {
    originalTotal: cartTotal,
    discount,
    finalTotal: cartTotal - discount,
    message: `Coupon applied! You saved ₹${discount}`
  };
}
