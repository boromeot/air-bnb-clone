import React from 'react';
import './SpotCard.css';

const SpotCard = ({ city, state, price, images }) => {
  console.log('images', images[0]);
  return (
    <div className='card-container'>
      <div className='image-container'>
        {images[0].url}
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
