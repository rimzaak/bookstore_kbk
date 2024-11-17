'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader } from 'lucide-react'


const AuthForm = ({ type } : { type: string }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const formSchema = authFormSchema(type)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            phoneNumber: "",
            address1: "",
        },
    })
 
    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true)
        try {
            if (type === 'sign-up') {
                
            }

            if (type === 'sign-in') {
                
            }
        } catch (error) {
            console.log(error)          
        } finally {
            setIsLoading(false)
        }
        console.log(data)
        // setUser('');
    }

    return (
        <section className='flex flex-col justify-center min-h-screen'>
            <header className='flex flex-col gap-5 my-4'>
                <Link href='/'>        
                    <div className='flex-col h-full content-center text-center font-alegreya m-auto'>
                        <div className='font-black text-5xl'>KBK</div>
                        <div className='font-extrabold text-2xl sm:text-3xl'>KEDAI BUKU KITA</div>
                        <div className='font-bold hidden sm:block sm:text-xl'>Your Destination for Pre-loved Books</div>
                    </div>
                </Link>
                <div>
                    <h1 className='text-xl font-semibold'>
                        {user
                            ? 'Sell or Buy a Book'
                            : type === 'sign-in'
                                ? 'Sign In'
                                : 'Sign Up'
                        }
                    </h1>
                    <p>
                        {user 
                            ? 'List a book for sell or Browse to buy a book'
                            : 'Please enter your details'
                        }
                    </p>
                </div>
            </header>
            {user 
                ? (
                    
                    <div>
                        {/* List a Book 
                        or buy a book */}
                    </div>
                )
                : <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            {type === 'sign-up' && (
                                <>
                                    <div className='flex gap-4'>
                                        <CustomInput 
                                        control={form.control} name='firstName' label='First Name' placeholder='Enter your first name'
                                        />
                                        <CustomInput 
                                        control={form.control} name='lastName' label='Last Name' placeholder='Enter your last name'
                                        />
                                    </div>                                
                                    <CustomInput 
                                    control={form.control} name='dateOfBirth' label='Date of Birth' placeholder='yyyy-mm-dd'
                                    />
                                    <CustomInput 
                                    control={form.control} name='phoneNumber' label='Phone Number' placeholder='01X-XXXXXXXX'
                                    />
                                    <CustomInput 
                                    control={form.control} name='address1' label='Address' placeholder='Enter your address'
                                    />
                                </>
                            )}
                            
                            <CustomInput
                            control={form.control} name='email' label='Email' placeholder='Enter the Email'
                            />
                            <CustomInput
                            control={form.control} name='password' label='Password' placeholder='Enter the Password'
                            />
                            <div className='flex flex-col gap-4'>
                                <Button className='text-16 rounded-lg font-semibold text-white bg-zinc-500' 
                                type="submit"
                                disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader size={20} 
                                            className='animate-spin' />
                                            &nbsp;
                                            Loading...
                                        </>
                                    ) :
                                    type === 'sign-in' ? 'Sign In'
                                    : 'Sign Up'}
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <footer className='flex justify-center gap-1 mt-2'>
                        <p className='text-14 font-normal text-gray-600'>
                            {type === 'sign-in'
                                ? "Don't have an account?"
                                : 'Already have an account?'}
                        </p>
                        <Link 
                        className='text-zinc-500'
                        href={type === 'sign-in' ? '/sign-up' : '/sign-in'}>
                            {type === 'sign-in' ? 'Sign Up' : 'Sign Up'}
                        </Link>
                    </footer>
                </>
                }
        </section>
    )
}

export default AuthForm