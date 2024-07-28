import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SigninPage = () => {
  return (
    <main className='flex h-screen justify-center items-center'>
        <SignIn/>
    </main>
  )
}

export default SigninPage