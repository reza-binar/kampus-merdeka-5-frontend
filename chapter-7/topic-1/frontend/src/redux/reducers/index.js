import { combineReducers } from "@reduxjs/toolkit";
import messageReducer from "./messageReducer";

// We have reducers, it will called in store to create an global state
export default combineReducers({
  message: messageReducer,
});
