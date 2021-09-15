import React, { useState } from "react";
import Option from "./Option";

const Action = ({ step }) => {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(value);
  }
  
  const actionsArr = [
    <>
      <Option title='Apartment' description={null} value='Apartment' onClick={handleClick}/>
      <Option title='House' description={null} value='House' onClick={handleClick}/>
      <Option title='Secondary unit' description={null} value='Secondary unit' onClick={handleClick}/>
      <Option title='Unique space' description={null} value='Unique space' onClick={handleClick}/>
      <Option title='Bed and Breakfast' description={null} value='Bed and Breakfast' onClick={handleClick}/>
      <Option title='Boutique hotel' description={null} value='Boutique hotel' onClick={handleClick}/>
    </>,
  ];

  return (
    <form onSubmit={handleSubmit}>
      {actionsArr[step] || null}
      <input type='submit' value='Submit' />
    </form>
  )
}

export default Action;
