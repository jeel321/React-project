import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MissionsGrid = () => {
  const [missions, setMissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.post(
          "https://crmapi.conscor.com/api/general/v1/mfind",
          {
            dbName: "heros",
            collectionName: "missions",
            limit: 0,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "w5K4iw1tRCTbnOrkprhs",
            },
          }
        );

        if (response.data.success) {
          const allMissions = response.data.data;
          setMissions(allMissions);
        }
      } catch (error) {
        console.error("Error fetching missions:", error);
      }
    };

    fetchMissions();
  }, []);

  // Filtered missions based on searchTerm
  const filteredMissions = missions.filter((item) =>
    item.sectionData.missions.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="inline-block bg-blue-600 text-white text-xl font-semibold px-6 py-2 rounded-2xl mb-4">Popular Missions</h2>
        <h1 className="text-3xl font-bold text-blue-600">Where Heroes Rise—Join the Most Epic</h1>
        <h1 className="text-3xl font-bold mb-7 text-blue-600">Challenges Today!</h1>

        {/* Search input */}
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search Mission"
            className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">🔍</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredMissions.length > 0 ? (
          filteredMissions.map((item, index) => {
            const mission = item.sectionData.missions;
            const slug = mission.title.toLowerCase().replace(/\s+/g, "-");

            return (
              <div
                key={item._id || index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center min-h-[200px]"
              >
                <div className="flex flex-col pr-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{mission.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{mission.description}</p>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-yellow-500 mr-2">⭐</span>
                    <span className="font-medium text-gray-800">Level:</span>&nbsp;
                    <span>{mission.tag || "Beginner"}</span>
                  </div>
                </div>

                <Link to={`/view/${slug}`}>
                  <button className="bg-blue-600 text-white font-semibold text-sm py-2 px-5 rounded-lg hover:bg-blue-700 transition">
                    View
                  </button>
                </Link>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">No missions found.</p>
        )}
      </div>
    </section>
  );
};

export default MissionsGrid;
