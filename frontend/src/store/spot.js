const GET_SPOT = 'spots/getSpot';

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

const spotReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_SPOT:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}

export default spotReducer;
