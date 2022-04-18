import React from "react";
import { useCartItemContext } from "../../hooks/useCartItem";
import { toast } from "react-toastify";

const CartBottom = () => {
  const { cartItems, resetCart } = useCartItemContext();
  const totalItem = cartItems.reduce((accum, item) => accum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (accum, item) => accum + item.quantity * item.price,
    0
  );

  const handlePlaceOrder = () => {
    resetCart();
    toast("The Order is Saved Successfully!");
  };

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
      <button
        className="bg-rose-500 w-full py-2 font-bold text-white rounded-sm"
        onClick={() => cartItems.length > 0 && handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default CartBottom;
