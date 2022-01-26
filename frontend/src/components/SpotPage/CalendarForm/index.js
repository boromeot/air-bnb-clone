import React from "react";
import Calendar from "./Calendar";
import './CalendarForm.css';

const CalendarForm = ({ setFormData }) => {

  const setStartDate = date => {
    setFormData(prev => {
      return {
        ...prev,
        'startDate': date,
      }
    })
  }

  const setEndDate = date => {
    setFormData(prev => {
      return {
        ...prev,
        'endDate': date,
      }
    })
  }

  return (
    <div className='flex' style={{width: '660px'}}>
      <Calendar setDate={setStartDate} />
      <Calendar setDate={setEndDate} />
    </div>
  )
}

export default CalendarForm;
