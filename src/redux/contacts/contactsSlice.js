import { createSlice } from "@reduxjs/toolkit"
import { addContacts, deleteContacts, fetchContacts } from "./operations"


const contactsSlice = createSlice({
    name: 'contacts', 
    initialState:  {
        items: [],
        isLoading: false,
        error: null,
      },
    extraReducers: builder => {
      builder
          .addCase(fetchContacts.pending, (state) => {
            state.isLoading = true
          })
          .addCase(fetchContacts.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.error = null
            state.items = payload
          })
          .addCase(fetchContacts.rejected, (state , {payload}) => {
            state.error = payload
          })
          .addCase(addContacts.pending, (state) => {
            state.isLoading = true
          })
          .addCase(addContacts.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.error = null
            state.items.push(payload)
          })
          .addCase(addContacts.rejected, (state , {payload}) => {
            state.error = payload
          })          
          .addCase(deleteContacts.pending, (state) => {
            state.isLoading = true
          })
          .addCase(deleteContacts.fulfilled, (state, {payload}) => {
            state.items = state.items.filter(item => item.id !== payload.id)
            state.isLoading = false
            state.error = null
          })
          .addCase(deleteContacts.rejected, (state , {payload}) => {
            state.error = payload
          })
    }
})


export default contactsSlice.reducer