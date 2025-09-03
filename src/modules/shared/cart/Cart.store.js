import { create } from 'https://cdn.jsdelivr.net/npm/zustand@4.5.5/+esm';
import { addToCart, removeFromCart, getCartItems, clearCart } from './Cart.repo.js';

const useCartStore = create((set) => ({
  cartItems: getCartItems(),
  loading: false,
  error: null,
  addToCart: (item) => {
    addToCart(item);
    set({ cartItems: getCartItems() });
  },
  removeFromCart: (id) => {
    removeFromCart(id);
    set({ cartItems: getCartItems() });
  },
  checkout: () => {
    clearCart();
    set({ cartItems: [] });
  },
}));

export default useCartStore;