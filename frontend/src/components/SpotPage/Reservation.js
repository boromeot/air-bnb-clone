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
  const [startDate, setStartDate] = useState(); console.log(setStartDate);
  const [endDate, setEndDate] = useState(); console.log(setEndDate);

  const maxGuests = useSelector(state => state.spot.guests);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
    totalGuests: 1,
    startDate: {},
    endDate: {},
  });

  const guestCount = formData.adults + formData.children;
  const infantCount = formData.infants;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      userId,
      spotId,
      startDate,
      endDate
    }
    dispatch(reservationActions.setReservation(booking));
    history.push('/reservations');
  }; console.log(handleSubmit);

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
                <span className='mr1'><Star className='icon-14 fill-red' viewBox='0 0 32 32' /></span>
                <span className='mr1'>4.85 ·</span>
                <span className='mr1 underline'>440 reviews</span>
              </span>
            </div>
          </div>
          <div className="mb3">
            <div className="reservation-check-container">
              <div className='reservation-check'> {/* check in */}
                <div className='reservation-text'>CHECK-IN</div>
                <div className="reservation-date">4/20/2021</div>
              </div>
              <div className='reservation-check' style={{borderLeft: '1px solid rgb(176, 176, 176)'}}> {/* check in */}
                <div className='reservation-text'>CHECKOUT</div>
                <div className="reservation-date">4/23/2021</div>
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
            { showForm && <GuestForm maxGuests={maxGuests} formData={formData} setFormData={setFormData} />}
          </div>
          <div>
            <button className="reservation-button">
              <div>Reserve</div>
            </button>
          </div>
        </div>
        <ul></ul>
        <div></div>
      </div>
      <CalendarForm setFormData={setFormData}/>
    </div>
  )
}

export default Reservation;
