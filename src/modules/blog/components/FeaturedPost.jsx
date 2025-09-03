import React from 'react';
import Card from '../../../core/components/ui/Card.jsx';
import { formatDate } from '../../../core/utils/formatDate.js';

export default function FeaturedPost({ post }) {
  return (
    <Card className="mb-8">
      <img src={post.img} alt={post.title} className="w-full h-64 object-cover rounded mb-4" />
      <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
      <p className="text-gray-600 text-sm">{formatDate(post.createdAt)}</p>
      <p className="text-gray-600 mt-2">{post.excerpt}</p>
    </Card>
  );
}