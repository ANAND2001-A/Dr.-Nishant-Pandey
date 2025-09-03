import React, { useState } from 'react';
import { cn } from '../../../core/utils/cn.js';
import Button from '../../../core/components/ui/Button.jsx';
import InputField from '../../../core/components/ui/InputField.jsx';
import { useContact } from '../Contact.provider.jsx';

const BookingSystem = () => {
  const { submitBooking } = useContact();
  const [selectedService, setSelectedService] = useState('');
  const [bookingData, setBookingData] = useState({
    name: '', email: '', organization: '', date: '', time: '', duration: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    { value: 'speaking', label: 'Speaking Engagement', description: 'Author talks, literary events', duration: '45-90 min', price: '$500+', icon: 'Mic' },
    { value: 'reading', label: 'Virtual Reading Session', description: 'Live reading with Q&A', duration: '30-60 min', price: '$200+', icon: 'Video' },
    { value: 'workshop', label: 'Writing Workshop', description: 'Interactive writing sessions', duration: '2-4 hr', price: '$800+', icon: 'PenTool' },
    { value: 'consultation', label: 'Author Consultation', description: 'One-on-one guidance', duration: '30-60 min', price: '$150+', icon: 'MessageSquare' },
    { value: 'book-club', label: 'Book Club Visit', description: 'Discussion and Q&A', duration: '60-90 min', price: '$300+', icon: 'Users' }
  ];

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' }, { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' }, { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' }, { value: '16:00', label: '4:00 PM' },
    { value: '19:00', label: '7:00 PM' }, { value: '20:00', label: '8:00 PM' }
  ];

  const durationOptions = [
    { value: '30', label: '30 minutes' }, { value: '45', label: '45 minutes' },
    { value: '60', label: '1 hour' }, { value: '90', label: '1.5 hours' },
    { value: '120', label: '2 hours' }, { value: '240', label: '4 hours' }
  ];

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitBooking({ ...bookingData, service: selectedService });
      setSubmitStatus('success');
      setBookingData({ name: '', email: '', organization: '', date: '', time: '', duration: '', message: '' });
      setSelectedService('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedServiceData = services.find(s => s.value === selectedService);

  if (submitStatus === 'success') {
    return (
      <div className={cn('bg-white border border-border rounded-xl p-lg shadow-md')}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-sm">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18" />
            </svg>
          </div>
          <h3 className="text-lg font-heading-3 text-primary mb-sm">
            Booking Request Submitted!
          </h3>
          <p className="text-text-secondary mb-md">
            Thank you for your booking request. I'll review the details and confirm availability within 24 hours.
          </p>
          <Button 
            onClick={() => setSubmitStatus(null)}
            className="bg-primary text-white hover:bg-secondary"
          >
            Make Another Booking
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('bg-white border border-border rounded-xl p-lg shadow-md')}>
      <div className="mb-md">
        <h3 className="text-heading-3 font-heading-3 text-primary mb-sm">
          Book an Event or Session
        </h3>
        <p className="text-text-secondary">
          Schedule speaking engagements, virtual readings, workshops, or personal consultations.
        </p>
      </div>
      {!selectedService ? (
        <div className="space-y-md">
          <h4 className="text-lg font-heading-3 text-primary mb-sm">
            Select a Service
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {services.map((service) => (
              <button
                key={service.value}
                onClick={() => setSelectedService(service.value)}
                className={cn('text-left p-md border border-border rounded-lg hover:bg-muted transition-colors')}
              >
                <div className="flex items-start space-x-md">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon === 'Mic' ? 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' : 
                        service.icon === 'Video' ? 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' : 
                        service.icon === 'PenTool' ? 'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z' : 
                        service.icon === 'MessageSquare' ? 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' : 
                        'M17 20.24a2 2 0 01-1.24-.43l-4.24-3.17H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8.59a2 2 0 01-2 2h-1.45l-4.24 3.17A2 2 0 0117 20.24z'} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-text-primary mb-1">{service.label}</h5>
                    <p className="text-sm text-text-secondary mb-2">{service.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-text-secondary">{service.duration}</span>
                      <span className="font-medium text-secondary">{service.price}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-md">
          <div className="flex items-center justify-between p-md bg-muted rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={selectedServiceData.icon === 'Mic' ? 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' : 
                    selectedServiceData.icon === 'Video' ? 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' : 
                    selectedServiceData.icon === 'PenTool' ? 'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z' : 
                    selectedServiceData.icon === 'MessageSquare' ? 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' : 
                    'M17 20.24a2 2 0 01-1.24-.43l-4.24-3.17H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8.59a2 2 0 01-2 2h-1.45l-4.24 3.17A2 2 0 0117 20.24z'} />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-text-primary">{selectedServiceData.label}</h4>
                <p className="text-sm text-text-secondary">{selectedServiceData.price}</p>
              </div>
            </div>
            <Button
              onClick={() => setSelectedService('')}
              className="bg-transparent text-primary hover:bg-primary hover:text-white"
            >
              Change
            </Button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <InputField
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={bookingData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
              <InputField
                label="Email Address"
                type="email"
                placeholder="your.email@example.com"
                value={bookingData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>
            <InputField
              label="Organization (Optional)"
              type="text"
              placeholder="School, library, book club, etc."
              value={bookingData.organization}
              onChange={(e) => handleInputChange('organization', e.target.value)}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <InputField
                label="Preferred Date"
                type="date"
                value={bookingData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                required
              />
              <InputField
                label="Preferred Time"
                type="select"
                options={timeSlots}
                value={bookingData.time}
                onChange={(value) => handleInputChange('time', value)}
                required
              />
              <InputField
                label="Duration"
                type="select"
                options={durationOptions}
                value={bookingData.duration}
                onChange={(value) => handleInputChange('duration', value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Additional Details
              </label>
              <textarea
                className={cn('w-full px-md py-sm border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-colors')}
                rows={4}
                placeholder="Please provide details about your event, audience size, technical requirements, etc."
                value={bookingData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </div>
            <div className="flex items-start space-x-3 p-md bg-blue-50 border border-blue-200 rounded-lg">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-blue-800">Booking Process</p>
                <p className="text-sm text-blue-700">
                  After submission, I'll review your request and respond within 24 hours with availability confirmation and next steps.
                </p>
              </div>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className={cn('bg-primary text-white hover:bg-secondary', { 'opacity-50 cursor-not-allowed': isSubmitting })}
            >
              {isSubmitting ? 'Submitting Request...' : 'Submit Booking Request'}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookingSystem;