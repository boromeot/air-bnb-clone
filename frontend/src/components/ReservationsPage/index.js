import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as reservationsActions from '../../store/reservations';
import SpotCard from '../SpotsPage/SpotCard';

const ResevervationsPage = () => {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.reservations);
  const session = useSelector(state => state.session);
  useEffect(() => {
    dispatch(reservationsActions.getReservations(session.user.id));
  }, [dispatch])

  return (
    <>
      <h1>hi from ResevervationsPage</h1>
      {bookings &&
        bookings.map(booking => (
          <div>
            <h2>{`start date: ${booking.startDate}`}</h2>
            <SpotCard id={booking.Spot.id} city={booking.Spot.city} state={booking.Spot.state} price={booking.Spot.price} images={booking.Spot.Images} />
          </div>
        ))
      }
    </>
  )
}

export default ResevervationsPage;
