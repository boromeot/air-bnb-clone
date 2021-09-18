import React, { useEffect } from 'react';
import SpotCard from './SpotCard';
import * as spotsActions from '../../store/spots';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SpotsPage = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots); //Returns arr of spot objects

  useEffect(() => {
    dispatch(spotsActions.getSpots());
  }, [dispatch])

  return (
    <>
      <h2 className='spots-header'>Spots page</h2>
      <div className='spots-container'>
        {spots.map(({id, city, state, price, Images}) => (
          <SpotCard id={id} city={city} state={state} price={price} images={Images} />
        ))}
      </div>
    </>
  )
}

export default SpotsPage;
