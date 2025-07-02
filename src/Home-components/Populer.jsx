import React from 'react';
import firstImg from '../assets/home/1.jpg';
import secondImg from '../assets/home/2.jpg';
import thirdImg from '../assets/home/3.jpg';
import fourthImg from '../assets/home/4.jpg';
import fifthImg from '../assets/home/5.jpg';

const Popular = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Popular Categories</h1>

      {/* Categories Row */}
      <div className="flex flex-wrap gap-6">
        {/* Environmental Missions */}
        <div className="flex-1 min-w-[300px] max-w-[350px] text-center">
          <img
            src={firstImg}
            alt="Environmental Missions"
            className="w-full h-40 object-cover rounded-lg shadow-sm mb-3"
          />
          <h2 className="text-lg font-semibold text-gray-900">Environmental Missions</h2>
        </div>

        {/* Community Protection */}
        <div className="flex-1 min-w-[300px] max-w-[350px] text-center">
          <img
            src={secondImg}
            alt="Community Protection"
            className="w-full h-40 object-cover rounded-lg shadow-sm mb-3"
          />
          <h2 className="text-lg font-semibold text-gray-900">Community Protection</h2>
        </div>

        {/* Knowledge & Awareness */}
        <div className="flex-1 min-w-[300px] max-w-[350px] text-center">
          <img
            src={thirdImg}
            alt="Knowledge & Awareness"
            className="w-full h-40 object-cover rounded-lg shadow-sm mb-3"
          />
          <h2 className="text-lg font-semibold text-gray-900">Knowledge & Awareness</h2>
        </div>

        {/* Social & Team Missions */}
        <div className="flex-1 min-w-[300px] max-w-[350px] text-center">
          <img
            src={fourthImg}
            alt="Social & Team Missions"
            className="w-full h-40 object-cover rounded-lg shadow-sm mb-3"
          />
          <h2 className="text-lg font-semibold text-gray-900">Social & Team Missions</h2>
        </div>

        {/* Waste Management */}
        <div className="flex-1 min-w-[300px] max-w-[350px] text-center">
          <img
            src={fifthImg}
            alt="Waste Management"
            className="w-full h-40 object-cover rounded-lg shadow-sm mb-3"
          />
          <h2 className="text-lg font-semibold text-gray-900">Waste Management</h2>
        </div>
      </div>
    </section>
  );
};

export default Popular;