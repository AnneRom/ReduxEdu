// import axios from 'axios';
// // import { fetchInProgress, fetchSuccess, fetchError } from './tasksSlice';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // axios.defaults.baseURL = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";
// // axios.defaults.baseURL = "https://my-json-server.typicode.com/AnneRom/Redux-Edu-API";
// axios.defaults.baseURL = "https://699ef24578dda56d396bed55.mockapi.io";

// export const fetchTasks = createAsyncThunk(
//     'tasks/fetchAll',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get("/tasks");
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// export const addTask = createAsyncThunk(
//     'tasks/addTask',
//     async (task, thunkAPI) => {
//         try {
//             const response = await axios.post("/tasks", task);
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     });

// export const deleteTask = createAsyncThunk(
//     'tasks/deleteTask',
//     async (taskId, thunkAPI) => {
//         try {
//             const response = await axios.delete(`/tasks/${taskId}`);
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// export const toggleTask = createAsyncThunk(
//     'tasks/toggleTask',
//     async (task, thunkAPI) => {
//          try {
//             const response = await axios.put(`/tasks/${task.id}`, {
//                 completed: !task.completed
//             });
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// export const updateTask = createAsyncThunk(
//   'tasks/updateTask',
//   async ({ id, updates }, thunkAPI) => {
//     try {
//       const response = await axios.put(`/tasks/${id}`, updates);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// // export const fetchTasks = () => async dispatch => {
// //     try {
// //         dispatch(fetchInProgress());
// //         const response = await axios.get("/tasks");
// //         dispatch(fetchSuccess(response.data));
// //         console.log('Fetched tasks:', response.data);
// //     } catch (e) {
// //         dispatch(fetchError(e.message));
// //     }
// // }


import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../supabaseClient";

// GET
export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data: {user},} = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", user.id);

      if (error) throw error;

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ADD
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task, thunkAPI) => {
    try {
      const { data: {user},} = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from("tasks")
        .insert([
          {
            ... task,
            user_id: user.id
          }
          ])
        .select();

        console.log("DATA:", data);
        console.log("ERROR:", error);

      if (error) throw error;

      return data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const { error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", taskId);

      if (error) throw error;

      return { id: taskId };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// UPDATE (priority або інше)
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, updates }, thunkAPI) => {
    try {
      const { data, error } = await supabase
        .from("tasks")
        .update(updates)
        .eq("id", id)
        .select();

      if (error) throw error;

      return data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);