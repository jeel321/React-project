import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const OurHero = ({ searchQuery = '' }) => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fallbackImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.post(
          'https://crmapi.conscor.com/api/general/v1/mfind',
          {
            dbName: 'heros',
            collectionName: 'appuser',
            limit: 5,
          },
          {
            headers: {
              'x-api-key': 'w5K4iw1tRCTbnOrkprhs',
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.data.success && response.data.data.length > 0) {
          const heroData = response.data.data
            .map((item) => {
              if (!item.sectionData || !item.sectionData.appuser) {
                console.warn('Invalid hero data:', item);
                return null;
              }

              const user = item.sectionData.appuser;

              let heroName = `${user.fname || ''} ${user.lname || ''}`.trim();
              if (!heroName && user.name && !user.name.includes('-')) {
                heroName = user.name;
              }
              if (!heroName) {
                heroName = 'Unknown Hero';
              }

              let finalImage = fallbackImage;
              if (user.image && !user.image.includes('via.placeholder.com')) {
                finalImage = user.image.startsWith('http')
                  ? user.image
                  : `https://crmapi.conscor.com/uploads/${user.image}`;
              }

              return {
                id: item._id,
                name: heroName,
                role: user.title || user.role || 'Hero',
                img: finalImage,
              };
            })
            .filter((hero) => hero !== null);

          setHeroes(heroData);
        } else {
          setError('No heroes found');
        }
      } catch (err) {
        console.error('Failed to fetch heroes:', err);
        setError('Failed to load heroes');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  const filteredHeroes = heroes.filter((hero) => {
    const name = (hero.name || '').toLowerCase();
    const role = (hero.role || '').toLowerCase();
    const query = (searchQuery || '').toLowerCase();
    return name.includes(query) || role.includes(query);
  });

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
        <div className="text-center">Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
        <div className="text-center text-red-600">{error}</div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Heroes</h2>

      <div className="flex flex-wrap gap-12 justify-center">
        {filteredHeroes.slice(0, 5).map((hero) => (
          <Link to={`/herodetails/${hero.id}`} key={hero.id}>
            <div
              className="flex-1 min-w-[260px] max-w-[300px] text-center bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={hero.img}
                alt={hero.name}
                onError={handleImageError}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-blue-50 shadow"
              />
              <h3 className="text-xl font-semibold text-gray-900">{hero.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{hero.role}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="text-center py-12 px-4 bg-white">
        <h3 className="text-3xl font-semibold mb-2">
          Join the Heroes Book community and earn by completing missions that make a difference.
        </h3>
        <p className="text-gray-600 mb-4">
          Create your heroic profile, choose your cause, and start transforming the world — one mission at a time.
        </p>
        <Link to="/login">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out block mx-auto"
          >
            Join As Hero
          </button>
        </Link>
      </section>
    </section>
  );
};

export default OurHero;