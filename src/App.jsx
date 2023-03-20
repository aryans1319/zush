import React from 'react'
import { Home } from './components'
import { heroapi } from './data/data'
const App = () => {
  return (
    <>
    <main>
      <Home heroapi={heroapi} />
    </main>
    </>
  )
}

export default App