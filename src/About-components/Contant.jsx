import React from 'react';
import { Link } from 'react-router-dom';


const MissionContent = () => {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-16 py-6">
      <div className="mt-4">
      <h1 className="text-3xl text-center font-bold text-blue-700 mb-4">
          Our Mission
        </h1>
          <p className="text-gray-600 mt-2 leading-relaxed mb-4">
          Heroes Book was founded on a simple idea: small actions can lead to big change. Whether it's planting a tree, cleaning up a community space, or helping a neighbor, every act of kindness counts. Our platform celebrates these efforts by connecting heroes, tracking their achievements, and inspiring others to join the movement.
          .
          </p>

          <p className="text-gray-600 mt-8  text-base leading-relaxed mb-6">
          We aim to build a global community where anyone can become a hero, regardless of their background or resources. By recognizing and rewarding small missions, we hope to create a ripple effect of positive impact that transforms the world, one action at a time.
          </p>

    <Link to="/login">
     <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold 
                     hover:bg-blue-700 hover:shadow-lg hover:scale-105 
                     transition duration-300 ease-in-out block mx-auto">
  Join The Hero Community
</button>
</Link>

        </div>
    </section>
  );
};

export default MissionContent;