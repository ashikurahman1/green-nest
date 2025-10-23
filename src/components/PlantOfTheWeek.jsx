import React from 'react';
import SectionHeading from './SectionHeading/SectionHeading';

const PlantOfTheWeek = () => {
  const plant = {
    name: 'Aloe Vera',
    image: '/images/AloeVera.png',
    description:
      'Aloe Vera is known for its soothing gel that heals burns and moisturizes skin. It thrives with little water — perfect for busy plant lovers!',
    funFact:
      'Did you know? Ancient Egyptians called Aloe Vera the ‘plant of immortality’.',
  };
  return (
    <section className="pb-20 px-4 bg-gray-50">
      <div className="w-full lg:w-10/12 mx-auto">
        <SectionHeading title="Top Rated Indoor Plants" />

        <div className="w-full space-y-4">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-56 object-cover"
          />
          <h2 className="text-2xl font-semibold text-green-600">
            {plant.name}
          </h2>
          <p>{plant.description}</p>
          <p>{plant.funFact}</p>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
