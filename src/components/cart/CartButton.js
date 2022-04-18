import React from "react";

const CartButton = ({ setIsOpen }) => {
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 shadow w-24 bg-white cursor-pointer z-50"
      onClick={() => setIsOpen(true)}
    >
      <div className="text-center text-gray-800 px-2 py-4">
        <span className="material-icons">shopping_cart</span>
        <h4 className="font-bold mb-0">0 Item</h4>
      </div>
      <div className=" bg-gray-500 text-white px-4 py-1 font-bold text-center">
        ৳ 0
      </div>
    </div>
  );
};

export default CartButton;
