import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useData = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios('/data/plants.json')
      .then(data => setPlants(data.data))
      .catch(err => {
        setError(err.message);
        console.error();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { plants, loading, error };
};

export default useData;
