import React from "react";
import Home from "../../SVGs/Home";
import Sparkles from "../../SVGs/Sparkles";
import SpotHighlight from "./SpotHighlight";

const SpotHighlights = () => {
  return (
    <>
      <div className="flex mb4">
        <Home className='icon-24' />
        <div className="ml--16">
          <div className="soft-black font-size--16 font-weight--600">Entire home</div>
          <div className="soft-gray font-size--14">You’ll have the treehouse to yourself.</div>
        </div>
      </div>
      <div className="flex mb4">
        <Sparkles className='icon-24' />
        <div className="ml--16">
          <div className="soft-black font-size--16 font-weight--600">Enhanced Clean</div>
          <div className="soft-gray font-size--14">This Host committed to Carebnb's 5-step enhanced cleaning process.</div>
        </div>
      </div>
    </>
  )
}

export default SpotHighlights;
