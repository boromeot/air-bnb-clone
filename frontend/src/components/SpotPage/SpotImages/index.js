import React from "react";

const SpotImages = ({ images }) => {
  return (
    <div className='spot-image-container'>
    { images && images.map(({url}, i) => (
      <div className={`display-image pic-${i}`} style={{backgroundImage: `url(${url})`}}>
      </div>
    ))}
  </div>
  )
}

export default SpotImages;
