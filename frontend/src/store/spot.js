import { csrfFetch } from "./csrf";

const GET_SPOT = 'spots/getSpot';
const DELETE_SPOT = 'spot/deleteSpot';
const PUT_SPOT = 'spot/putSpot';

const get_spot = (spot) => {
  return {
    type: GET_SPOT,
    payload: spot,
  };
};

export const getSpot = (id) => async dispatch => {
  const response = await fetch(`/api/spots/${id}`);
  const data = await response.json();
  dispatch(get_spot(data.spot));
  return response;
}


const delete_spot = () => {
  return {
    type: DELETE_SPOT,
  }
}

export const deleteSpot = (id) => async dispatch => {
  await csrfFetch(`/api/spots/${id}`, {
    method: 'DELETE'
  });
  dispatch(delete_spot());
}

const put_spot = (spot) => {
  return {
    type: PUT_SPOT,
    payload: spot,
  }
}

export const putSpot = (id, spot) => async dispatch => {
  const {address, price, name, city, state, description } = spot;
  const response = await csrfFetch(`/api/spots/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      address,
      price,
      name,
      city,
      state,
      description
    })
  });
  const data = await response.json();
  dispatch(put_spot(data.spot));
}

const spotReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_SPOT:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    case DELETE_SPOT:
      newState = Object.assign({}, state);
      return newState;
    case PUT_SPOT:
      newState = Object.assign(state, action.payload);
      return newState;
    default:
      return state;
  }
}

export default spotReducer;
