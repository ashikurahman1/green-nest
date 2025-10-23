import React from 'react';

const SectionHeading = ({ title }) => {
  return (
    <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-green-600 text-center mb-8">
      {title}
    </h2>
  );
};

export default SectionHeading;
