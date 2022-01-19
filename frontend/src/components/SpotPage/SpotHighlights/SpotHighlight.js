import React from "react";

const SpotHighlight = ({ svg, header, desc}) => {
  return (
    <div className="flex mb4">
        {svg}
        <div className="ml--16">
          <div className="soft-black font-size--16 font-weight--600">{ header }</div>
          <div className="soft-gray font-size--14">{ desc }</div>
        </div>
      </div>
  )
}

export default SpotHighlight;
