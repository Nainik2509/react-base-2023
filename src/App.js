/**
 * This file is part of [Nainik's Base Project]
 *
 * (c) 2021 [Nainik Mehta] <[nainikmehta1999@gmail.com]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.nainikMehta
 * @description Main Component File with consist of every module
 * @author [Nainik Mehta] <[nainikmehta25@gmail.com]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */
import { ConfigProvider } from 'antd'

import { customizeRenderEmpty } from '@core/components/NoData'
import RenderRoutes from 'router/Router'

const App = () => {
  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <RenderRoutes />
    </ConfigProvider>
  )
}

export default App
