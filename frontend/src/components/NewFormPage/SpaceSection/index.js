import React from "react";
import SpaceOption from "./SpaceOption";

const SpaceSection = ({ setFormData }) => {

  return (
    <div id="FMP-target" className="FMP-target flex flex-column">
      <SpaceOption space='An entire place' setFormData={setFormData} />
      <SpaceOption space='A private room' setFormData={setFormData} />
      <SpaceOption space='A shared room' setFormData={setFormData} />
    </div>
  )
}

export default SpaceSection;
