import { create } from 'https://cdn.jsdelivr.net/npm/zustand@4.5.5/+esm';
import { fetchPosts } from './Blog.repo.js';

const useBlogStore = create((set) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({ loading: true });
    try {
      const posts = await fetchPosts();
      set({ posts, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useBlogStore;