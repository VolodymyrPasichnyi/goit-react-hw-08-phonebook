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


// const persistConfig = {
//     key: 'contact',
//     storage,
//     blacklist: ['filter'],
//   }
  
//   const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer)
  
//   export const store = configureStore({
//       reducer: {
//           contacts: persistedReducer,
//       },
//       middleware: getDefaultMiddleware =>
//               getDefaultMiddleware({
//                   serializableCheck: {
//                       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] 
//                   }
//               })
//   })
  
  
//   export const persist = persistStore(store)

