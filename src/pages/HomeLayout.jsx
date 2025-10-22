import React from 'react';
import Hero from '../components/Hero';
// import { useLoaderData } from 'react-router';
import TopRatedPlants from '../components/TopRatedPlants';
import PlantCareTips from '../components/PlantCareTips';
import GreenExperts from '../components/GreenExperts';
import EcoDecor from '../components/EcoDecor';
import useData from '../hooks/useData';
import Loader from '../components/Loader/Loader';

const HomeLayout = () => {
  const { plants } = useData();
  // if (loading) {
  //   return <Loader />;
  // }
  const topRated = plants.slice(0, 8);

  return (
    <div className="">
      <Hero />
      <TopRatedPlants topRated={topRated} />
      <PlantCareTips />
      <GreenExperts />
      <EcoDecor />
    </div>
  );
};

export default HomeLayout;
