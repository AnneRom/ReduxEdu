import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/tasksSlice";
import filtersReducer from "./filters/filtersSlice";
import authReducer from "./auth/authSlice";

// const rootReducer = (state = initialState, action) => {
// }

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer,
        auth: authReducer,
    }
});