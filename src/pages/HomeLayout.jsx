import React from 'react';
import Hero from '../components/Hero';
import { useLoaderData } from 'react-router';
import TopRatedPlants from '../components/TopRatedPlants';
import PlantCareTips from '../components/PlantCareTips';

const HomeLayout = () => {
  const plants = useLoaderData();
  // console.log(plants);

  const toprated = plants.slice(0, 8);

  return (
    <div className="">
      <Hero />
      <TopRatedPlants toprated={toprated} />
      <PlantCareTips />
    </div>
  );
};

export default HomeLayout;
