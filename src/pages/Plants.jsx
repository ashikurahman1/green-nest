import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../components/PlantCard';

const Plants = () => {
  const plants = useLoaderData();

  return (
    <section className="bg-gray-50">
      <div className="py-15 bg-gradient-to-bl from-green-400 to-green-800 text-white">
        <h2 className="text-3xl lg:text-4xl font-bold rounded text-center">
          All Plants{' '}
          <span className="text-sm">Total plants: ({plants.length})</span>
        </h2>
      </div>
      <div className="w-full lg:w-10/12 mx-auto px-4 py-15">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plants.map(plant => (
            <PlantCard key={plant.plantId} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plants;
