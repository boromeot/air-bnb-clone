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
    dispatch(reservationsActions.getReservations(session.user.id));
  }, [dispatch])

  if (!session.user) return <Redirect to="/" />;

  return (
    <>
      <h1>My reservations </h1>
      <div className='reservations-container'>
        {bookings &&
          bookings.map(booking => {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let startDate = new Date(booking.startDate);
            startDate = `${months[startDate.getMonth()]} ${startDate.getDate()} ${startDate.getFullYear()}`

            let endDate = new Date(booking.endDate);
            endDate = `${months[endDate.getMonth()]} ${endDate.getDate()} ${endDate.getFullYear()}`

            return (
            <div className='reservation-container'>
              <SpotCard id={booking.Spot.id} city={booking.Spot.city} state={booking.Spot.state} price={booking.Spot.price} images={booking.Spot.Images} />
              <span>{`check in: ${startDate}`}</span>
              <span>{`check out: ${endDate}`}</span>
            </div>
          )})
        }
      </div>
    </>
  )
}

export default ResevervationsPage;
