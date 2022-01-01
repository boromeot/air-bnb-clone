import React from "react";
import AmenitieOption from "./AmenitieOption";

import Pool from "../../SVGs/Pool";
import HotTub from "../../SVGs/HotTub";
import Patio from "../../SVGs/Patio";
import Grill from "../../SVGs/Grill";
import PoolTable from "../../SVGs/PoolTable";

const AmenitieSection = ({ formData, setFormData }) => {
  return (
    <div id="FMP-target" className="FMP-target flex flex-column">
      <div className="mz--24" style={{maxWidth: '656px'}}>
        <h2 className="font-size--22 pl--8 font-weight--600" style={{marginBottom: '15px'}}>Do you have any standout amenities?</h2>
        <div className="flex flex-row-wrap mt4">
          <AmenitieOption amenitie='Pool' formData={formData} setFormData={setFormData} svg={<Pool className='icon-52' viewBox='0 0 100 100' />}/>
          <AmenitieOption amenitie='Hot tub'formData={formData} setFormData={setFormData} svg={<HotTub className='icon-52' viewBox='0 0 100 100' />} />
          <AmenitieOption amenitie='Patio'formData={formData} setFormData={setFormData} svg={<Patio className='icon-52' viewBox='0 0 100 100' />}/>
          <AmenitieOption amenitie='BBQ grill'formData={formData} setFormData={setFormData} svg={<Grill className='icon-52' viewBox='0 0 100 100' />}/>
          <AmenitieOption amenitie='Fire pit'formData={formData} setFormData={setFormData} svg={null}/>
          <AmenitieOption amenitie='Pool table'formData={formData} setFormData={setFormData} svg={<PoolTable className='icon-52' viewBox='0 0 100 100' />}/>
          <AmenitieOption amenitie='Indoor fireplace'formData={formData} setFormData={setFormData} svg={null}/>
          <AmenitieOption amenitie='Outdoor dining area'formData={formData} setFormData={setFormData} svg={null}/>
          <AmenitieOption amenitie='Exercise equipment'formData={formData} setFormData={setFormData} svg={null}/>
        </div>
      </div>
    </div>
  )
}

export default AmenitieSection;
