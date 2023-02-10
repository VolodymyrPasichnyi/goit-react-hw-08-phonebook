import { createSlice } from "@reduxjs/toolkit"
import { register } from "./authOperations"


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
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
    }
})

export default authSlice.reducer