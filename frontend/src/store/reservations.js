import { csrfFetch } from "./csrf";

const GET_RESERVATIONS = 'reservation/getReservations';
const DELETE_RESERVATION = 'reservation/deleteReservation';

const get_Reservations = (reservations) => {
  return {
    type: GET_RESERVATIONS,
    payload: reservations,
  }
}

export const getReservations = (userId) => async dispatch => {
  const response = await csrfFetch(`/api/bookings/user/${userId}`)
  const data = await response.json();
  dispatch(get_Reservations(data));
}

const delete_reservation = (id) => {
  return {
    type: DELETE_RESERVATION,
    payload: id,
  }
}

export const deleteReservation = (id) => async dispatch => {
  await csrfFetch(`/api/bookings/${id}`, {
    method: 'DELETE'
  });

  dispatch(delete_reservation(id));
}

const reservationsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case GET_RESERVATIONS:
      newState = action.payload.bookings;
      return newState;
    case DELETE_RESERVATION:
      newState = state.filter(reservation => {
        return reservation.id !== +action.payload;
      })
      return newState;
    default:
    return state;
  }
};

export default reservationsReducer;
