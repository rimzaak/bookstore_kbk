import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = (type: string) => z.object({
  //sign in and sign up
  email:z
    .string()
    .email(),
  password:z
    .string()
    .min(5).max(12),
    //sign up
    firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    phoneNumber: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    address1: type === 'sign-in' ? z.string().optional() : z.string().max(50),
    postalCode: type === 'sign-in' ? z.string().optional() : z.string().min(5).max(5),
    city: type === 'sign-in' ? z.string().optional() : z.string().max(20),
    state: type === 'sign-in' ? z.string().optional() : z.string().max(20),
})

// stringify the response from appwrite session.create because nextjs cannot pass objects from server side to the front end
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));