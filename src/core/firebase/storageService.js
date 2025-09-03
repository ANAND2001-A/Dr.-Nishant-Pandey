import { storage } from './firebase.js';
import { ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js';

export const getImageUrl = async (path) => {
  try {
    return await getDownloadURL(ref(storage, path));
  } catch (error) {
    throw new Error(error.message);
  }
};