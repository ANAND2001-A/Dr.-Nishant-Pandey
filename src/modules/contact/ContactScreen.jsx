import React from 'react';
import { cn } from '../../core/utils/cn.js';
import ContactForm from './components/ContactForm.jsx';
import WhatsAppContact from './components/WhatsAppContact.jsx';
import PurchaseOptions from './components/PurchaseOptions.jsx';
import BookingSystem from './components/BookingSystem.jsx';
import SocialMediaLinks from './components/SocialMediaLinks.jsx';
import FAQSection from './components/FAQSection.jsx';

const ContactScreen = () => {
  const contactMethods = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Business',
      description: 'Instant messaging for quick questions and book purchases',
      responseTime: 'Usually within minutes',
      bestFor: 'Book inquiries, signed copies, quick questions',
      icon: 'MessageCircle',
      color: 'bg-primary',
      available: true
    },
    {
      id: 'email',
      title: 'Professional Email',
      description: 'Formal communication for media and business inquiries',
      responseTime: '24-48 hours',
      bestFor: 'Media requests, speaking engagements, collaborations',
      icon: 'Mail',
      color: 'bg-secondary',
      available: true
    },
    {
      id: 'booking',
      title: 'Event Booking',
      description: 'Schedule author events, readings, and consultations',
      responseTime: '24 hours',
      bestFor: 'Speaking events, workshops, book club visits',
      icon: 'Calendar',
      color: 'bg-primary',
      available: true
    },
    {
      id: 'social',
      title: 'Social Media',
      description: 'Connect and engage on various social platforms',
      responseTime: '3-5 days',
      bestFor: 'Community engagement, content sharing, updates',
      icon: 'Share2',
      color: 'bg-secondary',
      available: true
    }
  ];

  return (
    <div className={cn('min-h-screen bg-background')}>
      {/* Hero Section */}
      <section className={cn('pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10')}>
        <div className="max-w-7xl mx-auto px-md lg:px-lg">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-md py-sm rounded-full mb-md">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-accent">Multiple Ways to Connect</span>
            </div>
            
            <h1 className="text-heading-1 font-heading-1 text-primary mb-md">
              Contact & Purchase
              <span className="block text-secondary">Connection Hub</span>
            </h1>
            
            <p className="text-paragraph text-text-secondary mb-lg leading-paragraph">
              Your comprehensive gateway for book purchases, event bookings, media inquiries, and direct communication. 
              Choose the method that works best for your needs.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-md max-w-2xl mx-auto">
              {contactMethods.map((method) => (
                <div key={method.id} className="text-center">
                  <div className={cn('w-12 h-12', method.color, 'rounded-lg flex items-center justify-center mx-auto mb-sm')}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={method.icon === 'MessageCircle' ? 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' : 
                        method.icon === 'Mail' ? 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' : 
                        method.icon === 'Calendar' ? 'M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18' : 
                        'M8.5 12.5L11 15l4.5-4.5M17 12l4.5 4.5M7 12l-4.5 4.5M21 12l-4.5-4.5M7 12L2.5 7.5'} />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-text-primary">{method.title}</p>
                  <p className="text-xs text-text-secondary">{method.responseTime}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Quick Contact Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-md lg:px-lg">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 font-heading-2 text-primary mb-sm">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-paragraph text-text-secondary max-w-3xl mx-auto">
              Each communication channel is optimized for different types of inquiries to ensure you get the fastest, most appropriate response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {contactMethods.map((method) => (
              <div key={method.id} className="bg-white border border-border rounded-xl p-md shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-sm">
                  <div className={cn('w-12 h-12', method.color, 'rounded-lg flex items-center justify-center')}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={method.icon === 'MessageCircle' ? 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' : 
                        method.icon === 'Mail' ? 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' : 
                        method.icon === 'Calendar' ? 'M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18' : 
                        'M8.5 12.5L11 15l4.5-4.5M17 12l4.5 4.5M7 12l-4.5 4.5M21 12l-4.5-4.5M7 12L2.5 7.5'} />
                    </svg>
                  </div>
                  {method.available && (
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600 font-medium">Available</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-heading-3 text-primary mb-sm">
                  {method.title}
                </h3>
                <p className="text-sm text-text-secondary mb-sm">
                  {method.description}
                </p>
                
                <div className="space-y-sm">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-text-secondary">{method.responseTime}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-text-secondary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 10l-3-3m0 0l3-3m-3 3h8" />
                    </svg>
                    <span className="text-xs text-text-secondary">{method.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content Grid */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-md lg:px-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
            <div className="space-y-lg">
              <ContactForm />
              <BookingSystem />
            </div>
            <div className="space-y-lg">
              <WhatsAppContact />
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </section>
      {/* Purchase Options */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-md lg:px-lg">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 font-heading-2 text-primary mb-sm">
              Book Purchase Options
            </h2>
            <p className="text-paragraph text-text-secondary max-w-3xl mx-auto">
              Multiple purchasing pathways to accommodate different preferences, from direct sales with signed copies to bulk educational orders.
            </p>
          </div>
          <PurchaseOptions />
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-md lg:px-lg">
          <FAQSection />
        </div>
      </section>
      {/* Trust & Security */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-md lg:px-lg">
          <div className="bg-white border border-border rounded-xl p-lg shadow-md">
            <div className="text-center mb-lg">
              <h2 className="text-heading-3 font-heading-3 text-primary mb-sm">
                Trusted & Secure Communication
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Your privacy and security are paramount. All communications are handled professionally with industry-standard security measures.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-sm">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-heading-3 text-primary mb-sm">
                  Privacy Protected
                </h3>
                <p className="text-text-secondary">
                  Your personal information is never shared with third parties. All communications remain confidential.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-sm">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-heading-3 text-primary mb-sm">
                  Reliable Response
                </h3>
                <p className="text-text-secondary">
                  Consistent response times with professional follow-up. Your inquiries are prioritized and handled promptly.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-sm">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-heading-3 text-primary mb-sm">
                  Professional Service
                </h3>
                <p className="text-text-secondary">
                  Years of experience in author-reader communication with thousands of satisfied customers worldwide.
                </p>
              </div>
            </div>
            <div className="mt-lg p-md bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <div className="flex items-center justify-center space-x-md text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">24-48h</p>
                  <p className="text-sm text-text-secondary">Response Time</p>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <p className="text-2xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-text-secondary">Happy Readers</p>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <p className="text-2xl font-bold text-primary">99.9%</p>
                  <p className="text-sm text-text-secondary">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactScreen;