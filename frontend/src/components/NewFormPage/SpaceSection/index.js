import React, { useState } from "react";
import SpaceOption from "./SpaceOption";

const SpaceSection = ({ setFormData, formSpace }) => {

  const [selected, setSelected] = useState(formSpace);

  return (
    <div id="FMP-target" className="FMP-target flex flex-column">
      <SpaceOption space='An entire place' setFormData={setFormData} selected={selected} setSelected={setSelected} />
      <SpaceOption space='A private room' setFormData={setFormData} selected={selected} setSelected={setSelected} />
      <SpaceOption space='A shared room' setFormData={setFormData} selected={selected} setSelected={setSelected} />
    </div>
  )
}

export default SpaceSection;
