import React from 'react';
import Hero from '../components/Hero';
import TopRatedPlants from '../components/TopRatedPlants';
import PlantCareTips from '../components/PlantCareTips';
import GreenExperts from '../components/GreenExperts';
import EcoDecor from '../components/EcoDecor';
import useData from '../hooks/useData';
import PlantOfTheWeek from '../components/PlantOfTheWeek';
const HomeLayout = () => {
  const { plants } = useData();
  const topRated = plants.slice(0, 8);

  return (
    <main className="">
      <title> Home | GreenNest </title>
      <Hero />
      <TopRatedPlants topRated={topRated} />
      <PlantCareTips />
      <GreenExperts />
      <EcoDecor />
      <PlantOfTheWeek />
    </main>
  );
};

export default HomeLayout;
