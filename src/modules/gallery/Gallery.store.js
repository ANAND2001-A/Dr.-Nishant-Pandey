import { create } from 'zustand';
import { fetchGalleryImages } from './Gallery.repo.js';

const useGalleryStore = create((set) => ({
  images: [],
  selectedImage: null,
  loading: false,
  error: null,
  fetchImages: async () => {
    set({ loading: true });
    try {
      const images = await fetchGalleryImages();
      set({ images, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  setSelectedImage: (image) => set({ selectedImage: image }),
}));

export default useGalleryStore;