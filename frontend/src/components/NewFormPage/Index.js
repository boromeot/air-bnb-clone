import React, { useState } from "react";
import AdressSection from "./AdressSection";
import AmenitieSection from "./AmenitieSection";
import GuestSection from "./GuestSection";
import PlaceSection from "./PlaceSection";
import QuestionSection from "./QuestionSection";
import SpaceSection from "./SpaceSection";
import TypeSection from "./TypeSection";

const NewFormPage = () => {

  const [index, setIndex] = useState(0);

  const [formData, setFormData] = useState({
    place: '',
    type: '',
    space: '',
    guests: 0,
    beds: 0,
    bedrooms: 0,
    bathrooms: 0,
    adress: '',
    amenities: new Set(),
  });

  const questions = [
    {
      question: 'What kind of place will you host?',
      options: <PlaceSection setFormData={ setFormData }/>
    },
    {
      question: 'Which of these best describes your place?',
      options: <TypeSection setFormData={ setFormData } />
    },
    {
      question: 'What kind of space will guests have?',
      options: <SpaceSection setFormData={ setFormData } />
    },
    {
      question: 'Where is your place?',
      options: <AdressSection setFormData={ setFormData } />
    },
    {
      question: 'How many guests would you like to welcome?',
      options: <GuestSection formData={formData} setFormData={ setFormData } />
    },
    {
      question: 'Let guests know what your place has to offer',
      options: <AmenitieSection setFormData={ setFormData } />
    }
  ];

  const prevQuestion = () => {
    if (0 < index) {
      setIndex(prevIndex => prevIndex - 1);
    }
  };

  const nextQuestion = () => {
    if (index < questions.length) {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div className="w100p flex">
      <QuestionSection question={questions[index].question} />
      <div className="ml50vw w50p">
        <div className="pz8 overflowY-auto w100p mt-88 mb-82 scrollbar-none" style={{height: 'calc(-170px + 100vh)'}}>
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
      <div onClick={() => console.log(formData)}>log</div>
    </div>
  )
}

export default NewFormPage;
