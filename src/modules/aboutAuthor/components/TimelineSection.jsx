import React from 'react';

export default function TimelineSection() {
  const events = [
    { year: '2005', event: 'Published first book' },
    { year: '2010', event: 'Received first literary award' },
    { year: '2015', event: 'Published 5th book' },
    { year: '2020', event: 'Won 8th literary award' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Timeline</h2>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="flex">
            <span className="text-blue-600 font-bold w-24">{event.year}</span>
            <span>{event.event}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}