import React from "react";
import TypeOption from "./TypeOption";

const TypeSection = ({ setFormData }) => {

  return (
    <div id="FMP-target" className="FMP-target flex flex-column">
      <TypeOption type='Residential home' desc='A home that may stand-alone or have shared walls.' setFormData={setFormData}/>
      <TypeOption type='Cabin' desc='A house made with natural materials like wood and built in a natural setting.' setFormData={setFormData}/>
      <TypeOption type='Villa' desc='A luxury home that may have indoor-outdoor spaces, gardens, and pools.' setFormData={setFormData}/>
      <TypeOption type='Townhouse' desc='A luxury home that may have indoor-outdoor spaces, gardens, and pools.' setFormData={setFormData}/>
      <TypeOption type='Cottage' desc='A cozy house built in a rural area or near a lake or beach.' setFormData={setFormData}/>
      <TypeOption type='Bungalow' desc='A single-level house with a wide front porch and a sloping roof.' setFormData={setFormData}/>
      <TypeOption type='Tiny house' desc="A stand-alone house that's usually less than 400 square feet." setFormData={setFormData}/>
    </div>
  )
}

export default TypeSection;
