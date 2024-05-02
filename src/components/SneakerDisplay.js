import React from 'react';

function SneakerDisplay({ sneakers }) {
  return (
    <div>
      {sneakers && sneakers.map((sneaker, index) => (
        <div key={index}>
          <img src={sneaker.media.imageUrl} alt={sneaker.title} style={{ width: '100px' }} />
          <h3>{sneaker.title}</h3>
          <p>${sneaker.retailPrice}</p>
        </div>
      ))}
    </div>
  );
}

export default SneakerDisplay;
