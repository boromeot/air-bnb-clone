import React from "react";
import GuestOption from "./GuestOption";

const GuestSection = ({ formData, setFormData }) => {
  return (
    <div id="FMP-target" className="FMP-target flex flex-column m-auto pt--32" style={{maxWidth: '464px'}}>
      <GuestOption x='Guests' formData={formData} setFormData={setFormData} />
      <GuestOption x='Beds' formData={formData} setFormData={setFormData} />
      <GuestOption x='Bedrooms' formData={formData} setFormData={setFormData} />
      <GuestOption x='Bathrooms' formData={formData} setFormData={setFormData} />
    </div>
  )
}

export default GuestSection;
