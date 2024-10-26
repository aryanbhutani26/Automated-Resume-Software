import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function signinpage() {
  return (
    <div className='flex justify-center my-60 items-center'>
      <SignIn />
    </div>
  )
}

export default signinpage
