const ADD_FORM = 'spotsForm/addData';
const SET_SPOT = 'spotsForm/setSpot';

export const addData = (data) => {
  return {
    type: ADD_FORM,
    payload: data,
  };
};

const spotFormReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case ADD_FORM:
      //I think... for some reason passing in an obj to payload turns it into a string
      //so you have to JSON.parse it...
      const payloadObj = JSON.parse(action.payload)
      newState = Object.assign({}, state);
      newState[payloadObj.key] = payloadObj.value;
      return newState;
    default:
      return state;
  }
};

export default spotFormReducer;
