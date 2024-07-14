import React, { useState } from 'react';

const AdminPost = () => {
  const [imageurl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageurl, title, description,genre }),
      });

      const data = await response.json();
      if (data.success) {
        // Reset form fields after successful submission
        setImageUrl('');
        setTitle('');
        setDescription('');
        setGenre('');
        alert('Art item posted successfully!');
      } else {
        alert('Failed to post art item:', data.error);
      }
    } catch (error) {
      console.error('Error posting art item:', error);
      alert('Error posting art item. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Post New Art</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="imageurl" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <textarea
  id="imageurl"
  className="mt-1 block w-full h-52 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
  value={imageurl}
  onChange={(e) => setImageUrl(e.target.value)}
  required
/>

        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? 'Posting...' : 'Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPost;
