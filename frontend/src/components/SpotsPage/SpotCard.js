import React, { useState } from 'react';
import './SpotCard.css';

const SpotCard = ({ city, state, price, images }) => {
  const [slideCount, setSlideCount] = useState(0);

  //Image carousel event handlers
  const toRight = () => {
    if (slideCount === images.length - 1) {
      setSlideCount(0);
    } else {
      setSlideCount(prevCount => prevCount + 1);
    }
  }

  const toLeft = () => {
    if (slideCount === 0) {
      setSlideCount(images.length - 1);
    } else {
      setSlideCount(prevCount => prevCount - 1);
    }
  }

  return (
    <div className='card-container'>
      <div className='image-container'
        style={{backgroundImage: `url(${images[slideCount].url})`}}
      >
        <div className='toLeft' onClick={toLeft}>Left</div>
        <div className='toRight' onClick={toRight}>Right</div>
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
