import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popular: [],
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setPopular: (state, action) => {
            state.popular = action.payload;
        },
    },
});

export const { setPopular } = movieSlice.actions;

export default movieSlice.reducer;
