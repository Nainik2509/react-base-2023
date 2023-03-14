/**
 * This file is part of [Shift Group Project]
 *
 * (c) 2021 [Nainik Mehta] <[nainik@york.ie]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.shiftGroup
 * @description Index Route File Setup
 * @author [Nainik Mehta] <[nainikmehta25@gmail.com]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

import React from 'react'
import { Route, Routes } from 'react-router-dom'

const LandingPage = React.lazy(() => import('views/LandingPage'))

/* A react router dom component. */
const RenderRoutes = () => {
  return (
    <Routes>
      <React.Fragment>
        <Route path="/" element={<LandingPage />}></Route>
      </React.Fragment>
    </Routes>
  )
}

export default RenderRoutes
