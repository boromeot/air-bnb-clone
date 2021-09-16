import React from "react";
import './Option.css';

//value prop become need to be stringifyied for some reason??
//if value is not stringifyied its become [object Object]
//Need to ask a TA on this one
const Option = ({ title, description, payload, setValue}) => {

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.value) {
      setValue(e.target.value);
    } else {
      setValue(e.target.parentNode.value);
    }
  }

  return (
      <button className='option-btn' type='button' name='x' value={JSON.stringify(payload)} onClick={handleClick}>
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
