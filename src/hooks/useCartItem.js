import constate from "constate";
import { useState } from "react";

const useCartItem = () => {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (item) => {
    if (cartItems.find((data) => data.itemId === item.id)) {
      const newCartItem = cartItems.map((data) =>
        data.itemId === item.id
          ? { ...data, quantity: data.quantity + 1 }
          : data
      );
      setCartItems(newCartItem);
    } else {
      setCartItems([
        ...cartItems,
        {
          id: cartItems.length === 0 ? 1 : cartItems.at(-1).id + 1,
          title: item.title,
          itemId: item.id,
          quantity: 1,
          price: item.price,
        },
      ]);
    }
  };
  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const setItemQuantity = (id, quantity) => {
    const newCartItem = cartItems.map((data) =>
      data.itemId === id ? { ...data, quantity: quantity } : data
    );
    setCartItems(newCartItem);
  };

  return { cartItems, addCartItem, removeCartItem, setItemQuantity };
};

export const [CartItemProvider, useCartItemContext] = constate(useCartItem);
