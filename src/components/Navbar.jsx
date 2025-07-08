import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!localStorage.getItem("accessToken");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="px-4 sm:px-8 lg:px-20 py-5 sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          <h1 className="text-xl font-semibold text-blue-700">Heroes</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 font-medium text-gray-800">
          <Link to="/" className="hover:text-blue-700">Home</Link>
          <Link to="/mission" className="hover:text-blue-700">Missions</Link>
          <Link to="/blog1" className="hover:text-blue-700">Blog</Link>
          <Link to="/ourheroes" className="hover:text-blue-700">Our Heroes</Link>
          <Link to="/aboutus" className="hover:text-blue-700">About Us</Link>
          {/* <Link to="/UserProfileCard" className="hover:text-blue-700"></Link> */}
        </div>

        {/* Desktop Profile Dropdown */}
        <div className="hidden md:block relative" ref={dropdownRef}>
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen((prev) => !prev)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <FontAwesomeIcon icon={faUser} className="text-[#285AA8]" />
                <span className="text-black font-semibold">
                  {user?.username || "User"}
                </span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-50">
                  <Link
                    to="/UserProfileCard"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setProfileOpen(false)}
                  >
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setProfileOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5" />
                    </svg>
                    Logout
                  </button>
                </div>
              )}
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

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="mt-4 space-y-4 md:hidden font-medium text-gray-800">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
          <Link to="/mission" onClick={() => setMenuOpen(false)} className="block">Missions</Link>
          <Link to="/blog1" onClick={() => setMenuOpen(false)} className="block">Blog</Link>
          <Link to="/ourheroes" onClick={() => setMenuOpen(false)} className="block">Our Heroes</Link>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)} className="block">About Us</Link>
          {isLoggedIn ? (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} className="text-[#285AA8]" />
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
