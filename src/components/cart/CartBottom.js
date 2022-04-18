import React from "react";
import { useCartItemContext } from "../../hooks/useCartItem";

const CartBottom = () => {
  const { cartItems } = useCartItemContext();
  const totalItem = cartItems.reduce((accum, item) => accum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (accum, item) => accum + item.quantity * item.price,
    0
  );

  return (
    <div className="p-4 bg-white">
      <div className="mb-4">
        <div className="font-bold flex justify-between">
          <p>Total Item: </p>
          <p>{totalItem}</p>
        </div>
        <div className="font-bold flex justify-between">
          <p>Total Price: </p>
          <p>৳{totalPrice}</p>
        </div>
      </div>
      <button className="bg-rose-500 w-full py-2 font-bold text-white rounded-sm">
        Place Order
      </button>
    </div>
  );
};

export default CartBottom;
