const initialState = {
  content: [],
};

const cocktailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COCKTAIL":
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default cocktailsReducer;
