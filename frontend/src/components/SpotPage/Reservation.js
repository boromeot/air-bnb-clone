import React, { useState } from "react";
import * as reservationActions from "../../store/reservation";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import './SpotReservation.css';
import Star from "../SVGs/Star";
import DownChevron from "../SVGs/DownChevron";

const Reservation = ({ userId, spotId, price }) => {
  const dispatch = useDispatch();
  const history = useHistory();
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
    history.push('/reservations');
  }

  console.log(setStartDate);
  console.log(setEndDate);
  console.log(handleSubmit);

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
            <div className="reservation-guest-container w100p relative">
              <div className="relative flex cursor">
                <label className="w100p">
                  <div className="reservation-text">Guests</div>
                  <div className="reservation-guest">
                    <div className="font-size--14">1 guest</div>
                  </div>
                </label>
                <div className="reservation-chevron">
                  <DownChevron className='icon-16' viewBox='0 0 18 18' />
                </div>
              </div>
            </div>
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
    </div>
  )
}

export default Reservation;
