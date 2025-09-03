import React, { createContext, useContext } from 'react';
import { useContactStore } from './Contact.store.js';
import * as ContactRepo from './Contact.repo.js';

const ContactContext = createContext(null);

export const ContactProvider = ({ children }) => {
  const { submitContactForm, submitBooking } = useContactStore(ContactRepo);

  return (
    <ContactContext.Provider value={{ submitContactForm, submitBooking }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};