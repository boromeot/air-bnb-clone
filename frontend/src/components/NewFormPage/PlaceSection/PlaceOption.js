import React from "react";

const PlaceOption = ({ placeName, setFormData, imgSrc }) => {
  return (
    <div className="mb2 ml-auto mr-auto w100p ml-auto mr-auto" style={{maxWidth: '464px'}}>
      <button className="btn place-option-btn flex justify-space-between align-center bg-white border-gray radius-12 w100p"
        onClick={() => setFormData(prevState => {
          return {...prevState, place: placeName}
        })
        }
      >
        <div className="text-left w100p" style={{margin: '16px', marginLeft: '24px'}}>
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
    </div>
  )
}

export default PlaceOption;
