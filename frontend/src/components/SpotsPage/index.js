import React, { useEffect } from 'react';
import SpotCard from './SpotCard';
import * as spotsActions from '../../store/spots';
import { useDispatch, useSelector } from 'react-redux';
import './SpotsPage.css';

const SpotsPage = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots); //Returns arr of spot objects

  useEffect(() => {
    dispatch(spotsActions.getSpots());
  }, [dispatch])

  return (
    <div className='spots-page-container'>
      <div className='spots-header'>
      </div>
      <div className='spots-container'>
        {spots.map(({id, city, state, price, Images}) => (
          <SpotCard id={id} city={city} state={state} price={price} images={Images} />
        ))}
      </div>
    </div>
  )
}

export default SpotsPage;
