import { createSlice } from "@reduxjs/toolkit";
// import { logIn } from "./operations";

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
    extraReducers: builder => {
    //     builder.addCase(logIn.fulfilled, (state, action) => {
    //         state.user = action.payload.user;
    //         state.token = action.payload.token;
    //         state.isLoggedIn = true;
    // });
        
    }

})
// export const { } = slice.actions;
export default authSlice.reducer;
