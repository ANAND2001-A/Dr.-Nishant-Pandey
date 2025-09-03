import { create } from 'zustand';
import { fetchHomepageData } from './Homepage.repo.js';

const useHomepageStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true });
    try {
      const data = await fetchHomepageData();
      set({ data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useHomepageStore;