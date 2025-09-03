import React, { useState } from 'react';
import { useNavigate } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.26.2/+esm';
import { signup } from '../../../../core/firebase/authService.js';
import { validateEmail, validatePhone, validatePassword } from '../../../../core/utils/validators.js';
import InputField from '../../../../core/components/ui/InputField.jsx';
import Button from '../../../../core/components/ui/Button.jsx';
import { ROUTES } from '../../../../core/utils/constants.js';

export default function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError('Invalid email address');
      return;
    }
    if (!validatePassword(formData.password)) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setError('Invalid phone number');
      return;
    }
    try {
      await signup(formData.name, formData.email, formData.password, formData.phone);
      navigate(ROUTES.AUTH); // Redirect to login after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <InputField
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <InputField
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Password</label>
        <InputField
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Phone</label>
        <InputField
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <Button type="submit" className="w-full">Sign Up</Button>
    </form>
  );
}