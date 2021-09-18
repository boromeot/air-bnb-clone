import React, { useState } from 'react';
import { ReactComponent as RightChevron } from '../../images/chevron-right.svg';
import { ReactComponent as LeftChevron } from '../../images/chevron-left.svg';
import { NavLink } from 'react-router-dom';
import './SpotCard.css';

const SpotCard = ({ id, city, state, price, images }) => {
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
        <div className='toLeft chevron' onClick={toLeft}><LeftChevron /></div>
        <div className='toRight chevron' onClick={toRight}><RightChevron /></div>
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
