import React from "react";

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
              <button className="btn btn-minus"></button>
              <div></div>
              <button className="btn btn-plus"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuestOption;
