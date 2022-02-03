import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as reservationsActions from '../../store/reservations';
import SpotCard from '../SpotsPage/SpotCard';
import './reservations.css';

const ResevervationsPage = () => {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.reservations);
  const session = useSelector(state => state.session);

  useEffect(() => {
    dispatch(reservationsActions.getReservations(session.user?.id));
  }, [dispatch, session.user])

  const getShortDay = dateObj => {
    return dateObj.toLocaleString('en-US', { weekday: 'short'});
  }

  const getShortMonth = dateObj => {
    return dateObj.toLocaleString('en-US', { month: 'short'});
  }

  // const handleDelete = (e, bookingId) => {
  //   e.preventDefault();
  //   dispatch(reservationsActions.deleteReservation(bookingId));
  // }

  if (!session.user) return <Redirect to="/" />;

  return (
    <div className='reservation-spacer'>
      <h1 className='mb3 text-center'>My reservations </h1>
      <div className='reservations-container'>
        {bookings &&
          bookings.map(booking => {
            const startDate = new Date(booking.startDate);
            const endDate = new Date(booking.endDate);
            const startDateString = `${getShortDay(startDate)}, ${getShortMonth(startDate)} ${startDate.getDate()}`
            const endDateString = `${getShortDay(endDate)}, ${getShortMonth(endDate)} ${endDate.getDate()}`

            return (
            <div className='reservation-container' key={booking.id}>
              <div className='reservation-page-check-container'>
                <div className='reservation-page-check'>
                  CHECK-IN
                  <div className='reservation-page-check-date'>
                    { startDateString }
                    <div className='reservation-page-time'>3:00 PM </div>
                  </div>
                </div>
                <div className='reservation-page-check'>
                  CHECKOUT
                  <div className='reservation-page-check-date'>
                    { endDateString }
                    <div className='reservation-page-time'>11:00 AM </div>
                  </div>
                </div>
              </div>
              <SpotCard id={booking.Spot.id} city={booking.Spot.city} state={booking.Spot.state} price={booking.Spot.price} images={booking.Spot.Images} />
            </div>
          )})
        }
      </div>
    </div>
  )
}

export default ResevervationsPage;
