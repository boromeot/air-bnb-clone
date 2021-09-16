import React, { useState } from "react";
import * as spotFormActions from '../../store/spots-form';
import { useDispatch } from "react-redux";
import Option from "./Option";

const Action = ({ step, setStep }) => {
  const [value, setValue] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(spotFormActions.addData(value));
  }

 //Potential array out of bounds bug
 //Controls the question the user is currently on
  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  }

  const actionsArr = [
    <>
      <Option title='Apartment' value={{key: 'place', value: 'Apartment'}} setValue={setValue} />
      <Option title='House'  value={{key: 'place', value: 'House'}} setValue={setValue}/>
      <Option title='Secondary unit' value={{key: 'place', value: 'Secondary unit'}} setValue={setValue} />
      <Option title='Unique space' value={{key: 'place', value: 'Unique space'}} setValue={setValue} />
      <Option title='Bed and Breakfast' value={{key: 'place', value: 'Bed and breakfast'}} setValue={setValue} />
      <Option title='Boutique hotel' value={{key: 'place', value: 'Boutique hotel'}} setValue={setValue} />
    </>,
    <>
      <Option title='Hotel' value={{key: 'type', value: 'Hotel'}} setValue={setValue} />
      <Option title='Hostel' value={{key: 'type', value: 'Hostel'}} setValue={setValue} />
      <Option title='Resort' value={{key: 'type', value: 'Resort'}} setValue={setValue} />
      <Option title='Nature lodge' value={{key: 'type', value: 'Nature lodge'}} setValue={setValue} />
      <Option title='Apartment' value={{key: 'type', value: 'Apartment'}} setValue={setValue} />
    </>,
    <>
      <Option title='A private room' value={{key: 'space', value: 'private'}} setValue={setValue} />
      <Option title='A shared room' value={{key: 'space', value: 'shared'}} setValue={setValue} />
    </>

  ];

  return (
    <form onSubmit={handleSubmit}>
      {actionsArr[step] || null}
      <input type='submit' value='Submit' onClick={nextStep} />
    </form>
  )
}

export default Action;
