import React, { createContext, useContext } from 'react';
import useAboutAuthorStore from './AboutAuthor.store.js';

const AboutAuthorContext = createContext();

export const AboutAuthorProvider = ({ children }) => {
  const store = useAboutAuthorStore();
  return <AboutAuthorContext.Provider value={store}>{children}</AboutAuthorContext.Provider>;
};

export const useAboutAuthor = () => useContext(AboutAuthorContext);