export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validatePhone = (phone) => /^\+?[\d\s-]{10,}$/.test(phone);
export const validatePassword = (password) => password.length >= 6;