import React from 'react';

const Suggested = ({ blogs }) => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
      <h2 className="text-4xl font-bold text-gray-900 mb-16">Latest Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col"
            >
              <img
                src={
                  blog.image ||
                  'https://via.placeholder.com/1200x600?text=No+Image'
                }
                alt={blog.title || 'Blog image'}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {blog.title || 'Untitled Blog'}
              </h3>
              <p className="text-gray-600 flex-grow line-clamp-3">
                {blog.description || 'No description available.'}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full">
            No suggested blogs available.
          </p>
        )}
      </div>
    </section>
  );
};

export default Suggested;