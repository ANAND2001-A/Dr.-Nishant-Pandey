// Book.provider.js
import React, { createContext, useContext } from 'react';
import useBooksStore from './Book.store.js';

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const store = useBooksStore();
  return <BooksContext.Provider value={store}>{children}</BooksContext.Provider>;
};

export const useBooks = () => {
  const ctx = useContext(BooksContext);
  if (!ctx) {
    throw new Error("❌ useBooks must be used inside <BooksProvider>");
  }
  return ctx;
};
