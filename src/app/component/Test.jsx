"use client"

import React, { useEffect, useState } from 'react';

const Test = () => {
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArts = async () => {
      try {
        const response = await fetch('/api/getAllImages');
        const data = await response.json();
        if (data.success) {
          setArts(data.data);
        } else {
          console.error('Failed to fetch data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {arts.map((art) => (
        <div key={art._id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={art.imageurl} alt={art.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{art.title}</div>
            <p className="text-gray-700 text-base">{art.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
