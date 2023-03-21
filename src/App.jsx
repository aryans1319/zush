import React from 'react'
import { Home, Sales } from './components'
import { heroapi, popularsales, topratesales } from './data/data'
const App = () => {
  return (
    <>
    <main>
      <Home heroapi={heroapi} />
      <Sales feature={popularsales}/>
      <Sales feature={topratesales} />
    </main>
    </>
  )
}

export default App