import React from 'react';
import { cn } from '../../utils/cn.js';

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={cn('bg-primary text-white px-4 py-2 rounded hover:bg-primary', className)}
      {...props}
    >
      {children}
    </button>
  );
}