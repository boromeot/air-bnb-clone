import React from "react";
import PlaceOption from "./PlaceOption";

const PlaceSection = () => {
  return (
    <div id="FMP-target" className="flex flex-column">
      <div className="mb2 ml-auto mr-auto w100p ml-auto mr-auto" style={{maxWidth: '464px'}}>
        <PlaceOption placeName='Apartment' imgSrc='https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240'/>
        <PlaceOption placeName='House' imgSrc='https://a0.muscache.com/im/pictures/d1af74db-58eb-46bf-b3f5-e42b6c9892db.jpg?im_w=240' />
        <PlaceOption placeName='Secondary Unit' imgSrc='https://a0.muscache.com/im/pictures/32897901-1870-4895-8e23-f08dc0e61750.jpg?im_w=240' />
        <PlaceOption placeName='Unique space' imgSrc='https://a0.muscache.com/im/pictures/7ad56bb1-ed9f-4dcb-a14c-2523da331b44.jpg?im_w=240' />
        <PlaceOption placeName='Bed and breakfast' imgSrc='https://a0.muscache.com/im/pictures/d52fb4e7-39a4-46df-9bf9-67e56d35eeca.jpg?im_w=240' />
      </div>
    </div>
  )
}

export default PlaceSection;
