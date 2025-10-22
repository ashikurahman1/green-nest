import React from 'react';
import PlantCard from '../components/PlantCard';
import useData from '../hooks/useData';
import Loader from '../components/Loader/Loader';

const Plants = () => {
  const { plants, loading } = useData();
  if (loading) {
    return <Loader />;
  }

  return (
    <section className="bg-gray-50">
      <div
        className="py-20 text-center bg-cover bg-no-repeat"
        style={{ background: 'url("/public/images/imgheader.jpg")' }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold rounded text-center">
          All Plants{' '}
          <span className="text-sm text-green-600">
            Total plants: ({plants.length})
          </span>
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
