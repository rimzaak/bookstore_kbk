'use client'

import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username:z
    .string()
    .min(5, {
      message: 'Username must be between 5-12 characters"'
    })
    .max(12, {
      message: 'Username must be between 5-12 characters"'
    }),
  password:z
    .string()
    .min(5, {
      message: 'Password must be between 5-12 characters"'
    })
    .max(12, {
      message: 'Password must be between 5-12 characters"'
    })
})

const SignIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    setIsLoggedIn(true);
  }
  
  return (
    isLoggedIn? <p>Hi, Guest</p>:
    <Form {...form}>
      <FormDescription className='text-sm'>
        Sign In
      </FormDescription>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-xs'>Username</FormLabel>
              <FormControl>
                <Input className='w-32 h-6 text-xs !mt-0' placeholder="Username" {...field} />
              </FormControl>
              <FormMessage className='text-xs !mt-0' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-xs'>Password</FormLabel>
              <FormControl>
                <Input className='w-32 h-6 text-xs !mt-0' placeholder="Password" {...field} />
              </FormControl>
              <FormMessage className='text-xs !mt-0' />
            </FormItem>
          )}
        />
        <Button className='w-12 h-6 mt-1 px-7 bg-emerald-300 text-black' type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default SignIn