import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = z.object({
  email:z
    .string()
    .email(),
  password:z
    .string()
    .min(5, {
      message: 'Password must be between 5-12 characters"'
    })
    .max(12, {
      message: 'Password must be between 5-12 characters"'
    })
})