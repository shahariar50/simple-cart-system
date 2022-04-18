import constate from "constate";
import { useState } from "react";
import { getUniqueId, setLocalStorgeData } from "../utils/generelUtils";

const useCartItem = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(window.localStorage?.getItem("cart")) || []
  );

  const addCartItem = (item) => {
    // Increase quantity if the item is already exist
    if (cartItems.find((data) => data.itemId === item.id)) {
      const newCartItems = cartItems.map((data) =>
        data.itemId === item.id
          ? { ...data, quantity: data.quantity + 1 }
          : data
      );
      setCartItems(newCartItems);
      // Set the new cart in localstore
      setLocalStorgeData("cart", newCartItems);
    }
    // Adding new item
    else {
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
      // Set the new cart in localstore
      setLocalStorgeData("cart", newCartItems);
    }
  };
  // Remove item from the cart
  const removeCartItem = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    // Set the new cart in localstore
    setLocalStorgeData("cart", newCartItems);
  };
  // Resetting item quantity
  const setItemQuantity = (id, quantity) => {
    const newCartItems = cartItems.map((data) =>
      data.id === id ? { ...data, quantity: quantity } : data
    );
    setCartItems(newCartItems);
    // Set the new cart in localstore
    setLocalStorgeData("cart", newCartItems);
  };

  const resetCart = () => {
    setCartItems([]);
    // Set the new cart in localstore
    setLocalStorgeData("cart", []);
  };

  return { cartItems, addCartItem, removeCartItem, setItemQuantity, resetCart };
};

export const [CartItemProvider, useCartItemContext] = constate(useCartItem);
