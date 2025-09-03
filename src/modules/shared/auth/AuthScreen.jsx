import React, { useState } from 'react';
import SignupForm from './components/SignupForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Card from '../../../core/components/ui/Card.jsx';

export default function AuthScreen() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <Card className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {isSignup ? 'Sign Up' : 'Login'}
      </h1>
      {isSignup ? <SignupForm /> : <LoginForm />}
      <button
        onClick={() => setIsSignup(!isSignup)}
        className="mt-4 text-blue-600 hover:underline"
      >
        {isSignup ? 'Already have an account? Login' : 'Need an account? Sign Up'}
      </button>
    </Card>
  );
}