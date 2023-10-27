import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

// Create the store or temporary state database
export default configureStore({
    reducer: rootReducers,
    devTools: import.meta.env.MODE === "development",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // redux thunk
});
