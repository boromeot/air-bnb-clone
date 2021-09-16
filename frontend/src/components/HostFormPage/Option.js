import React from "react";
import './Option.css';

//value prop become need to be stringifyied for some reason??
//Need to ask a TA on this one
const Option = ({ title, description, value, setValue}) => {

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.value) {
      setValue(e.target.value);
    } else {
      setValue(e.target.parentNode.value);
    }
  }

  return (
      <button className='option-btn' type='button' name='x' value={JSON.stringify(value)} onClick={handleClick}>
        <div className='option-title'>
          {title}
        </div>
        <div className='option-description'>
          {description}
        </div>
      </button>
  )
}

export default Option;
