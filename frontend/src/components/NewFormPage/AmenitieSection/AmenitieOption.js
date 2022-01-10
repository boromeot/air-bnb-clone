import React from "react";

const AmenitieOption = ({ amenitie, selected, setSelected, setFormData, svg }) => {

  const handleChange = () => {
    setFormData(prevState => {

      if (prevState.amenities.has(amenitie)) {
        const newAmenities = new Set (prevState.amenities);
        newAmenities.delete(amenitie);
        return {
          ...prevState,
          amenities: newAmenities
        }
      }

      return {
        ...prevState,
        amenities: new Set([...prevState.amenities, amenitie])
      }

    });

    setSelected(prevState => {

      if (prevState.has(amenitie)) {
        const newAmenities = new Set (prevState);
        newAmenities.delete(amenitie);
        return newAmenities;
      }

      return new Set([...prevState, amenitie]);
    });
    
  }

  return (
    <button onClick={handleChange} className={`btn flex flex-column align-center justify-center radius-8 pt4 pb--40 border-gray hover-shadow-black ${selected?.has(amenitie) && 'selected-option'}`} style={{margin: '0 8px 16px', flex: '0 1 calc(33% - 16px)'}}>
      <div className="flex align-center justify-center" style={{height: '64px', width: '64px'}}>
        {svg}
      </div>
      <div className="font-size--14 font-weight--600 soft-black">{amenitie}</div>
    </button>
  )
}

export default AmenitieOption;
