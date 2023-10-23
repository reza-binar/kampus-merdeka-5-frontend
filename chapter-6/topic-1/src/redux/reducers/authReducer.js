import { createSlice } from "@reduxjs/toolkit";

// Initial state, it is like [..., ...] the first variable of useState but it is globally
const initialState = {
    token: localStorage.getItem("token") || null,
    user: null,
};

// Define the slice, the slice is consist of initial state and the setter of the global state
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            if (action.payload) {
                localStorage.setItem("token", action.payload);
            } else {
                localStorage.removeItem("token");
            }

            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

// Export the function to set the state
export const { setToken, setIsLoggedIn, setUser } = authSlice.actions;

// Export the global state, so the variable in the initialState will be available in any component
export default authSlice.reducer;
