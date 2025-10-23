import React from 'react';
import PlantCard from './PlantCard';
import { Link } from 'react-router';
import SectionHeading from './SectionHeading/SectionHeading';

const TopRatedPlants = ({ topRated }) => {
  return (
    <section className="pt-20 px-4 bg-gray-50">
      <div className="w-full lg:w-10/12 mx-auto">
        <SectionHeading title="Top Rated Indoor Plants" />
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
