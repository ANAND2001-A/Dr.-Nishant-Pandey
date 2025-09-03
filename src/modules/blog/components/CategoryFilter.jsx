import React from 'react';

export default function CategoryFilter() {
  const categories = ['Writing', 'Philosophy', 'Inspiration', 'Reviews'];

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Filter by Category</h3>
      <div className="flex space-x-4">
        {categories.map((category) => (
          <button key={category} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}