import React, { useState } from 'react';
import PlantCard from '../components/PlantCard';
import useData from '../hooks/useData';
import Loader from '../components/Loader/Loader';

const Plants = () => {
  const { plants, loading } = useData();

  const [sortOrder, setSortOrder] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  if (loading) return <Loader />;

  const filteredPlants = plants.filter(plant => {
    if (priceFilter === 'low') return plant.price <= 15;
    if (priceFilter === 'mid') return plant.price > 15 && plant.price <= 25;
    if (priceFilter === 'high') return plant.price > 25;
    return true;
  });

  const sortedPlants = [...filteredPlants].sort((a, b) => {
    if (sortOrder === 'low-high') return a.price - b.price;
    if (sortOrder === 'high-low') return b.price - a.price;
    if (sortOrder === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div>
      <title>Plants | GreenNest</title>
      <section className="bg-gradient-to-b from-green-50 via-white to-white py-20">
        <div
          className="py-20 text-center bg-cover bg-no-repeat"
          style={{ background: 'url("/public/images/imgheader.jpg")' }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold rounded text-center">
            All Plants{' '}
            <span className="text-sm text-green-600">
              Total plants: ({plants.length})
            </span>
          </h2>
        </div>
        <div className="w-full lg:w-10/12 mx-auto px-4 py-10">
          <div className="flex justify-center flex-wrap items-center gap-4 mb-8">
            {/* Sort */}
            <select
              className="border px-4 py-2 rounded"
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
              <option value="rating">Rating: High → Low</option>
            </select>

            {/* Filter */}
            <select
              className="border px-4 py-2 rounded"
              value={priceFilter}
              onChange={e => setPriceFilter(e.target.value)}
            >
              <option value="">Filter By Price</option>
              <option value="low">≤ $15</option>
              <option value="mid">$16 – $25</option>
              <option value="high">≥ $26</option>
            </select>
          </div>

          {/* --- Plant Grid --- */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedPlants.map(plant => (
              <PlantCard key={plant.plantId} plant={plant} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plants;
