import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../modules/homepage/components/Navbar.jsx';
import Footer from '../../modules/homepage/components/Footer.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import FloatingButtons from '../components/ui/FloatingButtons.jsx';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}