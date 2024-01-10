import React from 'react';

const PortItem = ({ src, description, title, siteLink, codeLink }) => {
  return (
    <div className="my-8 border-2 shadow-lg rounded-lg p-6 flex bg-white flex-col">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <img src={src} alt={title} className="w-full h-auto mb-4 rounded-lg" />
      <p className="text-base text-stone-500 mb-4">{description}</p>
      <div className="flex justify-between mt-auto">
        <a
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-cyan-700 hover:bg-white hover:text-cyan-700 hover:scale-110 border rounded-lg p-2 border-cyan-700 transition duration-300 ease-in-out"
        >
          Visit Site
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-cyan-700 hover:bg-white hover:text-cyan-700 hover:scale-110 border rounded-lg p-2 border-cyan-700 transition duration-300 ease-in-out"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default PortItem;
