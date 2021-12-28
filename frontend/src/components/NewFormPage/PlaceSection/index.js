import React from "react";
import PlaceOption from "./PlaceOption";
import './PlaceSection.css';

const PlaceSection = ({ setFormData }) => {
  return (
    <div id="FMP-target" className="FMP-target flex flex-column">
      <PlaceOption placeName='Apartment' setFormData={setFormData} imgSrc='https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240'/>
      <PlaceOption placeName='House' setFormData={setFormData} imgSrc='https://a0.muscache.com/im/pictures/d1af74db-58eb-46bf-b3f5-e42b6c9892db.jpg?im_w=240' />
      <PlaceOption placeName='Secondary Unit' setFormData={setFormData} imgSrc='https://a0.muscache.com/im/pictures/32897901-1870-4895-8e23-f08dc0e61750.jpg?im_w=240' />
      <PlaceOption placeName='Unique space' setFormData={setFormData} imgSrc='https://a0.muscache.com/im/pictures/7ad56bb1-ed9f-4dcb-a14c-2523da331b44.jpg?im_w=240' />
      <PlaceOption placeName='Bed and breakfast' setFormData={setFormData} imgSrc='https://a0.muscache.com/im/pictures/d52fb4e7-39a4-46df-9bf9-67e56d35eeca.jpg?im_w=240' />
      <PlaceOption placeName='Boutique hotel' setFormData={setFormData} imgSrc='https://a0.muscache.com/im/pictures/a2c9ad21-b159-4fd2-b417-d810fb23c6a9.jpg?im_w=240' />
    </div>
  )
}

export default PlaceSection;
