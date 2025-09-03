import { getPosts } from '../../core/firebase/firestoreService.js';
import { getImageUrl } from '../../core/firebase/storageService.js';

export const fetchPosts = async () => {
  try {
    const posts = await getPosts();
    return await Promise.all(
      posts.map(async (post) => ({
        ...post,
        img: await getImageUrl(post.imgPath),
      }))
    );
  } catch (error) {
    throw new Error(error.message);
  }
};