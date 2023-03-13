/**
 * This file is part of [Shift Group Project]
 *
 * (c) 2021 [Nainik Mehta] <[nainik@york.ie]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.shiftGroup
 * @description Main Entry point of the app
 * @author [Nainik Mehta] <[nainikmehta25@gmail.com]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript  React-18

import { Button } from 'antd'
import 'antd/dist/reset.css'

root.render(
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
)
