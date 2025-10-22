import React from 'react';
import { useParams } from 'react-router';
import { FaStar } from 'react-icons/fa';
import useData from '../hooks/useData';
import Loader from '../components/Loader/Loader';

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, loading } = useData();
  const currentPlant = plants.find(plant => plant.plantId == id);
  if (loading) {
    return <Loader />;
  }
  const {
    image,
    description,
    plantName,
    category,
    rating,
    price,
    availableStock,
    careLevel,
    providerName,
  } = currentPlant;
  console.log(id, currentPlant);

  return (
    <div className="w-full lg:w-10/12 mx-auto py-13 px-4">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl mx-auto my-8">
        <figure className="lg:w-1/2">
          <img
            src={image}
            alt={plantName}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl font-bold text-green-600">
            {plantName}
          </h2>

          <p className="text-green-800 font-semibold">{category}</p>

          <p className="text-neutral-600">{description}</p>

          <div className="flex justify-between py-5">
            <p className="btn bg-green-600 text-white hover:bg-green-800">
              {price} $
            </p>
            <p className="justify-end flex items-center gap-2 font-semibold px-6">
              <span>
                <FaStar className="text-yellow-400 size-4" />
              </span>
              {rating}
            </p>
          </div>
          <table className="table ">
            <tr>
              <th>Available:</th>
              <td>
                {availableStock > 0
                  ? `${availableStock} available`
                  : 'Out of stock'}
              </td>
            </tr>
            <tr>
              <th>Care Level:</th>
              <td>{careLevel}</td>
            </tr>
            <tr>
              <th>Provider:</th>
              <td>{providerName}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
