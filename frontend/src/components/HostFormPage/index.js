import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Instructions from "./Instructions";
import './HostFormPage.css';
import Action from "./Action";

const HostFormPage = () => {
  const [steps, setSteps] = useState(0);

  const instructionsArr = [
    'What kind of place will you host?',
    'Which of these best describes your place?',
    'What kind of space will guests have?',
    'What is the address?',
    'How many guests would you like to welcome?',
    'Now for the fun part—set your price',
    'Let\'s give your place a name',
    'Now, let\'s describe your place',
    'Next, let\'s add some photos of your place',
    'Check out your listing!',
    'Once you save, we\’ll ask you to confirm a few details before you can publish.',
  ];

  const actionsArr = [
    'hi'
  ];

  //Potential array out of bounds bug
  const nextStep = () => {
    setSteps(prevStep => prevStep + 1);
  }

  return (
      <div className='become-a-host-container'>
        <div className='instructions-container'>
          <NavLink to='/' className='logo home'>
            carebnb
          </NavLink>
          <Instructions instructions={instructionsArr[steps]}/>
        </div>
        <div className='actions-container'>
          <Action actions={actionsArr[steps]}/>
          <span class='btn' onClick={nextStep}>Next</span>
        </div>
      </div>
    )
}

export default HostFormPage;
