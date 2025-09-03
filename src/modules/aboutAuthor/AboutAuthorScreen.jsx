import React from 'react';
import ErrorBoundary from '../../core/components/ErrorBoundary.jsx';
import PersonalSection from './components/PersonalSection.jsx';
import TimelineSection from './components/TimelineSection.jsx';
import PhilosophySection from './components/PhilosophySection.jsx';

export default function AboutAuthorScreen() {
  return (
    <ErrorBoundary>
      <section className="py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Dr. Nishant Pandey</h1>
          <PersonalSection />
          <TimelineSection />
          <PhilosophySection />
        </div>
      </section>
    </ErrorBoundary>
  );
}