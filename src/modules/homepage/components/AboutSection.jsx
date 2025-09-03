import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../core/utils/constants.js';
import Button from '../../../core/components/ui/Button.jsx';

export default function AboutSection() {
  const books = [
    { id: 1, title: 'Book 1', img: 'src/assets/image/about/s1.jpeg' },
    { id: 2, title: 'Book 2', img: 'src/assets/image/about/s2.jpeg' },
    { id: 3, title: 'Book 3', img: 'src/assets/image/about/s3.jpeg' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About the Books</h2>
          <p className="text-gray-600 mb-6">
            Dr. Nishant Pandey's books explore profound themes of life, love, and human experience. Each work is a
            journey into thought-provoking narratives and emotional depth.
          </p>
          <Link to={ROUTES.BOOKS}>
            <Button>See More</Button>
          </Link>
        </div>
        <div className="md:w-1/2 p-6 flex overflow-x-auto space-x-4">
          {books.map((book) => (
            <img
              key={book.id}
              src={book.img}
              alt={book.title}
              className="w-48 h-64 object-cover rounded"
            />
          ))}
        </div>
      </div>
    </section>
  );
}