import { getGalleryImages } from '../../core/firebase/firestoreService.js';
import { getImageUrl } from '../../core/firebase/storageService.js';

export const fetchGalleryImages = async () => {
  try {
    const images = await getGalleryImages();
    return await Promise.all(
      images.map(async (image) => ({
        ...image,
        url: await getImageUrl(image.path),
      }))
    );
  } catch (error) {
    throw new Error(error.message);
  }
};