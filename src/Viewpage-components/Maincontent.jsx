import React from 'react';

const Maincontent = ({ mission }) => {
  return (
    <section>
      <div className="px-4 sm:px-8 lg:px-16 py-6">
        {/* Description */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold flex items-center text-gray-800">
            <span className="mr-2">📋</span> Description
          </h3>
          <p className="text-gray-600 mt-2">
            {mission.fulldescription || mission.description}
          </p>
        </div>

        {/* Frequency and Location */}
        <div className="mt-6 flex flex-col md:flex-row md:space-x-72">
          <div>
            <h3 className="text-lg font-semibold flex items-center text-gray-800">
              <span className="mr-2">🕒</span> Frequency
            </h3>
            <p className="text-gray-600 mt-1">
              {mission.frequency || 'Available Every Weekend (Saturday & Sunday)'}
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold flex items-center text-gray-800">
              <span className="mr-2 text-red-500">📍</span> Location
            </h3>
            <p className="text-gray-600 mt-1">
              {mission.location || 'Assigned Based on Your Current City & Area'}
            </p>
          </div>
        </div>

        {/* Reward */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold flex items-center text-gray-800">
            <span className="mr-2">🏆</span> Reward
          </h3>
          <p className="text-gray-600 mt-1 font-semibold">Base: {mission.reward || '50'} Hero Points</p>
          <p className="text-gray-600 mt-1">Bonus: 25 Hero Points for Perfect Cleanup</p>
          <p className="text-gray-600 mt-1">Exclusive "Street Guardian" Digital Badge</p>
          <p className="text-gray-600 mt-1">Top 10 cleaners of the week receive bonus 20 points</p>
        </div>

        {/* Terms & Conditions */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold flex items-center text-gray-800">
            <span className="mr-2">📜</span> Terms & Conditions
          </h3>
          <ul className="list-decimal list-inside text-gray-600 mt-2 space-y-1">
            <li>Upload before/after photos of the area cleaned (min. 2 each)</li>
            <li>Must spend a minimum of 45 minutes</li>
            <li>Use eco-friendly cleaning tools (no plastic bags allowed)</li>
            <li>Inspect local rules and don't disturb others</li>
            <li>System/mod team will verify your cleanup</li>
            <li>Points will be awarded within 24 hours after successful validation</li>
          </ul>
        </div>

        {/* Start Mission Button */}
        <div className="mt-8">
          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 text-2xl font-bold">
            Start Mission
          </button>
        </div>
      </div>
    </section>
  );
};

export default Maincontent;
