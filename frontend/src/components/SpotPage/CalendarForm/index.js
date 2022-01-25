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

  return (
    <div style={{width: '320px'}}>
      <div className="calendar-spacer">
        <div className="calendar-header-contianer">
          <h3 className="calendar-header">{`${monthName} ${yearIndex}`}</h3>
        </div>
        <table className="calendar-table">
          <tbody>
            <tr>
              <td className="calendar-available-td">
                <div className="calendar-available-div">5</div>
              </td>
              <td className="calendar-available-td">
                <div className="calendar-available-div">5</div>
              </td>
              <td className="calendar-available-td">
                <div className="calendar-available-div">5</div>
              </td>
              <td className="calendar-available-td">
                <div className="calendar-available-div">5</div>
              </td>
              <td className="calendar-available-td">
                <div className="calendar-available-div">5</div>
              </td>
              <td className="calendar-available-td">
                <div className="calendar-available-div">5</div>
              </td>
              <td className="calendar-available-td">
                <div className="calendar-available-div">5</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CalendarForm;
