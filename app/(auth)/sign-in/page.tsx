import AuthForm from '@/components/shared/AuthForm'
import React from 'react'

const SignIn = () => {
  return (
    <section className='flex justify-center'>
      <AuthForm type='sign-in' />
    </section>
  )
}

export default SignIn