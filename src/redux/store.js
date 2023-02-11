import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contacts/contactsSlice";
import filterSlice from "./filter/filterSlice";
import authSlice from './auth/authSlice'
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  }
    
  export const store = configureStore({
      reducer: {
        contacts: contactsSlice,
        filter: filterSlice,
        auth: persistReducer(persistConfig, authSlice),
      },
      middleware: getDefaultMiddleware =>
              getDefaultMiddleware({
                  serializableCheck: {
                      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] 
                  }
              })
  })
  
  
  export const persistor = persistStore(store)

