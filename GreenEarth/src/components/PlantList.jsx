import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlantList(){
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retryAfter, setRetryAfter] = useState(null);  // Store retry time

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
        const url = 'https://houseplant-api.p.rapidapi.com/plants';

        const response = await axios.get(url, {
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'houseplant-api.p.rapidapi.com',
          },
        });

        setPlants(response.data);
        setLoading(false);
      } catch (err) {
        if (err.response && err.response.status === 429) {
          // If 429 Too Many Requests, show the retry time from headers
          const retryTime = err.response.headers['retry-after'];
          setRetryAfter(retryTime);
        } else {
          setError('Failed to fetch plants');
        }
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (retryAfter) {
    return <div>Too many requests. Please wait {retryAfter} seconds before retrying.</div>;
  }

  return (
    <div>
      <h1>Plants List</h1>
      <div className="grid grid-cols-4 gap-4">
        {plants.map((plant) => (
          <div key={plant.id} className="bg-white rounded-lg shadow-lg p-4">
            <img src={plant.image_url} alt={plant.name} className="w-full h-40 object-cover rounded-t-lg" />
            <h2 className="text-xl font-bold mt-4">{plant.name}</h2>
            <p className="text-gray-600">{plant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantList;