import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-100 border-t text-sm text-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Popular Mission */}
        <div>
          <h2 className="font-semibold mb-3">Popular Mission</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition">Clean the Streets</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Green Strike</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Seed Sower</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Tree Guardian</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Green Gang Recruiter</a></li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div>
          <h2 className="font-semibold mb-3">Popular Categories</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition">Environmental Missions</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Community Protection</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Knowledge & Awareness</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Social & Team Missions</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Waste Management</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="font-semibold mb-3">Follow Us</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition">Facebook</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Instagram</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">YouTube</a></li>
          </ul>
        </div>

        {/* Terms & Policies */}
        <div>
          <h2 className="font-semibold mb-3">Terms & Policies</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 border-t text-gray-500">
        &copy; 2025 Heroes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
