import React, { useState } from 'react';
import { cn } from '../../../core/utils/cn.js';
import Button from '../../../core/components/ui/Button.jsx';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      category: 'Book Purchases',
      icon: 'ShoppingCart',
      color: 'bg-blue-100',
      iconColor: '#3B82F6',
      faqs: [
        {
          id: 1,
          question: 'What formats are your books available in?',
          answer: 'My books are available in Hardcover, Paperback, eBook, and Audiobook formats through direct purchase and major retailers.'
        },
        {
          id: 2,
          question: 'Do you offer signed copies?',
          answer: 'Yes, signed copies are available via direct purchase with options for personalization ($5-10 additional cost).'
        },
        {
          id: 3,
          question: 'What are your shipping options and costs?',
          answer: 'Standard ($4.99, 5-7 days), Express ($9.99, 2-3 days), Overnight ($19.99) within the US; international rates vary. Free shipping on orders over $50.'
        }
      ]
    },
    {
      category: 'Events & Bookings',
      icon: 'Calendar',
      color: 'bg-green-100',
      iconColor: '#059669',
      faqs: [
        {
          id: 4,
          question: 'How far in advance should I book an event?',
          answer: 'Book 6-8 weeks for speaking, 3-4 weeks for readings, 4-6 weeks for workshops, 2-3 weeks for book clubs.'
        },
        {
          id: 5,
          question: 'What technical requirements do you have for virtual events?',
          answer: 'Stable 25 Mbps internet, HD webcam, quality microphone, Zoom/Teams access, and screen-sharing capabilities.'
        },
        {
          id: 6,
          question: 'Do you travel for in-person events?',
          answer: 'Yes, regional travel is included; national/international events require additional travel expenses.'
        }
      ]
    },
    {
      category: 'Communication',
      icon: 'MessageCircle',
      color: 'bg-purple-100',
      iconColor: '#8B5CF6',
      faqs: [
        {
          id: 7,
          question: 'What\'s the best way to contact you?',
          answer: 'Use WhatsApp for quick questions, contact form for professional inquiries, or booking system for events.'
        },
        {
          id: 8,
          question: 'How quickly do you respond to messages?',
          answer: 'WhatsApp: 1-2 hours, Contact form: 24-48 hours, Email: 48-72 hours, Social media: 3-5 days.'
        }
      ]
    },
    {
      category: 'Bulk Orders & Educational',
      icon: 'Users',
      color: 'bg-amber-100',
      iconColor: '#D97706',
      faqs: [
        {
          id: 9,
          question: 'Do you offer educational discounts?',
          answer: 'Yes, 20% for schools, 15% for libraries, 10% for book clubs on orders of 5+ books.'
        },
        {
          id: 10,
          question: 'Can you visit our school or book club?',
          answer: 'Yes, I offer school visits, book club discussions, and virtual events, combinable with bulk sales.'
        }
      ]
    }
  ];

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className={cn('bg-white border border-border rounded-xl p-lg shadow-md')}>
      <div className="mb-md">
        <h3 className="text-heading-3 font-heading-3 text-primary mb-sm">
          Frequently Asked Questions
        </h3>
        <p className="text-text-secondary">
          Find quick answers to common questions about books, events, and communication.
        </p>
      </div>
      <div className="space-y-lg">
        {faqCategories.map((category) => (
          <div key={category.category}>
            <div className="flex items-center space-x-3 mb-md">
              <div className={cn('w-10 h-10', category.color, 'rounded-lg flex items-center justify-center')}>
                <svg className="w-5 h-5" fill="none" stroke={category.iconColor} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon === 'ShoppingCart' ? 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' : 
                    category.icon === 'Calendar' ? 'M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18' : 
                    category.icon === 'MessageCircle' ? 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' : 
                    'M17 20.24a2 2 0 01-1.24-.43l-4.24-3.17H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8.59a2 2 0 01-2 2h-1.45l-4.24 3.17A2 2 0 0117 20.24z'} />
                </svg>
              </div>
              <h4 className="text-lg font-heading-3 text-primary">
                {category.category}
              </h4>
            </div>
            <div className="space-y-md">
              {category.faqs.map((faq) => (
                <div key={faq.id} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className={cn('w-full px-md py-sm text-left flex items-center justify-between hover:bg-muted transition-colors')}
                  >
                    <span className="font-medium text-text-primary pr-md">
                      {faq.question}
                    </span>
                    <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={openFAQ === faq.id ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
                    </svg>
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-md pb-sm">
                      <div className="pt-2 border-t border-border">
                        <p className="text-text-secondary">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-lg p-md bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
        <div className="text-center">
          <svg className="w-8 h-8 text-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h4 className="text-lg font-heading-3 text-primary mb-sm">
            Still Have Questions?
          </h4>
          <p className="text-text-secondary mb-md">
            Can't find what you're looking for? I'm here to help with any specific questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => window.open('https://wa.me/1234567890?text=Hi! I have a question...', '_blank')}
              className="bg-primary text-white hover:bg-secondary"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              Ask via WhatsApp
            </Button>
            <Button
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-primary text-primary hover:bg-primary hover:text-white"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;