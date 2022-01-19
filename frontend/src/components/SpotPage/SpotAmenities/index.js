import React from "react";
import Amenity from "./Amenity";
import Wifi from "../../SVGs/Wifi";
import Pool from "../../SVGs/Pool";
import HotTub from "../../SVGs/HotTub";
import Grill from "../../SVGs/Grill";
import Patio from "../../SVGs/Patio";
import PoolTable from "../../SVGs/PoolTable";
import FirePit from "../../SVGs/FirePit";
import FirePlace from "../../SVGs/FirePlace";
import DiningArea from "../../SVGs/DiningArea";
import Dumbell from "../../SVGs/Dumbell";

const SpotAmenities = ({ amenities }) => {
  const props = {
    className: 'icon-24',
    viewBox: '0 0 32 32',
    transform: 'translate(-23, -23)'
  }

  return (
    <>
      <div className="mb4">
        <h2 className="font-size--22">What this place offers</h2>
      </div>
      <div className="flex flex-wrap">
        <Amenity svg={<Wifi {...props} />} desc='Fast wifi' />
        <Amenity svg={<Pool {...props} /> } desc='Pool' />
        <Amenity svg={<HotTub {...props} />} desc='Hot tub' />
        <Amenity svg={<Patio {...props} />} desc='Open patio' />
        <Amenity svg={<Grill {...props} transform='translate(-7, -7)'/>} desc='Grill' />
        <Amenity svg={<FirePit {...props} />} desc='Fire pit' />
        <Amenity svg={<PoolTable {...props} />} desc='Pool table' />
        <Amenity svg={<FirePlace {...props} />} desc='Indoor fireplace' />
        <Amenity svg={<DiningArea {...props} />} desc='Outdoor dining area' />
        <Amenity svg={<Dumbell {...props} />} desc='Exercise equipment' />
      </div>
    </>
  )
}

export default SpotAmenities;
