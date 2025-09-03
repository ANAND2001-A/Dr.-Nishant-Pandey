import React, { createContext, useContext } from 'react';
import useBlogStore from './Blog.store.js';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const store = useBlogStore();
  return <BlogContext.Provider value={store}>{children}</BlogContext.Provider>;
};

export const useBlog = () => useContext(BlogContext);