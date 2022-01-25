import React from "react";
import './CalendarForm.css';

const CalendarForm = () => {

  const today = new Date();
  const monthName = today.toLocaleString('default', { month: 'long'});
  const monthIndex = today.getMonth();
  const yearIndex = today.getFullYear();

  let firstDay = (new Date(yearIndex, monthIndex)).getDay();

  const daysInMonth = (iYear, iMonth) => {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  let rows = [];
  let date = 1;
  for (let i = 0; i < 6; i++) {
    let x = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let td = <td className="calendar-available-td">
          <div className="calendar-available-div"></div>
        </td>
        x.push(td);
      } else if (date > daysInMonth(yearIndex, monthIndex)) {
        break;
      } else {
        let td = <td className="calendar-available-td">
          <div className="calendar-available-div">{date}</div>
        </td>
        x.push(td);
        date++;
      }
    }
    let tr = <tr>{[...x]}</tr>
    rows.push(tr);
  }

  return (
    <div style={{width: '660px'}}>
      <div className="relative">
        <div className="calendar-days-container">
          <ul className="calendar-days-list">
            <li className="calendar-day">Su</li>
            <li className="calendar-day">Su</li>
            <li className="calendar-day">Su</li>
            <li className="calendar-day">Su</li>
            <li className="calendar-day">Su</li>
            <li className="calendar-day">Su</li>
            <li className="calendar-day">Su</li>
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
    </div>
  )
}

export default CalendarForm;
//<path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path>
