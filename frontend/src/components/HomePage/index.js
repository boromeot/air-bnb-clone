import React from "react";
import { NavLink } from "react-router-dom";
import './HomePage.css';

const HomePage = ({ children }) => {
  return (
    <>
      {children}
      <section className='section-main'>
        <div className='call-to-action'>
          <span className='cta-header'>Not sure where to go? Perfect.</span>
          <NavLink className='cta-btn' to='/s/home'>
            <span className='cta-btn-text'>I'm flexible</span>
          </NavLink>
        </div>
      </section>
      <section className='section-about'>
        <div className='about'>
        <a target="_blank" rel="noreferrer" href="https://github.com/boromeot">Github</a>
        <a target="_blank" rel="noreferrer" href="https://github.com/boromeot/air-bnb-clone/wiki">Wiki</a>
        </div>
      </section>
    </>
  )
}

export default HomePage;
