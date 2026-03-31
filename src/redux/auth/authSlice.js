import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
// import { logIn } from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {// initial - початкові стани
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
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        builder.addCase(logOut.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        builder.addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
        })
        builder.addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isRefreshing = false;
            state.isLoggedIn = true;
        })
        builder.addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false;
        })
        
    }

})
// export const { } = slice.actions;
export default authSlice.reducer;


// function sum(a = 1, b) {
//     return a + b;
// }

// sum (2, 3); // 5
// sum (undefined, 3); // 4
// sum (2); // 3