import React from 'react'
import Home from '../screens/Home'
import Checkout from '../components/Checkout';

function Mainhome() {
  return (
     <div className='d-flex home'>
      <Home/>
      <Checkout/>
      </div>
  )
}

export default Mainhome