import { signup, login } from '../../../../core/firebase/authService.js';

export const signupUser = async (name, email, password, phone) => {
  try {
    return await signup(name, email, password, phone);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    return await login(email, password);
  } catch (error) {
    throw new Error(error.message);
  }
};