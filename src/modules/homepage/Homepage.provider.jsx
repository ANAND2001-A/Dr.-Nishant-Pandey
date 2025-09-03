import React, { createContext, useContext } from 'react';
import useHomepageStore from './Homepage.store.js';

const HomepageContext = createContext();

export const HomepageProvider = ({ children }) => {
  const store = useHomepageStore();
  return <HomepageContext.Provider value={store}>{children}</HomepageContext.Provider>;
};

export const useHomepage = () => useContext(HomepageContext);