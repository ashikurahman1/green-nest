import React from 'react';
import PlantCard from './PlantCard';

const TopRatedPlants = ({ toprated }) => {
  console.log(toprated);

  return (
    <section className="pt-20 px-4 bg-gray-50">
      <div className="w-full lg:w-10/12 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-600 border-l-6 rounded pl-3">
            Top Rated Indoor Plants
          </h2>
          <button className="px-5 py-2 bg-green-600 font-semibold text-white hover:bg-green-700 transition rounded text-sm">
            See all plants
          </button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {toprated.map(plant => (
            <PlantCard plant={plant} key={plant?.plantId} />
          ))}
        </div>
        <div className="text-center py-7"></div>
      </div>
    </section>
  );
};

export default TopRatedPlants;
