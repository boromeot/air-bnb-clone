import React from "react";
import AmenitieOption from "./AmenitieOption";
import Pool from "../../SVGs/Pool";

const AmenitieSection = ({ setFormData }) => {
  return (
    <div id="FMP-target" className="FMP-target flex flex-column">
      <div className="mz--24" style={{maxWidth: '656px'}}>
        <h2 className="font-size--22 pl--8 font-weight--600" style={{marginBottom: '15px'}}>Do you have any standout amenities?</h2>
        <div className="flex flex-row-wrap mt4">
          <AmenitieOption amenitie='Pool' svg={<Pool className='icon-52' viewBox='0 0 100 100' />}/>
          <AmenitieOption amenitie='Hot tub' svg={null}/>
          <AmenitieOption amenitie='Patio' svg={null}/>
          <AmenitieOption amenitie='BBQ grill' svg={null}/>
          <AmenitieOption amenitie='Fire pit' svg={null}/>
          <AmenitieOption amenitie='Pool table' svg={null}/>
          <AmenitieOption amenitie='Indoor fireplace' svg={null}/>
          <AmenitieOption amenitie='Outdoor dining area' svg={null}/>
          <AmenitieOption amenitie='Exercise equipment' svg={null}/>
        </div>
      </div>
    </div>
  )
}

export default AmenitieSection;
