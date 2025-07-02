import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeadPart from '../blogpage-components/HeadPart';
import ContentPart from '../blogpage-components/ContentPart';
import Suggested from '../blogpage-components/Suggested';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [mainBlog, setMainBlog] = useState(null);

  useEffect(() => {
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
        const extractedBlogs = rawData
          .map(item => item.sectionData?.blogs)
          .filter(Boolean);

        if (extractedBlogs.length > 0) {
          setMainBlog(extractedBlogs[0]);
          setBlogs(extractedBlogs.slice(1, 5));
        }

      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  if (!mainBlog) {
    return <div className="p-10">Loading blog...</div>;
  }

  return (
    <div>
      <HeadPart
        title={mainBlog.title}
        author={mainBlog.name}
        date={mainBlog.date}
        image={mainBlog.image || 'fallback-image-url.jpg'}
      />
      <ContentPart content={mainBlog.introduction} />
      <Suggested blogs={blogs} />
    </div>
  );
};

export default Blog;
