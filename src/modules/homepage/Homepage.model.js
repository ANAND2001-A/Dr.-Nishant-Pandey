export const homepageSchema = {
    hero: {
      heading: String,
      paragraph: String,
      stats: [
        { label: String, value: Number },
      ],
    },
    about: {
      title: String,
      description: String,
      books: [{ id: String, title: String, img: String }],
    },
    sellBooks: [
      {
        id: String,
        title: String,
        author: String,
        rating: Number,
        description: String,
        originalPrice: Number,
        discountPrice: Number,
        img: String,
      },
    ],
    testimonials: [
      { id: String, name: String, text: String },
    ],
  };