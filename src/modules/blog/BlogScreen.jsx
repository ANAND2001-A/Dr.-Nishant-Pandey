import React from 'react';
import PostCard from './components/PostCard.jsx';
import FeaturedPost from './components/FeaturedPost.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import { useBlog } from './Blog.provider.jsx';
import ErrorBoundary from '../../core/components/ErrorBoundary.jsx';
import Loader from '../../core/components/ui/Loader.jsx';

export default function BlogScreen() {
  const { posts, loading, error } = useBlog();

  if (loading) return <Loader />;
  if (error) return <div className="p-4 text-red-600">Error loading posts: {error}</div>;

  return (
    <ErrorBoundary>
      <section className="py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Blog</h1>
          <CategoryFilter />
          {posts.length > 0 && <FeaturedPost post={posts[0]} />}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}