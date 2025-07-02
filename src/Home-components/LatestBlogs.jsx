import React from 'react';
import latestimg1 from '../assets/home/1.jpg';
import latestimg2 from '../assets/home/2.jpg';
import latestimg3 from '../assets/home/3.jpg';

const LatestBlogs = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-16">Latest Blogs</h2>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Blog Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col">
          <img
            src={latestimg1}
            alt="Becoming a Hero: How Small Actions Can Lead to Big Impact"
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
            Becoming a Hero: How Small Actions Can Lead to Big Impact
          </h3>
          <p className="text-gray-600 flex-grow line-clamp-3">
            A motivational post that inspires users to become 'Heroes' by taking on missions. Discuss how even small tasks like planting a tree
          </p>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col">
          <img
            src={latestimg2}
            alt="From Missions to Rewards: How Heroes Book Supports Your Journey"
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
            From Missions to Rewards: How Heroes Book Supports Your Journey
          </h3>
          <p className="text-gray-600 flex-grow line-clamp-3">
            Walk through the steps, like filling out mission details, uploading media (photos/videos), and getting verified
          </p>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col">
          <img
            src={latestimg3}
            alt="The Power of Gamification in Social Impact: How Heroes Book is Changing the Game"
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
            The Power of Gamification in Social Impact: How Heroes Book is Changing the Game
          </h3>
          <p className="text-gray-600 flex-grow line-clamp-3">
            This post would explain gamification and its importance in social impact. Discuss how turning real-life activities into missions and rewards
          </p>
        </div>

      </div>
    </section>
  );
};

export default LatestBlogs;
