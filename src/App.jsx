import React from 'react'
import { Home, Sales } from './components'
import { heroapi, popularsales, topratesales } from './data/data'
const App = () => {
  return (
    <>
    <main className='flex flex-col gap-16 relative'>
      <Home heroapi={heroapi} />
      <Sales feature={popularsales} ifSalesExist/>
      <Sales feature={topratesales} />
    </main>
    </>
  )
}

export default App