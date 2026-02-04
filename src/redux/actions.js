import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction('tasks/addTask');
export const deleteTask = createAction('tasks/deleteTask');
export const toggleTask = createAction('tasks/toggleTask');
export const setStatusFilter = createAction('filters/setStatusFilter');

// export const addTask = newTask => {
//     return {
//         type: 'tasks/addTask',
//         payload: newTask 
//     }
// }

// export const deleteTask = taskId =>{
//     return {
//         type: 'tasks/deleteTask',
//         payload: taskId
//     }
// }

// export const toggleTask = taskId => {
//     return {
//         type: 'tasks/toggleTask',
//         payload: taskId
//     }
// }

// export const setStatusFilter = filterValue => {
//     return {
//         type: 'filters/setStatusFilter',
//         payload: filterValue
//     }
// }

