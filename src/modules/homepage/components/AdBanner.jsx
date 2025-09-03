import React, { useState, useEffect } from 'react';
import { cn } from '../../../core/utils/cn.js';

export default function AdBanner() {
  const posters = [
    'src/assets/image/ad/ad1.jpeg',
    'src/assets/image/ad/ad2.jpeg',
    'src/assets/image/ad/ad3.jpeg',
  ]; // Replace with actual poster images

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [posters.length]);

  return (
    <div className={cn('w-full h-[600px] overflow-hidden relative rounded-lg shadow-lg')}>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50 z-10"></div> */}
      {posters.map((poster, index) => (
        <img
          key={index}
          src={poster}
          alt={`Promotion Poster ${index + 1}`}
          className={cn(
            'absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out',
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          )}
        />
      ))}
      {/* <div className={cn(
        'absolute inset-0 flex items-center justify-center z-20',
        'text-white text-heading-2 font-heading-2 leading-heading-2 tracking-heading-2'
      )}>
        Special Promotion!
      </div> */}
      <div className="absolute bottom-md left-1/2 transform -translate-x-1/2 flex space-x-sm z-20">
        {posters.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-3 h-3 rounded-full',
              index === currentIndex ? 'bg-primary' : 'bg-white opacity-50',
              'transition-colors'
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}