import SignIn from '@/components/shared/SignIn';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import React from 'react'

const Home = () => {
  return (
    <div className='flex-col'>
      <section className='flex h-40 bg-green-200'>
        <div className='flex-col h-full content-center text-center font-alegreya m-auto'>
          <div className='font-black text-5xl'>KBK</div>
          <div className='font-extrabold text-2xl sm:text-3xl'>KEDAI BUKU KITA</div>
          <div className='font-bold hidden sm:block sm:text-xl'>Your Destination for Pre-loved Books</div>
        </div>
        <div className='mr-5 p-2'>
          <SignIn />
        </div>
      </section>
      <section className='flex w-full justify-center contents-center pb-7 my-5'>
        <input className='w-3/4 px-2 border-black border-2'/>
        <Button variant='outline'>
          <Image
            src='/icons/search.svg'
            width={30} 
            height={30}
            alt='search'
          />
        </Button>
      </section>
      <section>Hero</section>
      <section>Featured</section>
      <section>Other Pages</section>
      <footer>Footer</footer>
  
    </div>
    
  )
}

export default Home