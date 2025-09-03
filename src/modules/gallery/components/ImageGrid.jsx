import React from 'react';

export default function ImageGrid({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt={image.title}
          className="w-full h-64 object-cover rounded cursor-pointer"
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  );
}