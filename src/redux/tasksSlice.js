import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleTask, updateTask } from "./operations";

const slice = createSlice({
    name: 'tasks',
    initialState: {
        items: [], 
        isLoading: false,
        error: null,

    },
    reducers: {
        // addTask: (state, action) => {
        //         state.items.push(action.payload)
        // },
        // deleteTask: (state, action) => {
        //         state.items = state.items.filter(task => task.id !== action.payload)
        // },
        // toggleTask: (state, action) => {
        //     for (const task of state.items) {
        //         if (task.id === action.payload) {
        //             task.completed = !task.completed;
        //             break;
        //         }
        //     }
        // },
        updateTaskPriority: (state, action) => {
            const { id, priority } = action.payload;
            for (const task of state.items) {
                if (task.id === id) {
                    task.priority = priority;
                    break;
                }
            }
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log("Array items fetch:", state.items);
            })

            .addCase(addTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null; 
                state.items.push(action.payload);
            })
            .addCase(addTask.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(deleteTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
            
                state.items = state.items.filter(task => task.id !== action.payload.id);
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(toggleTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(toggleTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
            
                state.items = state.items.map(task => 
                    task.id === action.payload.id ? action.payload : task
                );
            })
            .addCase(toggleTask.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(updateTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
            
                const index = state.items.findIndex(task => task.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }

})
export const { updateTaskPriority } = slice.actions;
// export const { addTask, deleteTask, toggleTask, updateTaskPriority, fetchInProgress, fetchSuccess, fetchError } = slice.actions;
export default slice.reducer;