import React from 'react'
import Spinner from './Spinner'

const Loader = () => {
  return (
    <div className='absolute w-screen h-screen z-50 flex justify-center items-center top-0 bg-black opacity-25' >
        <Spinner/>
    </div>
  )
}

export default Loader