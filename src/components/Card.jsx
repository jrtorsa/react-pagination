import React from 'react';

const Card = ({ value }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img alt="name" src={value.thumbnailUrl} />
        <span>{value.title}</span>
      </div>
    </div>
  );
};

export default Card;
