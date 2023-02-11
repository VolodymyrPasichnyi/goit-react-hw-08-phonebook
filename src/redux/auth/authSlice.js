import { createSlice } from "@reduxjs/toolkit"
import { fetchCurrentUser, logIn, logOut, register } from "./authOperations"


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
            .addCase(fetchCurrentUser.fulfilled, (state, {payload}) => {
                state.user = payload
                state.isLoggedIn = true
            })
    }
})

export default authSlice.reducer