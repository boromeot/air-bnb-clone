import React, { useState } from "react";
import * as spotFormActions from '../../store/spots-form';
import { useDispatch } from "react-redux";
import Option from "./Option";

const Action = ({ step }) => {
  const [value, setValue] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(spotFormActions.addData(value));
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
  ];

  return (
    <form onSubmit={handleSubmit}>
      {actionsArr[step] || null}
      <input type='submit' value='Submit' />
    </form>
  )
}

export default Action;
