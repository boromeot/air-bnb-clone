import React from "react";
import { NavLink } from "react-router-dom";
import './HomePage.css';

const HomePage = ({ children }) => {
  return (
    <section class='section-main'>
      {children}
      <div className='call-to-action'>
        <span class='cta-header'>Not sure where to go? Perfect.</span>
        <NavLink className='cta-btn' to='/s/home'>
          <span className='cta-btn-text'>I'm flexible</span>
        </NavLink>
      </div>
    </section>
  )
}

export default HomePage;
