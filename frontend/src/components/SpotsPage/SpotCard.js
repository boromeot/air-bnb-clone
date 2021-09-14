import React from 'react';
import './SpotCard.css';

const SpotCard = ({ city, state, price, images }) => {
  return (
    <div className='card-container'>
      <div className='image-container'>
        photo
      </div>
      <div className='info-container'>
        <div className='info'>
          <div className='location'>
            <span>{`${city}, ${state}`}</span>
          </div>
          <div className='price'>
            <span>{`$${price} / night`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpotCard;
