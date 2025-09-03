import React from 'react';
import Icon from '../../../core/components/ui/AppIcon';
import Button from '../../../core/components/ui/Button';

const WhatsAppContact = () => {
  const whatsappNumber = "+1-555-0123";
  const whatsappLink = "https://wa.me/15550123";

  const quickMessages = [
    {
      id: 1,
      title: "Book Purchase Inquiry",
      message: "Hi! I\'m interested in purchasing your books. Could you please provide information about available titles and pricing?",
      icon: "ShoppingCart"
    },
    {
      id: 2,
      title: "Signed Copy Request",
      message: "Hello! I\'d love to get a signed copy of your book. What\'s the process and additional cost for personalized signatures?",
      icon: "PenTool"
    },
    {
      id: 3,
      title: "Bulk Order Inquiry",
      message: "Hi! I\'m interested in ordering multiple copies for my book club/educational institution. Can you provide bulk pricing information?",
      icon: "Users"
    },
    {
      id: 4,
      title: "General Question",
      message: "Hello! I have a question about your books and would appreciate your guidance.",
      icon: "MessageCircle"
    }
  ];

  const handleWhatsAppClick = (message = "") => {
    const encodedMessage = encodeURIComponent(message);
    const url = message ? `${whatsappLink}?text=${encodedMessage}` : whatsappLink;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-card border border-border rounded-xl p-8 literary-shadow">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="MessageCircle" size={32} color="#25D366" strokeWidth={2} />
        </div>
        <h3 className="text-2xl font-crimson font-semibold text-primary mb-2">
          WhatsApp Business
        </h3>
        <p className="text-text-secondary mb-4">
          Get instant responses for book purchases, signed copies, and quick questions
        </p>
        <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-green-700">Usually replies within minutes</span>
        </div>
      </div>
      <div className="space-y-4 mb-8">
        <h4 className="text-lg font-crimson font-semibold text-primary">Quick Message Templates</h4>
        <div className="grid grid-cols-1 gap-3">
          {quickMessages?.map((template) => (
            <button
              key={template?.id}
              onClick={() => handleWhatsAppClick(template?.message)}
              className="flex items-start space-x-4 p-4 border border-border rounded-lg hover:bg-muted literary-transition text-left group"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 literary-transition">
                <Icon name={template?.icon} size={20} color="#25D366" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-text-primary mb-1">{template?.title}</h5>
                <p className="text-sm text-text-secondary line-clamp-2">{template?.message}</p>
              </div>
              <Icon name="ExternalLink" size={16} color="black " strokeWidth={2} />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <Button
          onClick={() => handleWhatsAppClick()}
          variant="default"
          fullWidth
          className="bg-green-600 text-white hover:bg-green-700"
          iconName="MessageCircle"
          iconPosition="left"
        >
          Start WhatsApp Chat
        </Button>
        
        <div className="text-center">
          <p className="text-sm text-text-secondary">
            WhatsApp: <span className="font-medium text-text-primary">{whatsappNumber}</span>
          </p>
          <p className="text-xs text-text-secondary mt-1">
            Available Monday-Friday, 9 AM - 6 PM EST
          </p>
        </div>
      </div>
      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="#D97706" strokeWidth={2} />
          <div>
            <p className="text-sm font-medium text-amber-800">Best for:</p>
            <p className="text-sm text-amber-700">
              Quick questions, book availability, signed copies, and immediate purchase assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppContact;