import { useSelector } from 'react-redux';
import React from "react";
import Minus from '../../SVGs/Minus';
import Plus from '../../SVGs/Plus';

const GuestOption = ({ name, ageRange, formData, setFormData }) => {
  const optionCount = formData[name];
  const maxGuests = useSelector(state => state.spot.guests);
  const totalGuests = formData['totalGuests'];

  const decrement = e => { //Uses the name attribute as a key for the formData object
    const name = e.currentTarget.name;
    if (optionCount > 0) {
      setFormData(prev => {
        return {
          ...prev,
          [name]: prev[name] - 1,
        };
      });
    }
    if (name !== 'infants' && formData['totalGuests'] > 0) {
      setFormData(prev => {
        return {
          ...prev,
          'totalGuests' : prev['totalGuests'] - 1,
        }
      })
    }
  }

  const increment = e => {
    const name = e.currentTarget.name;
    if (name === 'infants') { //If infants just increase the infant count
      setFormData(prev => {
        return {
          ...prev,
          [name]: prev[name] + 1,
        };
      });
    } else if (name !== 'infants' && totalGuests < maxGuests) { //else increase the adult or children count and the totalGuests count
      setFormData(prev => {
        return {
          ...prev,
          [name]: prev[name] + 1,
          'totalGuests': prev['totalGuests'] + 1,
        };
      });
    }
  }

  return (
    <div className="guest-form-option">
      <div className="guest-form-option-text-container">
        <div className="guest-form-text">{name}</div>
        <div className="font-size--12">{ageRange}</div>
      </div>
      <div className="guest-form-button-container">
        <button className="guest-form-button" name={name} onClick={decrement}>
          <Minus className='icon-12' viewBox='0 0 32 32' />
        </button>
        <div className="soft-black">{optionCount}</div>
        <button className="guest-form-button" name={name} onClick={increment}>
          <Plus className='icon-12' viewBox='0 0 32 32' />
        </button>
      </div>
    </div>
  )
}

export default GuestOption;
