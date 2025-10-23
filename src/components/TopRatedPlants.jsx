import React from 'react';
import PlantCard from './PlantCard';
import { Link } from 'react-router';

const TopRatedPlants = ({ topRated }) => {
  return (
    <section className="pt-20 px-4 bg-gray-50">
      <div className="w-full lg:w-10/12 mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-green-600 border-l-6 rounded pl-3 mb-8">
          Top Rated Indoor Plants
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topRated.map(plant => (
            <PlantCard plant={plant} key={plant?.plantId} />
          ))}
        </div>
        <div className="text-center mt-15">
          <Link
            to="/plants"
            className="px-5 py-2 bg-green-600 font-semibold text-white hover:bg-green-700 transition rounded   cursor-pointer"
          >
            See all plants
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopRatedPlants;
