import React from "react";
import Minus from '../../SVGs/Minus';
import Plus from '../../SVGs/Plus';
import './GuestForm.css';

const GuestForm = () => {
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
              <button className="guest-form-button">
                <Minus className='icon-12' viewBox='0 0 32 32' />
              </button>
              <div className="soft-black">1</div>
              <button className="guest-form-button">
                <Plus className='icon-12' viewBox='0 0 32 32' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default GuestForm;
