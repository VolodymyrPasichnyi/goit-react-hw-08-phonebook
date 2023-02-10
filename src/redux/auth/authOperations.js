import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'


export const register = createAsyncThunk(
    'auth/register', 
    async credinteals => {
    try {
        const { data } = await axios.post('/users/signup', credinteals)
        return data
    } catch (error) {
        
    }    
})

export const logIn = createAsyncThunk(
    'auth/login', 
    async credinteals => {
    try {
        const { data } = await axios.post('/users/login', credinteals)
        return data
    } catch (error) {
        
    }    
})

export const logOut = createAsyncThunk(
    'auth/logout', 
    async credinteals => {
    try {
        const { data } = await axios.post('/users/logout', credinteals)
        return data
    } catch (error) {
        
    }    
})