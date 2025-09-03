import { create } from 'zustand';
import { fetchBooks } from './Book.repo.js';

const useBooksStore = create((set) => ({
  books: [],
  selectedBook: null,
  loading: false,
  error: null,
  fetchBooks: async () => {
    set({ loading: true });
    try {
      const books = await fetchBooks();
      set({ books, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  setSelectedBook: (book) => set({ selectedBook: book }),
}));

export default useBooksStore;