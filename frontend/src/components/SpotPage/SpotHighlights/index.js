import React from "react";
import Home from "../../SVGs/Home";

const SpotHighlights = () => {
  return (
    <div className="flex mb4">
      <div>
        <Home className='icon-24' />
      </div>
      <div className="ml--16">
        <div className="soft-black font-size--16 font-weight--600">Entire home</div>
        <div className="soft-gray font-size--14">You’ll have the treehouse to yourself.</div>
      </div>
    </div>
  )
}

export default SpotHighlights;
