import React from "react";

const PlaceOption = ({ place, selected, setSelected, setFormData, imgSrc }) => {

  const handleChange = () => {
    setFormData(prevState => {
      return {...prevState, place}
    });
    setSelected(place);
  };

  return (
    <div className="mb2 ml-auto mr-auto w100p ml-auto mr-auto" style={{maxWidth: '464px'}}>
      <button className={`place-option-btn ${selected === place && 'selected-option'}`}
        onClick={handleChange}
      >
        <div className="text-left w100p" style={{margin: '16px', marginLeft: '24px'}}>
          <div className="font-size--18 font-weight--600">
            {place}
          </div>
        </div>
        <div className="m2-5">
          <div style={{height: '56px', width: '56px'}}>
            <img className="object-cover radius-4 static h100p w100p" src={imgSrc} alt=""/>
          </div>
        </div>
      </button>
    </div>
  )
}

export default PlaceOption;
