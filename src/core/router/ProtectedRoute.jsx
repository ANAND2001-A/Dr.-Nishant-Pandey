import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.js';

export default function ProtectedRoute({ children }) {
  return auth.currentUser ? children : <Navigate to="/auth" />;
}