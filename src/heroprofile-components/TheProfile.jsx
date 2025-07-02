import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TheProfile = ({ heroId }) => {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fallbackImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.post(
          'https://crmapi.conscor.com/api/general/v1/mfind',
          {
            dbName: 'heros',
            collectionName: 'appuser',
            limit: 1,
            query: { _id: heroId },
          },
          {
            headers: {
              'x-api-key': 'w5K4iw1tRCTbnOrkprhs',
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.data.success && response.data.data.length > 0) {
          const user = response.data.data[0].sectionData.appuser;

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

          setHero({
            id: response.data.data[0]._id,
            name: heroName,
            role: user.title || user.role || 'Unknown Role',
            img: finalImage,
            slug: user.slug || generateSlug(heroName),
            title: user.title || 'No title',
            followersCount: Array.isArray(user.followersCount) ? user.followersCount.length : 0,
            followingCount: Array.isArray(user.followingCount) ? user.followingCount.length : 0,
            hobby: user.hobby || 'Add a hobby',
            interest: user.interest || 'Share an interest',
            occupation: user.occupation || 'Add your occupation',
            skills: user.skills || 'List your skills',
          });
        } else {
          setError('Hero not found');
        }
      } catch (err) {
        console.error('Failed to fetch hero:', err);
        setError('Failed to load hero details');
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, [heroId]);

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

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

  if (error || !hero) {
    return (
      <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
        <div className="text-center text-red-600">{error || 'Hero not found'}</div>
        <Link to="/heroes" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to Heroes
        </Link>
      </section>
    );
  }

  return (
    <div className="flex justify-center min-h-[650px] items-center py-10 px-4 bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md border border-gray-200">
        <div className="flex flex-col items-center px-6 pt-6 pb-4">
          {/* Profile Image */}
          <div className="relative">
            <img
              src={hero.img}
              alt={hero.name}
              onError={handleImageError}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            <span className="absolute bottom-0 right-0 transform translate-x-2 translate-y-1 bg-blue-600 text-white text-xs font-semibold rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
              100
            </span>
          </div>

          <h2 className="text-xl font-bold mt-4 text-[#1a237e]">{hero.name}</h2>
          <p className="text-gray-600 text-sm mt-1 font-medium">Class D | Rank 100</p>

          {/* Progress */}
          <div className="w-full mt-4">
            <div className="flex justify-between text-sm text-gray-600 font-medium">
              <span className="text-[#1a237e] font-semibold">⭐ Rank Progress</span>
              <span>0%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">
              Finish 100 missions and get 5000 instant cash.
            </p>
          </div>

          {/* Follow Section */}
          <div className="mt-4 text-sm text-gray-700 text-center">
            <p>
              <span className="font-semibold">{hero.followersCount}</span> Followers   
              <span className="font-semibold">{hero.followingCount}</span> Following
            </p>
            <p className="italic mt-1 text-gray-500">{hero.title}</p>
          </div>

          {/* Extra Info */}
          <div className="grid grid-cols-2 gap-x-4 mt-4 w-full text-sm text-gray-700">
            <p><span className="font-semibold text-gray-900">Hobby:</span> {hero.hobby}</p>
            <p><span className="font-semibold text-gray-900">Skills:</span> {hero.skills}</p>
            <p><span className="font-semibold text-gray-900">Interest:</span> {hero.interest}</p>
            <p><span className="font-semibold text-gray-900">Occupation:</span> {hero.occupation}</p>
          </div>

          <div className="flex justify-between mt-6 w-full">
            <button className="bg-[#1a237e] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#0d155c] w-full mr-2">
              Follow
            </button>
            <button className="bg-[#1a237e] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#0d155c] w-full ml-2">
              Message
            </button>
          </div>
        </div>

        {/* Achievements */}
        <div className="border-t px-6 py-4">
          <h3 className="text-md font-semibold text-[#1a237e] flex items-center">
            <span className="mr-2 text-yellow-500">🏆</span> Achievements
          </h3>
          <p className="text-sm text-gray-500 mt-2">No completed achievements yet.</p>
        </div>
      </div>
    </div>
  );
};

export default TheProfile;