import React, { useEffect } from 'react';
import SpotCard from './SpotCard';

const SpotsPage = () => {

  return (
    <>
      <h2>Spots page</h2>
      <SpotCard city='Hilo' state='Hawaii' price={599} images='#'/>
    </>
  )
}

export default SpotsPage;
