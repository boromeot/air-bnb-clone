import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from "react-router-dom";
import Instructions from "./Instructions";
import Action from "./Action";
import './HostFormPage.css';

const HostFormPage = () => {
  const [step, setStep] = useState(0);

  const instructionsArr = [
    'What kind of place will you host?',
    'Which of these best describes your place?',
    'What kind of space will guests have?',
    'What is the address?',
    'What is the state?',
    'What is the city?',
    'How many guests would you like to welcome?',
    'Now for the fun part—set your price',
    'Let\'s give your place a name',
    'Now, let\'s describe your place',
    'Next, let\'s add some photos of your place',
    'Check out your listing!',
    ];

    const sessionUser = useSelector((state) => state.session.user);
    if (!sessionUser) return <Redirect to="/" />;

  return (
      <div className='become-a-host-container'>
        <div className='instructions-container'>
          <NavLink to='/' className='logo home'>
            carebnb
          </NavLink>
          <Instructions instructions={instructionsArr[step]}/>
        </div>
        <div className='actions-container'>
          <Action step={step} setStep={setStep} />
        </div>
      </div>
    )
}

export default HostFormPage;
