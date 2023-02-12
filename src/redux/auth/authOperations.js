import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
} 

export const register = createAsyncThunk(
    'auth/register', 
    async (credinteals, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/signup', credinteals)
        token.set(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }    
})

export const logIn = createAsyncThunk(
    'auth/login', 
    async (credinteals, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', credinteals)
        token.set(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }    
})

export const logOut = createAsyncThunk(
    'auth/logout', 
    async (_, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/logout')
        token.unset()
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }    
})

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh', 
    async(_, thunkAPI) => {
        const state = thunkAPI.getState()
        const persistedToken = state.auth.token

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Error')
        }
        token.set(persistedToken)
        try {
            const { data } = axios.get('/users/current')
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })