import React from 'react'
import Addresume from './components/addresume'
function dash() {
  return (
    <div className='p-10 md:px-20 lg:px32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start creating AI resume for yourself</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10'>
        
        <Addresume />
      </div>
    </div>
  )
}

export default dash
