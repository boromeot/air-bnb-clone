import React from "react";
import GuestOption from "./GuestOption";

const GuestSection = ({ setFormData }) => {
  return (
    <div id="FMP-target" className="FMP-target flex flex-column m-auto pt--32" style={{maxWidth: '464px'}}>
      <GuestOption />
    </div>
  )
}

export default GuestSection;
