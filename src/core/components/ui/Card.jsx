import React from 'react';
import { cn } from '../../utils/cn.js';

export default function Card({ children, className, ...props }) {
  return (
    <div className={cn(' p-4 rounded shadow', className)} {...props}>
      {children}
    </div>
  );
}