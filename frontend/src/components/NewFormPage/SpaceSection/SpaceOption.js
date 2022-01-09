import React from "react";

const SpaceOption = ({ space, selected, setSelected, setFormData}) => {

  const handleChange = () => {
    setFormData(prevState => {
      return {...prevState, space}
    });
    setSelected(space);
  }

  return (
    <div className="mb2 ml-auto mr-auto w100p ml-auto mr-auto" style={{maxWidth: '464px'}}>
      <button className={`btn place-option-btn flex justify-space-between align-center border-gray radius-12 w100p ${selected === space && 'selected-option'}`}
        onClick={handleChange}
      >
        <div className="mz--24 my--32 text-left">
          <div className="font-size--18 font-weight--600">{space}</div>
        </div>
      </button>
    </div>
  )
}

export default SpaceOption;
