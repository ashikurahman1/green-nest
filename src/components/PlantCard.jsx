import React from 'react';
import { Link } from 'react-router';
import useData from '../hooks/useData';
import Skeleton from './Skeleton/Skeleton';
import Button from './Button';

const PlantCard = ({ plant }) => {
  const { loading } = useData();
  if (loading) {
    return <Skeleton />;
  }
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200 hover:-translate-y-1.5">
      <img
        src={plant?.image}
        alt={plant?.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {plant?.plantName}
        </h3>
        <p className="text-green-600 text-lg font-semibold mt-1">
          ${plant?.price}
        </p>
        <p className="text-yellow-500 mt-2 mb-3">
          {'★'.repeat(Math.round(plant.rating))}{' '}
          <span className="text-gray-600 ">({plant?.rating})</span>
        </p>
        <Link to={`/plant/${plant.plantId}`}>
          <Button btnText="View Details" />
        </Link>
      </div>
    </div>
  );
};

export default PlantCard;
