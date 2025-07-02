import React from 'react'
import logo from '../assets/logo.jpg'

const SignUp = () => {
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
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Enter Confirm Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
    
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white py-2 rounded-md font-semibold hover:opacity-90"
              >
                Sign Up
              </button>
            </form>
    
            {/* Footer */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already Have Account? <span className="text-blue-600 font-semibold cursor-pointer">Login</span>
            </p>
          </div>
        </div>
      );
    };

export default SignUp
