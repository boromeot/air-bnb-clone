import React from "react";

const PlaceOption = ({ placeName, imgSrc }) => {
  return (
    <button className="btn flex justify-space-between align-center bg-white border-gray radius-12 w100p mb2">
      <div className="text-left" style={{margin: '16px', marginLeft: '24px'}}>
        <div className="font-size--18 font-weight--600">
          {placeName}
        </div>
      </div>
      <div className="m2-5">
        <div className="" style={{height: '56px', width: '56px'}}>
          <img className="object-cover radius-4 static h100p w100p" src={imgSrc} />
        </div>
      </div>
    </button>
  )
}

export default PlaceOption;
