import React from "react";
import Amenity from "./Amenity";
import Wifi from "../../SVGs/Wifi";

const SpotAmenities = ({ amenities }) => {
  return (
    <>
      <div className="mb4">
        <h2 className="font-size--22">What this place offers</h2>
      </div>
      <div className="flex flex-wrap">
        <Amenity svg={<Wifi />} desc='Fast wifi' />
        <Amenity svg={<Wifi />} desc='Fast wifi' />
        <Amenity svg={<Wifi />} desc='Fast wifi' />
        <Amenity svg={<Wifi />} desc='Fast wifi' />
        <Amenity svg={<Wifi />} desc='Fast wifi' />
      </div>
    </>
  )
}

export default SpotAmenities;
