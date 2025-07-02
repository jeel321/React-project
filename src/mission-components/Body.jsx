import React from 'react'

const Body = () => {
  return (
    <section className="text-center py-10 px-4 bg-blue-50">
    <h2 className="inline-block bg-blue-600 text-white text-xl font-semibold px-6 py-2 rounded-2xl mb-4">Popular Missions</h2>
    <h1 className="text-3xl font-bold text-blue-600">Where Heroes Rise—Join the Most Epic</h1>
    <h1 className="text-3xl font-bold mb-7 text-blue-600"> Challenges Today!</h1>

    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search Mission"
        className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">🔍</span>
    </div>
  </section>


  )
}

export default Body
