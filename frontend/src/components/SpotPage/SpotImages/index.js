import React from "react";

const SpotImages = ({ images }) => {
  return (
    <div className='spot-image-container'>
      {images && images.map(({url, id}, i) => (
        <div className={`display-image pic-${i}`} style={{backgroundImage: `url(${url})`}} key={id} />
      ))}
  </div>
  )
}

export default SpotImages;
