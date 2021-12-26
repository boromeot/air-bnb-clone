import React from "react";
import { NavLink, Route, useRouteMatch } from "react-router-dom";

const NewFormPage = () => {
  const { path } = useRouteMatch();

  // const formData = {
  //   'place': '',
  //   'type': '',
  //   'space': '',
  //   'address': '',
  //   'state': '',
  //   'city': '',
  //   'guests': '',
  //   'price': '',
  //   'title': '',
  //   'description': '',
  // };


  return (
    <div className='become-a-host-container'>
        <div className='instructions-container'>
          <NavLink to='/' className='logo home'>
            carebnb
          </NavLink>
        </div>
        <div className='actions-container'>
          {/* Content goes here */}
          <div>
            <Route exact to={`${path}/place`}>
              place route
            </Route>
          </div>
          <div className='action-form-container'>
            <div className='action-btn-container'>
              <span className='back-btn'>Back</span>
              <button className='next-btn'>Next</button>
            </div>
         </div>
        </div>
    </div>
  )
}

export default NewFormPage;
