import React from 'react';

const Card = ({ value }) => {
  return (
    <div className="card-container">
      <div className="card" key={value.id}>
        <img alt="name" src={value.thumbnailUrl} />
        <span>{value.title}</span>
        <span>{value.id}</span>
      </div>
    </div>
  );
};

export default Card;
