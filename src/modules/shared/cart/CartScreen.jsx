import React from 'react';
import { useCart } from './Cart.provider.jsx';
import CartItem from './components/CartItem.jsx';
import Button from '../../../../core/components/ui/Button.jsx';
import ErrorBoundary from '../../../../core/components/ErrorBoundary.jsx';
import Loader from '../../../../core/components/ui/Loader.jsx';

export default function CartScreen() {
  const { cartItems, loading, error, checkout } = useCart();

  if (loading) return <Loader />;
  if (error) return <div className="p-4 text-red-600">Error loading cart: {error}</div>;

  return (
    <ErrorBoundary>
      <section className="py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-center">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              <Button onClick={checkout} className="mt-8 w-full max-w-md mx-auto">Checkout</Button>
            </>
          )}
        </div>
      </section>
    </ErrorBoundary>
  );
}