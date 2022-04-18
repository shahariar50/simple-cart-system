import React from "react";
import CartBottom from "./CartBottom";
import CartProductList from "./CartProductList";

const Cart = () => {
  return (
    <div className="h-full">
      <div style={{ height: "calc(100% - 136px)" }} className="overflow-auto">
        <CartProductList />
      </div>
      <CartBottom />
    </div>
  );
};

export default Cart;
