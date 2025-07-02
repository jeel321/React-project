import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PopularMission = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.post(
          'https://crmapi.conscor.com/api/general/v1/mfind',
          {
            dbName: "heros",
            collectionName: "missions",
            limit: 0
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': 'w5K4iw1tRCTbnOrkprhs'
            }
          }
        );

        if (response.data.success) {
          const allMissions = response.data.data;
          const sliced = allMissions.slice(0, 6);
          setMissions(sliced);
        }
      } catch (error) {
        console.error("Error fetching missions:", error);
      }
    };

    fetchMissions();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-[#F9FAFB]">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Popular Missions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((item, index) => {
          const mission = item.sectionData.missions;
          const slug = mission.title.toLowerCase().replace(/\s+/g, '-');

          return (
            <div
              key={item._id || index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-4 flex items-center justify-between"
            >
              {/* Text content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{mission.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{mission.description}</p>
                <div className="flex items-center text-sm text-gray-700 font-medium">
                  <span className="text-yellow-500 mr-2 text-base">⭐</span>
                  <span className="text-black">Level:</span>&nbsp;
                  <span className='ml-1 text-gray-800'>{mission.tag}</span>
                </div>
              </div>

              {/* Left-aligned middle button */}
              <Link to={`/view/${slug}`} className="ml-4 self-center">
                <button className="bg-[#2D60FF] hover:bg-blue-700 text-white font-semibold text-sm py-2 px-5 rounded-lg">
                  View
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularMission;
