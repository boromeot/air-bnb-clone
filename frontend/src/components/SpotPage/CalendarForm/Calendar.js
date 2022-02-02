import React, { useState, useMemo } from "react";
import './Calendar.css';

const Calendar = ({ startDate, setStartDate, endDate, setEndDate }) => {
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

  const Cell = ({ monthIndex, date, yearIndex }) => {
    const thisDate = {
      monthIndex,
      date,
      yearIndex,
      monthName: months[monthIndex]
    }
    return (
      <td className="calendar-available-td"
        onClick={() => {
          if (Object.keys(startDate).length === 0) {
            setStartDate(thisDate);
          } else {
            setEndDate(thisDate);
          }
        }}
      >
        <div className={JSON.stringify(startDate) === JSON.stringify(thisDate) || JSON.stringify(endDate) === JSON.stringify(thisDate) ? "calendar-selected-day" : "calendar-available-div"}>{date}</div>
      </td>
    )
  }

  const Rows = ({ yearIndex, monthIndex }) => {
    let date = 1;
    let rows = [];
    const firstDay = (new Date(yearIndex, monthIndex)).getDay();
    for (let i = 0; i < 6; i++) {
      let cells = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          cells.push(<Cell date={null} />);
        } else if (date > daysInMonth(yearIndex, monthIndex)) {
          break;
        } else {
          cells.push(<Cell monthIndex={monthIndex} date={date} yearIndex={yearIndex} />);
          date++;
        }
      }
      rows.push(<tr>{[...cells]}</tr>);
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
                <Rows yearIndex={yearIndex} monthIndex={monthIndex} />
              </tbody>
            </table>
          </div>
        </div>
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
              <Rows yearIndex={yearIndex} monthIndex={monthIndex + 1} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calendar;
//<path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path>
