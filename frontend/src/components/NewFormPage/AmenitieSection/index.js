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

  const amenityProps = {
    selected: selected,
    setSelected: setSelected,
    setFormData: setFormData
  }

  const svgProps = {
    className: 'icon-52',
    viewBox: '0 0 100 100',
    transform: 'translate(-31, -30) scale(2, 2)'
  }

  return (
    <div id="FMP-target" className="FMP-target flex flex-column">
      <div className="mz--24" style={{maxWidth: '656px'}}>
        <h2 className="font-size--22 pl--8 font-weight--600" style={{marginBottom: '15px'}}>Do you have any standout amenities?</h2>
        <div className="flex flex-row-wrap mt4">
          <AmenitieOption amenitie='Pool' {...amenityProps} svg={<Pool {...svgProps} />}/>
          <AmenitieOption amenitie='Hot tub'{...amenityProps} svg={<HotTub {...svgProps} />} />
          <AmenitieOption amenitie='Patio' {...amenityProps} svg={<Patio {...svgProps} />}/>
          <AmenitieOption amenitie='BBQ grill' {...amenityProps} svg={<Grill {...svgProps} transform='scale(2, 2)' />}/>
          <AmenitieOption amenitie='Fire pit' {...amenityProps} svg={<FirePit {...svgProps} />}/>
          <AmenitieOption amenitie='Pool table' {...amenityProps} svg={<PoolTable {...svgProps} />}/>
          <AmenitieOption amenitie='Indoor fireplace'{...amenityProps} svg={<FirePlace {...svgProps} />}/>
          <AmenitieOption amenitie='Outdoor dining area' {...amenityProps} svg={<DiningArea {...svgProps} />}/>
          <AmenitieOption amenitie='Exercise equipment' {...amenityProps} svg={<Dumbell {...svgProps} />}/>
        </div>
      </div>
    </div>
  )
}

export default AmenitieSection;
