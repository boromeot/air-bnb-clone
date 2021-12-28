import React, { useState } from "react";
import PlaceSection from "./PlaceSection";
import QuestionSection from "./QuestionSection";

const NewFormPage = () => {

  const [index, setIndex] = useState(0);

  const [formData, setFormData] = useState({
    place: '',
    type: ''
  });

  const questions = [
    {
      question: <QuestionSection question={'What kind of place will you host?'}/>,
      options: <PlaceSection setFormData={ setFormData }/>
    },
  ];

  const prevQuestion = () => {
    if (0 < index) {
      setIndex(prevIndex => prevIndex - 1);
    }
  };

  const nextQuestion = () => {
    if (index < 9) {
      setIndex(prevIndex => prevIndex + 1);
    }
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
      {questions[index].question}
      <div className="ml50vw w50p">
        <div className="pz8 overflowY-auto w100p mt-88 mb-82" style={{height: 'calc(-170px + 100vh)'}}>
          {questions[index].options}
        </div>
        <div className="width-50vw fixed b0">
          <div className="flex">
            <div className="overflowX-hidden bg-gray" style={{height: '2px', flexGrow: '1'}}>

            </div>
          </div>
          <div className="py2-5 flex align-center justify-space-between">
            <div className="ml8">
              <button onClick={prevQuestion} className="btn btn-back font-size--16 font-weight--600">Back</button>
            </div>
            <div className="mr8">
              <button onClick={nextQuestion} className="btn btn-next font-size--16 font-weight--600">Next</button>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => console.log(index)}>log</div>
    </div>
  )
}

export default NewFormPage;
