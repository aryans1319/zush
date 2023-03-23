import React from 'react'
import { Home, Sales, Featured } from './components'
import { heroapi, popularsales, topratesales, highlight, sneaker} from './data/data'
const App = () => {
  return (
    <>
    <main className='flex flex-col gap-16 relative'>
      <Home heroapi={heroapi} />
      <Sales feature={popularsales} ifSalesExist/>
      <Featured content={highlight} />
      <Sales feature={topratesales} />
      <Featured content={sneaker}/>
    </main>
    </>
  )
}

export default App