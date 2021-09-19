import React, { useState } from "react";
import * as reservationActions from "../../store/reservation";
import { useDispatch } from "react-redux";

const Reservation = ({ userId, spotId, price }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      userId,
      spotId,
      startDate,
      endDate
    }
    dispatch(reservationActions.setReservation(booking));
  }

  return (
    <div className='reservation-form-container'>
      <div className='reservation-price'>
        <span>{`$${price} / night`}</span>
      </div>
      <form className='reservation-form' onSubmit={handleSubmit}>
        <input className='reservation-form-input startDate' type='date' value={startDate} onChange={e => setStartDate(e.target.value)}/>
        <input className='reservation-form-input endDate' type='date' value={endDate} onChange={e => setEndDate(e.target.value)} />
        <input className='reservation-form-input guestNumber' type='number' />
        <button className='submit-btn' type='submit' >
          Reserve
        </button>
      </form>
    </div>
  )
}

export default Reservation;
