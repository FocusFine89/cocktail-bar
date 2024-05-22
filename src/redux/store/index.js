import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "../reducers/cocktailsReducer";

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
