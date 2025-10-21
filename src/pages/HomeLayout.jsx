import React from 'react';
import Hero from '../components/Hero';
import { useLoaderData } from 'react-router';

const HomeLayout = () => {
  const plants = useLoaderData();
  console.log(plants);

  return (
    <div className="">
      <Hero />
      <p>I am home</p>
      <p>ভাই আমার কাছে মোট {plants.length} টি গাছ আছে</p>

      <div className="flex flex-wrap gap-5">
        {plants.map(plant => (
          <img src={plant?.image} className="w-30" />
        ))}
      </div>
    </div>
  );
};

export default HomeLayout;
