import React from "react";

const Amenity = ({ svg, desc }) => {
  return (
    <div className="flex mb3 w50p">
      <div style={{marginRight: '16px'}}>{ svg }</div>
      {desc}
    </div>
  )
}

export default Amenity;
