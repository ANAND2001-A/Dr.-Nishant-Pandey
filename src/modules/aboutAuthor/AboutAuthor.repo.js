export const fetchAboutAuthorData = async () => {
    return {
      personal: {
        title: 'Personal Journey',
        description: 'Dr. Nishant Pandey is an acclaimed author with over 12 published works and 8 literary awards.',
      },
      timeline: [
        { year: '2005', event: 'Published first book' },
        { year: '2010', event: 'Received first literary award' },
        { year: '2015', event: 'Published 5th book' },
        { year: '2020', event: 'Won 8th literary award' },
      ],
      philosophy: {
        title: 'Writing Philosophy',
        description: 'Dr. Pandey’s writing blends narrative depth with philosophical inquiry.',
      },
    };
  };