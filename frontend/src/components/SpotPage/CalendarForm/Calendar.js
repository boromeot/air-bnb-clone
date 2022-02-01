import React, { useState, useMemo } from "react";
import './Calendar.css';

const Calendar = ({ setDate }) => {
  const months = useMemo(() => {
      return [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  }, [])

  const today = new Date();
  const [monthIndex, setMonthIndex] = useState(today.getMonth());
  const [yearIndex, setYearIndex] = useState(today.getFullYear());

  const getYearIndex = (firstCalendarMonthIndex, yearIndex) => {
    if (firstCalendarMonthIndex === 11) {
      return yearIndex + 1;
    } else {
      return yearIndex;
    }
  }

  const getMonthName = monthIndex => {
    let i = monthIndex % 12;
    return months[i];
  }

  const daysInMonth = (iYear, iMonth) => {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  const getRows = (yearIndex, monthIndex) => {
    let rows = [];
    let date = 1;
    const firstDay = (new Date(yearIndex, monthIndex)).getDay();
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
          let lexicalDate = date;
          let td =
            <td className="calendar-available-td" onClick={() => setDate({
              date: lexicalDate,
              month: monthIndex,
              year: yearIndex,
            })}>
              <div className="calendar-available-div">{date}</div>
            </td>
          cells.push(td);
          date++;
        }
      }
      let row = <tr>{[...cells]}</tr>
      rows.push(row);
    }
    return rows;
  }

  const prevMonth = () => {
    if (monthIndex === 0) {
      setYearIndex(prev => prev - 1);
      setMonthIndex(11);
    } else {
      setMonthIndex(prev => prev - 1);
    }
  }

  const nextMonth = () => {
    if (monthIndex === 11) {
      setYearIndex(prev => prev + 1);
    }
    setMonthIndex(prev => (prev + 1) % 12);
  }

  return (
    <>
      <div style={{width: '330px'}}>
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
              <h3 className="calendar-header">{`${getMonthName(monthIndex)} ${yearIndex}`}</h3>
            </div>
            <table className="calendar-table">
              <tbody>
                {getRows(yearIndex, monthIndex)}
              </tbody>
            </table>
          </div>
        </div>
        <div onClick={() => prevMonth()}>prevMonth</div>
        <div onClick={() => nextMonth()}>nextMonth</div>
      </div>
      <div style={{width: '330px'}}>
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
              <h3 className="calendar-header">{`${getMonthName(monthIndex + 1)} ${getYearIndex(monthIndex, yearIndex)}`}</h3>
            </div>
            <table className="calendar-table">
              <tbody>
                {getRows(yearIndex, monthIndex + 1)}
              </tbody>
            </table>
          </div>
        </div>
        <div onClick={() => prevMonth()}>prevMonth</div>
        <div onClick={() => nextMonth()}>nextMonth</div>
      </div>
    </>
  )
}

export default Calendar;
//<path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path>
