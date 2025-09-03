import React, { createContext, useContext } from 'react';
import useCartStore from './Cart.store.js';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const store = useCartStore();
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);