import constate from "constate";
import { useState } from "react";
import { getUniqueId, setLocalStorgeData } from "../utils/generelUtils";

const useCartItem = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(window.localStorage?.getItem("cart")) || []
  );

  const addCartItem = (item) => {
    if (cartItems.find((data) => data.itemId === item.id)) {
      const newCartItems = cartItems.map((data) =>
        data.itemId === item.id
          ? { ...data, quantity: data.quantity + 1 }
          : data
      );
      setCartItems(newCartItems);
      setLocalStorgeData("cart", newCartItems);
    } else {
      const newCartItems = [
        ...cartItems,
        {
          id: getUniqueId(cartItems),
          title: item.title,
          itemId: item.id,
          quantity: 1,
          price: item.price,
        },
      ];
      setCartItems(newCartItems);
      setLocalStorgeData("cart", newCartItems);
    }
  };
  const removeCartItem = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    setLocalStorgeData("cart", newCartItems);
  };
  const setItemQuantity = (id, quantity) => {
    const newCartItems = cartItems.map((data) =>
      data.id === id ? { ...data, quantity: quantity } : data
    );
    setCartItems(newCartItems);
    setLocalStorgeData("cart", newCartItems);
  };

  return { cartItems, addCartItem, removeCartItem, setItemQuantity };
};

export const [CartItemProvider, useCartItemContext] = constate(useCartItem);
