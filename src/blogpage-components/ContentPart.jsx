import React from 'react';

const ContentPart = ({ content }) => {
  return (
    <section className="px-4 sm:px-8 lg:px-20 py-5">
      <div className="bg-white p-6 rounded-lg">
        <div
          className="text-gray-700 space-y-6"
          dangerouslySetInnerHTML={{
            __html: content || '<p>No content available.</p>',
          }}
        />
      </div>
    </section>
  );
};

export default ContentPart;