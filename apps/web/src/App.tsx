
import { Header } from './components/Header'
import { AppRoutes } from './routes/routes'
import React from 'react'

export const App = (): JSX.Element => {
  return (
    <>
    <Header />
    <AppRoutes />
    </>
  )
}
