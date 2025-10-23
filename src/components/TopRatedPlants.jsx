import React from 'react';
import PlantCard from './PlantCard';
import { Link } from 'react-router';
import SectionHeading from './SectionHeading/SectionHeading';
import Container from './Container/Container';
import { motion } from 'framer-motion';
const TopRatedPlants = ({ topRated }) => {
  return (
    <motion.section
      style={{ background: 'url("/images/imgheader.jpg")' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Container>
        <SectionHeading title="Top Rated Indoor Plants" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topRated.map(plant => (
            <PlantCard plant={plant} key={plant?.plantId} />
          ))}
        </div>
        <div className="text-center mt-15">
          <Link
            to="/plants"
            className="px-5 py-2 bg-green-600 font-semibold text-white hover:bg-green-700 transition rounded   cursor-pointer"
          >
            See all plants
          </Link>
        </div>
      </Container>
    </motion.section>
  );
};

export default TopRatedPlants;
