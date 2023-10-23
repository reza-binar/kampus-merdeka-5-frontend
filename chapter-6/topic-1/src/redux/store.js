import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";

// Create the store or temporary state database
export default configureStore({
    reducer: rootReducers,
    devTools: import.meta.env.MODE === "development",
});
