import React, { useState } from "react";
import * as spotFormActions from '../../store/spots-form';
import { useDispatch } from "react-redux";
import Option from "./Option";
import TextOption from "./TextOption";
import UrlOption from "./UrlOption";

const Action = ({ step, setStep }) => {
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();

 //Potential array out of bounds bug
 //Controls the question the user is currently on
  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
    dispatch(spotFormActions.addData(value));
    //Set val back to null to disable the next button
    setValue(null);
  }
  const backStep = (e) => {
    e.preventDefault();
    if (step > 0) {
      setStep(prevStep => prevStep - 1);
    }
  }

  const actionsArr = [
    <>
      <Option title='Apartment' payload={{key: 'place', value: 'Apartment'}} setValue={setValue} />
      <Option title='House'  payload={{key: 'place', value: 'House'}} setValue={setValue}/>
      <Option title='Secondary unit' payload={{key: 'place', value: 'Secondary unit'}} setValue={setValue} />
      <Option title='Unique space' payload={{key: 'place', value: 'Unique space'}} setValue={setValue} />
      <Option title='Bed and Breakfast' payload={{key: 'place', value: 'Bed and breakfast'}} setValue={setValue} />
      <Option title='Boutique hotel' payload={{key: 'place', value: 'Boutique hotel'}} setValue={setValue} />
    </>,
    <>
      <Option title='Hotel' payload={{key: 'type', value: 'Hotel'}} setValue={setValue} description='A business offering private rooms, suites, or unique stats for guests.'/>
      <Option title='Hostel' payload={{key: 'type', value: 'Hostel'}} setValue={setValue} description='A hospitality business that rents beds in shared dorms and private rooms.'/>
      <Option title='Resort' payload={{key: 'type', value: 'Resort'}} setValue={setValue} description='A hospitality business with more amenities and services than a hotel.'/>
      <Option title='Nature lodge' payload={{key: 'type', value: 'Nature lodge'}} setValue={setValue} description='A business offering stays near natural settings like forests or mountains.'/>
      <Option title='Apartment' payload={{key: 'type', value: 'Apartment'}} setValue={setValue} description='A rented place within a multi-unit residential building or complex.'/>
    </>,
    <>
      <Option title='An entire place' payload={{key: 'space', value: 'Entire'}} setValue={setValue} />
      <Option title='A private room' payload={{key: 'space', value: 'Private'}} setValue={setValue} />
      <Option title='A shared room' payload={{key: 'space', value: 'Shared'}} setValue={setValue} />
    </>,
    <>
      <TextOption payload={{key: 'address', value: ''}} setValue={setValue}/>
    </>,
    <>
      <TextOption payload={{key: 'guests', value: ''}} setValue={setValue}/>
    </>,
    <>
      <TextOption payload={{key: 'price', value: ''}} setValue={setValue} />
    </>,
    <>
      <TextOption payload={{key: 'title', value: ''}} setValue={setValue} placeholder='Cozy 2-bedroom log cabin with loft'/>
    </>,
    <>
      <TextOption payload={{key: 'description', value: ''}} setValue={setValue} placeholder='Have fun with the whole family at this stylish place.'/>
    </>,
    <>
      <UrlOption payload={{key: 'urls', value: ''}} setValue={setValue}/>
    </>

  ];

  return (
    <>
      <div className='action-form-container'>
        {actionsArr[step] || null}
        <div className='action-btn-container'>
          <span className='back-btn' onClick={backStep}>Back</span>
          <button className='next-btn' onClick={nextStep} disabled={!value}>Next</button>
        </div>
      </div>
    </>
  )
}

export default Action;
