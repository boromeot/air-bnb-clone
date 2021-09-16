import React from "react";
import './Option.css';

//value prop become need to be stringifyied for some reason??
//Need to ask a TA on this one
const Option = ({ title, description, value, setValue}) => {

  const handleClick = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
      <button className='option-btn' type='button' name='x' value={JSON.stringify(value)} onClick={handleClick}>
        {title}
      </button>
  )
}

export default Option;
