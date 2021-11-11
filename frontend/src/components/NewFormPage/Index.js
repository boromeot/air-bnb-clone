import React from "react";
import { NavLink } from "react-router-dom";

const NewFormPage = () => {

  return (
    <div className='become-a-host-container'>
        <div className='instructions-container'>
          <NavLink to='/' className='logo home'>
            carebnb
          </NavLink>
        </div>
        <div className='actions-container'>
          <div className='action-form-container'>
            <div className='action-btn-container'>
              <span className='back-btn' >Back</span>
              <button className='next-btn' >Next</button>
            </div>
         </div>
        </div>
    </div>
  )
}

export default NewFormPage;
