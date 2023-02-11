import { createSlice } from "@reduxjs/toolkit"
import { logIn, logOut, register } from "./authOperations"


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
    },
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, {payload}) => {
                state.user = payload.user
                state.token = payload.token
                state.isLoggedIn = true
            })            
            .addCase(logIn.fulfilled, (state, {payload}) => {
                state.user = payload.user
                state.token = payload.token
                state.isLoggedIn = true
            })            
            .addCase(logOut.fulfilled, (state, {payload}) => {
                state.user = { name: null, email: null}
                state.token = null
                state.isLoggedIn = false
            })
    }
})

export default authSlice.reducer