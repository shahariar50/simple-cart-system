import React from "react";
import SingleProductTableRow from "./SingleProductTableRow";

const CartProductList = () => {
  return (
    <div className="p-4">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-500">
            <th className="px-2 text-sm pb-2">Product</th>
            <th className="px-2 text-sm pb-2">Price</th>
            <th className="px-2 text-sm pb-2">QTY</th>
            <th className="px-2 text-sm pb-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <SingleProductTableRow />
          <SingleProductTableRow />
        </tbody>
      </table>
    </div>
  );
};

export default CartProductList;
