'use client'

import { logoutAccount } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation'

const SignIn = ( {name}: {name: string} ) => {
  const Router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount()

    if (loggedOut) Router.push('/sign-in')
  }

  return (
    <div className='mr-5 p-2'>
      Hi {name}. <div onClick={handleLogOut}>Logout</div>
    </div>
      
  )
}

export default SignIn