import React from "react";
import Photos from "../../SVGs/Photos";

const PhotoSection = ({ setFormData }) => {
  return (
    <div id="FMP-target" className="FMP-target relative mz--24 w100p" style={{maxWidth: '500px'}}>
      <div className='overflowY-auto pr--8' style={{maxHeight: 'calc(-294px + 100vh)', marginRight: '-8px'}}>
        <div className="flex absolute t0 l0 w100p h100p border-dotted-gray">
          <div className="flex align-center flex-column text-center soft-black m-auto">
            <Photos className='icon-64' viewBox='0 0 64 64' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoSection;
