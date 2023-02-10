import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contacts/contactsSlice";
import filterSlice from "./filter/filterSlice";
import authSlice from './auth/authSlice'


export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filter: filterSlice,
        auth: authSlice,
    },
})


