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
      <h2>Spots page</h2>
      {spots.map(({city, state, price, images}) => (
        <SpotCard city={city} state={state} price={price} images={images} />
      ))}
    </>
  )
}

export default SpotsPage;
