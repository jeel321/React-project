import React, { useState, useEffect } from 'react';
import Hero from '../Home-components/Hero';
import PopularMission from '../Home-components/PopularMission';
import LatestBlogs from '../Home-components/LatestBlogs';
import Populer from '../Home-components/Populer';
import OurHero from '../Home-components/OurHero';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username) {
      setUsername(user.username);
      setShowPopup(true); // Show popup on component mount if user is logged in

      // Set timeout to hide popup after 3 seconds
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      // Cleanup timeout on component unmount to prevent memory leaks
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative">
      {/* Popup Message */}
{showPopup && (
  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg z-50 animate-fade-in-out">
    <p className="text-center text-lg font-semibold">Welcome {username}!</p>
  </div>
)}


      {/* Existing Home Components */}
      <Hero />
      <PopularMission />
      <OurHero />
      <Populer />
      <LatestBlogs />
    </div>
  );
};

export default Home;