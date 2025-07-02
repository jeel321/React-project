import React from 'react';
import groupimg from '../assets/home/group.jpg'; // fallback image

const ViewHead = ({ mission }) => {
  const imageSrc = mission.image || groupimg;

  return (
    <section>
      <div className="px-4 sm:px-8 lg:px-16 py-6">
        <div className="w-full max-w-[1798px] mx-auto">
          <img
            src={imageSrc}
            alt={mission.title}
            className="w-screen h-[500px] object-cover shadow-md"
          />
        </div>

        <div className="w-full max-w-[1798px] mx-auto mt-6 border bg-gray-100 p-4 rounded-md">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-blue-600">{mission.title}</h2>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-600">Level: {mission.tag}</span>
            </div>
          </div>
          <p className="text-gray-600 mt-2">{mission.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ViewHead;
