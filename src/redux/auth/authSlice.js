import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    reducers: {
    
    },
    extraReducers: {
        
    }

})
// export const { } = slice.actions;
export default authSlice.reducer;
