import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as reservationsActions from '../../store/reservations';

const ResevervationsPage = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(state => state.reservations);
  const session = useSelector(state => state.session);
  useEffect(() => {
    dispatch(reservationsActions.getReservations(session.user.id));
  }, [dispatch])

  return (
    <h1>{reservations[0].id}</h1>
  )
}

export default ResevervationsPage;
