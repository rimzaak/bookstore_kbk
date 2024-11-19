import AuthForm from '@/components/shared/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const SignUp = async () => {
  return (
    <section className='flex justify-center'>
      <AuthForm type='sign-up' />
    </section>
  )
}

export default SignUp