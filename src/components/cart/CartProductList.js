import React from "react";
import { useCartItemContext } from "../../hooks/useCartItem";
import SingleProductTableRow from "./SingleProductTableRow";

const CartProductList = () => {
  const { cartItems, removeCartItem, setItemQuantity } = useCartItemContext();

  return (
    <div className="p-4">
      {cartItems.length > 0 ? (
        <table className="w-full table bordered">
          <thead>
            <tr>
              <th className="px-2 text-sm pb-2">Product</th>
              <th className="px-2 text-sm pb-2">Price</th>
              <th className="px-2 text-sm pb-2">QTY</th>
              <th className="px-2 text-sm pb-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <SingleProductTableRow
                key={item.id}
                cartItem={item}
                removeCartItem={removeCartItem}
                setItemQuantity={setItemQuantity}
              />
            ))}
          </tbody>
        </table>
      ) : (
        "Please add a item to cart"
      )}
    </div>
  );
};

export default CartProductList;
