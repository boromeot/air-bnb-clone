import React from "react";

const AmenitieOption = ({ amenitie, formData, setFormData, svg }) => {

  const handleChange = () => {
    if (!(formData.amenities.includes(amenitie))) {
      setFormData(prevState => {
        
      });
    }
    console.log(formData);
  }

  return (
    <button className="btn flex flex-column align-center justify-center bg-white radius-8 pt4 pb--40 border-gray hover-shadow-black" style={{margin: '0 8px 16px', flex: '0 1 calc(33% - 16px)'}}
      onClick={handleChange}
    >
      <div className="flex align-center justify-center" style={{height: '64px', width: '64px'}}>
        {svg}
      </div>
      <div className="font-size--14 font-weight--600 soft-black">{amenitie}</div>
    </button>
  )
}

export default AmenitieOption;
