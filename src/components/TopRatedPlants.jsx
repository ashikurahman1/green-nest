import React from 'react';

const TopRatedPlants = ({ toprated }) => {
  console.log(toprated);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="w-full lg:w-10/12 mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-green-600">
          Top Rated Indoor Plants
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {toprated.map(plant => (
            <div
              key={plant?.plantId}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200 hover:-translate-y-1.5"
            >
              <img
                src={plant?.image}
                alt={plant?.name}
                className="w-full h-48 lg:h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {plant?.plantName}
                </h3>
                <p className="text-green-600 text-lg font-semibold mt-1">
                  ${plant?.price}
                </p>
                <p className="text-yellow-500 mt-2">
                  {'★'.repeat(Math.round(plant.rating))}{' '}
                  <span className="text-gray-600 ">({plant?.rating})</span>
                </p>
                <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedPlants;
