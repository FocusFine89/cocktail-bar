import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "../reducers/cocktailsReducer";
import alertReducer from "../reducers/setAlertReducer";

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
  alert: alertReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
