import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice";

// const rootReducer = (state = initialState, action) => {
// }

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer,
    }
});