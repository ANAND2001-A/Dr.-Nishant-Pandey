export const addToCart = (item) => {
    // Client-side cart storage (e.g., localStorage)
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    localStorage.setItem('cart', JSON.stringify([...cart, item]));
  };
  
  export const removeFromCart = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    localStorage.setItem('cart', JSON.stringify(cart.filter((item) => item.id !== id)));
  };
  
  export const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  };
  
  export const clearCart = () => {
    localStorage.setItem('cart', '[]');
  };