export const applyDiscount = (price,discount) => {
  if(discount === 0 || discount === 100) {
    throw new Error("Invalid discount");
  }
  return price - price * discount / 100;
}
