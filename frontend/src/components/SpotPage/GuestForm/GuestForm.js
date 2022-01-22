import React from "react";
import GuestOption from "./GuestOption";
import './GuestForm.css';

const GuestForm = ({ maxGuests, formData, setFormData }) => {

  return (
    <div className="guest-form-container">
      <div className="guest-form-option-container">
        <GuestOption name='adults' ageRange='Age 13+' formData={formData} setFormData={setFormData} />
        <GuestOption name='children' ageRange='Ages 2-12' formData={formData} setFormData={setFormData} />
        <GuestOption name='infants' ageRange='Under 2' formData={formData} setFormData={setFormData} />
        <div className="font-size--12 mb3">{`This place has a maximum of ${maxGuests} guests, not including infants. Pets aren't allowed.`}</div>
      </div>
    </div>
  )
}

export default GuestForm;
