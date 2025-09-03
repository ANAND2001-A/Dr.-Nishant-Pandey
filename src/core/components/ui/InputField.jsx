import React from 'react';
import { cn } from '../../utils/cn.js';

export default function InputField({ className, ...props }) {
  return (
    <input
      className={cn('w-full p-2 border rounded', className)}
      {...props}
    />
  );
}