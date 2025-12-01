import React from 'react';
import { FaTint, FaSun, FaLeaf } from 'react-icons/fa';
import SectionHeading from './SectionHeading/SectionHeading';
import Container from './Container/Container';
import { motion } from 'framer-motion';
const careTips = [
  {
    id: 1,
    title: 'Watering Tips',
    description:
      'Water your indoor plants when the top inch of soil feels dry. Avoid overwatering by ensuring pots have proper drainage.',
    icon: <FaTint className="text-8xl text-blue-500" />,
    bg: 'bg-gradient-to-br from-blue-900 to-blue-500',
  },
  {
    id: 2,
    title: 'Sunlight Requirements',
    description:
      'Place your plants where they receive bright, indirect sunlight. Rotate pots occasionally to ensure even growth.',
    icon: <FaSun className="text-8xl text-yellow-400" />,
    bg: 'bg-gradient-to-br from-yellow-800 to-yellow-400',
  },
  {
    id: 3,
    title: 'Fertilizing Advice',
    description:
      'Use a balanced, water-soluble fertilizer once a month during the growing season (spring and summer).',
    icon: <FaLeaf className="text-8xl text-green-400" />,
    bg: 'bg-gradient-to-br from-green-800 to-green-400',
  },
];

const PlantCareTips = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Container>
        <SectionHeading title="Plant Care Tips" />
        <div className="px-4 lg:px-0 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {careTips.map(tip => (
            <div
              key={tip.id}
              className={`p-6 rounded-lg shadow-xl hover:shadow-2xl transition ${tip.bg} hover:-translate-y-1.5`}
            >
              <div className="mb-4">{tip.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-200 ">{tip.description} </p>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default PlantCareTips;
