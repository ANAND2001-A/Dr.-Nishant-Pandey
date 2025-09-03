import { create } from 'https://cdn.jsdelivr.net/npm/zustand@4.5.5/+esm';
import { signupUser, loginUser } from './Auth.repo.js';

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,
  signup: async (name, email, password, phone) => {
    set({ loading: true });
    try {
      const user = await signupUser(name, email, password, phone);
      set({ user, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  login: async (email, password) => {
    set({ loading: true });
    try {
      const user = await loginUser(email, password);
      set({ user, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useAuthStore;