import React from "react";
import Minus from '../../SVGs/Minus';
import Plus from '../../SVGs/Plus';

const GuestOption = ()  => {
  return (
    <div className="py--8 w100p">
      <div className="py2-5 ">
        <div className="flex">
          <div className="flex flex-column justify-center w100p flex-1-1-auto">
            <div className="">
              <div className="font-size--26 font-weight--600 soft-black">
                Guests
              </div>
            </div>
          </div>
          <div className="ml--16">
            <div className="flex align-center justify-space-between" style={{height: '34px', width: '104px'}}>
              <button className="btn btn-minus flex align-center justify-center">
                <Minus className='icon-12' viewBox='0 0 30 30'/>
              </button>
              <div>
                <span>5</span>
              </div>
              <button className="btn btn-plus flex align-center justify-center">
                <Plus className='icon-12' viewBox='0 0 30 30'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuestOption;
