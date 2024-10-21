import SignIn from '@/components/shared/SignIn';
import AppSidebar from "@/components/shared/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import React from 'react'

const Home = () => {
  return (
    <div className='flex-col'>
      <section className='flex h-40 bg-green-200'>
        <div className='flex-col h-full content-center text-center font-alegreya m-auto'>
          <div className='font-black text-5xl'>KBK</div>
          <div className='font-extrabold text-3xl'>KEDAI BUKU KITA</div>
          <div className='font-bold text-xl'>Your Destionation for Pre-loved Books</div>
        </div>
        <div className='mr-5 p-2'>
          <SignIn />
        </div>
      </section>
      <section>Navbar</section>
      <section>Hero</section>
      <section>Featured</section>
      <section>Other Pages</section>
      <footer>Footer</footer>
  
    </div>
    
  )
}

export default Home