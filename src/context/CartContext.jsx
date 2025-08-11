// src/context/CartContext.js
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // If item already in cart, increase quantity
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Otherwise add new item with quantity 1
      return [...state, { ...action.payload, quantity: 1 }];

    case "REMOVE_ITEM":
      // Remove item by id
      return state.filter(item => item.id !== action.payload);

    case "UPDATE_QUANTITY":
      // Update quantity for item, minimum 1
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy usage in components
export const useCart = () => useContext(CartContext);
