import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import * as reservationActions from "../../store/reservation";
import GuestForm from "./GuestForm/GuestForm";
import CalendarForm from "./CalendarForm";
import Star from "../SVGs/Star";
import DownChevron from "../SVGs/DownChevron";
import './SpotReservation.css';

const Reservation = ({ userId, spotId, price }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const maxGuests = useSelector(state => state.spot.guests);
  const [showForm, setShowForm] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [formData, setFormData] = useState({
    userId,
    spotId,
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
    totalGuests: 1,
    startDate: {},
    endDate: {},
    monthIndex: 0,
    date: 0,
    yearIndex: 0,
  });

  const guestCount = formData.adults + formData.children;
  const infantCount = formData.infants;
  const allowButton = formData.totalGuests && Object.keys(formData.startDate).length > 0 && Object.keys(formData.endDate).length > 0;

  const dateFormat = formDate => {
    const {monthIndex, date, yearIndex} = formDate;
    let dateString = '';
    if (monthIndex && date && yearIndex) {
      dateString += `${monthIndex}/${date}/${yearIndex}`;
    }
    return dateString;
  }

  const guestInfantStringFormatter = (guestCount, infantCount) => {
    let guestString = '';
    let infantString = '';

    if (guestCount === 1) {
      guestString = `${guestCount} guest`
    } else if (guestCount === 0 || guestCount > 1) {
      guestString = `${guestCount} guests`
    }

    if (infantCount === 1) {
      infantString = ', 1 infant';
    } else if (infantCount > 1) {
      infantString = `, ${infantCount} infants`;
    }
    return `${guestString}${infantString}`
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(reservationActions.setReservation(formData));
    history.push('/reservations');
  };

  return (
    <div className='mt8 sticky' style={{top: '46px'}}>
      <div className="test">
        <div className="flex flex-column">
          <div className="flex justify-space-between mb4">
            <div>
              <span className="font-size--22 soft-black font-weight--600">{`$${price}`}</span>
              <span> / night</span>
            </div>
            <div style={{marginTop: '8px'}}>
              <span className="flex font-size--13 font-weight--600 soft-black">
                <span className='mr1 flex align-center'><Star className='icon-14 fill-red' viewBox='0 0 32 32' /></span>
                <span className='mr1'>4.85 ·</span>
                <span className='mr1 underline'>440 reviews</span>
              </span>
            </div>
          </div>
          <div className="mb3">
            <div className="reservation-check-container"
              onClick={() => setShowCalendar(prev => !prev)}
            >
              <div className='reservation-check'> {/* check in */}
                <div className='reservation-text'>CHECK-IN</div>
                <div className="reservation-date">{dateFormat(formData.startDate) ? dateFormat(formData.startDate) : 'Add date'}</div>
              </div>
              <div className='reservation-check' style={{borderLeft: '1px solid rgb(176, 176, 176)'}}> {/* check in */}
                <div className='reservation-text'>CHECKOUT</div>
                <div className="reservation-date">{dateFormat(formData.endDate) ? dateFormat(formData.endDate) : 'Add date'}</div>
              </div>
            </div>
            <div className="reservation-guest-container"
              onClick={() => setShowForm(prev => !prev)}
            >
              <div className="relative flex">
                <label className="w100p">
                  <div className="reservation-text text">Guests</div>
                  <div className="reservation-guest pointer">
                    <div className="font-size--14">{guestInfantStringFormatter(guestCount, infantCount)}</div>
                  </div>
                </label>
                <div className="reservation-chevron">
                  <DownChevron className='icon-16' viewBox='0 0 18 18' />
                </div>
              </div>
            </div>
            { showCalendar && <CalendarForm formData={formData} setFormData={setFormData}/>}
            { showForm && <GuestForm maxGuests={maxGuests} formData={formData} setFormData={setFormData} />}
          </div>
          <div>
            <button className={allowButton ?  "reservation-button" : "reservation-button-disabled"}
              disabled={!allowButton}
              onClick={handleSubmit}
            >
              <div>
                Reserve
              </div>
            </button>
          </div>
        </div>
        <ul></ul>
        <div></div>
      </div>
    </div>
  )
}

export default Reservation;
