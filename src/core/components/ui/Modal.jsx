import React from 'react';
import { cn } from '../../utils/cn.js';

export default function Modal({ isOpen, onClose, children, className }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className={cn('bg-white p-6 rounded shadow-lg', className)}>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">X</button>
        {children}
      </div>
    </div>
  );
}