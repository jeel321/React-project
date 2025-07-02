import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the heroId from the URL
import TheProfile from '../heroprofile-components/TheProfile';

const HerosDetails = () => {
  const { id } = useParams(); // Extract the heroId from the URL parameter
console.log(id)
  return (
    <div>
      <TheProfile heroId={id} /> {/* Pass heroId to TheProfile */}
    </div>
  );
};

export default HerosDetails;