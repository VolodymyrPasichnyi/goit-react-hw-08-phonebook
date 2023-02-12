import { createSlice } from "@reduxjs/toolkit"
import { fetchCurrentUser, logIn, logOut, register } from "./authOperations"


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isCurrentUser: false,
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
            .addCase(fetchCurrentUser.pending, (state) => {
                state.isCurrentUser = true
            }) 
            .addCase(fetchCurrentUser.fulfilled, (state, {payload}) => {
                state.user = payload
                state.isLoggedIn = true
                state.isCurrentUser = false
            })
            .addCase(fetchCurrentUser.rejected, (state) => {
                state.isCurrentUser = false
            })
    }
})

export default authSlice.reducer