import React, { useState } from 'react';
import { cn } from '../../../core/utils/cn.js';
import Button from '../../../core/components/ui/Button.jsx';

const PurchaseOptions = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    {
      id: 1,
      title: 'The Literary Mind',
      subtitle: 'A Journey Through Creative Writing',
      price: 24.99,
      image: 'src/assets/image/about/s5.jpeg',
      formats: ['Hardcover', 'Paperback', 'eBook', 'Audiobook'],
      isbn: '978-0-123456-78-9'
    },
    {
      id: 2,
      title: 'Words That Transform',
      subtitle: 'The Power of Storytelling',
      price: 19.99,
      image: 'src/assets/image/about/s5.jpeg',
      formats: ['Paperback', 'eBook'],
      isbn: '978-0-123456-79-6'
    },
    {
      id: 3,
      title: 'Beyond the Page',
      subtitle: 'Modern Literature Insights',
      price: 29.99,
      image: 'src/assets/image/about/s5.jpeg',
      formats: ['Hardcover', 'eBook', 'Audiobook'],
      isbn: '978-0-123456-80-2'
    }
  ];

  const purchaseChannels = [
    {
      id: 'direct',
      name: 'Direct Purchase',
      description: 'Buy directly from the author with personalized options',
      icon: 'CreditCard',
      benefits: ['Signed copies available', 'Personal message option', 'Direct author support', 'Fastest shipping'],
      color: 'bg-primary',
      textColor: 'text-white'
    },
    {
      id: 'amazon',
      name: 'Amazon',
      description: 'Purchase through Amazon with Prime benefits',
      icon: 'Package',
      benefits: ['Prime shipping', 'Easy returns', 'Customer reviews', 'Multiple formats'],
      color: 'bg-orange-600',
      textColor: 'text-white'
    },
    {
      id: 'bookstore',
      name: 'Local Bookstores',
      description: 'Support local businesses and community',
      icon: 'MapPin',
      benefits: ['Support local economy', 'In-person browsing', 'Community events', 'Expert recommendations'],
      color: 'bg-green-600',
      textColor: 'text-white'
    },
    {
      id: 'bulk',
      name: 'Bulk Orders',
      description: 'Special pricing for educational institutions and book clubs',
      icon: 'Users',
      benefits: ['Volume discounts', 'Educational pricing', 'Custom packaging', 'Author visit options'],
      color: 'bg-purple-600',
      textColor: 'text-white'
    }
  ];

  const handleDirectPurchase = (book) => {
    setSelectedBook(book);
    alert(`Redirecting to secure payment for "${book.title}" - $${book.price}`);
  };

  const handleAmazonPurchase = (book) => {
    window.open(`https://amazon.com/search?k=${encodeURIComponent(book.title)}`, '_blank');
  };

  const handleBookstoreLocator = () => {
    alert('Feature coming soon: Find local bookstores carrying these titles');
  };

  const handleBulkInquiry = () => {
    window.open('https://wa.me/1234567890?text=Hi! I\'m interested in bulk orders.', '_blank');
  };

  return (
    <div className="space-y-lg">
      <div className={cn('bg-white border border-border rounded-xl p-lg shadow-md')}>
        <h3 className="text-heading-3 font-heading-3 text-primary mb-md">
          Available Books
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {books.map((book) => (
            <div key={book.id} className={cn('bg-muted rounded-lg p-md hover:shadow-lg transition-shadow')}>
              <div className="aspect-[3/4] mb-sm overflow-hidden rounded-lg">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-sm">
                <div>
                  <h4 className="font-heading-3 text-lg text-primary">{book.title}</h4>
                  <p className="text-sm text-text-secondary">{book.subtitle}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-secondary">${book.price}</span>
                  <div className="text-xs text-text-secondary">
                    ISBN: {book.isbn}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {book.formats.map((format) => (
                    <span
                      key={format}
                      className="px-2 py-1 bg-background text-xs font-medium text-text-secondary rounded-full border border-border"
                    >
                      {format}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2 pt-sm">
                  <Button
                    onClick={() => handleDirectPurchase(book)}
                    className="bg-primary text-white hover:bg-secondary"
                  >
                    Buy Direct
                  </Button>
                  <Button
                    onClick={() => handleAmazonPurchase(book)}
                    className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  >
                    Amazon
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={cn('bg-white border border-border rounded-xl p-lg shadow-md')}>
        <h3 className="text-heading-3 font-heading-3 text-primary mb-md">
          Purchase Options
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {purchaseChannels.map((channel) => (
            <div key={channel.id} className={cn('border border-border rounded-lg p-md hover:shadow-lg transition-shadow')}>
              <div className="flex items-start space-x-md mb-sm">
                <div className={cn('w-12 h-12', channel.color, 'rounded-lg flex items-center justify-center')}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={channel.icon === 'CreditCard' ? 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' : 
                      channel.icon === 'Package' ? 'M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4m0 0L4 7m8 4v10' : 
                      channel.icon === 'MapPin' ? 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z' : 
                      'M17 20.24a2 2 0 01-1.24-.43l-4.24-3.17H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8.59a2 2 0 01-2 2h-1.45l-4.24 3.17A2 2 0 0117 20.24z'} />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-heading-3 text-primary">{channel.name}</h4>
                  <p className="text-sm text-text-secondary">{channel.description}</p>
                </div>
              </div>
              <ul className="space-y-sm mb-md">
                {channel.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => {
                  if (channel.id === 'direct') handleDirectPurchase(books[0]);
                  else if (channel.id === 'amazon') handleAmazonPurchase(books[0]);
                  else if (channel.id === 'bookstore') handleBookstoreLocator();
                  else if (channel.id === 'bulk') handleBulkInquiry();
                }}
                className={cn('border-2', channel.color, channel.textColor, `hover:bg-secondary hover:text-white`)}
              >
                {channel.id === 'direct' ? 'Shop Direct' : 
                 channel.id === 'amazon' ? 'View on Amazon' : 
                 channel.id === 'bookstore' ? 'Find Stores' : 'Request Quote'}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className={cn('bg-white border border-border rounded-xl p-lg shadow-md')}>
        <h3 className="text-heading-3 font-heading-3 text-primary mb-md">
          Secure & Trusted Purchasing
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-sm">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-text-primary">SSL Secured</p>
            <p className="text-xs text-text-secondary">256-bit encryption</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-sm">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-text-primary">Secure Payments</p>
            <p className="text-xs text-text-secondary">Trusted gateways</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-sm">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-text-primary">Trusted Delivery</p>
            <p className="text-xs text-text-secondary">Reliable shipping</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-sm">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-text-primary">Fast Support</p>
            <p className="text-xs text-text-secondary">24/7 assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOptions;