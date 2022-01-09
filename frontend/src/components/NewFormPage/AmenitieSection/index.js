import React, { useState } from "react";
import AmenitieOption from "./AmenitieOption";

import Pool from "../../SVGs/Pool";
import HotTub from "../../SVGs/HotTub";
import Patio from "../../SVGs/Patio";
import Grill from "../../SVGs/Grill";
import FirePit from "../../SVGs/FirePit";
import PoolTable from "../../SVGs/PoolTable";
import FirePlace from "../../SVGs/FirePlace";
import DiningArea from "../../SVGs/DiningArea";
import Dumbell from "../../SVGs/Dumbell";

const AmenitieSection = ({ setFormData, formAmenities }) => {

  const [selected, setSelected] = useState(formAmenities);

  return (
    <div id="FMP-target" className="FMP-target flex flex-column">
      <div className="mz--24" style={{maxWidth: '656px'}}>
        <h2 className="font-size--22 pl--8 font-weight--600" style={{marginBottom: '15px'}}>Do you have any standout amenities?</h2>
        <div className="flex flex-row-wrap mt4">
          <AmenitieOption amenitie='Pool' selected={selected} setSelected={setSelected} setFormData={setFormData} svg={<Pool className='icon-52' viewBox='0 0 100 100' />}/>
          <AmenitieOption amenitie='Hot tub'selected={selected} setSelected={setSelected} setFormData={setFormData} svg={<HotTub className='icon-52' viewBox='0 0 100 100' />} />
          <AmenitieOption amenitie='Patio' selected={selected} setSelected={setSelected} setFormData={setFormData} svg={<Patio className='icon-52' viewBox='0 0 100 100' />}/>
          <AmenitieOption amenitie='BBQ grill' selected={selected} setSelected={setSelected} setFormData={setFormData} svg={<Grill className='icon-52' viewBox='0 0 100 100' />}/>
          <AmenitieOption amenitie='Fire pit' selected={selected} setSelected={setSelected} setFormData={setFormData} svg={<FirePit className='icon-52' viewBox='0 0 100 100' />}/>
          <AmenitieOption amenitie='Pool table' selected={selected} setSelected={setSelected} setFormData={setFormData} svg={<PoolTable className='icon-52' viewBox='0 0 100 100' />}/>
          <AmenitieOption amenitie='Indoor fireplace'nselected={selected} setSelected={setSelected} setFormData={setFormData} svg={<FirePlace className='icon-52' viewBox='0 0 100 100' />}/>
          <AmenitieOption amenitie='Outdoor dining area' selected={selected} setSelected={setSelected} setFormData={setFormData} svg={<DiningArea className='icon-52' viewBox='0 0 100 100' />}/>
          <AmenitieOption amenitie='Exercise equipment' selected={selected} setSelected={setSelected} setFormData={setFormData} svg={<Dumbell className='icon-52' viewBox='0 0 100 100' />}/>
        </div>
      </div>
    </div>
  )
}

export default AmenitieSection;
