import React from 'react';
import Card from '../../../../core/components/ui/Card.jsx';
import Button from '../../../../core/components/ui/Button.jsx';
import { useCart } from '../Cart.provider.jsx';

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <Card className="flex items-center p-4">
      <img src={item.img} alt={item.title} className="w-24 h-32 object-cover rounded mr-4" />
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
        <p className="text-gray-600">${item.discountPrice}</p>
      </div>
      <Button onClick={() => removeFromCart(item.id)} className="bg-red-600 hover:bg-red-700">
        Remove
      </Button>
    </Card>
  );
}