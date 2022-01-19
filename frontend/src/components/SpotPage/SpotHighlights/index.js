import React from "react";
import Home from "../../SVGs/Home";
import Sparkles from "../../SVGs/Sparkles";
import Wifi from "../../SVGs/Wifi";
import SpotHighlight from "./SpotHighlight";

const SpotHighlights = ({ space, type}) => {

  return (
    <>
      {space ==='An entire place' &&
        <SpotHighlight svg={<Home />}
          header='Entire home'
          desc={`You’ll have the ${type} to yourself.`}
        />
      }
      <SpotHighlight svg={<Sparkles />}
        header='Enhanced Clean'
        desc="This Host committed to Carebnb's 5-step enhanced cleaning process."
      />
      <SpotHighlight svg={<Wifi />}
        header='Fast wifi'
        desc='At 68 Mbps, you can take video calls and stream videos for your whole group.'
      />
    </>
  )
}

export default SpotHighlights;
