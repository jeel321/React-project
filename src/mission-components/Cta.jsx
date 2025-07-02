import React from 'react'
import { Link } from 'react-router-dom';


const Cta = () => {
  return (
      <section className="text-center py-12 px-4 bg-white">
        <h3 className="text-3xl font-semibold mb-2">Join the Heroes Book community and earn by completing missions that make a difference.</h3>
        <p className="text-gray-600 mb-4">
          Create your heroic profile, choose your cause, and start transforming the world — one mission at a time.
        </p>
        <Link to="/login">
  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold 
                     hover:bg-blue-700 hover:shadow-lg hover:scale-105 
                     transition duration-300 ease-in-out block mx-auto">
    Join As Hero
  </button>
</Link>      </section>
  )
}

export default Cta
