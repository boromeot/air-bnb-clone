import React from "react";
import Calendar from "./Calendar";
import './CalendarForm.css';

const CalendarForm = ({ formData, setFormData }) => {

  

  return (
    <div className='flex' style={{width: '660px'}}>
      <Calendar />
      <Calendar />
    </div>
  )
}

export default CalendarForm;
