import React from "react";

const CartBottom = () => {
  return (
    <div className="p-4 bg-white">
      <div className="mb-4">
        <div className="font-bold flex justify-between">
          <p>Total Item: </p>
          <p>12</p>
        </div>
        <div className="font-bold flex justify-between">
          <p>Total Price: </p>
          <p>৳120</p>
        </div>
      </div>
      <button className="bg-rose-500 w-full py-2 font-bold text-white rounded-sm">
        Place Order
      </button>
    </div>
  );
};

export default CartBottom;
