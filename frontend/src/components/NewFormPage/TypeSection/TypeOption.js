import React from "react";

const TypeOption = ({ type, desc, selected, setSelected, setFormData}) => {

  const handleChange = () => {
    setFormData(prevState => {
      return {...prevState, type}
    });
    setSelected(type);
  }

  return (
    <div className="mb2 ml-auto mr-auto w100p ml-auto mr-auto" style={{maxWidth: '464px'}}>
      <button className={`btn place-option-btn flex justify-space-between align-center border-gray radius-12 w100p ${selected === type && 'selected-option'}`}
        onClick={handleChange}
      >
        <div className="m4 text-left">
          <div className="font-size--18 font-weight--600">
            { type }
          </div>
          <div className="font-size--14 mt-8 soft-gray">
            { desc }
          </div>
        </div>
      </button>
    </div>
  )
}

export default TypeOption;
