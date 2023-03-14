/**
 * This file is part of [Shift Group Project]
 *
 * (c) 2021 [Nainik Mehta] <[nainik@york.ie]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.shiftGroup
 * @description React Redux Store Setup
 * @author [Nainik Mehta] <[nainikmehta25@gmail.com]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

import createDebounce from 'redux-debounced'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers/rootReducers'

// Applying Middlewares
const middleware = [createDebounce()]

// Creating persistent Store
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Creating Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

// Presting state
const persistor = persistStore(store)

export { store, persistor }
