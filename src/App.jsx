import React from 'react'
import { Home, Sales, Featured } from './components'
import { heroapi, popularsales, topratesales } from './data/data'
const App = () => {
  return (
    <>
    <main className='flex flex-col gap-16 relative'>
      <Home heroapi={heroapi} />
      <Sales feature={popularsales} ifSalesExist/>
      <Sales feature={topratesales} />
      <Featured />
    </main>
    </>
  )
}

export default App