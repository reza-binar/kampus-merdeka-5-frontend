import { createSlice } from "@reduxjs/toolkit";

// The initial state when the application load in first time
const initialState = {
  messages: [],
};

// Define the reducers
const messageSlicer = createSlice({
  name: "message",
  initialState,
  reducers: {
    getAllMessagesReducer: (state, action) => {
      state.messages = action.payload;
    },
    createNewMessageReducer: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

// Export the reducer function, the functions will be called in actions
export const { getAllMessagesReducer, createNewMessageReducer } =
  messageSlicer.actions;

// Export the reducer to combine it with another reducers
export default messageSlicer.reducer;
