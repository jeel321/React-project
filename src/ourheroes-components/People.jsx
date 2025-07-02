import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const People = () => {
  const [heroes, setHeroes] = useState([]);
  const fallbackImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  // Helper function to generate slug from name
  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
      .replace(/^-+|-+$/g, ''); // Trim leading/trailing hyphens
  };

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.post(
          'https://crmapi.conscor.com/api/general/v1/mfind',
          {
            dbName: 'heros',
            collectionName: 'appuser',
            limit: 1000,
          },
          {
            headers: {
              'x-api-key': 'w5K4iw1tRCTbnOrkprhs',
              'Content-Type': 'application/json',
            },
          }
        );

        const heroList = response.data.data.map((item) => {
          const user = item.sectionData.appuser;
          const profilePic = user.image;

          let finalImage = fallbackImage;
          if (profilePic && !profilePic.includes('via.placeholder.com')) {
            finalImage = profilePic.startsWith('http')
              ? profilePic
              : `https://crmapi.conscor.com/uploads/${profilePic}`;
          }

          let heroName = `${user.fname || ''} ${user.lname || ''}`.trim();
          if (!heroName && user.name && !user.name.includes('-')) {
            heroName = user.name;
          }
          if (!heroName) {
            heroName = 'Unknown Hero';
          }

          // Use existing slug or generate one from heroName
          const slug = user.slug || generateSlug(heroName);

          return {
            id: item._id,
            name: heroName,
            role: user.title || 'Unknown Role',
            img: finalImage,
            slug, // Add slug to hero object
          };
        });

        setHeroes(heroList);
      } catch (error) {
        console.error('Failed to fetch heroes:', error);
      }
    };

    fetchHeroes();
  }, []);

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
      <div className="flex flex-wrap gap-12 justify-center">
        {heroes.map((hero) => (
          <Link to={`/herodetails/${hero.id}`} key={hero.id}>
            <div className="flex-1 min-w-[260px] max-w-[300px] text-center bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
              <img
                src={hero.img}
                alt={hero.name}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-blue-50 shadow"
                onError={handleImageError}
              />
              <h3 className="text-xl font-semibold text-gray-900">{hero.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{hero.role}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <section className="text-center py-12 px-4 bg-white">
        <h3 className="text-3xl font-semibold mb-2">
          Join the Heroes Book community and earn by completing missions that make a difference.
        </h3>
        <p className="text-gray-600 mb-4">
          Create your heroic profile, choose your cause, and start transforming the world — one mission at a time.
        </p>
        <Link to="/login">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out block mx-auto">
            Join As Hero
          </button>
        </Link>
      </section>
    </section>
  );
};

export default People;