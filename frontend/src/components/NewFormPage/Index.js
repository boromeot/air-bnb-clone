import React from "react";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import QuestionSection from "./QuestionSection";

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
    <div className="w100p flex">
      <QuestionSection question={'What kind of place will you host?'}/>
      <div className="ml50vw">
        <div className="">

        </div>
        <div className="width-50vw fixed b0">
          <div>

          </div>
          <div className="py2-5 flex align-center justify-space-between">
            <div className="ml8">
              <button className="btn btn-back font-size--16 font-weight--600">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewFormPage;
