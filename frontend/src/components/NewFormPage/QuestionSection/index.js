import React from "react";
import { NavLink } from "react-router-dom";
import AirbnbLogo from "../../SVGs/AirbnbLogo";

const QuestionSection = ({ question }) => {
  return (
    <div className="flex flex-column w50p h100vh fixed justify-center"
      style={{background: 'rgba(0,0,0,0) url("https://a0.muscache.com/im/pictures/Hosting/Gradient/original/4abb91ab-2c70-46d7-80a5-9c83ef0221ef.png") no-repeat scroll 0% 0% / 100% 100%'}}
    >
      <div className="fixed"
        style={{top: '32px', left: '48px'}}
      >
        <NavLink to='#' className='flex-center' style={{width: '40px', height: '40px'}}>
          <AirbnbLogo className='icon-32 fill-white' viewbox='0 0 32 32' />
        </NavLink>
      </div>
      <div className="max-width-75" style={{marginLeft: 'min(10%, 56px)'}}>
        <h1 className="font-size--48 font-weight--600 white mb2">{question}</h1>
      </div>
    </div>
  )
}

export default QuestionSection;
