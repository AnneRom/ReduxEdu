import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'tasks',
    initialState: {
        items: [
            { id: 0, text: "Learn HTML and CSS", completed: true, priority: "high" },
            { id: 1, text: "Get good at JavaScript", completed: true, priority: "medium" },
            { id: 2, text: "Master React", completed: false, priority: "high" },
            { id: 3, text: "Discover Redux", completed: false, priority: "low" },
            { id: 4, text: "Build amazing apps", completed: false, priority: "medium" },
        ], 

    },
    reducers: {
        addTask: (state, action) => {
                state.items.push(action.payload)
        },
        deleteTask: (state, action) => {
                state.items = state.items.filter(task => task.id !== action.payload)
        },
        toggleTask: (state, action) => {
            for (const task of state.items) {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                    break;
                }
            }
        }

    }

})
export const { addTask, deleteTask, toggleTask } = slice.actions;
export default slice.reducer;