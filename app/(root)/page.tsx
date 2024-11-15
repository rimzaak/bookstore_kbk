import React from 'react'

import Carousel from '@/components/shared/Carousel';
import SignIn from '@/components/shared/SignIn';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { sellingFast, recentlyAdded, newReleases } from '@/constants';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex-col'>
      <header className='flex h-40 bg-green-200'>
        <Link href='/'>        
          <div className='flex-col h-full content-center text-center font-alegreya m-auto'>
            <div className='font-black text-5xl'>KBK</div>
            <div className='font-extrabold text-2xl sm:text-3xl'>KEDAI BUKU KITA</div>
            <div className='font-bold hidden sm:block sm:text-xl'>Your Destination for Pre-loved Books</div>
          </div>
        </Link>
        <div className='mr-5 p-2'>
          <SignIn />
        </div>
      </header>
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
      <section className='border-2 border-solid flex gap-x-2.5 p-2.5'>
        <div className='flex flex-col w-1/5 justify-around'>
          <Button variant='secondary' className='bg-green-200 w-full'>Selling Fast</Button>  
          <Button variant='secondary' className='bg-green-200 w-full'>Recently Added</Button>
          <Button variant='secondary' className='bg-green-200 w-full'>Newest Releases</Button>
        </div>
        <div className='w-4/5'>
          <Carousel books={sellingFast} />
        </div>
      </section>
      <section>Featured</section>
      <section>Other Pages</section>
      <footer>Footer</footer>
  
    </div>
    
  )
}

export default Home