import React from 'react';

export default function FilterTags() {
  const tags = ['Author', 'Books', 'Events'];

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Filter by Tags</h3>
      <div className="flex space-x-4">
        {tags.map((tag) => (
          <button key={tag} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">{tag}</button>
        ))}
      </div>
    </div>
  );
}