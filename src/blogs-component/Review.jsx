import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import person from '../assets/home/person.png';

const Review = () => {
  const [blogs, setBlogs] = useState([]);
  const [mainBlog, setMainBlog] = useState(null);
  
  useEffect(() => {
    fetchBlogs();
  }, []);
  

  const fetchBlogs = async () => {
    try {
      const response = await axios.post(
        'https://crmapi.conscor.com/api/general/v1/mfind',
        {
          dbName: 'heros',
          collectionName: 'blogs',
        },
        {
          headers: {
            'x-api-key': 'w5K4iw1tRCTbnOrkprhs',
            'Content-Type': 'application/json',
          },
        }
      );
  
      const rawData = response.data?.data || [];
  
      // Flatten the data: extract sectionData.blogs
      const flattened = rawData
        .map(item => item.sectionData?.blogs)
        .filter(Boolean); // remove undefined/null
  
      if (flattened.length > 0) {
        setMainBlog(flattened[0]);
        setBlogs(flattened.slice(0, 5)); // 4 blogs
      }
  
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };
  
  

  return (
    <section className="bg-gray-50 px-4 sm:px-8 lg:px-20 py-5">
      <h1 className="text-3xl font-bold text-center mb-10">Latest Blogs</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <Link to="/Blog" key={index} className="block">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col min-h-[300px]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold mb-3">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {blog.description}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={person}
                    alt="Author"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h5 className="text-sm font-medium">{blog.name}</h5>
                    <p className="text-xs text-gray-500">
                      {new Date(blog.date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Review;
