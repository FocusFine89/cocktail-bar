import { SET_ALERT } from ".";

const initialState = {
  content: true,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default alertReducer;
