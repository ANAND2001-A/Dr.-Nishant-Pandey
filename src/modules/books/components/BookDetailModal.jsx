import React from 'react';
import Modal from '../../../core/components/ui/Modal.jsx';
import Button from '../../../core/components/ui/Button.jsx';

export default function BookDetailModal({ book, onClose }) {
  if (!book) return null;

  return (
    <Modal isOpen={!!book} onClose={onClose}>
      <img src={book.img} alt={book.title} className="w-full h-64 object-cover rounded mb-4" />
      <h3 className="text-2xl font-bold text-gray-800">{book.title}</h3>
      <p className="text-gray-600">by {book.author}</p>
      <div className="flex items-center my-2">
        {'★★★★★'.slice(0, Math.round(book.rating))} <span className="text-gray-500 ml-2">({book.rating})</span>
      </div>
      <p className="text-gray-600">{book.description}</p>
      <div className="flex items-center mt-4">
        <span className="text-green-600 font-bold text-lg">${book.discountPrice}</span>
        <span className="text-gray-500 line-through ml-2">${book.originalPrice}</span>
      </div>
      <Button className="mt-4 w-full">Buy Now</Button>
    </Modal>
  );
}