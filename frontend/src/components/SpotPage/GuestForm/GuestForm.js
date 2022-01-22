import React from "react";
import Minus from '../../SVGs/Minus';
import Plus from '../../SVGs/Plus';
import './GuestForm.css';

const GuestForm = ({ formData, setFormData }) => {

  const decrement = e => { //Uses the name attribute as a key for the formData object
    const name = e.currentTarget.name;
    if (formData[name] > 1) {

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
    <div className="guest-form-container">
      <div className="guest-form-option-container">
        <div className="guest-form-option">
          <div className="guest-form-option-text-container">
            <div className="guest-form-adults">Adults</div>
            <div className="font-size--12">Age 13+</div>
          </div>
          <div className="flex">
            <div className="guest-form-button-container"> {/* Possible turn div into seperate functional component */}
              <button className="guest-form-button" name='adults' onClick={decrement}>
                <Minus className='icon-12' viewBox='0 0 32 32' />
              </button>
              <div className="soft-black">{formData.adults}</div>
              <button className="guest-form-button" name='adults' onClick={increment}>
                <Plus className='icon-12' viewBox='0 0 32 32' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div onClick={() => console.log(formData)}>log</div>
    </div>
  )
}

export default GuestForm;
