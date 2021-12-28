import React, { useState } from "react";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import PlaceSection from "./PlaceSection";
import QuestionSection from "./QuestionSection";

const NewFormPage = () => {
  const { path } = useRouteMatch();

  const [formData, setFormData] = useState({
    place: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;

    const oldState = {...formData};

    setFormData({
      ...oldState,
      [name]: value
    });
  };

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
    <div className="w100p flex">
      <QuestionSection question={'What kind of place will you host?'}/>
      <div className="ml50vw w50p">
        <div className="pz8 overflowY-auto w100p mt-88 mb-82" style={{height: 'calc(-170px + 100vh)'}}>
          <PlaceSection />
        </div>
        <div className="width-50vw fixed b0">
          <div className="flex">
            <div className="overflowX-hidden bg-gray" style={{height: '2px', flexGrow: '1'}}>

            </div>
          </div>
          <div className="py2-5 flex align-center justify-space-between">
            <div className="ml8">
              <button className="btn btn-back font-size--16 font-weight--600">Back</button>
            </div>
            <div className="mr8">
              <button className="btn btn-next font-size--16 font-weight--600">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewFormPage;
