export const authSchema = {
    signup: {
      name: String,
      email: String,
      password: String,
      phone: String,
    },
    login: {
      email: String,
      password: String,
    },
  };