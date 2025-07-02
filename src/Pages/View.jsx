import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ViewHead from '../Viewpage-components/ViewHead';
import Maincontent from '../Viewpage-components/Maincontent';

const View = () => {
  const { slug } = useParams();
  const [mission, setMission] = useState(null);

  useEffect(() => {
    const fetchMission = async () => {
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

        const allMissions = response.data.data;
        const match = allMissions.find(item => {
          const titleSlug = item.sectionData.missions.title.toLowerCase().replace(/\s+/g, '-');
          return titleSlug === slug;
        });

        setMission(match?.sectionData?.missions);
      } catch (error) {
        console.error("Error fetching mission:", error);
      }
    };

    fetchMission();
  }, [slug]);

  if (!mission) return <div className="p-8 text-gray-600">Loading mission...</div>;

  return (
    <div>
      <ViewHead mission={mission} />
      <Maincontent mission={mission} />
    </div>
  );
};

export default View;
