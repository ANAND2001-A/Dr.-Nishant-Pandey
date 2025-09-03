import React from 'react';
import Card from '../../../core/components/ui/Card.jsx';

export default function HeroSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-6">
          <h1 className="text-4xl  font-bold text-gray-800 mb-4">Welcome to <span className='story-script-regular text-primary'>Dr. Nishant Pandey's</span> World</h1>
          <p className="text-gray-600 mb-6">
            Discover inspiring stories, profound insights, and literary masterpieces from an award-winning author.
          </p>
          <div className="flex space-x-6">
            <Card className= 'mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20'>
              <h3 className="text-2xl font-bold text-primary">12+</h3>
              <p className="text-gray-600">Books, Published Works</p>
            </Card>
            <Card className= 'mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20'> 
              <h3 className="text-2xl font-bold text-primary">8</h3>
              <p className="text-gray-600">Awards, Literary Recognition</p>
            </Card>
          </div>
        </div>
        <div className="md:w-1/2 p-6 select-none">
          <img
            src="src/assets/image/hero/hero.png"
            alt="Dr. Nishant Pandey"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
}