import React, { useState } from 'react';
import { cn } from '../../../core/utils/cn.js';
import Button from '../../../core/components/ui/Button.jsx';
import InputField from '../../../core/components/ui/InputField.jsx';
import { useContact } from '../Contact.provider.jsx';

const ContactForm = () => {
  const { submitContactForm } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { value: 'media', label: 'Media & Press Inquiries' },
    { value: 'speaking', label: 'Speaking Engagements' },
    { value: 'collaboration', label: 'Collaboration Opportunities' },
    { value: 'book-inquiry', label: 'Book Purchase Questions' },
    { value: 'bulk-order', label: 'Bulk Orders & Educational' },
    { value: 'general', label: 'General Questions' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', inquiryType: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className={cn('bg-white border border-border rounded-xl p-lg shadow-md')}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-sm">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-heading-3 text-primary mb-sm">
            Message Sent Successfully!
          </h3>
          <p className="text-text-secondary mb-md">
            Thank you for reaching out. I'll respond within 24-48 hours during business days.
          </p>
          <Button 
            onClick={() => setSubmitStatus(null)}
            className="bg-primary text-white hover:bg-secondary"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('bg-white border border-border rounded-xl p-lg shadow-md')}>
      <div className="mb-md">
        <h3 className="text-heading-3 font-heading-3 text-primary mb-sm">
          Professional Contact Form
        </h3>
        <p className="text-text-secondary">
          For media inquiries, speaking engagements, collaborations, and professional communications.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <InputField
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />
          <InputField
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
          />
        </div>
        <InputField
          label="Inquiry Type"
          type="select"
          options={inquiryTypes}
          value={formData.inquiryType}
          onChange={(value) => handleInputChange('inquiryType', value)}
          required
        />
        <InputField
          label="Subject"
          type="text"
          placeholder="Brief subject line"
          value={formData.subject}
          onChange={(e) => handleInputChange('subject', e.target.value)}
          required
        />
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Message *
          </label>
          <textarea
            className={cn('w-full px-md py-sm border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-colors')}
            rows={6}
            placeholder="Please provide details about your inquiry..."
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            required
          />
        </div>
        <div className="flex items-start space-x-3 p-md bg-blue-50 border border-blue-200 rounded-lg">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm font-medium text-blue-800">Response Time</p>
            <p className="text-sm text-blue-700">
              I typically respond within 24-48 hours during business days. For urgent matters, please use WhatsApp.
            </p>
          </div>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn('bg-primary text-white hover:bg-secondary', { 'opacity-50 cursor-not-allowed': isSubmitting })}
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;