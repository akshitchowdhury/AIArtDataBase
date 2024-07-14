import React from 'react';

const ImageUrlLink = () => {
  return (
    <div className="flex justify-end items-end h-20">
      <a
        href="https://www.atatus.com/tools/image-to-url"
        target='_blank'
        className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-700"
      >
        Convert Image to URL
      </a>
    </div>
  );
};

export default ImageUrlLink;
