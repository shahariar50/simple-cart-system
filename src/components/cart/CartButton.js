import React from "react";
import { useCartItemContext } from "../../hooks/useCartItem";

const CartButton = ({ setIsOpen }) => {
  const { cartItems } = useCartItemContext();
  const totalPrice = cartItems.reduce(
    (accum, item) => accum + item.quantity * item.price,
    0
  );

  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 shadow w-24 bg-white cursor-pointer z-50"
      onClick={() => setIsOpen(true)}
    >
      <div className="text-center text-gray-800 px-2 py-4">
        <span className="material-icons">shopping_cart</span>
        <h4 className="font-bold mb-0">
          {cartItems.length} {cartItems.length > 1 ? "Items" : "Item"}
        </h4>
      </div>
      <div className=" bg-gray-500 text-white px-4 py-1 font-bold text-center">
        ৳ {totalPrice}
      </div>
    </div>
  );
};

export default CartButton;
