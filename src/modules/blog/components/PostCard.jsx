import React from 'react';
import Card from '../../../core/components/ui/Card.jsx';
import { formatDate } from '../../../core/utils/formatDate.js';

export default function PostCard({ post }) {
  return (
    <Card>
      <img src={post.img} alt={post.title} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
      <p className="text-gray-600 text-sm">{formatDate(post.createdAt)}</p>
      <p className="text-gray-600 mt-2">{post.excerpt}</p>
    </Card>
  );
}