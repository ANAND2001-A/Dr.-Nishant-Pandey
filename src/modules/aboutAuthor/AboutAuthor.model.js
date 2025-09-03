export const aboutAuthorSchema = {
    personal: {
      title: String,
      description: String,
    },
    timeline: [
      { year: String, event: String },
    ],
    philosophy: {
      title: String,
      description: String,
    },
  };