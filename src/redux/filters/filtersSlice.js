import { createSlice } from "@reduxjs/toolkit";

export const selectStatusFilter = (state) => state.filters.status;
export const selectPriorityFilter = (state) => state.filters.priority;

const slice = createSlice({
    name: 'filters',
    initialState: {
         status: "all",
         priority: "all",
    },
    reducers: {
        setStatusFilter: (state, action) => {
            state.status = action.payload
        },
        setPriorityFilter: (state, action) => {
            state.priority = action.payload
        }
    }
})
export const { setStatusFilter, setPriorityFilter } = slice.actions;
export default slice.reducer;