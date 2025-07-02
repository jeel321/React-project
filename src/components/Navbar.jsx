import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in by retrieving user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!localStorage.getItem("accessToken"); // Check if accessToken exists

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="px-4 sm:px-8 lg:px-20 py-5 sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          <h1 className="text-xl font-semibold text-blue-700">Heroes</h1>
        </div>

        {/* Static Desktop Navigation */}
        <div className="hidden md:flex space-x-10 font-medium text-gray-800">
          <Link to="/" className="hover:text-blue-700">
            Home
          </Link>
          <Link to="/mission" className="hover:text-blue-700">
            Missions
          </Link>
          <Link to="/blog1" className="hover:text-blue-700">
            Blog
          </Link>
          <Link to="/ourheroes" className="hover:text-blue-700">
            Our Heroes
          </Link>
          <Link to="/aboutus" className="hover:text-blue-700">
            About Us
          </Link>
        </div>

        {/* Conditional Rendering: CTA Button or User Profile */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faUser}
                className="text-[#285AA8]"
                aria-hidden="true"
              />
              <span className="text-black font-semibold">
                {user?.username || "User"} {/* Display username or fallback */}
              </span>
              <button
                onClick={handleLogout}
                className="ml-4 text-sm text-red-600 hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
            >
              Join As Hero
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="mt-4 space-y-4 md:hidden font-medium text-gray-800">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">
            Home
          </Link>
          <Link
            to="/mission"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Missions
          </Link>
          <Link
            to="/blog1"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Blog
          </Link>
          <Link
            to="/ourheroes"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Our Heroes
          </Link>
          <Link
            to="/aboutus"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            About Us
          </Link>
          {isLoggedIn ? (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-[#285AA8]"
                  aria-hidden="true"
                />
                <span className="text-black font-semibold">
                  {user?.username || "User"}
                </span>
              </div>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-sm text-red-600 hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block text-center mt-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow"
            >
              Join As Hero
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;