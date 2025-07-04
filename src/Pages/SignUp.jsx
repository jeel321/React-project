import React, { useState } from 'react';
import logo from '../assets/logo.jpg';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      appName: "app9299947585133",
      type: "otp",
      fname: formData.fname,
      lname: formData.lname,
      username: formData.username,
      password: formData.password,
      role: "1746856613516"
    };

    try {
      const response = await fetch('https://crmapi.conscor.com/api/v1/auth/signup/otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      console.log("✅ Server response:", result);

      if (response.ok) {
        alert("OTP Sent Successfully!");
      } else {
        alert(`❌ Error: ${result.message || "Something went wrong"}`);
      }

    } catch (error) {
      console.error("❌ Error:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        {/* Header */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          <h1 className="text-xl font-semibold text-blue-700">Heroes</h1>
        </div>

        <h2 className="text-xl text-blue-700 font-bold text-center mb-6">Welcome!</h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
          <input type="text" name="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
          <input type="email" name="username" placeholder="Email" value={formData.username} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />

          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white py-2 rounded-md font-semibold hover:opacity-90">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already Have Account? <span className="text-blue-600 font-semibold cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
