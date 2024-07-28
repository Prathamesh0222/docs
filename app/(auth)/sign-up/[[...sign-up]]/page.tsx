import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignupPage = () => {
  return (
    <main className='flex h-screen justify-center items-center'>
        <SignUp/>
    </main>
  )
}

export default SignupPage