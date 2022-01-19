import React from "react";

const SpotOverview = ({type, hostName, guests, bedrooms, beds, bathrooms}) => {

  const plural = (amount, text) => {
    if (amount > 1) {
      return `${text}s`;
    } else {
      return text;
    }
  };

  return (
    <>
      <div className='mb1'>
        <h2>{hostName && `${type} hosted by ${hostName}`}</h2>
      </div>
      <div className='soft-black'>
        <span>{`${guests} ${plural(guests, 'guest')}`}</span>
        <span> · </span>
        <span>{`${bedrooms} ${plural(bedrooms, 'bedroom')}`}</span>
        <span> · </span>
        <span>{`${beds} ${plural(beds, 'bed')}`}</span>
        <span> · </span>
        <span>{`${bathrooms} ${plural(bathrooms, 'bathroom')}`}</span>
      </div>
    </>
  )
}

export default SpotOverview;
