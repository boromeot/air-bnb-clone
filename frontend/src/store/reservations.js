import { csrfFetch } from "./csrf";

const GET_RESERVATIONS = 'reservation/getReservations';

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

const reservationsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case GET_RESERVATIONS:
      newState = action.payload.bookings;
      return newState;
    default:
    return state;
  }
};

export default reservationsReducer;
