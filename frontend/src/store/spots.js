const SET_SPOTS = 'spots/setSpots';

const setSpots = (spots) => {
  return {
    type: SET_SPOTS,
    payload: spots,
  };
};

export const getSpots = () => async dispatch => {
  const response = await fetch('/api/spots');
  const data = await response.json();
  dispatch(setSpots(data.spots));
  return response;
}

const spotsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case SET_SPOTS:
      newState = Object.assign({}, state);
      newState = action.payload.map(spot => spot);
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;
