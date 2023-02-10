import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://63e289ae3e12b1937642396f.mockapi.io'


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', 
    async(_, thunkAPI) => {
        try {
            const { data } = await axios.get('/contacts')
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const addContacts = createAsyncThunk(
    'contacts/addContact', 
    async(contact, thunkAPI) => {
        try {
            const { data } = await axios.post('/contacts', contact)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContacts = createAsyncThunk(
    'contacts/deleteContact', 
    async(id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)




