import React from 'react';
import Card from '../../../core/components/ui/Card.jsx';

export default function TestimonialsSection() {
  const testimonials = [
    { id: 1, name: 'Reader 1', text: 'An incredible book that changed my perspective!' },
    { id: 2, name: 'Reader 2', text: 'Dr. Pandey’s writing is truly inspiring.' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Readers Say</h2>
        <div className="flex overflow-x-auto space-x-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-80">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="text-gray-800 font-bold">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}