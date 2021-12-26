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
    <div className="w100p">
      <QuestionSection />
    </div>
  )
}

export default NewFormPage;
