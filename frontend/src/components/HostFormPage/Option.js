import React from "react";
import './Option.css';

const Option = ({ title, description, value, onClick}) => {
  return (
      <button className='option-btn' type='button' name='x' value={value} onClick={onClick}>
        <div className='option-title'>
          {title}
        </div>
        <div>
          {description}
        </div>
      </button>
  )
}

export default Option;
