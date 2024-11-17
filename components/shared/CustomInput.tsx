import React from 'react'
import { Control, FieldPath } from 'react-hook-form'

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from '../ui/input'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up')

  interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
  }

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem className='my-2'>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input 
                        className='text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500' 
                        placeholder={placeholder}
                        type={name === 'password' ? 'password' : 'text'}
                        {...field} 
                    />
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
    />
  )
}

export default CustomInput