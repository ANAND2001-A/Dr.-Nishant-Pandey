import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.js';

export default function PublicRoute({ children }) {
  return auth.currentUser ? <Navigate to="/" /> : children;
}