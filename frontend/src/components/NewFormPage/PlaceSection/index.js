import React from "react";

const PlaceSection = () => {
  return (
    <div id="FMP-target" className="flex flex-column">
      <div className="mb2 ml-auto mr-auto w100p ml-auto mr-auto" style={{maxWidth: '464px'}}>
        <button className="btn flex justify-space-between align-center bg-white border-gray radius-12 w100p">
          <div className="text-left" style={{margin: '16px', marginLeft: '24px'}}>
            <div className="font-size--18 font-weight--600">
              Apartment
            </div>
          </div>
          <div className="m2-5">
            <div className="" style={{height: '56px', width: '56px'}}>
              <img className="object-cover radius-4 static h100p w100p" src="https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240">
              </img>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default PlaceSection;
