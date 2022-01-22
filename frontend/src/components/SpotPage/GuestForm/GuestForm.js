import React from "react";
import GuestOption from "./GuestOption";
import './GuestForm.css';

const GuestForm = ({ formData, setFormData }) => {

  return (
    <div className="guest-form-container">
      <div className="guest-form-option-container">
        <GuestOption name='adults' ageRange='Age 13+' formData={formData} setFormData={setFormData} />
        <GuestOption name='children' ageRange='Ages 2-12' formData={formData} setFormData={setFormData} />
        <GuestOption name='infants' ageRange='Under 2' formData={formData} setFormData={setFormData} />
      </div>
    </div>
  )
}

export default GuestForm;
