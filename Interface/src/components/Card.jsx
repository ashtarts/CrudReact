import React from 'react';
import '../styles/Card.sass';

const Card = ({ content }) => {
  return (
    <div className='card-container'>
        <div>{content}</div>
    </div>
  );
};

export default Card;