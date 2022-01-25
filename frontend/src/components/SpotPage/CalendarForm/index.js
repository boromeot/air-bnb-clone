import React, { useState, useEffect } from "react";
import './CalendarForm.css';

const CalendarForm = () => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [today, setToday] = useState(new Date());
  const [monthIndex, setMonthIndex] = useState(today.getMonth())
  const [yearIndex, setYearIndex] = useState(today.getFullYear())
  const [monthName, setMonthName] = useState(months[monthIndex]);

  let firstDay = (new Date(yearIndex, monthIndex)).getDay();

  const daysInMonth = (iYear, iMonth) => {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  let rows = [];
  let date = 1;
  for (let i = 0; i < 6; i++) {
    let cells = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let td =
          <td className="calendar-available-td">
            <div className="calendar-available-div"></div>
          </td>
        cells.push(td);
      } else if (date > daysInMonth(yearIndex, monthIndex)) {
        break;
      } else {
        let td =
          <td className="calendar-available-td">
            <div className="calendar-available-div">{date}</div>
          </td>
        cells.push(td);
        date++;
      }
    }
    let row = <tr>{[...cells]}</tr>
    rows.push(row);
  }

  const next = () => {
    setMonthIndex(prev => prev + 1);
  }

  useEffect(() => {
    setMonthName(months[monthIndex]);
  }, [monthIndex])

  return (
    <div style={{width: '660px'}}>
      <div className="relative">
        <div className="calendar-days-container">
          <ul className="calendar-days-list">
            <li className="calendar-day">Su</li>
            <li className="calendar-day">Mo</li>
            <li className="calendar-day">Tu</li>
            <li className="calendar-day">We</li>
            <li className="calendar-day">Th</li>
            <li className="calendar-day">Fr</li>
            <li className="calendar-day">Sa</li>
          </ul>
        </div>
        <div className="calendar-days-container"></div>
      </div>
      <div style={{width: '320px'}}>
        <div className="calendar-spacer">
          <div className="calendar-header-contianer">
            <h3 className="calendar-header">{`${monthName} ${yearIndex}`}</h3>
          </div>
          <table className="calendar-table">
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
      <div onClick={() => next()}>next</div>
    </div>
  )
}

export default CalendarForm;
//<path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path>
