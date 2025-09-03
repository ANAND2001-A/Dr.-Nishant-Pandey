import React from 'react';

export default function FilterSidebar() {
  const categories = ['Fiction', 'Non-Fiction', 'Philosophy', 'Poetry'];

  return (
    <div className="w-64 p-6 bg-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Filter by Category</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}