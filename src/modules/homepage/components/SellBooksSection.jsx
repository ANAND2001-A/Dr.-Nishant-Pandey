import React from 'react';
import Card from '../../../core/components/ui/Card.jsx';
import Button from '../../../core/components/ui/Button.jsx';

export default function SellBooksSection() {
  const books = [
    {
      id: 1,
      title: 'Book Title 1',
      author: 'Dr. Nishant Pandey',
      rating: 4.5,
      description: 'A captivating story...',
      originalPrice: 20,
      discountPrice: 15,
      img: 'src/assets/image/book/b2.jpg',
    },
    {
      id: 2,
      title: 'Book Title 2',
      author: 'Dr. Nishant Pandey',
      rating: 4.8,
      description: 'An inspiring journey...',
      originalPrice: 25,
      discountPrice: 18,
      img: 'src/assets/image/book/b1.jpg',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <Card key={book.id}>
              <img src={book.img} alt={book.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
              <p className="text-gray-600">by {book.author}</p>
              <div className="flex items-center my-2">
                {'★★★★★'.slice(0, Math.round(book.rating))} <span className="text-gray-500 ml-2">({book.rating})</span>
              </div>
              <p className="text-gray-600 text-sm">{book.description}</p>
              <div className="flex items-center mt-4">
                <span className="text-green-600 font-bold text-lg">${book.discountPrice}</span>
                <span className="text-gray-500 line-through ml-2">${book.originalPrice}</span>
              </div>
              <Button className="mt-4 w-full">Buy Now</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}