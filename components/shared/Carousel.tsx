'use client'

import Image from 'next/image';
import React from 'react'
import { useState } from "react";
import { Button } from '../ui/button';


const Carousel = ({books}: carouselProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    const prevSlide = () => {
        if (currentPage === 0) setCurrentPage(books.length - 1);
        else setCurrentPage(currentPage - 1);
        console.log(currentPage);
    };
    const nextSlide = () => {
        if (currentPage === books.length - 1) setCurrentPage(0);
        else setCurrentPage(currentPage + 1);
        console.log(currentPage);
    };

    return (
    <div className='relative overflow-hidden'>
        <div 
            className="flex w-full transition ease-out duration-40"
            style={{
                transform: `translateX(-${currentPage * 100}%)`,
            }}
        >
            {books.map((s, i) => {
                return (
                    <div 
                        key={i}
                        className="w-full px-12 py-4 gap-4 flex flex-shrink-0"
                    >
                        <div className='flex flex-col'>
                            <div className= 'w-[100px] lg:w-[130px] h-[150px] lg:h-[195px] border-4 relative'>
                                <Image 
                                    src= {s.ImagePath}
                                    alt= {s.ImageAlt}
                                />
                            </div>
                            <p className='BookTitle'>{s.Title}</p>
                            <p className='BookAuthor'>by {s.Author} </p>
                            {/* <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-gray-300 py-2 px-4 mt-2 border border-black hover:border-transparent rounded '>Buy</button> */}
                            <Button>Buy</Button>
                        </div>
                        <div className='h-full w-full'>
                            <p className='w-full'>{s.Synopsis}</p>
                        </div>
                    </div>
                )
        })}
        </div>
        <div className='absolute w-full top-1/2'>
            <Button variant='outline' size='icon' className='absolute left-0' onClick={prevSlide}>
                <Image
                    src='/icons/chevron-left.svg' 
                    alt='prev'
                    height={20}
                    width={20}    
                />
            </Button>
            <Button variant='outline' size='icon' className='absolute right-0' onClick={nextSlide}>
                <Image
                    src='/icons/chevron-right.svg' 
                    alt='next'
                    height={20}
                    width={20}    
                />
            </Button>
        </div>
        <div className='flex bottom-0 justify-center gap-2.5 w-full'>
            {books.map((s, i) => {
                return (
                    <div
                        onClick={() => {
                            setCurrentPage(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-3.5 h-3.5 cursor-pointer  ${
                            i == currentPage ? "bg-green-200" : "bg-gray-500"
                        }`}
                    ></div>
                );
            })}
        </div>
    </div>
  )
}

export default Carousel