import { getBooks } from '../../../core/firebase/firestoreService.js';

export const fetchHomepageData = async () => {
  try {
    const books = await getBooks();
    return {
      hero: {
        heading: "Welcome to Dr. Nishant Pandey's World",
        paragraph: "Discover inspiring stories, profound insights, and literary masterpieces from an award-winning author.",
        stats: [
          { label: 'Books, Published Works', value: 12 },
          { label: 'Awards, Literary Recognition', value: 8 },
        ],
      },
      about: {
        title: 'About the Books',
        description: "Dr. Nishant Pandey's books explore profound themes of life, love, and human experience. Each work is a journey into thought-provoking narratives and emotional depth.",
        books: [
          { id: '1', title: 'Book 1', img: '/public/assets/images/no_image.png' },
          { id: '2', title: 'Book 2', img: '/public/assets/images/no_image.png' },
          { id: '3', title: 'Book 3', img: '/public/assets/images/no_image.png' },
        ],
      },
      sellBooks: books,
      testimonials: [
        { id: '1', name: 'Reader 1', text: 'An incredible book that changed my perspective!' },
        { id: '2', name: 'Reader 2', text: 'Dr. Pandey’s writing is truly inspiring.' },
      ],
    };
  } catch (error) {
    throw new Error(error.message);
  }
};