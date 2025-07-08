import React, { useEffect, useState } from "react";
import { FaStar, FaTrophy } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import axios from "axios";

const UserProfileCard = () => {
  const [profileData, setProfileData] = useState({
    name: "Loading...",
    rank: 100,
    class: "D",
    progressPoints: 0,
    maxPoints: 100,
    followers: 0,
    following: 0,
    firstName: "",
    lastName: "",
    title: "",
    hobby: "",
    skills: "",
    interest: "",
    occupation: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(profileData);
  const [profileImage, setProfileImage] = useState(null);

  const progressPercentage =
    (profileData.progressPoints / profileData.maxPoints) * 100;

  // Fetch API and match by _id
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user?._id;

        if (!userId) return console.error("User ID not found in localStorage");

        const res = await axios.post(
          "https://crmapi.conscor.com/api/general/mfind",
          {
            dbName: "heros",
            collectionName: "appuser",
            limit: 2000,
          }
        );

        const allUsers = res.data?.data || [];

        // ✅ Match by item._id
        const matchedUser = allUsers.find((item) => item._id === userId);

        if (matchedUser?.sectionData?.appuser) {
          const u = matchedUser.sectionData.appuser;

          const updatedData = {
            name: u.username || u.name || "No Name",
            rank: u.rank || 100,
            class: u.class || "D",
            progressPoints: u.progressPoints || 0,
            maxPoints: u.maxPoints || 100,
            followers: u.followersCount?.length || 0,
            following: u.followingCount || 0,
            firstName: u.fname || "",
            lastName: u.lname || "",
            title: u.title || "",
            hobby: u.hobby || "",
            skills: u.skills || "",
            interest: u.interest || "",
            occupation: u.occupation || "",
            image: u.image || "", // 👈 Add this
          };

          setProfileData(updatedData);
          setFormData(updatedData);
          setProfileImage(u.image || null); // 👈 Also this
        } else {
          console.warn("User data not found in API");
        }
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.image[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setProfileData(formData);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen pt-20">
      <div className="relative bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={() => {
            setFormData(profileData);
            setIsModalOpen(true);
          }}
        >
          <FiEdit size={24} />
        </button>

        {/* Profile Picture */}
        <div className="mt-2 text-center">
          <div className="relative w-28 h-28 mx-auto">
            <div className="w-full h-full rounded-full bg-gray-200 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/default-profile.jpg"; // fallback image if not loading
                  }}
                />
              ) : (
                <p className="text-gray-400 text-xs text-center px-2">
                  {profileData.name} profile
                </p>
              )}
            </div>
            <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 bg-[#1E90FF] text-white text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center border-2 border-white mt-2">
              {profileData.rank}
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            {profileData.firstName || profileData.name} {profileData.lastName}
          </h1>
          <p className="text-gray-500">
            Class {profileData.class} | Rank {profileData.rank}
          </p>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold text-gray-700">Rank Progress</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-gray-600">
              {profileData.progressPoints}/{profileData.maxPoints} Points
            </span>
            <span className="text-gray-500">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            Finish 100 missions and get 5000 instant cash.
          </p>
        </div>

        {/* Social Stats */}
        <div className="flex justify-center gap-8 my-6 text-center">
          <div>
            <p className="font-bold text-lg text-gray-800">
              {profileData.followers}
            </p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="font-bold text-lg text-gray-800">
              {profileData.following}
            </p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="space-y-3 text-sm">
          <h2 className="text-center text-gray-500 font-medium">
            {profileData.title || "Your Title"}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-gray-600 font-semibold">Hobby:</span>
              <span className="text-blue-800 ml-2">
                {profileData.hobby || "Add a hobby"}
              </span>
            </div>
            <div>
              <span className="text-gray-600 font-semibold">Skills:</span>
              <span className="text-blue-800 ml-2">
                {profileData.skills || "List your skills"}
              </span>
            </div>
            <div>
              <span className="text-gray-600 font-semibold">Interest:</span>
              <span className="text-blue-800 ml-2">
                {profileData.interest || "Share an interest"}
              </span>
            </div>
            <div>
              <span className="text-gray-600 font-semibold">Occupation:</span>
              <span className="text-blue-800 ml-2">
                {profileData.occupation || "Add your occupation"}
              </span>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#1E90FF] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg mt-6 transition-colors">
          Add Mission
        </button>

        <hr className="my-6 border-gray-400" />

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-2">
            <FaTrophy className="text-yellow-500" size={20} />
            <h2 className="text-lg font-semibold text-gray-800">
              Achievements
            </h2>
          </div>
          <div className="text-center text-gray-500 mt-4">
            <p>No completed achievements yet.</p>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Edit Profile
              </h2>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Profile Image</p>
                  <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-400 text-sm">
                        Profile preview
                      </span>
                    )}
                  </div>
                  <input
                    type="file"
                    id="fileUpload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <button
                    className="mt-2 text-blue-600 text-sm underline"
                    onClick={() =>
                      document.getElementById("fileUpload").click()
                    }
                  >
                    Upload
                  </button>
                </div>

                {/* Form Fields */}
                <input
                  className="w-full p-2 border rounded"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  className="w-full p-2 border rounded"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input
                  className="w-full p-2 border rounded"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                />
                <input
                  className="w-full p-2 border rounded"
                  name="hobby"
                  placeholder="Hobby"
                  value={formData.hobby}
                  onChange={handleChange}
                />
                <input
                  className="w-full p-2 border rounded"
                  name="skills"
                  placeholder="Skills"
                  value={formData.skills}
                  onChange={handleChange}
                />
                <input
                  className="w-full p-2 border rounded"
                  name="interest"
                  placeholder="Interest"
                  value={formData.interest}
                  onChange={handleChange}
                />
                <input
                  className="w-full p-2 border rounded"
                  name="occupation"
                  placeholder="Occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <button
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#1E90FF] text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;
