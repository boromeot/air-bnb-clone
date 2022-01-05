import React from "react";
import Minus from "../../SVGs/Minus";
import Plus from "../../SVGs/Plus";

const PriceSection = ({ setFormData }) => {
  return (
    <div id="FMP-target" className="flex flex-column m-auto align-center justify-center" style={{maxWidth: '500px'}}>
      <div className="flex flex-column align-center justify-center">
        <div className="inline-flex align-center">
          <button className='flex btn-minus align-center justify-center' style={{flexShrink: '0', height: '48px', width: '48px'}}>
            <Minus className='icon-12' viewBox='0 0 32 32' />
          </button>
          <div className="mz--8 text-center">
            <div className="mz--32 flex radius-8 box-shadow-gray">
              <input
                className="soft-black w100p font-size--48 font-weight--600 text-center"
                placeholder="$00"
                style={{margin: '8px 12px', border: 'medium'}}
              />
            </div>
          </div>
          <button className="flex btn-plus align-center justify-center" style={{flexShrink: '0', height: '48px', width: '48px'}}>
            <Plus className='icon-12' viewBox='0 0 32 32' />
          </button>
        </div>
        <div className="pt2">per night</div>
      </div>
    </div>
  )
}

export default PriceSection;
