import React from "react";
import Minus from '../../SVGs/Minus';
import Plus from '../../SVGs/Plus';

const GuestOption = ({ name, ageRange, formData, setFormData }) => {
  const optionCount = formData[name];

  const decrement = e => { //Uses the name attribute as a key for the formData object
    const name = e.currentTarget.name;
    if (formData[name] > 0) {

      setFormData(prev => {
        return {
          ...prev,
          [name]: prev[name] - 1
        };
      });

    }
  }

  const increment = e => {
    const name = e.currentTarget.name;
    setFormData(prev => {
      return {
        ...prev,
        [name]: prev[name] + 1
      };
    })
  }

  return (
    <div className="guest-form-option">
      <div className="guest-form-option-text-container">
        <div className="guest-form-text">{name}</div>
        <div className="font-size--12">{ageRange}</div>
      </div>
      <div className="guest-form-button-container">
        <button className="guest-form-button" name={name} onClick={decrement}>
          <Minus className='icon-12' viewBox='0 0 32 32' />
        </button>
        <div className="soft-black">{optionCount}</div>
        <button className="guest-form-button" name={name} onClick={increment}>
          <Plus className='icon-12' viewBox='0 0 32 32' />
        </button>
      </div>
    </div>
  )
}

export default GuestOption;
