import React from 'react';

const HeadPart = ({ title, author, date, image }) => {
  const splitTitle = title?.includes(':') ? title.split(': ') : [title, ''];
  const [line1, line2] = splitTitle;

  return (
    <section className="px-4 sm:px-8 lg:px-20 py-5">
      <div className="p-6 rounded-lg space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h4 className="text-black text-base sm:text-lg">
            Author: {author || 'Unknown'}
          </h4>
          <h4 className="text-gray-600 text-sm font-medium">
            {date || 'Unknown Date'}
          </h4>
        </div>

        <div>
          <h1 className="text-black leading-snug text-3xl sm:text-4xl lg:text-5xl">
            {line1 || 'Untitled Blog'}
          </h1>
          {line2 && (
            <h1 className="text-black leading-snug text-3xl sm:text-4xl lg:text-5xl">
              {line2}
            </h1>
          )}
        </div>

        <div>
          <img
            src={image || 'https://via.placeholder.com/1200x600?text=No+Image'}
            alt={title || 'Blog main'}
            loading="lazy"
            className="w-full h-[20rem] sm:h-[30rem] lg:h-[40rem] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeadPart;