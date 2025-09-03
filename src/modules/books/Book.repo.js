import { getBooks } from '../../core/firebase/firestoreService.js';

export const fetchBooks = async () => {
  try {
    return await getBooks();
  } catch (error) {
    throw new Error(error.message);
  }
};