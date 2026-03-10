import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleTask, updateTask } from "./operations";
import { selectStatusFilter, selectPriorityFilter } from "./filtersSlice";

const handlePending = (state) => {
    state.isLoading = true;
}
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

export const selectTasks = (state) => state.tasks.items;
export const selectIsLoading = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;

export const selectVisibleTasks = createSelector(
    [selectTasks, selectStatusFilter, selectPriorityFilter],
    (tasks, statusFilter, priorityFilter) => {
        return tasks.filter(task => {
            const statusMatch = 
            statusFilter === "all" ||
            (statusFilter === "active" && !task.completed) ||
            (statusFilter === "completed" && task.completed);
            
            const priorityMatch = 
            priorityFilter === "all" ||
            task.priority === priorityFilter;

            return statusMatch && priorityMatch;
    });
    }
)
export const selectTasksCount = createSelector(
    [selectTasks],
    (tasks) => {
        return tasks.reduce((acc, task) => {
            if (task.completed) {
            acc.completed += 1;
            } else {
            acc.active += 1;
            }
            return acc;
            
        }, { active: 0, completed: 0})
    }
)

const slice = createSlice({
    name: 'tasks',
    initialState: {
        items: [], 
        isLoading: false,
        error: null,

    },
    reducers: {
    
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending, handlePending)
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, handleRejected)

            .addCase(addTask.pending, handlePending)
            .addCase(addTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null; 
                state.items.push(action.payload);
            })
            .addCase(addTask.rejected, handleRejected)

            .addCase(deleteTask.pending, handlePending)
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
            
                state.items = state.items.filter(task => task.id !== action.payload.id);
            })
            .addCase(deleteTask.rejected, handleRejected)

            .addCase(toggleTask.pending, handlePending)
            .addCase(toggleTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
            
                state.items = state.items.map(task => 
                    task.id === action.payload.id ? action.payload : task
                );
            })
            .addCase(toggleTask.rejected, handleRejected)

            .addCase(updateTask.pending, handlePending)
            .addCase(updateTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
            
                const index = state.items.findIndex(task => task.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateTask.rejected, handleRejected)
    }

})
// export const { } = slice.actions;
export default slice.reducer;