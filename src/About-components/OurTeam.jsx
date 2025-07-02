import React from 'react';
import member1 from '../assets/home/member1.png';
import member2 from '../assets/home/member2.jpg';
import member3 from '../assets/home/member3.jpg';
import member4 from '../assets/home/person.png'

const OurTeam = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-8 lg:px-20">
      <div className=" flex-wrap gap-12 justify-center ">
        <h1 className="text-3xl text-center font-bold text-blue-700 mb-8">
          Meet Our Team
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* Member 1 */}
          <div className="flex-1 min-w-[260px] max-w-[300px] text-center bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
            <img src={member1} alt="James Vizan" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h2 className="text-lg font-bold text-gray-800 mb-1">James Vizan</h2>
            <h4 className="text-sm text-gray-500 mb-2">Founder & Visionary</h4>
            <p className="text-gray-700 text-sm">
              Inspired by the power of small actions, James started Heroes Book to make heroism accessible to all.
            </p>
          </div>

    {/* Member 2 */}
          <div className="flex-1 min-w-[260px] max-w-[300px] text-center bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
            <img src={member2} alt="Alex Carter" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h2 className="text-lg font-bold text-gray-800 mb-1">Alex Carter</h2>
            <h4 className="text-sm text-gray-500 mb-2">Community Lead</h4>
            <p className="text-gray-700 text-sm">
              Alex ensures every hero feels supported and motivated to make a difference.
            </p>
          </div>

    {/* Member 3 */}
          <div className="flex-1 min-w-[260px] max-w-[300px] text-center bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
            <img src={member3} alt="Maya Lin" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h2 className="text-lg font-bold text-gray-800 mb-1">Maya Lin</h2>
            <h4 className="text-sm text-gray-500 mb-2">Tech Lead</h4>
            <p className="text-gray-700 text-sm">
              Maya builds the platform that connects heroes worldwide.
            </p>
          </div>

    {/* Member 3 */}
         <div className="flex-1 min-w-[260px] max-w-[300px] text-center bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
            <img src={member4} alt="Maya Lin" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h2 className="text-lg font-bold text-gray-800 mb-1">Olivia Rhye            </h2>
            <h4 className="text-sm text-gray-500 mb-2">Planet Protector</h4>
            <p className="text-gray-700 text-sm">
              Maya builds the platform that connects heroes worldwide.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurTeam;
