"use client";

import React, { useEffect, useState } from 'react';
import AdminPost from './AdminPost';
import ImageUrlLink from './ImageUrlLink';

const Test = () => {
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getAllImages`);
        const data = await response.json();
        console.log(data)

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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deleteImage?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        setArts(arts.filter((art) => art._id !== id));
        alert('Art item deleted successfully!');
      } else {
        alert('Failed to delete art item:', data.error);
      }
    } catch (error) {
      console.error('Error deleting art item:', error);
      alert('Error deleting art item. Please try again later.');
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {arts.map((art) => (
          <div key={art._id} className="max-w-sm rounded overflow-hidden shadow-lg relative">
          <div className='transform transition-transform duration-300 hover:scale-110'>
          <img className="w-full " src={art.imageurl} alt={art.title} />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{art.title}</div>
              <p className="text-gray-700 text-base">{art.description}</p>
              <p className="text-gray-700 text-base"><span className='text-xl font-semibold'>Genre:</span> {art.genre}</p>
              <button
                onClick={() => handleDelete(art._id)}
                className="absolute top-2 right-2 inline-flex items-center px-3 py-1 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <ImageUrlLink />
      <AdminPost />
    </>
  );
};

export default Test;
