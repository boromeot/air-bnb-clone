import React, { useEffect } from 'react';
import SpotCard from './SpotCard';
import * as spotActions from '../../store/spots';
import { useDispatch, useSelector } from 'react-redux';

const SpotsPage = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots); //Returns arr of spot objects

  useEffect(() => {
    dispatch(spotActions.getSpots());
  }, [dispatch])

  return (
    <>
      <h2 className='spots-header'>Spots page</h2>
      <div className='spots-container'>
        {spots.map(({city, state, price, Images}) => (
          <SpotCard city={city} state={state} price={price} images={Images} />
        ))}
      </div>
    </>
  )
}

export default SpotsPage;
