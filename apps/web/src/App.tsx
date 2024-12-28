
import { Header } from './components/Header'
import { Header2 } from './components/Header/index2'
import { AppRoutes } from './routes/routes'
import React from 'react'

export const App = (): JSX.Element => {
  return (
    <main>
      <Header2 />
      <AppRoutes />
    </main>
  )
}
