import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import MainLayout from './core/layout/MainLayout.jsx';
import AuthLayout from './core/layout/AuthLayout.jsx';
import HomepageScreen from './modules/homepage/HomepageScreen.jsx';
import AboutAuthorScreen from './modules/aboutAuthor/AboutAuthorScreen.jsx';

import GalleryScreen from './modules/gallery/GalleryScreen.jsx';
import BlogScreen from './modules/blog/BlogScreen.jsx';
import ContactScreen from './modules/contact/ContactScreen.jsx';
import AuthScreen from './modules/shared/auth/AuthScreen.jsx';
import ProtectedRoute from './core/router/ProtectedRoute.jsx';
import PublicRoute from './core/router/PublicRoute.jsx';
import { BooksProvider } from './modules/books/Book.provider.jsx';
import BooksScreen from './modules/books/BooksScreen.jsx';
import { ContactProvider } from './modules/contact/Contact.provider.jsx';

export default function Routes() {
  return (
    <ReactRoutes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomepageScreen />} />
        <Route path="/about-author" element={<AboutAuthorScreen />} />
        <Route
          path="/books"
          element={
            <BooksProvider>
              <BooksScreen />
            </BooksProvider>
          }
        />
        
        <Route path="/gallery" element={<GalleryScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route
          path="/contact"
          element={
            <ContactProvider>
              <ContactScreen />
            </ContactProvider>
          }
        />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<PublicRoute><AuthScreen /></PublicRoute>} />
      </Route>
    </ReactRoutes>
  );
}