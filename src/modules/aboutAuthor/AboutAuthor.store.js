import { create } from 'zustand';
import { fetchAboutAuthorData } from './AboutAuthor.repo.js';

const useAboutAuthorStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true });
    try {
      const data = await fetchAboutAuthorData();
      set({ data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useAboutAuthorStore;