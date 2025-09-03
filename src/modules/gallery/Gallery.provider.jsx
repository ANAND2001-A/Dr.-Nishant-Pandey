import React, { createContext, useContext } from 'react';
import useGalleryStore from './Gallery.store.js';

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const store = useGalleryStore();
  return <GalleryContext.Provider value={store}>{children}</GalleryContext.Provider>;
};

export const useGallery = () => useContext(GalleryContext);