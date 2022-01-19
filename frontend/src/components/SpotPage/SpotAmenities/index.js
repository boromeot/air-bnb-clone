import React from "react";
import Amenity from "./Amenity";
import Wifi from "../../SVGs/Wifi";
import Pool from "../../SVGs/Pool";
import HotTub from "../../SVGs/HotTub";
import Grill from "../../SVGs/Grill";

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
        <Amenity svg={<Grill {...props} />} desc='Grill' />
        <Amenity svg={<Wifi />} desc='Fast wifi' />
      </div>
    </>
  )
}

export default SpotAmenities;
