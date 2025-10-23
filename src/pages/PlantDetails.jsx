import { useParams } from 'react-router';
import { FaStar } from 'react-icons/fa';
import useData from '../hooks/useData';
import Loader from '../components/Loader/Loader';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, loading } = useData();
  const currentPlant = plants.find(plant => plant.plantId == id);

  useEffect(() => {
    if (currentPlant) {
      document.title = currentPlant?.plantName + ' | GreenNest';
    }
  }, [currentPlant]);

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

  const handleBookingConsultant = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.name.value;

    toast.success(
      `Hi ${name}, your consultation has been booked successfully! 📅`
    );
    e.target.reset();
  };
  return (
    <div className="bg-base-200">
      <div className="w-full lg:w-10/12 mx-auto py-5 px-4 lg:px-20 ">
        <div className="card lg:card-side bg-base-100 shadow-xl  my-8 border-t-6 border-green-600 ">
          <figure className="lg:w-1/2">
            <img
              src={image}
              alt={plantName}
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="lg:max-w-1/2 p-6 space-y-4">
            <h2 className="text-2xl font-bold text-green-600">{plantName}</h2>

            <p className="text-green-800 font-semibold">{category}</p>

            <p className="text-neutral-600">{description}</p>

            <div className="flex justify-between py-5">
              <p className="px-8 rounded-md py-2 font-semibold bg-green-600 text-white hover:bg-green-800">
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
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
        {/* Booking Consultant */}
        <div className="shadow-xl max-w-2xl mx-auto my-15 p-10 bg-white rounded-xl">
          <h4 className="text-green-700 font-semibold text-2xl text-center">
            Book Consultation
          </h4>

          {/* Form */}
          <form
            onSubmit={handleBookingConsultant}
            className="flex flex-col gap-6 py-8 w-full mx-auto"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
              <label
                htmlFor="name"
                className="min-w-[80px] text-sm font-medium"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full focus:outline-0 focus:border-green-600"
                required
              />
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
              <label
                htmlFor="email"
                className="min-w-[80px] text-sm font-medium"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-0 focus:border-green-600"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition cursor-pointer"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
