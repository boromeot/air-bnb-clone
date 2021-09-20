import { csrfFetch } from "./csrf";

const SET_RESERVATION = 'reservation/setReservation';


const set_Reservation = (reservation) => {
  return {
    type: SET_RESERVATION,
    payload: reservation,
  };
};

export const setReservation = (booking) => async dispatch => {
  const { userId, spotId, startDate, endDate } = booking;
  const response = await csrfFetch('/api/bookings', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId,
      spotId,
      startDate,
      endDate,
    })
  })
  const data = await response.json();
  dispatch(set_Reservation(data));
  return response;
}

const reservationReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case SET_RESERVATION:
      newState = Object.assign({}, action.payload);
      return newState;
    default:
      return state;
  }
};

export default reservationReducer;
