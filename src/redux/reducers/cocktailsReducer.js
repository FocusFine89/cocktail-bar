import { GET_COCKTAIL } from "../actions/getCocktailAction";
import { GET_DETAILS } from "../actions/getDetailsAction";

const initialState = {
  content: [],
  details: null,
};

const cocktailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAIL:
      return {
        ...state,
        content: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default cocktailsReducer;
