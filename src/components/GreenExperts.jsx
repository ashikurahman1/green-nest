import React from 'react';

const experts = [
  {
    id: 1,
    name: 'Aarav Sen',
    specialization: 'Indoor Plant Styling & Aesthetics',
    image: '/images/expert1.jpg',
  },
  {
    id: 2,
    name: 'Meera Khatun',
    specialization: 'Soil & Fertilization Specialist',
    image: '/images/expert2.jpg',
  },
  {
    id: 3,
    name: 'Rifat Ahmed',
    specialization: 'Light & Watering Expert',
    image: '/images/expert3.jpg',
  },
  {
    id: 4,
    name: 'Nila Das',
    specialization: 'Propagation & Plant Health',
    image: '/images/expert4.jpg',
  },
];
const GreenExperts = () => {
  return (
    <section className="py-15 px-4 bg-gray-50">
      <div className="w-full lg:w-10/12 mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-green-600 border-l-6 rounded pl-3 mb-8">
          Meet Our Green Experts
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2   xl:grid-cols-4 ">
          {experts?.map(expert => (
            <div
              key={expert?.id}
              className=" border-t-8  border-green-500 rounded-lg shadow-lg hover:shadow-xl transition text-center p-6"
            >
              {' '}
              <img
                src={expert?.image}
                alt={expert?.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-green-600"
              />{' '}
              <h3 className="text-2xl font-semibold text-green-800">
                {' '}
                {expert?.name}{' '}
              </h3>{' '}
              <p className="text-neutral-800 mt-1">{expert?.specialization}</p>{' '}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreenExperts;
