/**
 * This file is part of [Nainik's Base Project]
 *
 * (c) 2021 [Nainik Mehta] <[nainikmehta1999@gmail.com]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.nainikMehta
 * @description Main Entry point of the app
 * @author [Nainik Mehta] <[nainikmehta25@gmail.com]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { persistor, store } from 'redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

/* Creating a root element for the app. */
const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript  React-18

/* A React feature that allows you to load components lazily through code splitting without help from
any additional libraries. */
const LazyApp = React.lazy(() => import('./App'))

/* Importing the stylesheet for the app. */
import './App.less'

/* Rendering the React component to the DOM. */
/* Providing the store to the app. */
/* A component that delays the rendering of the app's UI until the persisted state has been
retrieved and saved to redux. */
/* A component that lets you “wait” for something before rendering. */
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.Suspense fallback={<div>Spinner</div>}>
        <Router>
          <LazyApp />
        </Router>
      </React.Suspense>
    </PersistGate>
  </Provider>
)
