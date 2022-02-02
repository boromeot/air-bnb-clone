import React from "react";
import Calendar from "./Calendar";
import './CalendarForm.css';

const CalendarForm = ({ formData, setFormData }) => {
  const { startDate, endDate } = formData;

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
      <div onClick={() => console.log(formData)}>log</div>
      <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
    </div>
  )
}

export default CalendarForm;
